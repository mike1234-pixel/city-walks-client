import rootReducer from '../reducers/index'
import { configureStore, Store } from '@reduxjs/toolkit' // configure store creates a store and provides redux dev tools, used in place of the standard createStore
import thunk from 'redux-thunk';

const store: Store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
})

export type RootState = ReturnType<typeof store.getState>

export default store;
