import { styled, TextField } from '@mui/material';

export const SearchBar = styled(TextField)({
  color: 'var(--main)',
  '& label.Mui-focused': {
    color: 'var(--main)',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'var(--main)',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#var(--main)',
    },
    '&:hover fieldset': {
      borderColor: 'var(--main)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'var(--main)',
    },
  },
});
