import { useState } from "react";
import { Container, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { SearchBar } from "../../mui-customs/SearchBar";
import './ControlPanel.css';

export default function ControlPanel({ setQuery }) {
  const [status, setStatus] = useState('des');
  const [priority, setPriority] = useState('des');
  const [sort, setSort] = useState('priority');

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
      <FormControl>
        <InputLabel>Status</InputLabel>
        <Select
          value={status}
          label='Status'
          onChange={(e) => handleChange(e, setStatus)}
        >
          <MenuItem value='asc'>Ascending</MenuItem>
          <MenuItem value='des'>Descending</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>Priority</InputLabel>
        <Select
          value={priority}
          label='Priority'
          onChange={(e) => handleChange(e, setPriority)}
        >
          <MenuItem value='asc'>Ascending</MenuItem>
          <MenuItem value='des'>Descending</MenuItem>
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
