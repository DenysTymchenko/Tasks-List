import { useSelector } from 'react-redux';
import { Container } from '@mui/material';
import TaskItem from '../../components/TaskItem/TaskItem';
import CreateNewTask from '../../components/CreateNewTask/CreateNewTask';
import './TaskList.css'

export default function TaskList() {
  const { tasks } = useSelector((state) => state.tasksReducer);
  return (
    <Container className='task-list'>
      {tasks.map((task, index) => ( <TaskItem task={task} key={index} /> ))}
      <CreateNewTask />
    </Container>
  )
}
