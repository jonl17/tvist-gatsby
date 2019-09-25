import React from "react"
import { Container, Text } from "./Styled"
import Title from "../Repetitives/Title"

const About = ({ title, text }) => {
  return (
    <Container>
      <Title title={title}></Title>
      <Text>{text}</Text>
    </Container>
  )
}

export default About
