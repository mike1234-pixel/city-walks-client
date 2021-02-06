import renderer from 'react-test-renderer'
import BlogsTestData from "../../../container/BlogsTestData.json"
import { BrowserRouter as Router } from 'react-router-dom';
import { LoginContextProvider } from "../../../context/LoginContext"
import Blog from './Blog'

// snapshot test
it('Blogs Page renders correctly', () => {  

  const blogPosts = BlogsTestData

  const tree = renderer
    .create(
      <LoginContextProvider>
        <Router>
          <Blog blogPosts={blogPosts}/>
        </Router>
      </LoginContextProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});