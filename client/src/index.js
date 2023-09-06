import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import {App} from './App';
import {Descriptions} from './App'
// import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import characters from "./client_chars.json"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        {characters.map((element, i) => (
          <Route key={i} path={element.Character.toLowerCase()} element={<Descriptions Character={element.Character} Position={element.Position} Image={element.img} Desc={element.description}/>}/>
        ))}
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
