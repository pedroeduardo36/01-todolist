import { PlusCircle } from "@phosphor-icons/react";
import styles from './NewTask.module.css' 


export function NewTask() {

    function handleCreateNewTask() {

    }

    return (
        <div className={styles.inputWrapper}>
            <input className={styles.input} placeholder="Adicione uma nova tarefa"/>
            <button onClick={handleCreateNewTask} className={styles.button}>
                Criar
                <PlusCircle size={16}/>
            </button>
        </div>
    )
}