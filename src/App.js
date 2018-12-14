import React, { Component } from 'react';
import './App.css';
import PostForm from './components/postForm';
import Getformdata from './components/getFormData';
import {Provider } from 'react-redux';
import store from './store.js';
class App extends Component {
  render() {
    return (
     
        <Provider store={store}>
         <div className="App">
        <header className="App-header">
          <h2>React Service application</h2>
        </header>
          <PostForm></PostForm>
        <Getformdata></Getformdata>
        </div>
      </Provider>

    );
  }
}

export default App;
