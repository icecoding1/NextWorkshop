import React from 'react'
import { useState } from 'react';


export default function Home() {
  // const text = "hello";
  const [coust, setNumber] = useState(0);
  const [text, setText] = useState("hello");

  const set = () => {
    setNumber(coust + 1)
    setText(text = "hi")
  }

  return (
    <div align="center">
      <div>
        <button onClick={set} className="btn btn-primary"  >Button</button>
        <h1  > test :{coust}</h1>
        <h1  > test text :{text}</h1>
      </div>
    </div>
  )

}












