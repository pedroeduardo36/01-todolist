import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import styles from "./App.module.css";
import "./global.css";
import { TaskCounter } from "./components/TasksCounter";
import { TaskList } from "./components/TaskList";
import { EmptyList } from "./components/EmptyList";

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
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.taskWrapper}>
        <NewTask />
        <TaskCounter />
        <div className={styles.taskList}>
          {/* <EmptyList /> */}

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
