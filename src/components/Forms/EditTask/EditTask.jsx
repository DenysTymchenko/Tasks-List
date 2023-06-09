import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updateTask } from '../../../store/modules/tasks/reducer'
import {
  Modal,
  TextField,
  Button,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PrioritySelector from '../PrioritySelector/PrioritySelector';
import './EditTask.css';

export default function EditTask({ task }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const {
    register, //allows to register an input or select element and apply validation rules.
    formState: { errors, isValid }, //we can show hints to user by using errors, and disable submit with isValid.
    handleSubmit, //takes function, that consists logic of form data processing, as argument.
  } = useForm({
    mode: 'onBlur', //hints (error message) will be shown only when :focus disappears from input.
  });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    //updating existing task
    data.id = task.id;
    data.priority = document.querySelector('input[name="priority"]:checked').value;
    data.completed = task.completed;
    dispatch(updateTask(data));
    handleClose(); //closing form after edit
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
        <form className='edit-task-form' onSubmit={handleSubmit(onSubmit)}>
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
