/*global chrome*/

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" 
        style={{width: '100%', height: '100%'}}
      >
        {/* <header className="App-header"> 
           {this.props.isExt ? 
            <img src={chrome.runtime.getURL("static/media/logo.svg")} className="App-logo" alt="logo" />
          :
            <img src={logo} className="App-logo" alt="logo" />
          }

          <h1 className="App-title">Welcome to React</h1>
         </header>  */}
        <div className="App-intro" style={{width: '100%', height: '100%'}}>
          <iframe 
            src="https://healthcaregpt.vercel.app"
            width="100%"
            height="100%"
            frameBorder="0"
            title = "Healthcare GPT"
          />
        </div>

      </div>
    );
  }
}

export default App;
