import { connect } from 'react-redux';
import React from 'react';
import Counter from './components/Counter';
import { increment, decrement, incrementByFive, toggleCounter } from './actions/counter';
import * as actions from './actions/counter';

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter
          counter={this.props.counter}
          increment={this.props.increment}
          decrement={this.props.decrement}
          incrementByFive={this.props.incrementByFive}
          isShow={this.props.isShow}
          toggleCounter={this.props.toggleCounter}
        />
        ;
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ counter: state.counter, isShow: state.isShow });

const mapStateToDispatch = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    toggleCounter: () => dispatch(toggleCounter()),
    incrementByFive: (value) => {
      debugger;
      dispatch(incrementByFive(value));
    },
  };
};

export default connect(mapStateToProps, mapStateToDispatch)(App);
