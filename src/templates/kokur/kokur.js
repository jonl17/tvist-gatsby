import React from "react"
import { graphql } from "gatsby"

const Kokur = ({
  data: {
    wordpressPage: {
      title,
      acf: { um_kokur },
    },
  },
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{um_kokur}</p>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    wordpressPage(slug: { eq: $slug }) {
      title
      slug
      acf {
        um_kokur
      }
    }
  }
`

export default Kokur
