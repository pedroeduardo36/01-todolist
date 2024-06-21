import { ClipboardText } from "@phosphor-icons/react";
import styles from "./EmptyList.module.css";

export function EmptyList() {
  return (
    <div className={styles.emptyWrapper}>
      <ClipboardText size={56} />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p className={styles.emptyDescription}>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}
