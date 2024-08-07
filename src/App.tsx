import { Header } from "./components/Header";
import styles from "./App.module.css";
import "./global.css";
import { TaskCounter } from "./components/TasksCounter";
import { TaskList } from "./components/TaskList";
import { EmptyList } from "./components/EmptyList";
import { PlusCircle } from "@phosphor-icons/react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export interface ITask {
  id: string;
  content: string;
  isChecked: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newTask, setNewTask] = useState("");

  function handleCreateNewTask() {
    if (newTask.trim() === "") {
      return;
    }

    const newTaskObject: ITask = {
      id: uuidv4(),
      content: newTask,
      isChecked: false
    };

    setTasks((state) => [...state, newTaskObject]);
    setNewTask("");
  }

  function handleDeleteTask(id: string) {
    if (!confirm("Deseja mesmo deletar essa task?")) {
      return;
    }

    const filteredTask = tasks.filter((task) => task.id !== id);
    setTasks(filteredTask);
  }

  function handleToggleTask({ id, value }: { id: string; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }
      return task
    })

    setTasks(updatedTasks)
  }

  const completedTasks = tasks.filter(task => task.isChecked).length;

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
        <TaskCounter taskCreatedCounter={tasks.length} taskCompletedCounter={completedTasks} />
        <div className={styles.taskList}>
          {tasks.length > 0 ? (
            <>
              {tasks.map((task) => {
                return (
                  <TaskList
                    taskDelete={() => handleDeleteTask(task.id)}
                    key={task.id}
                    id={task.id}
                    content={task.content}
                    isChecked={task.isChecked}
                    toggleTaskStatus={handleToggleTask}
                  />
                );
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
