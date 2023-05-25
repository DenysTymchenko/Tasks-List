import {
  Checkbox,
  Container,
  Paper,
  Typography,
  IconButton,
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './TaskItem.css';

export default function TaskItem() {
  return (
    <Paper className='task' sx={{ borderRadius: '15px' }}>
      <Container className='task-header'>
        <Checkbox />
        <Typography className='title' variant='h4'>Title</Typography>
        <IconButton>
          <EditIcon />
        </IconButton>
      </Container>
      <Typography className='description' variant='body2'>description</Typography>
      <Container className='task-footer'>
        <Typography className='priority' variant='body'>Priority: High</Typography>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Container>
    </Paper>
  )
}
