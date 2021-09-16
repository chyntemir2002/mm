import { useState } from 'react'
import Header from '../Header/Header';
import TaskList from '../TaskList/TaskList';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

import style from './App.module.scss'

function App() {
  const [inpValue, setInpValue] = useState('')
  const [task, setTassk] = useState([])

  function changeMainInput (event) {
    setInpValue(event)
  }

  function saveDataMain () {
    if (inpValue) {
      const newObj = {
      id: Date.now(),
      title: inpValue,
      status: false
    }
    setTassk([...task, newObj])
    setInpValue('')
  }else alert ('заполните поле...')
}


  function taskDelet (id) {
    setTassk(task.filter(item => item.id !== id ))
  }

  function  changeStatus (id) {
    let newTask = task.map(item => {
      if (item.id === id) {
        item.status = !item.status
      }
return item
    })
    setTassk(newTask)
  }

 return (
   <>
    <Header />
    <div className={style.container}>
      <div>
        <Input 
          value={inpValue}
          setInpValue={setInpValue}
        />
        <Button
          onClick={saveDataMain}
        >
          Сохранить
        </Button>
      </div>
      <TaskList 
        task={task}
        taskDelet={taskDelet}
        changeStatus={changeStatus}
        />
    </div>
   </>
 )
}

export default App;
