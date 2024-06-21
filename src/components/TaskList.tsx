import { Trash } from "@phosphor-icons/react";
import styles from "./TaskList.module.css";
import { Checkbox } from "@mui/material";
import { blue, purple } from "@mui/material/colors";

interface TaskListProps {
  name: string;
}

export function TaskList({ name }: TaskListProps) {
  return (
    <div className={styles.listWrapper}>
      <Checkbox
        sx={{
          color: blue[200],
          "&.Mui-checked": {
            color: purple[200],
          },
        }}
      />
      <p>{name}</p>
      <button>
        <Trash size={16} color="#808080" />
      </button>
    </div>
  );
}