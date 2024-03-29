import React, { useState } from "react";
import { MDBInput, MDBBtn, MDBIcon } from "mdbreact";
import axios, { AxiosError, AxiosResponse } from "axios";
import qs from "qs";
import toTitleCase from "../../../../utils/toTitleCase";
import FeaturedWalks from "../../../../types/PostRequests/FeaturedWalks";
import "./SetFeaturedWalkForm.css";

const SetFeaturedWalkForm = () => {

  const [featuredWalk1, setFeaturedWalk1] = useState<string>("");
  const [featuredWalk2, setFeaturedWalk2] = useState<string>("");
  const [featuredWalk3, setFeaturedWalk3] = useState<string>("");

  const handleChange: (event: React.ChangeEvent<any>) => void = (event) => {
    switch (event.target.name) {
      case "featured-walk-1":
        setFeaturedWalk1(event.target.value);
        break;
      case "featured-walk-2":
        setFeaturedWalk2(event.target.value);
        break;
      case "featured-walk-3":
        setFeaturedWalk3(event.target.value);
        break;
    }
  };

  const handleSubmit: (event: React.FormEvent) => void = (event) => {
    event.preventDefault();

    let payload: FeaturedWalks = {
      featuredWalk1: toTitleCase(featuredWalk1),
      featuredWalk2: toTitleCase(featuredWalk2),
      featuredWalk3: toTitleCase(featuredWalk3),
    };

    axios
      .patch(
        "https://city-walks-production.up.railway.app/set-featured-walk",
        qs.stringify(payload)
      )
      .then((res: AxiosResponse) => {
        if (res.data === "featured walk set") {
          console.log("featured walk set");
        } else {
          console.log("featured walk not set");
        }
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
    alert("Featured walks set");
    setFeaturedWalk1("");
    setFeaturedWalk2("");
    setFeaturedWalk3("");
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <h2>Set Featured Walks</h2>
      <p>
        Administrator note: a prerequisite of this working is that at least one
        record has the featuredWalk field set to true.
      </p>
      <p>
        Only records where walk is fully in Title Case can be set as a featured
        walk. For example, 'Bond Street to Baker Street' will not pass.
      </p>
      <p>The form will convert your input to Title Case.</p>
      <form onSubmit={handleSubmit} className='set-featured-walk-form'>
        <MDBInput
          type='text'
          name='featured-walk-1'
          id='featured-walk-1'
          value={featuredWalk1}
          label="featured walk 1 (walk name, e.g 'Stoke Newington')"
          onChange={handleChange}
          required
        />
        <MDBInput
          type='text'
          name='featured-walk-2'
          id='featured-walk-2'
          value={featuredWalk2}
          label="featured walk 2 (walk name, e.g 'Buckingham Palace')"
          onChange={handleChange}
          required
        />
        <MDBInput
          type='text'
          name='featured-walk-3'
          id='featured-walk-3'
          value={featuredWalk3}
          label="featured walk 3 (walk name, e.g 'Old Street')"
          onChange={handleChange}
          required
        />
        <MDBBtn outline color='elegant' type='submit'>
          Set Featured Walks
          <MDBIcon far icon='star' className='ml-2' />
        </MDBBtn>
      </form>
    </div>
  );
};

export default SetFeaturedWalkForm;
