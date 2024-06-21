import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import styles from './App.module.css'
import './global.css'
import { Tasks } from './components/Tasks'

export function App() {

  return (
    <div className={styles.wrapper}>
      <Header />
    <div className={styles.taskWrapper}>
      <NewTask />
      <Tasks />
    </div>
      
    </div>
  )
}
