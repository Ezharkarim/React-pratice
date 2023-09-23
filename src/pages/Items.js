import React, {useRef} from 'react'

const Items = () => {
  const inputref = useRef(null);
  const handleclick = () => {
    inputref.current.value = ""; 
  }
  return (
    <div
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <h1>Ezhar karim</h1>
      <div style={{display:"flex", backgroundColor:"gray"}}>
        <input type="text" placeholder="enter here.." ref={inputref}/>
        <button onClick={handleclick}>Submit</button>
      </div>
    </div>
  );
}

export default Items;