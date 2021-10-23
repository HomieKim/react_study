import logo from "./logo.svg";
import "./App.css";
import MyComponet from './MyComponet';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import React, { Component } from 'react';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

class App extends Component{
  render(){
    return(
      <>
      <ScrollBox ref={(ref)=> this.ScrollBox=ref}/>
      <button onClick={()=>this.ScrollBox.scrollToBottom()}>맨밑으로</button>
      </>
    );
  }
}

export default App;