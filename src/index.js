import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import App from "./container/App.tsx";
import registerServiceWorker from './registerServiceWorker';
import { HashRouter as Router } from "react-router-dom"
import store from './store/index';
import { Provider } from 'react-redux'

import WalksTestData from './container/WalksTestData.json'

// console.log([WalksTestData])

// store.dispatch({ type: 'SAVE_WALKS', walks: WalksTestData })
// console.log(store.getState())

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>, document.getElementById('root'));


registerServiceWorker();