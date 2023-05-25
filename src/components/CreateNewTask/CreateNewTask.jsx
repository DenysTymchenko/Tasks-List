import { useState } from 'react';
import { Modal, TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { NewTaskButton } from '../../mui-customs/NewTaskButton';
import { NewTaskForm } from '../../mui-customs/NewTaskForm';
import PrioritySelector from './PrioritySelector/PrioritySelector';
import useFormValidation from '../../hooks/useFormValidation';

export default function CreateNewTask() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [setTitle, isTitleValid] = useFormValidation();
  const handleInputChange = (inputValue, setInput) => {
    setInput(inputValue);
  }

  const handleCreateNewTask = (task) => {

  }

  return (
    <>
      <NewTaskButton onClick={handleOpen}>
        <AddIcon />
      </NewTaskButton>

      <Modal
        open={open}
        onClose={handleClose}
      >
        <NewTaskForm>
          <TextField
            label='Title'
            variant='outlined'
            error={!isTitleValid(3, 25)}
            helperText={!isTitleValid(3, 25) ? 'Title must be atleast 3 or 25 characters long.' : ''}
            onChange={(e) => handleInputChange(e.target.value, setTitle)}
          />

          <TextField label='Description' variant='outlined' />
          <PrioritySelector />
          <Button
            variant='contained'
            disabled={!isTitleValid(3, 25) ? true : false}
          >
            Create
          </Button>
        </NewTaskForm>
      </Modal>
    </>
  );
}
