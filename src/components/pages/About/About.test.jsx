import renderer from 'react-test-renderer'
import { LoginContextProvider } from "../../../context/LoginContext"
import { BrowserRouter as Router } from "react-router-dom"
import About from './About'

// snapshot test
it('About Page renders correctly', () => {  

  const tree = renderer
    .create(
        <LoginContextProvider>
          <Router>
            <About />
          </Router>
        </LoginContextProvider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});