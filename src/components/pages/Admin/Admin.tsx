import React, { ReactNode, useState, useEffect } from "react"
import { MDBBtn, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBHamburgerToggler, MDBCollapse, MDBIcon, MDBInput, MDBContainer } from "mdbreact";
import axios, { AxiosResponse } from "axios"
import qs from "qs"
import AddWalkForm from './AddWalkForm/AddWalkForm'
import AddCityForm from './AddCityForm/AddCityForm'
import SetFeaturedWalkForm from './SetFeaturedWalkForm/SetFeaturedWalkForm'
import DeleteWalkForm from './DeleteWalkForm/DeleteWalkForm'
import DeleteCityForm from './DeleteCityForm/DeleteCityForm'
import AddBoardForm from './AddBoardForm/AddBoardForm'
import DeleteBoardForm from "./DeleteBoardForm/DeleteBoardForm"
import AddBlogPostForm from "./AddBlogPostForm/AddBlogPostForm"
import DeleteBlogPostForm from "./DeleteBlogPostForm/DeleteBlogPostForm"
import AdminCredentials from "../../../types/PostRequests/AdminCredentials";
import './Admin.scss'

const Admin: React.FC = () => {

  const [form, setForm] = useState<string>("")
  const [toggleAdminPanel, setToggleAdminPanel] = useState<boolean>(false)

  const handleToggleAdminPanel: () => void = () => {
    setToggleAdminPanel(!toggleAdminPanel)
  }

  let displayForm: ReactNode
  if (form === "addWalk") {
    displayForm = <AddWalkForm />;
  } else if (form === "addCity") {
    displayForm = <AddCityForm />;
  } else if (form === "setFeaturedWalk") {
    displayForm = <SetFeaturedWalkForm />
  } else if (form === "deleteWalk") {
    displayForm = <DeleteWalkForm />
  } else if (form === "deleteCity") {
    displayForm = <DeleteCityForm />
  } else if (form === "addBoard") {
    displayForm = <AddBoardForm />
  } else if (form === "deleteBoard") {
    displayForm = <DeleteBoardForm />
  } else if (form === "addBlogPost") {
    displayForm = <AddBlogPostForm />
  } else if (form === "deleteBlogPost") {
    displayForm = <DeleteBlogPostForm />
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const [adminUserName, setAdminUserName] = useState<string>("")
  const [adminPassword, setAdminPassword] = useState<string>("")
  const [adminLoggedIn, setAdminLoggedIn] = useState<boolean>(false)

  const handleSubmitAdminLogin: (event: React.FormEvent) => void = (event) => {
    event.preventDefault()

    const payload: AdminCredentials = {
      username: adminUserName,
      password: adminPassword,
    };

    axios
      .post("https://city-walks.herokuapp.com/admin-login", qs.stringify(payload))
      .then((res: AxiosResponse) => {
        if (res.data === "unsuccessful login attempt") {
          alert("Unsuccessful Login Attempt. Please Try Again.")
        } else {
          alert("Successfully Logged In")
          setAdminLoggedIn(true)
          setAdminUserName("")
          setAdminPassword("")
          window.scrollTo(0, 0)
        }
      });

  }

  const handleChangeAdminLogin: (event: React.ChangeEvent<any>) => void = (event) => {
    switch (event.target.name) {
      case "admin-username":
        setAdminUserName(event.target.value)
        break;
      case "admin-password":
        setAdminPassword(event.target.value)
        break;
    }
  }

  const adminLogOut: () => void = () => {
    setAdminLoggedIn(false)
  }

  return (
    <div className="admin-portal min-page-height">
      {adminLoggedIn ?
        <div>
          <MDBNavbar className="admin-panel" dark expand="md">
            <MDBContainer>
              <MDBNavbarBrand>
                <strong className="white-text">Admin Portal</strong>
              </MDBNavbarBrand>
              <MDBHamburgerToggler color="#fff" className="hamburger1" id="hamburger2" onClick={handleToggleAdminPanel} />
              <MDBCollapse id="navbarCollapse3" isOpen={toggleAdminPanel} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem>
                    <MDBNavLink to="#!" onClick={() => setForm("addWalk")}>Add Walk</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!" onClick={() => setForm("addCity")}>Add City</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!" onClick={() => setForm("setFeaturedWalk")}>Set Featured Walk</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!" onClick={() => setForm("deleteWalk")}>Delete Walk</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!" onClick={() => setForm("deleteCity")}>Delete City</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!" onClick={() => setForm("addBoard")}>Add Board</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!" onClick={() => setForm("deleteBoard")}>Delete Board</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!" onClick={() => setForm("addBlogPost")}>Add Blog Post</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!" onClick={() => setForm("deleteBlogPost")}>Delete Blog Post</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="#!" onClick={() => adminLogOut()}>Admin Logout</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
          <br />
          <br />
          <br />
          <MDBContainer>
            {displayForm}
          </MDBContainer>
        </div> :
        <MDBContainer>
          <form className="admin-login-form" onSubmit={handleSubmitAdminLogin}>
            <MDBInput type="text" name="admin-username" id="admin-username" value={adminUserName} label="admin username" onChange={handleChangeAdminLogin} maxLength="70" required />
            <MDBInput type="password" name="admin-password" id="admin-password" value={adminPassword} label="admin password" onChange={handleChangeAdminLogin} maxLength="70" required />
            <MDBBtn outline color="elegant" type="submit">Administrator Login <MDBIcon icon="sign-in-alt" /></MDBBtn>
          </form>
        </MDBContainer>
      }
    </div>

  )
}

export default Admin