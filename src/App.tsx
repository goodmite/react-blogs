import * as React from 'react';
import './App.scss';
import Navbar from "./compnents/navbar";
import {BrowserRouter as Router} from "react-router-dom";
import {Redirect, Route, Switch} from "react-router";
import MainRouter from "./compnents/main-router/MainRouter";
import {NotFound} from "./compnents/not-found/not-found";
import {WrappedLoginComponent} from "./compnents/auth/Login";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Switch>
          {/*Switch will evaluate only the first child with matching path and render component returned by that child
          Good video: https://www.youtube.com/watch?time_continue=2&v=ojYbcon588A
          */}
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <MainRouter path={'/login'} checkAuthentication={true} component={WrappedLoginComponent} />
          <MainRouter path={'/nav'} checkAuthentication={true} component={Navbar} />

          {/*child with no path prop will always match, and hence it should be the last child*/}
          <MainRouter component={NotFound} isAuthed={false}  checkAuthentication={false}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
