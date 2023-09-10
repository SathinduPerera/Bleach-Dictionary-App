import React from 'react'
import { useState, useEffect } from 'react'
import Image from "./Images/logo_finished.png"
import {Link} from "react-router-dom"

export function Shinigami({Release1, Release2, Shikai, Bankai , BankaiFlag}) {
  return(
    <>
      <h2>Zanpakto Description</h2>
      <p>Description of zanpakto and bankai if character has achived it</p>
      <div>
        <h3>Shikai - {Shikai}</h3>
        <p>Shikai abilities</p>
      </div>
      <div className={BankaiFlag}>
        <h3>Bankai - {Bankai}</h3>
        <p>Bankai Abilities</p>
      </div>
    </>
  )

}

export function Arrancar({Resurrección}) {
  return(
    <>
    <h2>Resurrección Description</h2>
    <p>Description of Resurrección</p>
    <div>
      <h3>Resurrección - {Resurrección}</h3>
      <p>Resurrección abilities</p>
    </div>
  </>
  )

}

export function Quincy({Shrift}) {
  return(
    <>
      <h2>Shrift Description</h2>
      <p>Description of shrift</p>
      <div>
        <h3>Shrift - {Shrift}</h3>
        <p>shrift abilities</p>
      </div>
     </>
  )
}

export function Fullbring({Fullbring}) {
  return(
    <>
      <h2>Fullbring Description</h2>
      <p>Description of Fullbring</p>
      <div>
        <h3>Fullbring - {Fullbring}</h3>
        <p>Fullbring abilities</p>
      </div>
     </>
  )
}


export function Descriptions({Character, Position, Image, Desc,HasBankai, Sword, Bankai, display_comp}){
  return (
    <>
    <div id='char_root'>
      <div id="content_div" className='child'>
        <h1 className='desc_title'>{Character}</h1>
        <h2 className='desc_title'>{Position}</h2>
        <div>
          <h2>Description</h2>
          <p>A description of the Character</p>
        </div>
        <div>
          <h2>Appearance</h2>
          <p>The Appearence of the character</p>
        </div>
        <div>
          <h2>Personality</h2>
          <p>The Personality of the character</p>
        </div>
        <div>
          <h2>Abilities</h2>
          <p>About the characters abilities</p>
        </div>
        <div>
          {display_comp}
        </div>
        <div>
          <Link to="/" className='links'>Back to Home</Link>
        </div>
        </div>
        <div id='img_div' className='child'>
          <div id='imgHolder'>
            <img src={Image} alt={Character}/>
          </div>
          <ol>
            <li>Gender - </li>
            <li>Height - </li>
            <li>Weight - </li>
            <li>Eye Color - </li>
          </ol>
          <ol>
            <li>Shikai - {Sword}</li>
            <li>Bankai - {Bankai}</li>
          </ol>
          <ol>
            <li>Current Position</li>
            <li>Previous Position</li>
            <li>Current Squad</li>
            <li>Previous Squad</li>
          </ol>
          <ol>
            <li>Family</li>
            <li>Friends</li>
          </ol>
        </div>
    </div>
    </>
  );
}

