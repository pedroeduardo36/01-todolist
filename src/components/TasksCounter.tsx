import styles from './TasksCounter.module.css'

interface TaskCounterProps {
  taskCreatedCounter: number;
  taskCompletedCounter: number;
}

export function TaskCounter({ taskCreatedCounter, taskCompletedCounter }: TaskCounterProps) {
  return (
    <div className={styles.taskWrapper}>
      <div className={styles.taskCount}>
        <div className={styles.taskCreate}>
          <p>Tarefas criadas</p>
          <span>{taskCreatedCounter}</span>
        </div>

        <div className={styles.taskDone}>
          <p>Tarefas Concluídas</p>
          <span>{taskCompletedCounter}</span>
        </div>
      </div>
    </div>
  )
}
