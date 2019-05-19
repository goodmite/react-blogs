import * as React from 'react';
import {ComponentWillMount} from "../../interfaces/lifecycle-hooks";


export class DashboardComponent extends React.Component implements ComponentWillMount{
  componentWillMount(){

  }

  render(): React.ReactNode {
    return (
      <div>
        I am dashboard componet
      </div>
    )
  }
}