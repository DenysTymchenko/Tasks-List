import {
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl
} from '@mui/material';

export default function PrioritySelector({ priority }) {
  return (
    <FormControl>
      <FormLabel>Priority</FormLabel>
      <RadioGroup defaultValue={priority ? priority : 'low'} name='priority'>
        <FormControlLabel value='low' control={<Radio />} label='Low' />
        <FormControlLabel value='medium' control={<Radio />} label='Medium' />
        <FormControlLabel value='high' control={<Radio />} label='High' />
      </RadioGroup>
    </FormControl>
  )
}
