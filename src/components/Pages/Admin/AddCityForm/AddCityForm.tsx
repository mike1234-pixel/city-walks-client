import React, { useState } from "react"
import { MDBInput, MDBBtn, MDBIcon } from "mdbreact"
import axios, { AxiosError, AxiosResponse } from "axios"
import qs from "qs"
import toTitleCase from "../../../../functions/toTitleCase"
import City from "../../../../types/PostRequests/City"
import "./AddCityForm.css"

const AddCityForm: React.FC = () => {
  const [city, setCity] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [img, setImg] = useState<string>("")

  const handleChange: (event: React.ChangeEvent<any>) => void = (event) => {
    switch (event.target.name) {
      case "city":
        setCity(event.target.value)
        break
      case "description":
        setDescription(event.target.value)
        break
      case "img":
        setImg(event.target.value)
        break
    }
  }

  const handleSubmit: (event: React.FormEvent) => void = (event) => {
    event.preventDefault()

    let payload: City = {
      city: toTitleCase(city),
      description: description,
      img: img,
    }

    axios
      .post("https://city-walks.herokuapp.com/add-city", qs.stringify(payload))
      .then((res: AxiosResponse) => {
        if (res.data === "city saved") {
          console.log("city saved")
        } else {
          console.log("city not saved")
        }
      })
      .catch((err: AxiosError) => {
        console.log(err)
      })

    alert("City Submitted")
    setCity("")
    setDescription("")
    setImg("")
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <h2>Add City</h2>
      <form onSubmit={handleSubmit} className='add-city-form'>
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
          name='img'
          id='img'
          value={img}
          label='image link'
          onChange={handleChange}
          required
        />
        <MDBBtn outline color='elegant' type='submit'>
          Send City
          <MDBIcon far icon='paper-plane' className='ml-2' />
        </MDBBtn>
      </form>
    </div>
  )
}

export default AddCityForm
