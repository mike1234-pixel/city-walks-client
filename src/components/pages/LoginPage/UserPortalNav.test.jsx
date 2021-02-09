import renderer from 'react-test-renderer'
import { LoginContextProvider } from "../../../context/LoginContext";
import { ForumContextProvider } from "../../../context/ForumContext"
import UserPortalNav from "./UserPortalNav"

// snapshot test
it('UserPortalNav Page renders correctly', () => {  

  const tree = renderer
    .create(
        <LoginContextProvider>
            <ForumContextProvider>
                <UserPortalNav />
            </ForumContextProvider>
        </LoginContextProvider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});