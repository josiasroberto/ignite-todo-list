import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import styles from './AddNewTask.module.css'
import plusLogo from '../assets/plus.svg'

interface TaskProps{  
  onSubmitTask: (taskToSend: object) => void;
}

export function AddNewTask({onSubmitTask}: TaskProps){
  
  const [newTask, setNewTask] = useState('')

  function handleCreateNewTask(event: FormEvent){
    event.preventDefault()

    const taskToSend = {
      id: uuidv4(),
      content: newTask,
      isCompleted: false
    }

    onSubmitTask(taskToSend)  
    setNewTask('')    
  }
  
  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity('Este campo é obrigatório!')
  }

  const isNewTaskEmpty = newTask.length === 0

  return(
    <form onSubmit={handleCreateNewTask} className={styles.form}>

      <input 
        type="text" 
        placeholder='Adicione uma nova tarefa' 
        value={newTask}
        onChange={handleNewTaskChange}
        onInvalid={handleNewTaskInvalid}
        required
      />
      <button type='submit' disabled={isNewTaskEmpty}>
        Criar
        <img src={plusLogo} alt="plus logo"/>
      </button>
    </form>
  )
}