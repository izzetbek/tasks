import styled from 'styled-components'

export const Wrapper = styled.li`
  padding: 20px;

  &:not(:last-child) {
    border-bottom: 1px solid #ccc;
  }

  p {
    overflow: hidden;

    span {
      display: inline-block;
      padding-top: 7px;
    }

    button {
      float: right;
      margin-left: 15px;
      border-radius: 5px;
    }
  }

  ul {
    margin-top: 20px;
  }
`
