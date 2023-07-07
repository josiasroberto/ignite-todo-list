import { Header } from './components/Header'
import { AddNewTask } from './components/AddNewTask'

import './global.css'
import styles from './App.module.css'
import { Dashboard } from './components/Dashboard'
export function App() {
  return (
    <>
     <Header/>
     <div className={styles.wrapper}>
      <AddNewTask/>
      <Dashboard/>     
     </div>
    </>
  )
}