import renderer, { ReactTestRendererJSON } from 'react-test-renderer'
import { cleanup, render } from '@testing-library/react'
import LoadingBar from './LoadingBar'

describe('Test Loading Bar', () => {

    afterEach(cleanup);

    // snapshot test
    it('Loading Bar renders correctly', () => {

        const tree: ReactTestRendererJSON | ReactTestRendererJSON[] | null = renderer
            .create(<LoadingBar />)
            .toJSON();
        expect(tree).toMatchSnapshot();

    });

    // unit tests
    it('Loading Bar has text content', () => {
        const { getByText } = render(<LoadingBar />)

        const slideText: HTMLElement = getByText("Loading...")

        expect(slideText).toBeDefined()

    })
})