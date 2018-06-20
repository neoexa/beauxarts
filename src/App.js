import { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> alive! </h1>
      </div>
    );
  }
}

export default hot(module) (App);