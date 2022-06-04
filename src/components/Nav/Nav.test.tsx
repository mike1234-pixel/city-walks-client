import renderer, { ReactTestRendererJSON } from 'react-test-renderer'
import { cleanup, fireEvent, render } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import store from '../../store'
import Nav from './Nav'

describe('Test Nav', () => {

    afterEach(cleanup);

    // snapshot test
    it('Nav renders correctly', () => {

        const tree: ReactTestRendererJSON | ReactTestRendererJSON[] | null = renderer
            .create(<Provider store={store}><BrowserRouter><Nav redirect={false} /></BrowserRouter></Provider>)
            .toJSON();
        expect(tree).toMatchSnapshot();

    });

})