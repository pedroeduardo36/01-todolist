import { Trash } from "@phosphor-icons/react";
import styles from "./TaskList.module.css";
import { Checkbox } from "@mui/material";
import { blue, purple } from "@mui/material/colors";

interface TaskListProps {
  content: string;
}

export function TaskList({ content }: TaskListProps) {
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
      <p>{content}</p>
      <button>
        <Trash size={16} color="#808080" />
      </button>
    </div>
  );
}