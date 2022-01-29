import Router from './Router/Router'
import { useContext, useEffect } from "react" 
import { ForumContext } from "../context/ForumContext"
import { WalksContext } from "../context/WalksContext"
import { LoginContext } from "../context/LoginContext"
import axios from "axios"
import store from "../store"
import './App.scss'

// save data to redux store
axios.get('https://city-walks.herokuapp.com/blog')
.then((response) => {
    console.log(response.data)
    let sights = response.data
    store.dispatch({ type: 'SAVE_SIGHTS', sights })
    store.dispatch({ type: 'TOGGLE_SIGHTS_LOADING'})
})
.catch(error => console.log(error.message))


const App = (props) => {

  const { walks, cities, boards, sights } = props

  const { setBoards, setLoadingBoards } = useContext(ForumContext)
  const { setWalks,  setIsLoading } = useContext(WalksContext)
  const { setPopupVisible, setLoggedIn, setUserId, setUserFirstName } = useContext(LoginContext)

      useEffect(() => {
        setBoards(boards.data) // set state happens asynchronously
        setLoadingBoards(false)


        setWalks(walks)
        setIsLoading(false)
        
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
              // core app data
              walks={walks} 
              cities={cities}
              sights={sights} 
              />
            </div>
        )
}

export default App;