import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getTasks } from './store/modules/tasks/reducer';
import TaskList from './pages/TaskList/TaskList';

function App() {
  //Getting tasks on page load. 
  const { tasks } = useSelector((state) => state.tasksReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.tasks
      ? dispatch(getTasks())
      : localStorage.setItem('tasks', JSON.stringify(tasks));
  }, []);

  return (
    <TaskList />
  );
}

export default App;
