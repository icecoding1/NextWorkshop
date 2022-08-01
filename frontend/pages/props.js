import React from 'react'

export default function props() {

  function Welcome(props) {
    return <h1>hello {props.name}</h1>
  }
  return (
    <div>    
      <Welcome name="hi" ></Welcome>
    <Welcome name="hello" ></Welcome>
    </div>
  )
}
