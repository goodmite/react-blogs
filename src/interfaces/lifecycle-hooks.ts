/*Lifecycle hooks Cheetsheet:
* http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
* */

interface ComponentWillMount {
  componentWillMount: () => any
}

interface ComponentDidMount {
  ComponentDidMount : () => any
}

interface ComponentDidUpdate{
  componentDidUpdate: () => any
}

interface ShouldComponentUpdate{
  shouldComponentUpdate: () => any
}

interface ComponentWillUnmount{
  componentWillUnmount: () => any
}