import React from "react";
import Counter from "./Counter";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = { count: 0 };

function reducer(state = initialState, action) {
  console.log("Reducer:", state, action);

  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="container-outer">
        <div className="container-inner">
          <Counter />
        </div>
      </div>
    </Provider>
  );
}

export default App;
