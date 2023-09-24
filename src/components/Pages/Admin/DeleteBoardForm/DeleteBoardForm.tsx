import React, { useState } from "react";
import { MDBInput, MDBBtn, MDBIcon } from "mdbreact";
import axios, { AxiosError, AxiosResponse } from "axios";
import toTitleCase from "../../../../functions/toTitleCase";
import SelectedBoard from "../../../../types/PostRequests/SelectedBoard";
import "./DeleteBoardForm.css";

const DeleteBoardForm = () => {
  const [boardName, setBoardName] = useState<string>("");

  const handleChange: (event: React.ChangeEvent<any>) => void = (event) => {
    setBoardName(event.target.value);
  };

  const handleSubmit: (event: React.FormEvent) => void = (event) => {
    event.preventDefault();

    const payload: SelectedBoard = {
      boardName: toTitleCase(boardName),
    };

    axios
      .delete("https://city-walks.herokuapp.com/delete-board", {
        data: payload,
      })
      .then((res: AxiosResponse) => {
        if (res.data === "board deleted") {
          console.log("board deleted");
        } else {
          console.log("board not deleted");
        }
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });

    alert("Board Deleted");
    setBoardName("");
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <h2>Delete Board</h2>
      <form onSubmit={handleSubmit} className='delete-board-form'>
        <MDBInput
          type='text'
          name='board-name'
          id='board-name'
          value={boardName}
          label='board name'
          onChange={handleChange}
          required
        />
        <MDBBtn outline color='elegant' type='submit'>
          Delete Board <MDBIcon icon='trash' />
        </MDBBtn>
      </form>
    </div>
  );
};

export default DeleteBoardForm;
