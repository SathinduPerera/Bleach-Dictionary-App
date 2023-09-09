import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import {App} from './App';
import {Descriptions, Quincy, Shinigami, Fullbring, Arrancar} from './App'
// import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import characters from "./client_chars.json"

const root = ReactDOM.createRoot(document.getElementById('root'));

function renderCharacterAbilities(element) {
  switch (element.Position){
    case "Quincy":
    case "Sternritter":
      return (<Quincy Shrift={element.Sword}/>)
    case "Captain":
    case "Lieutenant":
    case "Former Captain":
    case "Shinigami":
    case "Substitute Shinigami":
    case "Squad 0":
      return (<Shinigami Shikai={element.Sword} Bankai={element.Bankai} BankaiFlag={element.HasBankai}/>)
    case "Fullbring":
      return (<Fullbring Fullbring={element.Sword}/>)
    case "Arrancar":
      return (<Arrancar Resurrección={element.Sword}/>)
    default:
      return (<>Hello</>)
  }
  // if(element.Position === "Quincy" || element.Position === "Sternritter"){
  //   return (<Quincy Shrift={element.Sword} />)
  // } else if (element.Position === "Captain" || element.Position === "Captain" || element.Position === "Captain" || element.Position === "Captain" || element.Position === "Captain")
}

root.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        {characters.map((element, i) => (
          <Route key={i} path={element.Character.toLowerCase()} element={<Descriptions Character={element.Character} Position={element.Position} Image={element.img} Desc={element.description}
          Sword={element.Sword} Bankai={element.Bankai} HasBankai={element.HasBankai} display_comp={renderCharacterAbilities(element)}/>}/>
        ))}
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
