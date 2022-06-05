import renderer, { ReactTestRendererJSON } from 'react-test-renderer'
import Location from "../../../types/Generic/Location"
import NotFound404 from './NotFound404'

// snapshot test
it('NotFound404 Page renders correctly', () => {

  const location: Location = {
    hash: '',
    key: '',
    pathname: '/pagedoesntexist',
    search: '',
    state: null
  }

  const tree: ReactTestRendererJSON | ReactTestRendererJSON[] | null = renderer
    .create(<NotFound404 location={location} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});