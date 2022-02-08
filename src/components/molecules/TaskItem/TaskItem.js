import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { Wrapper } from 'components/molecules/TaskItem/TaskItem.styles'
import { subTasksRequested } from 'store/tasks'
import List from 'components/atoms/List/List'
import SubtaskItem from 'components/molecules/SubtaskItem/SubtaskItem'
import { Button } from 'components/atoms'

const TaskItem = ({ item }) => {
  const dispatch = useDispatch()
  const btnLabel = item.subTasksList ? 'Refresh' : 'Load subtasks'

  const onClick = useCallback(() => dispatch(subTasksRequested(item)), [dispatch, item])

  return (
    <Wrapper>
      <p>
        <span>{item.title}</span>
        <Button onClick={onClick} theme="cornflowerblue">
          {btnLabel}
        </Button>
      </p>
      {item.subTasksList && (
        <List>
          {item.subTasksList.map(subtask => (
            <SubtaskItem key={subtask.id} item={subtask} />
          ))}
        </List>
      )}
    </Wrapper>
  )
}

TaskItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    createTime: PropTypes.number,
    title: PropTypes.string,
    subTasksList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        labels: PropTypes.arrayOf(PropTypes.string),
      }),
    ),
  }).isRequired,
}

export default TaskItem
