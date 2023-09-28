import { useState } from "react";
import '../styles/todo.css'
export function Persone() {
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState([]);

  const handelChangeNom = (e) => {
    setName(e.target.value);
  };
  const handleClick = () => {
    if(name !== ''){
      setTasks(tasks.concat(name));
    setName("");
    }
    
    
  };
  return (
    <div className="container">
      <div className="tasks">
        <input
          type="text"
          placeholder="Ajouter un element a la liste"
          value={name}
          onChange={handelChangeNom}
          className="tasksinput"
        />
      </div>
      <div className="tasksContain">
        <button onClick={handleClick} className="btn">Ajouter</button>
        <ul className="list">
          {tasks.map((task, index) => (
            <li key={index} className="listsub">{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
