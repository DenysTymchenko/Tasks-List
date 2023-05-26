import {
  InputLabel,
  MenuItem,
  FormControl,
  Select
} from "@mui/material";

export default function ChoosePriority({ priority, setPriority }) {
  return (
    <FormControl sx={{ width: '132px' }}>
      <InputLabel>Priority</InputLabel>
      <Select
        value={priority}
        label='Priority'
        onChange={(e) => setPriority(e.target.value)}
      >
        <MenuItem value='asc'>Ascending</MenuItem>
        <MenuItem value='desc'>Descending</MenuItem>
      </Select>
    </FormControl>
  )
}
