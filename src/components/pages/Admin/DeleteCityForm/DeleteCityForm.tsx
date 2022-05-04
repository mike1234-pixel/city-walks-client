import React, { useState } from "react"
import { MDBInput, MDBBtn, MDBIcon } from "mdbreact"
import axios, { AxiosResponse } from "axios"
import toTitleCase from '../../../../functions/toTitleCase'
import SelectedCity from "../../../../types/PostRequests/SelectedCity"
import './DeleteCityForm.scss'

const DeleteCityForm: React.FC = () => {

  const [city, setCity] = useState<string>("")

  const handleChange: (event: React.ChangeEvent<any>) => void = (event) => {
    switch (event.target.name) {
      case "city":
        setCity(event.target.value)
        break;
    }
  }

  const handleSubmit: (event: React.FormEvent) => void = (event) => {
    event.preventDefault()

    let payload: SelectedCity = {
      city: toTitleCase(city)
    };

    axios
      .delete("https://city-walks.herokuapp.com/delete-city", { data: payload })
      .then((res: AxiosResponse) => {
        if (res.data === "city deleted") {
          console.log("city deleted")
        } else {
          console.log("city not deleted")
        }
      });

    alert("City Deleted")
    setCity("")
    window.scrollTo(0, 0);
  }

  return (
    <div>
      <h2>Delete City</h2>
      <form onSubmit={handleSubmit} className="delete-city-form">
        <MDBInput type="text" name="city" id="city" value={city} label="city name" onChange={handleChange} required />
        <MDBBtn outline color="elegant" type="submit">
          Delete City <MDBIcon icon="trash" />
        </MDBBtn>
      </form>
    </div>
  )
}

export default DeleteCityForm