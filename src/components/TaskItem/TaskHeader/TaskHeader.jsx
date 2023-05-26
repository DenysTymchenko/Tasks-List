import {
  Checkbox,
  Container,
  Typography,
  IconButton,
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import './TaskHeader.css';

export default function TaskHeader({ title }) {
  return (
    <Container className='task-header'>
      <Checkbox />
      <Typography className='title' variant='h4'>{title}</Typography>
      <IconButton>
        <EditIcon />
      </IconButton>
    </Container>
  )
}
