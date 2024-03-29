import React, { useState } from "react";
import { MDBInput, MDBBtn, MDBIcon } from "mdbreact";
import axios, { AxiosError, AxiosResponse } from "axios";
import toTitleCase from "../../../../utils/toTitleCase";
import SelectedPost from "../../../../types/PostRequests/SelectedPost";
import "./DeleteBlogPostForm.css";

const DeleteBlogPostForm = () => {

  const [postTitle, setPostTitle] = useState<string>("");

  const handleChange: (event: React.ChangeEvent<any>) => void = (event) => {
    switch (event.target.name) {
      case "post-title":
        setPostTitle(event.target.value);
        break;
    }
  };

  const handleSubmit: (event: React.FormEvent) => void = (event) => {
    event.preventDefault();

    let payload: SelectedPost = {
      postTitle: toTitleCase(postTitle),
    };

    axios
      .delete("https://city-walks-production.up.railway.app/delete-blog-post", {
        data: payload,
      })
      .then((res: AxiosResponse) => {
        if (res.data === "blog post deleted") {
          console.log("blog post deleted");
        } else {
          console.log("response not deleted");
        }
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });

    alert("Blog Post Deleted");
    setPostTitle("");
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <h2>Delete Blog Post</h2>
      <form onSubmit={handleSubmit} className='delete-blog-post-form'>
        <MDBInput
          type='text'
          name='post-title'
          id='post-title'
          value={postTitle}
          label='blog post title'
          onChange={handleChange}
          required
        />
        <MDBBtn outline color='elegant' type='submit'>
          Delete Post <MDBIcon icon='trash' />
        </MDBBtn>
      </form>
    </div>
  );
};

export default DeleteBlogPostForm;
