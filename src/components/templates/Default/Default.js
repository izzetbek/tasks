import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { Wrapper, Overlay } from 'components/templates/Default/Default.styles'

const Default = ({ children }) => {
  const loading = useSelector(state => state.tasks.loading)

  return (
    <Wrapper>
      {loading && <Overlay />}
      {children}
    </Wrapper>
  )
}

Default.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Default
