import {
  Container,
  Typography,
  IconButton,
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import './TaskFooter.css';

export default function TaskFooter({ priority, handleDeleteTask }) {
  return (
    <Container className='task-footer'>
    <Typography className='priority' variant='body'>Priority: {priority}</Typography>
    <IconButton onClick={handleDeleteTask}>
      <DeleteIcon />
    </IconButton>
  </Container>
  )
}
