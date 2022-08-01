import React from 'react'
import {useState, useEffect} from 'react';

export default function useEffects() {

  const [text, setText] = useState('welcome');

  useEffect(() => {
    setText("start text");
  }, []);

  return (
    <div>
        <p>Text : {text}</p>
        <input onChange={(e) => setText(e.target.value)} value={text} />
    </div>
  )

}