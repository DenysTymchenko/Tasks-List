import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const NewTaskButton = styled(Button)(({ theme }) => ({
  position: 'fixed',
  bottom: '10px',
  right: '10px',
  color: 'var(--secondary-alt)',
  backgroundColor: 'var(--main-alt)',
  '&:hover': {
    backgroundColor: 'var(--secondary)',
  },
}));
