import { Header } from "./components/Header";
import styles from "./App.module.css";
import "./global.css";
import { TaskCounter } from "./components/TasksCounter";
import { TaskList } from "./components/TaskList";
import { EmptyList } from "./components/EmptyList";
import { PlusCircle } from "@phosphor-icons/react";
import { useState } from "react";

const tasks = [
  {
    id: 1,
    name: "Array de post",
  },
  {
    id: 2,
    name: "Array de 2",
  },
  {
    id: 3,
    name: "Vasco da gama",
  },
  {
    id: 4,
    name: "Eu amo a Júlia",
  },
];

export function App() {
  // const [tasks, setTasks] = useState([''])


  function handleCreateNewTask() {
    
  }

  return (
    <div className={styles.wrapper}>
      <Header />

      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          placeholder="Adicione uma nova tarefa"
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
                return <TaskList key={task.id} name={task.name} />;
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
