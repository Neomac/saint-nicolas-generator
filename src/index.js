import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export class People {
  constructor(name) {
    this.name = name;
  }
}

function createPeople(name) {
  let people = new People(name);
  return people;
}



ReactDOM.render(
  <h1>{createPeople("Antoine").name}</h1>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
