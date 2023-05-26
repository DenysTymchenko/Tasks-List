import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createTask } from '../../store/modules/tasks/reducer'
import { Modal, TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { NewTaskButton } from '../../mui-customs/NewTaskButton';
import PrioritySelector from '../PrioritySelector/PrioritySelector';
import './CreateNewTask.css';

export default function CreateNewTask() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const generateId = () => {
    const dateString = Date.now().toString(36);
    const randomness = Math.random().toString(36).substring(2);
    return dateString + randomness;
  };

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    data.id = generateId();
    data.priority = document.querySelector('input[name="priority"]:checked').value;
    data.completed = false;
    dispatch(createTask(data));
    reset();
  };

  return (
    <>
      <NewTaskButton onClick={handleOpen}>
        <AddIcon />
      </NewTaskButton>

      <Modal
        open={open}
        onClose={handleClose}
      >
        <form className='task-form' onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label='Title'
            variant='outlined'
            {...register('title', {
              required: 'Title must be filled',
              minLength: {
                value: 3,
                message: 'Title must contain atleast 3 symbols.',
              },
              maxLength: {
                value: 25,
                message: 'Title must contain less then 25 symbols.',
              },
            })}
            error={errors?.title}
            helperText={errors?.title ? errors.title.message : ''}
          />

          <TextField
            label='Description'
            variant='outlined'
            {...register('description')}
          />
          <PrioritySelector />
          <Button
            variant='contained'
            type='submit'
            disabled={!isValid}
          >
            Create
          </Button>
        </form>
      </Modal>
    </>
  );
}
