import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'
import { useEffect } from 'react'

function App() {
  const inputref=useRef(0);
useEffect(()=>{
  console.log("Component Mounted");
},[]);
function clicker(){
  inputref.current++;
  console.log(inputref.current);
}
  return (
    <>
      <button onClick={clicker}>Click me!</button>
    </>
  )
}

export default App
