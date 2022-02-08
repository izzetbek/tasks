import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  max-width: 100%;
  min-width: 50%;
  min-height: 100vh;
  justify-content: center;
  margin-top: 50px;
  padding-bottom: 50px;
`
export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #fff;
  opacity: 0.5;
`
