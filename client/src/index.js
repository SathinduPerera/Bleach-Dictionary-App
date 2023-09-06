import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRounter, Router, Route, useActionData} from "react-router-dom"
import characters from "./client_chars.json"

const root = ReactDOM.createRoot(document.getElementById('root'));

fetch('/api').then(response => response.json()).then(data => {
})

console.log(characters[0])

root.render(
  <App></App>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
