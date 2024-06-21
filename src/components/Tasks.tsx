import { ClipboardText } from '@phosphor-icons/react'
import styles from './Tasks.module.css'

export function Tasks() {
    return (
        <div className={styles.taskWrapper}>
            {/* Task count section */}
            <div className={styles.taskCount}> 
                <div className={styles.taskCreate}>
                    <p>Tarefas criadas</p>
                    <span>0</span>
                </div>

                <div className={styles.taskDone}>
                    <p>Tarefas Concluídas</p>
                    <span>0</span>
                </div>
            </div>

            {/* Task list section */}
            <div className={styles.taskList}>
                <ClipboardText size={56}/>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}