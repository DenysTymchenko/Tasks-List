import { useState, useEffect } from "react";
import { Container, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { SearchBar } from "../../mui-customs/SearchBar";
import './ControlPanel.css';

export default function ControlPanel({ tasks, setTasksArr }) {
  const [query, setQuery] = useState('');
  //const [status, setStatus] = useState('desc');
  const [priority, setPriority] = useState('desc');
  const [sort, setSort] = useState('priority');

  useEffect(() => {
    setTasksArr(query ? tasks.filter((task) => task.title.toLowerCase().indexOf(query) !== -1) : tasks)
  }, [query, tasks]);

  useEffect(() => {
    const priorityTasks = [...tasks];
    priorityTasks.sort((a, b) => {
      const priorityOrder = {
        high: priority === 'desc' ? 1 : 3,
        medium: 2,
        low: priority === 'desc' ? 3 : 1
      };
      const priorityA = priorityOrder[a.priority] || 0;
      const priorityB = priorityOrder[b.priority] || 0;

      return priorityA - priorityB;
    });

    setTasksArr(priorityTasks);

  }, [priority, tasks]);

  const handleChange = (e, setChange) => {
    setChange(e.target.value);
  };

  return (
    <Container className='control-panel'>
      <SearchBar
        label="Find task"
        placeholder="Enter it's title"
        variant="outlined"
        onChange={(e) => handleChange(e, setQuery)}
      />
      {/*<FormControl>
        <InputLabel>Status</InputLabel>
        <Select
          value={status}
          label='Status'
          onChange={(e) => handleChange(e, setStatus)}
        >
          <MenuItem value='asc'>Ascending</MenuItem>
          <MenuItem value='desc'>Descending</MenuItem>
        </Select>
      </FormControl>*/}

      <FormControl>
        <InputLabel>Priority</InputLabel>
        <Select
          value={priority}
          label='Priority'
          onChange={(e) => handleChange(e, setPriority)}
        >
          <MenuItem value='asc'>Ascending</MenuItem>
          <MenuItem value='desc'>Descending</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>Sort by</InputLabel>
        <Select
          value={sort}
          label='Sort by'
          onChange={(e) => handleChange(e, setSort)}
        >
          <MenuItem value='title'>Title</MenuItem>
          <MenuItem value='priority'>Priority</MenuItem>
          <MenuItem value='status'>Status</MenuItem>
        </Select>
      </FormControl>
    </Container>
  )
}
