import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import rootReducer from "./store/reducers/root-reducer";

const api = createAPI(() => store.dispatch());

const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument(api)));


ReactDOM.render(
  <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector(`#root`)
);
