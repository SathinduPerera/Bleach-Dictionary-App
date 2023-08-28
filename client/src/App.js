import React from 'react'
import { useState, useEffect } from 'react'

function App() {
  const [backend, setbackend] = useState([{}])

  const [all, setAll] = useState(false);
  const [captain, setCaptain] = useState(false);
  const [lieutenant, setLieutenant] = useState(false);
  const [formerCap, setFormerCap] = useState(false);
  const [sub, setSub] = useState(false);
  const [other, setother] = useState(false);

  // useEffect(() => {
  //   fetch("/api").then(
  //     (response) => response.json()
  //   ).then((data) => setbackend(data))
  // }, [])

  useEffect(() => {
    console.log(`
    All : ${all}
    Captain : ${captain}
    Lieutenant : ${lieutenant}
    Former Captain : ${formerCap}
    Substitute Soul Reaper : ${sub}
    Other : ${other}`)
    const userdata = {
      all : all, 
      captain : captain, 
      lieutenant : lieutenant,
      formerCap : formerCap, 
      sub : sub, 
      other : other
    }
    fetch("api/post", {
      method : "post",
      headers : {"Content-Type" : "application/json"},
      body: JSON.stringify(userdata)
    }).then((response) => response.json()).then((data) => {console.log(data.message)})
  }, [all, captain, formerCap, sub, other, lieutenant])

  useEffect(() => {
    fetch("/api").then(
      (response) => (response.json())
    ).then(
      (data) => {
        setbackend(data)
      }
    )
  }, [])

  return (
    <div>
      <form>
        <label htmlFor='all'>All Characters</label>
        <input type='checkbox' id='all' onChange={() => setAll(!all)}></input>

        <label htmlFor='Captain'>Captain</label>
        <input type='checkbox' id='Captain' onChange={() => setCaptain(!captain)}></input>

        <label htmlFor='lie'>Lieutenant</label>
        <input type='checkbox' id='lie' onChange={() => setLieutenant(!lieutenant)}></input>

        <label htmlFor='fc'>Former Captain</label>
        <input type='checkbox' id='fc' onChange={() => setFormerCap(!formerCap)}></input>

        <label htmlFor='sub'>Substitute Shinigami</label>
        <input type='checkbox' id='sub' onChange={() => setSub(!sub)}></input>

        <label htmlFor='other'>Other</label>
        <input type='checkbox' id='other' onChange={() => setother(!other)}></input>
      </form>
      <ol>
        {(typeof backend === 'undefined')? <p>Loading...</p> :
        backend.map((data, i) => (
          <li key={i}>{data.Character} : {data.Sword}</li>
        ))}
      </ol>
    </div>
  )
}

export default App