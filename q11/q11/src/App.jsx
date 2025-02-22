import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [ismount, setMount] = useState(true);
    function Setter(){ 
    useEffect(()=>{
      console.log("mounted");
      return()=>{
        console.log("Unmounted");
      }
    },[])
    if(ismount){
      return(
        <h2>Mounted</h2>
      )}
      else if(ismount==false){
        return(
          <h2>Unmounted</h2>
        )
      }
    
  
  }
  return (
    <>
      <button onClick={()=>setMount(prev=>!prev)} >{ismount?"UnMount":"Mount"}</button>
      <Setter/>
    </>
  )
}

export default App

