import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { SearchBar } from '../../mui-customs/SearchBar';
import './ControlPanel.css';
import SortBy from './SortBy/SortBy';
import ChoosePriority from './ChoosePriority/ChoosePriority';

export default function ControlPanel({ tasks, setTasksArr }) {
  const [sortedTasks, setSortedTasks] = useState([]);
  useEffect(() => {
    setTasksArr(sortedTasks);
  }, [sortedTasks, setTasksArr]);

  const [query, setQuery] = useState('');
  const [priority, setPriority] = useState('desc');
  const [sortBy, setSortBy] = useState('priority');
  //updating tasksArr items order depending on input or/and priority
  useEffect(() => {
    let filteredTasks = tasks;

    if (query) {
      filteredTasks = filteredTasks.filter(
        task => task.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    }

    let sortedTasks = [...filteredTasks];

    if (sortBy === 'title') {
      sortedTasks.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();

        if (titleA < titleB) {
          return -1;
        } else if (titleA > titleB) {
          return 1;
        }
        return 0;
      });
    } else if (sortBy === 'priority') {
      sortedTasks.sort((a, b) => {
        const priorityOrder = {
          high: priority === 'desc' ? 1 : 3,
          medium: 2,
          low: priority === 'desc' ? 3 : 1,
        };
        const priorityA = priorityOrder[a.priority] || 0;
        const priorityB = priorityOrder[b.priority] || 0;

        return priorityA - priorityB;
      });
    }

    setSortedTasks(sortedTasks);
  }, [query, tasks, priority, sortBy]);

  return (
    <Container className='control-panel'>
      <SearchBar
        label='Find task'
        placeholder='Enter its title'
        variant='outlined'
        onChange={(e) => setQuery(e.target.value)}
      />
      <SortBy sortBy={sortBy} setSortBy={setSortBy} />
      {sortBy === 'priority' && <ChoosePriority priority={priority} setPriority={setPriority} />}
    </Container>
  );
}
