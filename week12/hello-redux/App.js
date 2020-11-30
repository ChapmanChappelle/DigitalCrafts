
import FancyCounter from './FancyCounter';
import { connect } from 'react-redux'

function App(props) {

  return (
    <div>
      <h1>{props.counter}</h1>
      <button onClick = {() => props.onIncrementCounter()}>Increment</button>
      <button onClick = {() => props.onAddCounter(10)}>Add +10</button>

      <FancyCounter></FancyCounter>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({type: 'INCREMENT_COUNTER'}), 
    onAddCounter: (value) => dispatch({type: 'ADD_COUNTER', payload: value})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
