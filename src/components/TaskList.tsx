import { Trash } from '@phosphor-icons/react'
import styles from './TaskList.module.css'

export function TaskList() {
    return (
        <div className={styles.listWrapper}>
            <p>Aqui vai a descrição da nova task</p>
            <Trash size={14}/>
        </div>
    )
}