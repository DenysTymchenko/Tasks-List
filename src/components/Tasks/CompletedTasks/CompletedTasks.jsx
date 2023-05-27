import { Typography } from '@mui/material';
import TaskItem from '../TaskItem/TaskItem';

export default function CompletedTasks({ completedTasks }) {
  return (
    <>
      <Typography
        variant='h2'
        sx={{
          '@media (max-width: 355px)': {
            fontSize: '2.75rem'
          }
        }}
      >
        Completed
      </Typography>
      {completedTasks.length === 0
        ? <Typography variant='body2'>You have no completed tasks yet</Typography>
        : completedTasks.map((task) => (<TaskItem task={task} key={task.id} />))
      }
    </>
  )
}
