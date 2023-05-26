import {
  InputLabel,
  MenuItem,
  FormControl,
  Select
} from '@mui/material';

export default function SortBy({ sortBy, setSortBy }) {
  return (
    <FormControl>
      <InputLabel>Sort by</InputLabel>
      <Select
        sx={{color: 'var(--secondary-alt)'}}
        value={sortBy}
        label='Sort by'
        onChange={(e) => setSortBy(e.target.value)}
      >
        <MenuItem value='title'>Title</MenuItem>
        <MenuItem value='priority'>Priority</MenuItem>
      </Select>
    </FormControl>
  )
}
