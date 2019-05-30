import React, { useState } from "react";
import { connect } from "react-redux";
import { changeData } from "../actions";
import { loginDetails } from "../actions";


const Main = ({ dispatch, data }, props) => {

    const [loginInfo, setLoginInfo] = useState({ username:'',
        password:''
    });

  const test = () => {
    let newData = [];
    for (let item of data) {
      if (item.company) {
        let obj = {};
        obj["company"] =  "Chris sucks.";

        newData.push(obj);
      }
    }

    dispatch(changeData(newData));
  };

  const loginHandler = (e) => {

    dispatch(loginDetails(loginInfo));

    alert(loginInfo.username)
  }

  return (
    <div>
      {data
        ? data.map((item, i) => {
            return <div key={i}> {item.company}</div>;
          })
        : null}

      <button onClick={test}>Click me!</button>

      <div>
        <label>Login: </label>
        <input id='id' onInput={(e)=> setLoginInfo({...loginInfo, username:e.currentTarget.value})} />
      </div>
      <div>
        <label>Password: </label>
        <input id='password' onInput={(e)=> setLoginInfo({...loginInfo, password:e.currentTarget.value})}/>
      </div>
      <button onClick={loginHandler}>Login!</button>
      <div>
      <ul>
      {data
        ? data.map((item, i) => {
    return <li key={i}> {item.name}  {item.phone}</li>;

          })
        : null}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  ...state
});

export default connect(
  mapStateToProps,
  null
)(Main);
