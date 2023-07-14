import styles from './Dashboard.module.css'

import clipboard from '../assets/Clipboard.png'
import { Task, TaskType } from './Task'

interface DashboardProps{
  tasks: TaskType[];
  idTaskToChangeCheck: (id: string) => void;
  idTaskToDelete: (id: string) => void;
}

export function Dashboard({tasks, idTaskToChangeCheck, idTaskToDelete}: DashboardProps){

  function completedTasks(){
    const completed = tasks.filter((task) => task.isCompleted).length

    return tasks.length === 0 ? 0 : `${completed} de ${tasks.length}`
  }

  function changeCheckTask(taskToChangeCheck: string){
    idTaskToChangeCheck(taskToChangeCheck)
  }

  function deleteTask(taskToDelete: string){
    idTaskToDelete(taskToDelete)
  }

  return(
    <>
      <header className={styles.header}>
        <div className={styles.created}>
          <p>Tarefas criadas</p>
          <span>{tasks.length}</span>
        </div>

        <div className={styles.completed}>
          <p>Concluídas</p>
          <span>{completedTasks()}</span>
        </div>
      </header>

      <main className={styles.main}>

      {
        tasks.length === 0 ?

        <div className={styles.empty}>
          <img src={clipboard} alt="clipboard image" />
          <p className={styles.firstParagraph}>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>

        :
        tasks.map(task =>{
          return(
            <Task
              key={task.id}
              task={task}
              onChangeCheckTask={changeCheckTask}
              onDeleteTask={deleteTask}
            />

          )
        })

      }

      </main>

    </>

  )
}