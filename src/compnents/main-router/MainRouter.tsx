import * as React from "react";
import {Route, Redirect} from "react-router-dom";
import Navbar from "../navbar";
import {EPath} from "../../enums/path";
import {connect} from "react-redux";
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
const MainRouterComponent: React.FunctionComponent<IMainContainerProps> = (props) => {
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
      return !allowRouteAccess ? <Redirect to="/dashboard"/> : (<div className="wrapper">
        <Navbar/>
        <Component history={matchProps.history}/>
      </div>);
    }}/>
  )
};


let mapStateToProps = (state: any) => {
  console.dir(JSON.stringify(state));
  console.log(state.isFetching);
  return ({ isAuthed: state.users.isAuthed });
};
export const MainRouter =  connect(mapStateToProps)(MainRouterComponent);

