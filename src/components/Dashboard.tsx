import styles from './Dashboard.module.css'

import clipboard from '../assets/Clipboard.png'

export function Dashboard(){
  return(
    <>
      <header className={styles.header}>
        <div className={styles.created}>
          <p>Tarefas criadas</p>
          <span>0</span>
        </div>
        
        <div className={styles.completed}>
          <p>Concluídas</p>
          <span>0</span>
        </div>
      </header>

      <main className={styles.main}>

        <div className={styles.empty}>
          <img src={clipboard} alt="clipboard image" />
          <p className={styles.firstParagraph}>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>

      </main>       
    
    </>
    
  )
}