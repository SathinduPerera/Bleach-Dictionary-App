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
    if (all) {
          arr.push("All")
        } else {
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
  }, [captain, lieutenant, formerCap, all, other, sub])

  return (
    <div>
      <form>
        <label htmlFor='all'>All Characters</label>
        <input type='checkbox' id='all' onChange={() => setAll(!all)} defaultChecked></input>

        <label htmlFor='Captain'>Captain</label>
        <input type='checkbox' id='Captain' onChange={() => setCaptain(!captain)}></input>

        <label htmlFor='lie'>Lieutenant</label>
        <input type='checkbox' id='lie' onChange={() => setLieutenant(!lieutenant)}></input>

        <label htmlFor='fc'>Former Captain</label>
        <input type='checkbox' id='fc' onChange={() => setFormerCap(!formerCap)}></input>

        <label htmlFor='sub'>Substitute Shinigami</label>
        <input type='checkbox' id='sub' onChange={() => setSub(!sub)}></input>

        <label htmlFor='sub'>Fullbring</label>
        <input type='checkbox' id='sub' onChange={() => setSub(!fullbring)}></input>

        <label htmlFor='sub'>Espada</label>
        <input type='checkbox' id='sub' onChange={() => setSub(!espada)}></input>

        <label htmlFor='sub'>Arrancar</label>
        <input type='checkbox' id='sub' onChange={() => setSub(!arrancar)}></input>

        <label htmlFor='sub'>Quincy</label>
        <input type='checkbox' id='sub' onChange={() => setSub(!quincy)}></input>

        <label htmlFor='sub'>Sternritter</label>
        <input type='checkbox' id='sub' onChange={() => setSub(!sternritter)}></input>

        <label htmlFor='other'>Other</label>
        <input type='checkbox' id='other' onChange={() => setother(!other)}></input>
      </form>
      <ol>
        {(typeof backend === 'undefined')? <p>Loading...</p> :
        backend.map((data, i) => (
          <li key={i}>{data.Character} : {data.Sword} : {data.Position}</li>
        ))}
      </ol>
    </div>
  )
}

export default App