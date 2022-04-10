import rootReducer from '../reducers'
import { configureStore } from '@reduxjs/toolkit' // configure store creates a store and provides redux dev tools, used in place of the standard createStore
import thunk from "redux-thunk";

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk] // apply thunk middleware in order to make ajax requests using redux
})

export default store;