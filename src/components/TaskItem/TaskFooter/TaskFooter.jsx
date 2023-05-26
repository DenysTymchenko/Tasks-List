import {
  Container,
  Typography,
  IconButton,
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import './TaskFooter.css';

export default function TaskFooter({ 
  priority,
  bgColor,
  handleDeleteTask 
}) {
  return (
    <Container className='task-footer' sx={{backgroundColor: bgColor}}>
    <Typography className='priority' variant='body'>Priority: {priority}</Typography>
    <IconButton onClick={handleDeleteTask}>
      <DeleteIcon />
    </IconButton>
  </Container>
  )
}
