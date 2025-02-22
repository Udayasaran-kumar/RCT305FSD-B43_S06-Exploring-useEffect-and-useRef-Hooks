import { useRef } from "react"
import './App.css'
import { useEffect } from "react";


function App() {
  
  const inputref1=useRef(null);
  const inputref2=useRef(null);
  const inputref3=useRef(null);
  const inputref4=useRef(null);
  useEffect(()=>{
  inputref1.current.focus();
},[])
  return (
    <div >
      <input ref={inputref1} onChange={()=>inputref2.current.focus()} type="number"  />
      <input ref={inputref2} onChange={()=>inputref3.current.focus()}type="number" />
      <input ref={inputref3}  onChange={()=>inputref4.current.focus()}type="number"  />
      <input ref={inputref4} type="number"  />

      
    </div>
  )
}

export default App
