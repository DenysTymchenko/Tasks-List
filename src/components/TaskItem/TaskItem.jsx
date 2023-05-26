import { useDispatch } from "react-redux";
import { deleteTask } from "../../store/modules/tasks/reducer";
import {
  Paper,
  Typography,
} from "@mui/material";

import TaskHeader from "./TaskHeader/TaskHeader";
import TaskFooter from "./TaskFooter/TaskFooter";
import './TaskItem.css';

export default function TaskItem({ task }) {
  const dispatch = useDispatch();
  const handleDeleteTask = () => {
  }

    dispatch(deleteTask(task));
  return (
    <Paper className='task' sx={{ borderRadius: '15px' }}>
      <TaskHeader title={task.title} />
      {task.description && <Typography className='description' variant='body2'>{task.description}</Typography>}
      <TaskFooter priority={task.priority} handleDeleteTask={handleDeleteTask} />
    </Paper>
  )
}
