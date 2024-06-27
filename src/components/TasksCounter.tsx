
import styles from './TasksCounter.module.css'



export function TaskCounter({ taskCreatedCounter }) {
    return (
        <div className={styles.taskWrapper}>
            {/* Task count section */}
            <div className={styles.taskCount}> 
                <div className={styles.taskCreate}>
                    <p>Tarefas criadas</p>
                    <span>{taskCreatedCounter}</span>
                </div>

                <div className={styles.taskDone}>
                    <p>Tarefas Concluídas</p>
                    <span>0</span>
                </div>
            </div>

            {/* Task list section */}
            <div className={styles.taskList}>
            
            </div>
        </div>
    )
}