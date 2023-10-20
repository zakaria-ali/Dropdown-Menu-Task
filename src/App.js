import './App.css';
import axios from 'axios';
import ToDoDropdownMenu from './Components/ToDoDropdownMenu';
import ToDoMenuItem from './Components/ToDoMenuItem';
import { useEffect, useState } from 'react';

function App() {
  const [toDo,setToDo] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
      setToDo(response.data)
    })
    .catch(err => {
      console.log(err)
    })
  },[])
  
  if (toDo === null) {
    return <div>Loading...</div>;
  }
  else{  
    return (
      <div className="App">
        <h1>Tasks Dropdown Menu</h1>
        <ToDoDropdownMenu>
          {toDo.map(task => (
            <ToDoMenuItem 
              key={task.id}
              onClick={() => alert(`${task.completed ? 'Task is Completed' : 'Task is Not Completed'}`)}
            >
              {task.title}
            </ToDoMenuItem>
          ))}
        </ToDoDropdownMenu>
      </div>
    );
  }
}

export default App;
