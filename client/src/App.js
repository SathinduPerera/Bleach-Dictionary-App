import React from 'react'
import { useState, useEffect } from 'react'
import Image from "./Images/logo_finished.png"
import Logo from "./Images/white_logo.png"
import BackToTopLogo from "./Images/BleachUpArrow.png"
import {Link} from "react-router-dom"

export function Shinigami({Shikai, Bankai , BankaiFlag, Shikai_desc, Bankai_desc, Zanpakto_Desc, Shikai_abilities, Bankai_Abilities}) {
  return(
    <div className='contents'>
      <section className="zanpakto">
      <h2 className='titles'>Zanpakto Description</h2>
      <p>{Zanpakto_Desc}</p>
      </section>
          <section className="zanpakto">
            <h2 className='titles'>Shikai - {Shikai}</h2>
            <p>{Shikai_desc}</p>
          </section>
          <section className="zanpakto">
          <h2 className='titles'>Shikai Abilities</h2>
          {(typeof Shikai_abilities === "undefined")? (<p>Abilities not entered</p>) : (
            Shikai_abilities.map((ability, i) => (
              <section key={i}  className='content_sections'>
                <h3><i>{ability.Ability}</i></h3>
                <p>{ability.Ability_Desc}</p>
              </section>
            ))
          )}
          </section>
        <section className="zanpakto">
          <div className={BankaiFlag}>
            <h2 className='titles'>Bankai - {Bankai}</h2>
            <p>{Bankai_desc}</p>
            <section className="zanpakto">
              <h2 className='titles'>Bankai Abilities</h2>
              {(typeof Bankai_Abilities === "undefined")? (<p>Abilities not entered</p>) : (
                Bankai_Abilities.map((ability, i) => (
                  <section key={i}  className='content_sections'>
                    <h3><i>{ability.Ability}</i></h3>
                    <p>{ability.Ability_Desc}</p>
              </section>
            ))
          )}
          </section>
          </div>
        </section>
    </div>
  )

}

export function Arrancar({Resurrección, Resurrección_Desc, Realeased_Desc, Resurrección_abilities}) {
  return(
    <div className='contents'>
    <section className="zanpakto">
      <h2 className='titles'>Resurrección Description</h2>
      <p>{Resurrección_Desc}</p>
    </section>
    <section className="zanpakto">
      <div>
        <h2 className='titles'>Resurrección - {Resurrección}</h2>
        <p>{Realeased_Desc}</p>
      </div>
    </section>
    <div>
      <h2 className='titles'>{Resurrección} Abilities</h2>
      {typeof Resurrección_abilities === 'undefined'? <h3>Abilities not entered yet</h3> : 
      Resurrección_abilities.map((ability, i) => (
        <section key={i}  className='content_sections'>
          <h3><i>{ability.Ability}</i></h3>
          <p>{ability.Ability_Desc}</p>
        </section>
      ))}
    </div>
  </div>
  )

}

export function Quincy({Schrift, Schrift_Abilities, Schrift_desc}) {
  return(
    <>
    <div className='contents'>
      <h2 className='titles'>Schrift Description</h2>
      <p>{Schrift_desc}</p>
      <div>
        <h2 className='titles'>Schrift - {Schrift}</h2>
          {typeof Schrift_Abilities === "undefined"? <p>Abilities not defined</p> : 
          Schrift_Abilities.map((ability, i) => (
            <section key={i}  className='content_sections'>
            <h3><i>{ability.Ability}</i></h3>
            <p>{ability.Ability_Desc}</p>
          </section>
          ))}
      </div>
      </div>
     </>
  )
}

// function backtoTop() {
//   return (
//     <h1>
//       <img></img>
//     </h1>
//   )
// }

export function Fullbring({Fullbring, Fullbring_Desc, Fullbring_Abilities}) {
  return(
    <div className='contents'>
      <section className="zanpakto">
        <div>
          <h2 className='titles'>Fullbring - {Fullbring}</h2>
          <p>{Fullbring_Desc}</p>
        </div>
      </section>
      <div>
        <h2 className='titles'>{Fullbring} Abilities</h2>
        {typeof Fullbring_Abilities === 'undefined'? <h3>Abilities not entered yet</h3> : 
        Fullbring_Abilities.map((ability, i) => (
          <section key={i}  className='content_sections'>
            <h3><i>{ability.Ability}</i></h3>
            <p>{ability.Ability_Desc}</p>
          </section>
        ))}
      </div>
     </div>
  )
}

