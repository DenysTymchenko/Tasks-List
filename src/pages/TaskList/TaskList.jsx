import { useSelector } from 'react-redux';
import { Container, Typography } from '@mui/material';
import TaskItem from '../../components/TaskItem/TaskItem';
import CreateNewTask from '../../components/CreateNewTask/CreateNewTask';
import './TaskList.css';
import CompletedTasks from '../../components/CompletedTasks/CompletedTasks';
import UncompletedTasks from '../../components/UncompletedTasks/UncompletedTasks';

export default function TaskList() {
  const { tasks } = useSelector((state) => state.tasksReducer);
  const uncompletedTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <Container className='task-list'>
      <UncompletedTasks uncompletedTasks={uncompletedTasks} />
      <CompletedTasks  completedTasks={completedTasks}/>
      <CreateNewTask />
    </Container>
  );
}
