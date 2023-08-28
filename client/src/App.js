import React from 'react'
import { useState, useEffect } from 'react'

function App() {
  const [backend, setbackend] = useState([{}])

  // useEffect(() => {
  //   fetch("/api").then(
  //     (response) => response.json()
  //   ).then((data) => setbackend(data))
  // }, [])

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
      <ol>
        {(typeof backend === 'undefined')? <p>Loading...</p> :
        backend.map((data, i) => (
          <li id={i}>{data.Character} : {data.Sword}</li>
        ))}
      </ol>
    </div>
  )
}

export default App