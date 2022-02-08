import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tasksRequested } from 'store/tasks'
import List from 'components/atoms/List/List'
import TaskItem from 'components/molecules/TaskItem/TaskItem'
import { filterTasks } from 'store/tasks/selectors'
import Title from 'components/atoms/Title/Title'
import Toolbar from 'components/molecules/Toolbar/Toolbar'

const Tasks = () => {
  const dispatch = useDispatch()
  const list = useSelector(filterTasks)

  useEffect(() => {
    dispatch(tasksRequested())
  }, [dispatch])

  return (
    <div>
      <Title>Processes</Title>
      <Toolbar />
      <List>
        {list.map(item => (
          <TaskItem key={item.id} item={item} />
        ))}
      </List>
    </div>
  )
}

export default Tasks
