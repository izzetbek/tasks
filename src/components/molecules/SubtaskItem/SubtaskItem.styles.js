import styled from 'styled-components'

export const Wrapper = styled.li`
  padding: 10px;

  &:not(:last-child) {
    border-bottom: 1px dashed #ccc;
  }
`

export const Label = styled.span`
  display: inline-block;
  border: 1px solid #ccc;
  padding: 7px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e3e3e3;
  }

  &:not(:last-child) {
    margin-right: 7px;
  }
`
