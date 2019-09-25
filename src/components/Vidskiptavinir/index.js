import React from "react"
import { Container } from "./Styled"
import { graphql, StaticQuery } from "gatsby"
import Block from "./components/Block"
import Title from "../Repetitives/Title"

import { connect } from "react-redux"

const getClients = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpVidskiptavinir {
          edges {
            node {
              title
              featured_media {
                localFile {
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={data =>
      data.allWordpressWpVidskiptavinir.edges.map((item, index) => (
        <Block key={index} client={item}></Block>
      ))
    }
  ></StaticQuery>
)

const Vidskiptavinir = () => {
  return (
    <>
      <Title title={"Viðskiptavinir"} border></Title>
      <Container>{getClients()}</Container>
    </>
  )
}

const mapStateToProps = state => ({
  device: state.scaleReducer.device,
})

export default connect(mapStateToProps)(Vidskiptavinir)
