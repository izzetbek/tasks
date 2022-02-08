import React, { useCallback, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import faker from 'faker'
import PropTypes from 'prop-types'
import { Wrapper, Label } from 'components/molecules/SubtaskItem/SubtaskItem.styles'
import { subtaskDeleteRequested, searchLabelAdd } from 'store/tasks'
import { Button } from 'components/atoms'

const SubtaskItem = ({ item }) => {
  const dispatch = useDispatch()
  const onClick = useCallback(() => dispatch(subtaskDeleteRequested(item)), [dispatch, item])

  const labels = useMemo(
    () =>
      item.labels.map(label => ({
        id: faker.datatype.uuid(),
        text: label,
      })),
    [item],
  )

  return (
    <Wrapper>
      <p>
        <span>{item.title}</span>
        <Button onClick={onClick} theme="indianred">
          Delete
        </Button>
      </p>
      {labels.map(label => (
        <Label key={label.id} onClick={() => dispatch(searchLabelAdd(label.text))}>
          {label.text}
        </Label>
      ))}
    </Wrapper>
  )
}

SubtaskItem.propTypes = {
  item: PropTypes.exact({
    id: PropTypes.string,
    taskId: PropTypes.string,
    title: PropTypes.string,
    labels: PropTypes.array,
  }).isRequired,
}

export default SubtaskItem
