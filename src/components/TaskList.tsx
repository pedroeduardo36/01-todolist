import { Trash, Check } from "@phosphor-icons/react";
import styles from "./TaskList.module.css";

interface TaskListProps {
  id: string;
  content: string;
  isChecked: boolean;
  taskDelete: () => void;
  toggleTaskStatus: ({ id, value }: { id: string; value: boolean }) => void;
}

export function TaskList({
  id,
  content,
  isChecked,
  taskDelete,
  toggleTaskStatus,
}: TaskListProps) {
  function handleTaskToggle() {
    toggleTaskStatus({ id, value: !isChecked });
  }

  return (
    <div className={styles.listWrapper}>
      <div className={styles.customCheckboxWrapper}>
        <a className={styles.checkBoxAnchor}>
          <input
            className={styles.customCheckbox}
            type="checkbox"
            onChange={handleTaskToggle}
            checked={isChecked}
          />
          <Check
            size={12}
            color="#ffffff"
            weight="bold"
            className={styles.checkIcon}
            style={{ display: isChecked ? "block" : "none" }}
          />
        </a>
      </div>
      <p className={isChecked ? styles.taskDoneText : styles.taskText}>
        {content}
      </p>
      <button onClick={taskDelete}>
        <Trash size={16} color="#808080" />
      </button>
    </div>
  );
}
