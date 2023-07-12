import { useState } from 'react'

import { Header } from './components/Header'
import { AddNewTask } from './components/AddNewTask'
import { Dashboard } from './components/Dashboard'

import './global.css'
import styles from './App.module.css'
export function App() {
  const [tasks, setTasks] = useState<object[]>([])

  function submitTask(taskToAdd: object){
    setTasks([taskToAdd, ...tasks])
  }
    // console.log(tasks)
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <AddNewTask onSubmitTask={submitTask}/>
        <Dashboard/>     
      </div>
    </>
  )
}