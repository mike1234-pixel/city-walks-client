import renderer, { ReactTestRendererJSON } from 'react-test-renderer'
import { cleanup, render } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import store from '../../store'
import Footer from './Footer'

describe('Test Footer', () => {

    afterEach(cleanup);

    // snapshot test
    it('Footer renders correctly', () => {

        const tree: ReactTestRendererJSON | ReactTestRendererJSON[] | null = renderer
            .create(<Provider store={store}><BrowserRouter><Footer loggedIn={false} userId={''} /></BrowserRouter></Provider>)
            .toJSON();
        expect(tree).toMatchSnapshot();

    });

    // unit tests
    it('Footer has text content', () => {
        const { getByText } = render(<Provider store={store}><BrowserRouter><Footer loggedIn={false} userId={''} /></BrowserRouter></Provider >)

        const footerText: HTMLElement = getByText("City Walks...")

        expect(footerText).toBeDefined()

    })
})

// note to self: mocking a redux store is only useful when async actions are involved and the test will be quicker as a result




