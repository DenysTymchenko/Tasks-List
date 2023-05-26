import {
  Checkbox,
  Container,
  Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { setCompleted } from '../../../store/modules/tasks/reducer';
import EditTask from '../../EditTask/EditTask';
import './TaskHeader.css';

export default function TaskHeader({ task, bgColor }) {
  const dispatch = useDispatch();
  const handleSetCompleted = () => {
    dispatch(setCompleted(task))
  }

  return (
    <Container className='task-header' sx={{ backgroundColor: bgColor }}>
      <Checkbox checked={task.completed} onChange={handleSetCompleted} />
      <Typography
        className='title'
        variant='h4'
        sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}
      >{task.title}</Typography>
      <EditTask task={task} />
    </Container>
  )
}
