import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import {App} from './App';
import {Descriptions, Quincy, Shinigami, Fullbring, Arrancar, Zanpakto, FullbringPower, Resurrección, Shrift} from './App'
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
      return (<Shinigami Shikai={element.Shikai} Bankai={element.Bankai} BankaiFlag={element.HasBankai} Zanpakto_Desc={element.Zanpakto_Desc} Shikai_desc={element.Shikai_Desc} Bankai_desc={element.Bankai_Desc}
      Shikai_abilities={element.Shikai_Abilities} Bankai_Abilities={element.Bankai_Abilities}/>)
    case "Fullbring":
      return (<Fullbring Fullbring={element.Shrift}/>)
    case "Arrancar":
      return (<Arrancar Resurrección={element.Shrift}/>)
    default:
      return (<></>)
  }
}

function renderDisplayAbilities(element) {
  switch (element.Position){
    case "Quincy":
    case "Sternritter":
      return (<Shrift Shrift={element.Shrift}/>)
    case "Captain":
    case "Lieutenant":
    case "Former Captain":
    case "Shinigami":
    case "Substitute Shinigami":
    case "Squad 0":
      return (<Zanpakto Shikai={element.Shikai} Bankai={element.Bankai} BankaiFlag={element.HasBankai}/>)
    case "Fullbring":
      return (<FullbringPower Fullbring={element.Fullbring}/>)
    case "Arrancar":
      return (<Resurrección Resurrección={element.Resurrección}/>)
    default:
      return (<></>)
  }
}

root.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        {characters.map((element, i) => (
          <Route key={i} path={element.Character.toLowerCase()} element={<Descriptions Character={element.Character} Position={element.Position} Image={element.img}
          display_comp={renderCharacterAbilities(element)} display_abilities={renderDisplayAbilities(element)} desc={element.Desc} appearence={element.Appearance} 
          personality={element.Personality} abilities={element.Abilities} color={element.color} Zanpakto_desc={element.Zanpakto_Desc}/>}/>
        ))}
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
