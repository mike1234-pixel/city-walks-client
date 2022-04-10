import Router from './Router/Router'
import { useContext, useEffect } from "react" 
import { ForumContext } from "../context/ForumContext"
import { LoginContext } from "../context/LoginContext"
import axios from "axios"
import { connect } from 'react-redux'
import './App.scss'


const App = (props) => {

  const {  cities, boards, saveSights, saveWalks } = props

  const { setBoards, setLoadingBoards } = useContext(ForumContext)
  const { setPopupVisible, setLoggedIn, setUserId, setUserFirstName } = useContext(LoginContext)

      useEffect(() => {
        setBoards(boards.data) // set state happens asynchronously
        setLoadingBoards(false)

        const walksRequest = axios.get('https://city-walks.herokuapp.com/walks');
        const citiesRequest = axios.get('https://city-walks.herokuapp.com/cities');
        const boardsRequest = axios.get('https://city-walks.herokuapp.com/boards');
        const sightsRequest = axios.get('https://city-walks.herokuapp.com/blog');

        // save data to redux store
        axios.all([walksRequest, citiesRequest, boardsRequest, sightsRequest])
          .then(
            axios.spread((...responses) => {
              const walks = responses[0].data;
              const cities = responses[1].data;
              const boards = responses[2].data;
              const sights = responses[3].data;

              saveSights(sights) // save data to redux store
              saveWalks(walks)

            }
          )
        ).catch(error => console.log(error.message))
        
        if (localStorage.getItem("popupVisible") === null) {
           setPopupVisible(true)
        }

        if (localStorage.getItem("loggedIn") !== null) {
          setLoggedIn(true)
          setUserId(localStorage.getItem("userId"))
          setUserFirstName(localStorage.getItem("userFirstName"))
        }

      },[])

        return (
          <div>
            <Router 
              cities={cities}
              // sights={sights} 
              />
            </div>
        )
}

// this works...
const mapDispatchToProps = (dispatch) => {
  return {
    // don't necessarily need the loading states can just use sights.length instead
    saveSights: (sights) => dispatch({ type: 'SAVE_SIGHTS', sights }),
    saveWalks: (walks) => dispatch({ type: 'SAVE_WALKS', walks }),
  }
}

export default connect(null, mapDispatchToProps)(App);