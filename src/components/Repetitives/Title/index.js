import React from "react"
import { Container, Text } from "./Styled"

const Title = ({ title, border }) => {
  return (
    <Container>
      <Text border={border}>{title}</Text>
    </Container>
  )
}

export default Title
