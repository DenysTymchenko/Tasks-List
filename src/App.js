import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import TaskList from './pages/TaskList/TaskList';
import getTasks from './store/modules/tasks/reducer';
import './App.css';

function App() {
  const { tasks } = useSelector((state) => state.tasksReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.tasks
      ? dispatch(getTasks())
      : localStorage.setItem('favorites', JSON.stringify(tasks));
  }, []);

  return (
    <TaskList />
  );
}

export default App;
