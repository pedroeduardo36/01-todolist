import styles from './Header.module.css'
import toDoLogo from '../assets/todo-logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={toDoLogo}/>
            <div>
                <strong className={styles.to}>to</strong>
                <strong className={styles.do}>do</strong>
            </div>
        </header>
    )
}