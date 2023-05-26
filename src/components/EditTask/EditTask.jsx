import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updateTask } from '../../store/modules/tasks/reducer'
import {
  Modal,
  TextField,
  Button,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PrioritySelector from '../PrioritySelector/PrioritySelector';

export default function EditTask({ task }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
  });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    data.id = task.id;
    data.priority = document.querySelector('input[name="priority"]:checked').value;
    dispatch(updateTask(data));
  };

  return (
    <>
      <IconButton onClick={handleOpen}>
        <EditIcon />
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
      >
        <form className='task-form' onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label='Title'
            defaultValue={task.title}
            variant='outlined'
            {...register('title', {
              required: 'Title must be filled',
              minLength: {
                value: 3,
                message: 'Title must contain at least 3 symbols.',
              },
              maxLength: {
                value: 25,
                message: 'Title must contain less than 25 symbols.',
              },
            })}
            error={errors?.title}
            helperText={errors?.title ? errors.title.message : ''}
          />

          <TextField
            label='Description'
            defaultValue={task.description}
            variant='outlined'
            {...register('description')}
          />
          <PrioritySelector priority={task.priority} />
          <Button
            variant='contained'
            type='submit'
            disabled={!isValid}
          >
            Edit
          </Button>
        </form>
      </Modal>
    </>
  );
}
