import { useState } from 'react'

import { Header } from './components/Header'
import { AddNewTask } from './components/AddNewTask'
import { Dashboard } from './components/Dashboard'
import { TaskType } from './components/Task'

import './global.css'
import styles from './App.module.css'

export function App() {
  const [tasks, setTasks] = useState<TaskType[]>([])

  function submitTask(taskToAdd: TaskType){
    setTasks([taskToAdd, ...tasks])
  }

  function changeCheck(idTask: string){
    const updatedTasks = tasks.slice()

    const index = updatedTasks.findIndex(task => task.id === idTask)

    if(index !== -1){
      updatedTasks[index].isCompleted = !updatedTasks[index].isCompleted
    }

    setTasks(updatedTasks)
  }

  function deleteTask(idTask: string){
    const tasksWithoutDeletedOne = tasks.filter(task =>{
      return task.id !== idTask
    })
    setTasks(tasksWithoutDeletedOne)    
  }
    
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <AddNewTask onSubmitTask={submitTask}/>
        <Dashboard tasks={tasks} idTaskToChangeCheck={changeCheck} idTaskToDelete={deleteTask}/>
      </div>
    </>
  )
}