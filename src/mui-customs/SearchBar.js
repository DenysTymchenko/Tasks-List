import { styled, TextField } from '@mui/material';

export const SearchBar = styled(TextField)({
  '& label.Mui-focused': {
    color: 'var(--main)',
  }
});
