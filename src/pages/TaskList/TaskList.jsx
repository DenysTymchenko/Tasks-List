import { useSelector } from 'react-redux';
import { Container } from '@mui/material';
import CreateNewTask from '../../components/CreateNewTask/CreateNewTask';
import CompletedTasks from '../../components/CompletedTasks/CompletedTasks';
import UncompletedTasks from '../../components/UncompletedTasks/UncompletedTasks';
import './TaskList.css';
import ControlPanel from '../../components/ControlPanel/ControlPanel';
import {  useState } from 'react';

export default function TaskList() {
  const { tasks } = useSelector((state) => state.tasksReducer);
  const [tasksArr, setTasksArr] = useState(tasks);
  const uncompletedTasks = tasksArr.filter(task => !task.completed);
  const completedTasks = tasksArr.filter(task => task.completed);

  return (
    <>
      <ControlPanel tasks={tasks} setTasksArr={setTasksArr} />
      <Container className='task-list'>
        <UncompletedTasks uncompletedTasks={uncompletedTasks} />
        <CompletedTasks completedTasks={completedTasks} />
        <CreateNewTask />
      </Container>
    </>
  );
}
