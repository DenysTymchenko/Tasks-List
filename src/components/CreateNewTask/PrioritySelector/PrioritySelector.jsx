import { FormLabel, RadioGroup, FormControlLabel, Radio, FormControl } from '@mui/material';

export default function PrioritySelector() {
  return (
    <FormControl>
      <FormLabel>Priority</FormLabel>
      <RadioGroup
        defaultValue='low'
        name='priority-group'
      >
        <FormControlLabel value='low' control={<Radio />} label='Low' />
        <FormControlLabel value='medium' control={<Radio />} label='Medium' />
        <FormControlLabel value='high' control={<Radio />} label='High' />
      </RadioGroup>
    </FormControl>
  )
}
