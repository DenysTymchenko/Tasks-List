import { styled } from '@mui/material/styles';
import { Box } from "@mui/material";

export const NewTaskForm = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  backgroundColor: 'var(--main)',
  border: '2px solid hsla(0, 0%, 0%, 0.5)',
  borderRadius: 10,
  boxShadow: 24,
  padding: 15,
}));

