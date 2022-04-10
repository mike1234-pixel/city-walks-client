import rootReducer from '../reducers'
import { configureStore } from '@reduxjs/toolkit' // configure store creates a store and provides redux dev tools, used in place of the standard createStore

const store = configureStore({
    reducer: rootReducer,
})

export default store;