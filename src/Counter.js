import React from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

class Counter extends React.Component {
  //   state = { count: 0 };

  increment = () => {
    // this.setState({ count: this.state.count + 1 });
    this.props.dispatch({ type: "INCREMENT" });
  };

  decrement = () => {
    // this.setState({ count: this.state.count - 1 });
    this.props.dispatch({ type: "DECREMENT" });
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <button onClick={this.increment}>Add One</button>
        <h1>{this.props.count}</h1>
        <button onClick={this.decrement}>Subtract One</button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Counter);
