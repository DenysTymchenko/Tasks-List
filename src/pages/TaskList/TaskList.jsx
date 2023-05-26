import { useSelector } from 'react-redux';
import { Container } from '@mui/material';
import CreateNewTask from '../../components/CreateNewTask/CreateNewTask';
import { SearchBar } from '../../mui-customs/SearchBar';
import CompletedTasks from '../../components/CompletedTasks/CompletedTasks';
import UncompletedTasks from '../../components/UncompletedTasks/UncompletedTasks';
import './TaskList.css';
import ControlPanel from '../../components/ControlPanel/ControlPanel';

export default function TaskList() {
  const { tasks } = useSelector((state) => state.tasksReducer);
  const uncompletedTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <>
      <ControlPanel />
      <Container className='task-list'>
        <UncompletedTasks uncompletedTasks={uncompletedTasks} />
        <CompletedTasks completedTasks={completedTasks} />
        <CreateNewTask />
      </Container>
    </>
  );
}
