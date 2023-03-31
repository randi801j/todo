import React,{useState} from "react"
import './App.css';

function App() {
  const [newToDo,setNewToDo]= useState("");
  const [toDos, setToDos]= useState ([]);



  const submitNewToDo = (event)=>{
    event.preventDefault();
    if (newToDo.length==0){
      return;
    }

    const toDoItem={
      text: newToDo, 
      complete: false
    };
    setToDos([... toDos,toDoItem ]);
    setNewToDo("");

  }
  const deleteToDo=(delindex)=>{
    const filterToDos= toDos.filter((todo,index)=>{
      return index != delindex;
    });

    setToDos (filterToDos);
  }
  const toDoComplete= (indx)=>{
    const updateToDo=toDos.map((toDo,index) =>{
      if (indx == index){
        toDo.complete =! toDo.complete;
      }
      return toDo;
    });
    setToDos(updateToDo);
  }
  return (
    <div className="App">
      <form onSubmit={(event)=>{
        submitNewToDo(event);
      }}>
      <input onChange={(event)=>{
        setNewToDo(event.target.value);
      }} type="text" value={newToDo}/>
      <div>
        <button>Add</button>
      </div>
      </form>

      {
        toDos.map((toDo,index) =>{
          return (
            <div key={index}>
            <span>{toDo.text}</span>
            <input onChange={(event)=>{
              toDoComplete(index);
            }} classname ="strike" checked={toDo.complete} type="checkbox"/>
            <button onClick={(event)=>{
              deleteToDo(index);
            }}>Delete</button>
          </div>
          );
        })
      }
    </div>
  );
}
export default App;
