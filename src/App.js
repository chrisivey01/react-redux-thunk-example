import React from "react";
import Main from './components/Main'
//redux + thunk imports
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from './reducers';
import { fetchMyData } from './actions/index'
import "./App.css";


function App() {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  store.dispatch(fetchMyData());

  return (
    <Provider store={store}>
      <div className="App">
      
        <Main/>
      </div>
    </Provider>
  );
}

export default App;
