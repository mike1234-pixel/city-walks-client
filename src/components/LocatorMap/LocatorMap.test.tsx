import renderer, { ReactTestRendererJSON } from 'react-test-renderer'
import { cleanup, render } from '@testing-library/react'
import walks from '../../container/WalksTestData.json'
import LocatorMap from './LocatorMap'

describe('Test LocatorMap', () => {

    afterEach(cleanup);

    // snapshot test
    it('LocatorMap renders correctly', () => {

        const tree: ReactTestRendererJSON | ReactTestRendererJSON[] | null = renderer
            .create(<LocatorMap walks={walks} />)
            .toJSON();
        expect(tree).toMatchSnapshot();

    });

})