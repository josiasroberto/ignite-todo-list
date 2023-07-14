import styles from './Task.module.css'

import { Check, Trash } from '@phosphor-icons/react'

export interface TaskType{
  id: string;
  content: string;
  isCompleted: boolean;
}

interface TaskProps{
  task: TaskType;
  onChangeCheckTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function Task({task, onChangeCheckTask, onDeleteTask}: TaskProps){
  function handleTaskCompleted(){
    onChangeCheckTask(task.id)
  }

  function handleDeleteTask(){
    onDeleteTask(task.id)
  }

  return(    

  <div className={styles.task}> 

    <button onClick={handleTaskCompleted} className={styles.checkboxButton}>      
      {
        task.isCompleted ?
          <div className={styles.checked}>
            <Check/>
          </div>
        :
        <div className={styles.unchecked}/>
      }
    </button>

    <p className={task.isCompleted ? styles.paragraphChecked : '' }>
      {task.content}
    </p>

    <button onClick={handleDeleteTask} className={styles.trash}>
      <div>
        <Trash size={20}/>
      </div>
    </button>        

  </div> 
  )
}