import * as React from "react";
import {Route, Redirect} from "react-router-dom";
import Navbar from "../navbar";
import {EPath} from "../../enums/path";

interface IMainContainerProps {
  component: any;
  isAuthed?: boolean;
  path?: string;
  exact?: boolean;
  checkAuthentication: boolean;
}

/**
 * MainRouter:
 * Main router component is basically router guard + app wrapper
 * */
const MainRouter: React.FunctionComponent<IMainContainerProps> = (props) => {
  let allowRouteAccess = true;// !props.checkAuthentication || props.checkAuthentication && props.isAuthed;
  if(props.path === EPath.login){
    allowRouteAccess = !props.isAuthed;
  }else {
    allowRouteAccess = !props.checkAuthentication || props.checkAuthentication && !!props.isAuthed;
  }
  const {component: Component, ...rest} = props;
  console.log(rest);
  return (
    <Route render={(matchProps) => {
      debugger;
      return !allowRouteAccess ? <Redirect to="/"/> : (<div className="wrapper">
        <Navbar/>
        <Component/>
      </div>);
    }}/>
  )
};

export default MainRouter;