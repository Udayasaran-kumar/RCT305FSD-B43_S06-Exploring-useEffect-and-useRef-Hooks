import { useRef } from 'react'

function App() {
  const inputref=useRef(null);
  function focus(){    
      inputref.current.focus();    
  }

  return (
    <>
    <input ref={inputref}type="text"  />
    <button onClick={focus}>click to focus</button>
      
    </>
  )
}

export default App
