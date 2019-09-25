import styled, { css } from "styled-components"

export const Container = styled.div``
export const Text = styled.h2`
  ${props =>
    props.border &&
    css`
      border-top: 2.5px solid;
      padding-top: 25px;
    `}
`
