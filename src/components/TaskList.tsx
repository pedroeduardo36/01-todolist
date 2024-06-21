import { Trash } from "@phosphor-icons/react";
import styles from "./TaskList.module.css";
import { Checkbox } from "@mui/material";
import { blue, purple } from "@mui/material/colors";

export function TaskList() {
  return (
    <div className={styles.listWrapper}>
      <Checkbox sx={{
        color: blue[200],
        '&.Mui-checked': {
            color: purple[200],
        }
      }}/>
      <p>Aqui vai a descrição da nova task</p>
        <Trash size={18} />
    </div>
  );
}
