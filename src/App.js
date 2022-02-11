
import react, { useState } from 'react' //preciso sempre fazer isso

import Tasks from "./componentes/Tasks";
import './App.css'

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
      }


    ])

    return (
      <>
          <div className='container'>
            <Tasks tasks={tasks} />  
          </div> 
      </>
    )
   
}

export default App;