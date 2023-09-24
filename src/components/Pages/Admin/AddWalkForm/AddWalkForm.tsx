import React, { useState } from "react";
import { MDBInput, MDBBtn, MDBIcon } from "mdbreact";
import axios, { AxiosError, AxiosResponse } from "axios";
import qs from "qs";
import toTitleCase from "../../../../utils/toTitleCase";
import Walk from "../../../../types/PostRequests/Walk";
import "./AddWalkForm.css";

const AddWalkForm = () => {

  const [walk, setWalk] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [startingPoint, setStartingPoint] = useState<string>("");
  const [content1, setContent1] = useState<string>("");
  const [content2, setContent2] = useState<string>("");
  const [content3, setContent3] = useState<string>("");
  const [coverImg, setCoverImg] = useState<string>("");
  const [mapImg, setMapImg] = useState<string>("");
  const [img1, setImg1] = useState<string>("");
  const [img2, setImg2] = useState<string>("");
  const [img3, setImg3] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [aboutTheAuthor, setAboutTheAuthor] = useState<string>("");
  const [websiteLink, setWebsiteLink] = useState<string>("");
  const [instagramLink, setInstagramLink] = useState<string>("");
  const [facebookLink, setFacebookLink] = useState<string>("");
  const [twitterLink, setTwitterLink] = useState<string>("");
  const [lat, setLat] = useState<string>("");
  const [lng, setLng] = useState<string>("");
  const [length, setLength] = useState<string>("");
  const [iframeLink, setIframeLink] = useState<string>("");
  const [iframeTitle, setIframeTitle] = useState<string>("");

  const handleChange: (event: React.ChangeEvent<any>) => void = (event) => {
    switch (event.target.name) {
      case "walk":
        setWalk(event.target.value);
        break;
      case "city":
        setCity(event.target.value);
        break;
      case "description":
        setDescription(event.target.value);
        break;
      case "starting-point":
        setStartingPoint(event.target.value);
        break;
      case "content1":
        setContent1(event.target.value);
        break;
      case "content2":
        setContent2(event.target.value);
        break;
      case "content3":
        setContent3(event.target.value);
        break;
      case "cover-img":
        setCoverImg(event.target.value);
        break;
      case "map-img":
        setMapImg(event.target.value);
        break;
      case "img1":
        setImg1(event.target.value);
        break;
      case "img2":
        setImg2(event.target.value);
        break;
      case "img3":
        setImg3(event.target.value);
        break;
      case "author":
        setAuthor(event.target.value);
        break;
      case "about-the-author":
        setAboutTheAuthor(event.target.value);
        break;
      case "website-link":
        setWebsiteLink(event.target.value);
        break;
      case "instagram-link":
        setInstagramLink(event.target.value);
        break;
      case "facebook-link":
        setFacebookLink(event.target.value);
        break;
      case "twitter-link":
        setTwitterLink(event.target.value);
        break;
      case "lat":
        setLat(event.target.value);
        break;
      case "lng":
        setLng(event.target.value);
        break;
      case "length":
        setLength(event.target.value);
        break;
      case "iframe-link":
        setIframeLink(event.target.value);
        break;
      case "iframe-title":
        setIframeTitle(event.target.value);
        break;
    }
  };

  const handleSubmit: (event: React.FormEvent) => void = (event) => {
    event.preventDefault();

    let payload: Walk = {
      walk: toTitleCase(walk),
      city: toTitleCase(city),
      description,
      startingPoint: toTitleCase(startingPoint),
      content1,
      content2,
      content3,
      coverImg,
      mapImg,
      img1,
      img2,
      img3,
      author: toTitleCase(author),
      aboutTheAuthor,
      websiteLink,
      instagramLink,
      facebookLink,
      twitterLink,
      lat,
      lng,
      length,
      iframeLink,
      iframeTitle,
    };

    axios
      .post("https://city-walks-production.up.railway.app/add-walk", qs.stringify(payload))
      .then((res: AxiosResponse) => {
        if (res.data === "walk saved") {
          console.log("walk saved");
        } else {
          console.log("walk not saved");
        }
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });

    alert("Walk Submitted");
    setWalk("");
    setCity("");
    setDescription("");
    setStartingPoint("");
    setContent1("");
    setContent2("");
    setContent3("");
    setCoverImg("");
    setImg1("");
    setImg2("");
    setImg3("");
    setAuthor("");
    setAboutTheAuthor("");
    setWebsiteLink("");
    setInstagramLink("");
    setFacebookLink("");
    setTwitterLink("");
    setLat("");
    setLng("");
    setLength("");
    setIframeLink("");
    setIframeTitle("");
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <h2>Add Walk</h2>
      <form onSubmit={handleSubmit} className='add-walk-form'>
        <MDBInput
          type='text'
          name='walk'
          id='walk'
          value={walk}
          label="walk, title-case only e.g. 'Baker Street To Bond Street'"
          onChange={handleChange}
          maxLength='70'
          required
        />
        <MDBInput
          type='text'
          name='city'
          id='city'
          value={city}
          label='city'
          onChange={handleChange}
          maxLength='70'
          required
        />
        <MDBInput
          type='text'
          name='description'
          id='description'
          value={description}
          label='description'
          onChange={handleChange}
          maxLength='136'
          required
        />
        <MDBInput
          type='text'
          name='starting-point'
          id='starting-point'
          value={startingPoint}
          label='starting point'
          onChange={handleChange}
          maxLength='100'
          required
        />
        <MDBInput
          type='textarea'
          rows='4'
          name='content1'
          id='content1'
          value={content1}
          label='paragraph 1 (569 character limit - excl formatting). Format using Markdown.'
          onChange={handleChange}
          maxLength='700'
          required
        />
        <MDBInput
          type='textarea'
          rows='4'
          name='content2'
          id='content2'
          value={content2}
          label='paragraph 2 (569 character limit - excl formatting). Format using Markdown.'
          onChange={handleChange}
          maxLength='700'
          required
        />
        <MDBInput
          type='textarea'
          rows='4'
          name='content3'
          id='content3'
          value={content3}
          label='paragraph 3 (569 character limit - excl formatting). Format using Markdown.'
          onChange={handleChange}
          maxLength='700'
          required
        />
        <MDBInput
          type='text'
          name='cover-img'
          id='cover-img'
          value={coverImg}
          label='cover image link'
          onChange={handleChange}
          required
        />
        <MDBInput
          type='text'
          name='map-img'
          id='map-img'
          value={mapImg}
          label='map image link'
          onChange={handleChange}
          required
        />
        <MDBInput
          type='text'
          name='img1'
          id='img1'
          value={img1}
          label='image 1 link'
          onChange={handleChange}
          required
        />
        <MDBInput
          type='text'
          name='img2'
          id='img2'
          value={img2}
          label='image 2 link'
          onChange={handleChange}
          required
        />
        <MDBInput
          type='text'
          name='img3'
          id='img3'
          value={img3}
          label='image 3 link'
          onChange={handleChange}
          required
        />
        <MDBInput
          type='text'
          name='author'
          id='author'
          value={author}
          label='author'
          onChange={handleChange}
          required
        />
        <MDBInput
          type='text'
          name='about-the-author'
          id='about-the-author'
          value={aboutTheAuthor}
          label='about the author'
          onChange={handleChange}
          required
        />
        <MDBInput
          type='text'
          name='website-link'
          id='website-link'
          value={websiteLink}
          label='website link (optional)'
          onChange={handleChange}
        />
        <MDBInput
          type='text'
          name='instagram-link'
          id='instagram-link'
          value={instagramLink}
          label='instagram link (optional)'
          onChange={handleChange}
        />
        <MDBInput
          type='text'
          name='facebook-link'
          id='facebook-link'
          value={facebookLink}
          label='facebook link (optional)'
          onChange={handleChange}
        />
        <MDBInput
          type='text'
          name='twitter-link'
          id='twitter-link'
          value={twitterLink}
          label='twitter link (optional)'
          onChange={handleChange}
        />
        <MDBInput
          type='text'
          name='lat'
          id='lat'
          value={lat}
          label='latitude'
          onChange={handleChange}
          required
        />
        <MDBInput
          type='text'
          name='lng'
          id='lng'
          value={lng}
          label='longitude'
          onChange={handleChange}
          required
        />
        <MDBInput
          type='text'
          name='length'
          id='length'
          value={length}
          label="walk length (e.g. '3.5 km / 2.1 miles')"
          onChange={handleChange}
          required
        />
        <MDBInput
          type='text'
          name='iframe-link'
          id='iframe-link'
          value={iframeLink}
          label="iframe link (should include '/maps/d/embed?')"
          onChange={handleChange}
          required
        />
        <MDBInput
          type='text'
          name='iframe-title'
          id='iframe-title'
          value={iframeTitle}
          label="iframe title (e.g. 'Canterbury Cathedral Google Map')"
          onChange={handleChange}
          required
        />
        <MDBBtn outline color='elegant' type='submit'>
          Send Walk
          <MDBIcon far icon='paper-plane' className='ml-2' />
        </MDBBtn>
      </form>
    </div>
  );
};

export default AddWalkForm;
