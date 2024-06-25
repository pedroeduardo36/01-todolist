import { Header } from "./components/Header";
import styles from "./App.module.css";
import "./global.css";
import { TaskCounter } from "./components/TasksCounter";
import { TaskList } from "./components/TaskList";
import { EmptyList } from "./components/EmptyList";
import { PlusCircle } from "@phosphor-icons/react";
import { useState } from "react";



export function App() {
  const [tasks, setTasks] = useState(["Estado inicial do meu useState"]);
  const [newTask, setNewTask] = useState('')

  function handleCreateNewTask() {

    if (newTask.trim() === '') {
      return;
    }

    setTasks([...tasks, newTask]);
    setNewTask('')
  }

  return (
    <div className={styles.wrapper}>
      <Header />

      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleCreateNewTask} className={styles.button}>
          Criar
          <PlusCircle size={16} />
        </button>
      </div>

      <div className={styles.taskWrapper}>
        <TaskCounter />
        <div className={styles.taskList}>
          {tasks.length > 0 ? (
            <>
              {tasks.map((task) => {
                // return <TaskList key={task.id} name={task.name} />;
                return <TaskList content={task} />;
              })}
            </>
          ) : (
            <EmptyList />
          )}
        </div>
      </div>
    </div>
  );
}
