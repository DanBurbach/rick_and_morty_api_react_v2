import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import Main from "./Main";
import Error404 from "./Error404";

import * as ROUTES from "../constants/routes";
import rootReducer from "./../reducers/index";


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path={ROUTES.MAIN} component={Main} />
              <Route component={Error404} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
