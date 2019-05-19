/*Lifecycle hooks Cheetsheet:
* http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
* */

export interface ComponentWillMount {
  componentWillMount: () => any
}

export interface ComponentDidMount {
  ComponentDidMount : () => any
}

export interface ComponentDidUpdate{
  componentDidUpdate: () => any
}

export interface ShouldComponentUpdate{
  shouldComponentUpdate: () => any
}

export interface ComponentWillUnmount{
  componentWillUnmount: () => any
}