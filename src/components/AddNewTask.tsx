import styles from './AddNewTask.module.css'

import plusLogo from '../assets/plus.svg'

export function AddNewTask(){
  return(
    <form className={styles.form}>
      <input type="text" placeholder='Adicione uma nova tarefa'/>
      <button type='submit'>
        Criar
        <img src={plusLogo} alt="plus logo"/>
      </button>
    </form>
  )
}