import React from 'react'
import { useState, useEffect } from 'react'

function App() {
  const [backend, setbackend] = useState([{}])

  const [all, setAll] = useState(true);
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
  const [sorted, setsorted] = useState(false);

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
  }, [captain, lieutenant, formerCap, all, other, sub, fullbring, espada, arrancar, quincy, Squad0, sternritter])

  return (
    <div>
      <h1 className='title'>BLEACH<br/><span>Character Information</span></h1>

      <div id="root2">
        <form id='form_div'>
          <label htmlFor='Captain'>Captain</label>
          <input type='checkbox' id='Captain' onChange={() => setCaptain(!captain)}></input>

          <label htmlFor='lie'>Lieutenant</label>
          <input type='checkbox' id='lie' onChange={() => setLieutenant(!lieutenant)}></input>

          <label htmlFor='fc'>Former Captain</label>
          <input type='checkbox' id='fc' onChange={() => setFormerCap(!formerCap)}></input>

          <label htmlFor='sub'>Substitute Shinigami</label>
          <input type='checkbox' id='sub' onChange={() => setSub(!sub)}></input>

          <label htmlFor='full'>Fullbring</label>
          <input type='checkbox' id='full' onChange={() => setfullbring(!fullbring)}></input>

          <label htmlFor='esp'>Espada</label>
          <input type='checkbox' id='esp' onChange={() => setespada(!espada)}></input>

          <label htmlFor='arr'>Arrancar</label>
          <input type='checkbox' id='arr' onChange={() => setarrancar(!arrancar)}></input>

          <label htmlFor='quin'>Quincy</label>
          <input type='checkbox' id='quin' onChange={() => setquincy(!quincy)}></input>

          <label htmlFor='stern'>Sternritter</label>
          <input type='checkbox' id='stern' onChange={() => setsternritter(!sternritter)}></input>

          <label htmlFor='s0'>Squad 0</label>
          <input type='checkbox' id='s0' onChange={() => setSquad0(!Squad0)}></input>

          <label htmlFor='other'>Other</label>
          <input type='checkbox' id='other' onChange={() => setother(!other)}></input>
        </form>
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