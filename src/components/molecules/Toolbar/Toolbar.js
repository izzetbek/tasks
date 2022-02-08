import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'components/atoms'
import { searchQueryChanged, taskCreationRequested, searchLabelDelete } from 'store/tasks'
import { Wrapper, Top, SearchLabel } from 'components/molecules/Toolbar/Toolbar.styles'

const Toolbar = () => {
  const dispatch = useDispatch()

  const { query, searchLabels } = useSelector(({ tasks }) => ({
    query: tasks.searchQuery,
    searchLabels: tasks.searchLabels,
  }))

  const onClick = useCallback(() => dispatch(taskCreationRequested()), [dispatch])

  const onChange = useCallback(e => dispatch(searchQueryChanged(e.target.value)), [dispatch])

  return (
    <Wrapper>
      <Top>
        <input value={query} onChange={onChange} placeholder="Search task or subtask..." />
        <Button onClick={onClick} theme="green">
          Create
        </Button>
      </Top>
      {searchLabels.map(label => (
        <SearchLabel key={label} onClick={() => dispatch(searchLabelDelete(label))}>
          {label}
        </SearchLabel>
      ))}
    </Wrapper>
  )
}

export default Toolbar
