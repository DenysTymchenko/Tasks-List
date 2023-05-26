import { Typography } from '@mui/material';
import TaskItem from '../TaskItem/TaskItem';

export default function UncompletedTasks({ uncompletedTasks }) {
  return (
    <>
      <Typography variant='h2'>Uncompleted</Typography>
      {uncompletedTasks.length === 0
        ? <Typography variant='body2'>You have no uncompleted tasks yet</Typography>
        : uncompletedTasks.map((task) => (<TaskItem task={task} key={task.id} />))
      }
    </>
  )
}