export function Zanpakto({Shikai, Bankai}){
  return(
    <section>
    <h3>Zanpakutō</h3>
    <ol>
      <li>Shikai - {Shikai}</li>
      <li>Bankai - {Bankai}</li>
    </ol>
  </section>
  )
}

export function FullbringPower({Power, Fullbring}){
  return(
    <section>
    <h3>Fullbring</h3>
    <ol>
      <li>Fullbring - {Fullbring}</li>
    </ol>
  </section>
  )
}

export function Resurrección({Resurrección}){
  return(
    <section>
    <h3>Resurrección</h3>
    <ol>
      <li>Resurrección - {Resurrección}</li>
    </ol>
  </section>
  )
}

export function Schrift({Schrift}){
  return(
    <section>
    <h3>Schrift</h3>
    <ol>
      <li>Schrift - {Schrift}</li>
    </ol>
  </section>
  )
}



export function Descriptions({Character, Position, Image, display_comp, display_abilities, desc, appearence, personality, abilities, color, characterList}){

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  })

  return (
    <>
    <div id='char_root'>
      <div id="content_div" className='child' style={{backgroundColor:color}}>
        <section className='titles' id="title">
          <h1 className='desc_title'>{Character}<br/><span id="sub_title">{Position}</span></h1>
        </section>
        <div className='contents'>
          <h2 className='titles'>Description</h2>
          <p>{desc}</p>
        </div>
        <div className='contents'>
          <h2 className='titles'>Appearance</h2>
          <p>{appearence}</p>
        </div>
        <div className='contents'>
          <h2 className='titles'>Personality</h2>
          <p>{personality}</p>
        </div>
        <div className='contents'>
          <h2 className='titles'>Abilities</h2>
          <div>
          {(typeof abilities === "undefined")? (<p>Abilities not entered</p>) : (
            abilities.map((ability, i) => (
              <section key={i} className='content_sections'>
                <h3><i>{ability.Ability}</i></h3>
                <p>{ability.Ability_Desc}</p>
              </section>
            ))
          )}
          </div>
        </div>
        <div>
          {display_comp}
        </div>
        </div>
        <div id="BackToHome">
            <Link to={"/"} className='links' id='homeLink'>
                <div id='homeImgDiv'>
                  <img src={Logo} alt='Home Logo'/>
                </div>
                <div>
                <p>Home</p>
                </div>
            </Link>
        </div>
        <div id="BackToTop" style={{backgroundColor:color}} onClick={() => {
                  window.scrollTo({top: 0, left: 0, behavior: "smooth"})
                }}>
                <div id='UpImgDiv'>
                  <img src={BackToTopLogo} alt='Home Logo'/>
                </div>
        </div>
        <div>
        <div className='side_div child' style={{backgroundColor:color}}>
          <div id='imgHolder'>
            <img src={Image} alt={Character}/>
          </div>
          <section className='chars_attributes' id="physical">
            <h3>Physical Attributes</h3>
            <ol>
              <li>Gender - </li>
              <li>Height - </li>
              <li>Weight - </li>
              <li>Eye Color - </li>
            </ol>
          </section>
          <>{display_abilities}</>
          <section>
            <h3>Professional Positions</h3>
            <ol>
              <li>Current Position</li>
              <li>Previous Position</li>
              <section id={"Is" + Position.replace(" ", "")} className='SquadSection'>
                <li>Current Squad</li>
                <li>Previous Squad</li>
              </section>
            </ol>
          </section>
          <section>
            <h3>Relationships</h3>
            <ol>
              <li>Family</li>
              <li>Friends</li>
            </ol>
          </section>
        </div>
        <div className='side_div child' style={{backgroundColor:color}}>
            <div id='other_chars_title'><h3 >Other Characters</h3></div>
            {(typeof characterList === "undefined")? <h2>No characters to Display</h2> : 
            characterList.map((element, i) => (
              <Link key={i} to={`/${element.Character}`} className='links'>
              <div className='route_div'>
              <div className='Route_img_div'>
                <img src={element.img} alt={element.Character}/>
              </div>
              <div className='route_name'>
              <p>{element.Character}</p>
              </div>
              </div>
              </Link>
            ))}
        </div>
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
            <Link key={i} to={data.Character} className='links'>
            <li className='chars'>
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

