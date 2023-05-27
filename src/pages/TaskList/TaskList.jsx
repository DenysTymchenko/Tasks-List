import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container } from '@mui/material';
import CreateNewTask from '../../components/Forms/CreateNewTask/CreateNewTask';
import CompletedTasks from '../../components/Tasks/CompletedTasks/CompletedTasks';
import UncompletedTasks from '../../components/Tasks/UncompletedTasks/UncompletedTasks';
import ControlPanel from '../../components/ControlPanel/ControlPanel';
import './TaskList.css';

export default function TaskList() {
  const { tasks } = useSelector((state) => state.tasksReducer);
  const [tasksArr, setTasksArr] = useState(tasks); //tasks copy used for render
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
