import { func } from "prop-types";
import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [toDos,setToDos]=useState([])
  const [toDo,setToDo]=useState("")
  function handleRemove(toDo){
    const newToDos=toDos.filter((item)=>item.toDo!==toDo);
    setToDos(newToDos)
  }
  return(
    <div className="app">
      <div className="container">
      <p className="title">REACT TODO APP</p>
      <div className="main">
      <input 
        id="myInput"
        className="input-task" 
        value={toDo}
        placeholder=".............."
        type="text"
        onChange={(e)=>{
          setToDo(e.target.value)
        }}
        >
      </input>
      <button 
        id="myButton"
        onClick={()=>{
          setToDos([...toDos,{toDo:toDo, id:toDos.length+1}])
          setToDo("")
          triggerClick()
        }} 
        className="add-btn">Add
        </button>
        <p className="pTag">{toDos.length ? "": "No Task List..."}</p>
        <footer className="footer">
        <ul className="ul-footer">
          {toDos.map((item,index)=>{
            return(
              <div className="div-footer">
              <li className="li-footer" key={index} id="text-area">{item.toDo}
              </li>
              <button className="delete-btn" onClick={(e)=>{
                handleRemove(item.toDo)
              }}>Delete</button>
              </div>
            )
          })}
        </ul>
        </footer>
      </div>
        </div>
      </div>
  )
}
function triggerClick(){
  var input=document.getElementById("myInput")
  input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("myButton").click();
    }
  });
}
export default App;
