import React from 'react'
import { useState, useEffect } from 'react'

function App() {
  const [backend, setbackend] = useState([{}])

  const [captain, setCaptain] = useState(false);
  const [lieutenant, setLieutenant] = useState(false);
  const [formerCap, setFormerCap] = useState(false);
  const [sub, setSub] = useState(false);
  const [other, setother] = useState(false);
  const [fullbring, setfullbring] = useState(false);
  const [Squad0, setSquad0] = useState(false);
  const [arrancar, setarrancar] = useState(false);
  const [espada, setespada] = useState(false);
  const [quincy, setquincy] = useState(false);
  const [sternritter, setsternritter] = useState(false);

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
        
    return arr
  }

  function Checkbox({setFunction, position, value}) {
    return (
      <div className='options'>
          <label htmlFor={position}>{position}</label>
          <input type='checkbox' id={position} onChange={setFunction} checked={value}></input>
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
  }, [captain, lieutenant, formerCap, other, sub, fullbring, espada, arrancar, quincy, Squad0, sternritter])

  return (
    <div>
      <h1 className='title'>BLEACH<br/><span>Character Information</span></h1>

      <div id="root2">
        <div id='form_div'>
          <Checkbox setFunction={() => setCaptain(!captain)} position="Captain" value={captain}/>
          <Checkbox setFunction={() => setLieutenant(!lieutenant)} position="Lieutenant" value={lieutenant}/>
          <Checkbox setFunction={() => setFormerCap(!formerCap)} position="Former Captain" value={formerCap}/>
          <Checkbox setFunction={() => setSub(!sub)} position="Substitute Shinigami" value={sub}/>
          <Checkbox setFunction={() => setfullbring(!fullbring)} position="Fullbring" value={fullbring}/>
          <Checkbox setFunction={() => setespada(!espada)} position="Espada" value={espada}/>
          <Checkbox setFunction={() => setarrancar(!arrancar)} position="Arrancar" value={arrancar}/>
          <Checkbox setFunction={() => setquincy(!quincy)} position="Quincy" value={quincy}/>
          <Checkbox setFunction={() => setsternritter(!sternritter)} position="Sternritter" value={sternritter}/>
          <Checkbox setFunction={() => setSquad0(!Squad0)} position="Squad 0" value={Squad0}/>
          <Checkbox setFunction={() => setother(!other)} position="Other" value={other}/>
        </div>

      <div id='content'>
        <ul>
          {(typeof backend === 'undefined')? <p>Loading...</p> :
          backend.map((data, i) => (
            <li key={i} className='chars'>
              <div className='img-holder'>
                <img src={data.img} alt={data.Character}></img>
              </div>
              <div className='desc'>
                <h3>{data.Character}</h3>
                <h4>{data.Display_Position}</h4>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  )
}

export default App;