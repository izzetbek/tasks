import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 20px 0;
`
export const Top = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    padding: 20px;
    width: 100%;
    margin-right: 5px;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    border-width: 1px;
    border-color: #ccc;
    border-style: solid;
  }

  button {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`

export const SearchLabel = styled.span`
  display: inline-block;
  padding: 7px;
  margin-top: 20px;
  border: 1px solid #ccc;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    border-color: #000;
  }

  &:not(:last-child) {
    margin-right: 7px;
  }
`
