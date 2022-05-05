import React, { useState } from "react"
import { MDBInput, MDBBtn, MDBIcon } from "mdbreact"
import axios, { AxiosError, AxiosResponse } from "axios"
import toTitleCase from '../../../../functions/toTitleCase'
import SelectedWalk from "../../../../types/PostRequests/SelectedWalk"
import './DeleteWalkForm.scss'

const DeleteWalkForm: React.FC = () => {

  const [walk, setWalk] = useState<string>("")

  const handleChange: (event: React.ChangeEvent<any>) => void = (event) => {
    switch (event.target.name) {
      case "walk":
        setWalk(event.target.value)
        break;
    }
  }

  const handleSubmit: (event: React.FormEvent) => void = (event) => {
    event.preventDefault()

    let payload: SelectedWalk = {
      walk: toTitleCase(walk)
    };

    axios
      .delete("https://city-walks.herokuapp.com/delete-walk", { data: payload })
      .then((res: AxiosResponse) => {
        if (res.data === "walk deleted") {
          console.log("walk deleted")
        } else {
          console.log("walk not deleted")
        }
      }).catch((err: AxiosError) => {
        console.log(err)
      });;

    alert("Walk Deleted")
    setWalk("")
    window.scrollTo(0, 0);
  }

  return (
    <div>
      <h2>Delete Walk</h2>
      <form onSubmit={handleSubmit} className="delete-walk-form">
        <MDBInput type="text" name="walk" id="walk" value={walk} label="walk name" onChange={handleChange} required />
        <MDBBtn outline color="elegant" type="submit">
          Delete Walk <MDBIcon icon="trash" />
        </MDBBtn>
      </form>
    </div>
  )
}

export default DeleteWalkForm