export function App() {
  const [backend, setbackend] = useState([{}])

  const [captain, setCaptain] = useState(false);
  const [lieutenant, setLieutenant] = useState(false);
  const [formerCap, setFormerCap] = useState(false);
  const [sub, setSub] = useState(false);
  const [shinigami, setshinigami] = useState(false);
  const [other, setother] = useState(false);
  const [fullbring, setfullbring] = useState(false);
  const [Squad0, setSquad0] = useState(false);
  const [arrancar, setarrancar] = useState(false);
  const [espada, setespada] = useState(false);
  const [quincy, setquincy] = useState(false);
  const [sternritter, setsternritter] = useState(false);
  const [human, sethuman] = useState(false);

  useEffect(() => {
    fetch("/api").then(
      (response) => (response.json())
    ).then(
      (data) => {
        setbackend(data)
      }
    )
  }, [])

  // useEffect(() => {

  //   console.log(all, captain, lieutenant, formerCap, sub, other)
    
  //   if (all) {
  //     backend.forEach(element => getArr.push(element))
  //   } else {
  //       if(other) {
  //           let arr = filter("Other", backend)
  //           arr.forEach(element => getArr.push(element))
  //           console.log(arr)
  //       }
  //       if (captain) {
  //           let arr = filter("Captain", backend)
  //           arr.forEach(element => getArr.push(element))
  //           console.log(arr)
  //       }
  //       if (lieutenant) {
  //           let arr = filter("Lieutenant", backend)
  //           arr.forEach(element => getArr.push(element))
  //           console.log(arr)
  //       }
  //       if (formerCap) {
  //           let arr = filter("Former Captain", backend)
  //           arr.forEach(element => getArr.push(element))
  //           console.log(arr)
  //       }
  //       if (sub) {
  //           let arr = filter("Substitute Shinigami", backend)
  //           arr.forEach(element => getArr.push(element))
  //           console.log(arr)
  //       }
  //   }

  //   console.log(getArr)
  //   return getArr
    
  // }, [all, captain, formerCap, sub, other, lieutenant, backend, getArr])

  function postSort(){
    let arr = []

    if(other) {
      arr.push("Other")
    }
    if (captain) {
      arr.push("Captain")
    }
    if (lieutenant) {
      arr.push("Lieutenant")
    }
    if (formerCap) {
      arr.push("Former Captain")
    }
    if (sub) {
      arr.push("Substitute Shinigami")
    }
    if (arrancar) {
      arr.push("Arrancar")
    }
    if (espada) {
      arr.push("Espada")
    }
    if (fullbring) {
      arr.push("Fullbring")
    }
    if (quincy) {
      arr.push("Quincy")
    }
    if (sternritter) {
      arr.push("Sternritter")
    }
    if (Squad0) {
      arr.push("Squad 0")
    }
    if(human) {
      arr.push("Human")
    }
    if(shinigami) {
      arr.push("Shinigami")
    }
        
    return arr
  }

  function Checkbox({setFunction, position, value}) {
    return (
      <div className='options' style={(value)?{backgroundColor:"rgba(214, 67, 56, 1)"}:{color:"none"}}>
          <label htmlFor={position}>{position}</label>
          <input type='checkbox' id={position} onChange={setFunction} checked={value} className='option_check'></input>
      </div>
    )
  }

  useEffect(() => {
    let arr = postSort()
    let userdata = {
      selection_arr : arr
    }
    fetch("api/post", 
    {
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(userdata)
    }).then((response) => response.json()).then((data) => {
      setbackend(data.data)
      console.log(data.message)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [captain, lieutenant, formerCap, other, sub, fullbring, espada, arrancar, quincy, Squad0, sternritter, human, shinigami])

  return (
    <div>
      <div id="title_div">
      <h1 className='title'><div id="logo_div"><img src={Image} alt="logo"/></div><br/><span>Character Information</span></h1>
      </div>

      <div id="root2">
        <div>
        <div id='form_div'>
          <Checkbox setFunction={() => setCaptain(!captain)} position="Captain" value={captain}/>
          <Checkbox setFunction={() => setLieutenant(!lieutenant)} position="Lieutenant" value={lieutenant}/>
          <Checkbox setFunction={() => setFormerCap(!formerCap)} position="Former Captain" value={formerCap}/>
          <Checkbox setFunction={() => setshinigami(!shinigami)} position="Shinigami" value={shinigami}/>
          <Checkbox setFunction={() => setSub(!sub)} position="Substitute Shinigami" value={sub}/>
          <Checkbox setFunction={() => setfullbring(!fullbring)} position="Fullbring" value={fullbring}/>
          <Checkbox setFunction={() => setespada(!espada)} position="Espada" value={espada}/>
          <Checkbox setFunction={() => setarrancar(!arrancar)} position="Arrancar" value={arrancar}/>
          <Checkbox setFunction={() => setquincy(!quincy)} position="Quincy" value={quincy}/>
          <Checkbox setFunction={() => setsternritter(!sternritter)} position="Sternritter" value={sternritter}/>
          <Checkbox setFunction={() => setSquad0(!Squad0)} position="Squad 0" value={Squad0}/>
          <Checkbox setFunction={() => setother(!other)} position="Other" value={other}/>
          <Checkbox setFunction={() => sethuman(!human)} position="Human" value={human}/>
        </div>

      <div id='content'>
        <ul>
          {(typeof backend === 'undefined')? <p>Loading...</p> :
          backend.map((data, i) => (
            <Link to={data.Character} className='links'>
            <li key={i} className='chars'>
              <div className='img-holder'>
                <img src={data.img} alt={data.Character}></img>
              </div>
              <div className='desc'>
                <h3>{data.Character}</h3>
                <h4>{data.Display_Position}</h4>
              </div>
            </li>
            </Link>
          ))}
        </ul>
      </div>
      </div>
    </div>
    </div>
  )
}

// export default App; // when routing remove the default export 

