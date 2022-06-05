import { render, fireEvent, cleanup } from "@testing-library/react" // https://testing-library.com/docs/react-testing-library/cheatsheet
import { Provider } from 'react-redux'
import WalksTestData from "./WalksTestData.json"
import CitiesTestData from "./CitiesTestData.json"
import BoardsTestData from "./BoardsTestData.json"
import SightsTestData from "./SightsTestData.json"
import { SAVE_WALKS, SAVE_CITIES, SAVE_BOARDS, SAVE_SIGHTS } from '../constants/constants'
import { BrowserRouter } from 'react-router-dom'
import store from '../store'
import App from "./App"


// integration tests (simulate user interaction)
describe("App integration tests", () => {

    beforeEach(() => {
        // save mock data to redux store
        store.dispatch({ type: SAVE_WALKS, walks: WalksTestData })
        store.dispatch({ type: SAVE_CITIES, cities: CitiesTestData })
        store.dispatch({ type: SAVE_BOARDS, boards: BoardsTestData })
        store.dispatch({ type: SAVE_SIGHTS, sights: SightsTestData })
    })

    afterEach(cleanup)
    //  data-testid

    it("renders without crashing", () => {

        window.scrollTo = jest.fn()

        const { getByText, getByLabelText, getByTestId } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <App walks={WalksTestData} cities={CitiesTestData} boards={BoardsTestData} sights={SightsTestData} />
                </BrowserRouter>
            </Provider>
        )
        // assert element exists
        getByLabelText("Search Walks")

        // test is on Home page - redirect to Walk page
        // simulate redirect from homepage featured walk to the same walk
        const exploreButton = getByText("Explore Camden Markets")
        fireEvent.click(exploreButton)
        getByTestId("walk-page")

        // test is on Walk page, redirect to Walks Page
        // simulate redirect from homepage to walks page via the search bar
        const searchBar = getByTestId("search-input")
        fireEvent.change(searchBar, { target: { value: "london" } })
        fireEvent.click(getByTestId("search-btn"))
        getByTestId("walks-page-heading")
        expect(getByTestId("walks-search-icon").textContent).toBe('  london')

        // redirect to cities page
        fireEvent.click(getByTestId("nav-link-cities"))
        getByTestId("cities-page-heading")

    })

})

// to see the whole app html output in the terminal run DEBUG_PRINT_LIMIT=10000 npm test

// from the redux docs
// Use integration tests for everything working together. I.e. for a React app using Redux, render a <Provider> with a real store instance wrapping the component/s being tested.