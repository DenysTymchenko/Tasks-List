import {
  Checkbox,
  Container,
  Typography,
} from "@mui/material";
import './TaskHeader.css';
import EditTask from "../../EditTask/EditTask";

export default function TaskHeader({ task }) {
  return (
    <Container className='task-header'>
      <Checkbox />
      <Typography className='title' variant='h4'>{task.title}</Typography>
      <EditTask task={task} />
    </Container>
  )
}
