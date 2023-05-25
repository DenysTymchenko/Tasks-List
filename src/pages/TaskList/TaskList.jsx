import { Container } from '@mui/material';
import TaskItem from '../../components/TaskItem/TaskItem';
import CreateNewTask from '../../components/CreateNewTask/CreateNewTask';
import './TaskList.css'

export default function TaskList() {
  return (
    <Container className='task-list'>
      <TaskItem />
      <CreateNewTask />
    </Container>
  )
}
