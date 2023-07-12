import styles from './Task.module.css'

import { Check, Trash } from '@phosphor-icons/react'


export function Task(){
  return(    
    <>    
    <div className={styles.task}> 

      <button className={styles.checkboxButton}>
        <div className={styles.unchecked}/>        
      </button>

      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo sequi animi ad officia quo voluptates voluptate unde, et modi repudiandae soluta. Eveniet, placeat laudantium minus officia quod quaerat ratione nesciunt?</p>
      
      <button className={styles.trash}>
        <div>
          <Trash size={20}/>
        </div>
      </button>        
      
    </div>   

    <div className={styles.task}> 

      <button className={styles.checkboxButton}>      
        <div className={styles.checked}>
          <Check/>
        </div>
      </button>
      
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo sequi animi ad officia quo voluptates voluptate unde, et modi repudiandae soluta. Eveniet, placeat laudantium minus officia quod quaerat ratione nesciunt?</p>
      
      <button className={styles.trash}>
        <Trash size={20}/>
      </button>        
      
    </div>   

    </>
  
  )
}