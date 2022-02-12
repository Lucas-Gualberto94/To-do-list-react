
import react, { useState } from 'react' //preciso sempre fazer isso

import Tasks from "./componentes/Tasks";
import AddTask from './componentes/AddTask';
import './App.css';

const App = () => {
    const [tasks, setTasks] = useState([
      {
        id: '1',
        title: 'Estudar Programção',
        completed: false, 
      },
      {
        id: '2',
        title: 'Ler livros',
        completed: true,
      },


    ]);

    const handleTaskAddition = (taskTitle) => {
      const newTasks = [...tasks, {
        title: taskTitle,
        id: Math.random(10),
        completed: false,
      }]

      setTasks(newTasks);
    }

    return (
      <>
          <div className='container'>
            <AddTask handleTaskAddition={handleTaskAddition} />
            <Tasks tasks={tasks} />  
          </div> 
      </>
    )
   
}

export default App;