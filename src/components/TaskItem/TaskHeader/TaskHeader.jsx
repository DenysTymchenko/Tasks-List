import {
  Checkbox,
  Container,
  Typography,
} from "@mui/material";
import './TaskHeader.css';
import EditTask from "../../EditTask/EditTask";
import { useDispatch } from "react-redux";
import { setCompleted } from "../../../store/modules/tasks/reducer";

export default function TaskHeader({ task }) {
  const dispatch = useDispatch();
  const handleSetCompleted = () => {
    dispatch(setCompleted(task))
  }
  return (
    <Container className='task-header'>
      <Checkbox onChange={handleSetCompleted} />
      <Typography className='title' variant='h4'>{task.title}</Typography>
      <EditTask task={task} />
    </Container>
  )
}
