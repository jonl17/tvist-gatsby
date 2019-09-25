import React from "react"
import { Cell, Logo } from "./Styled"

const Block = ({
  client: {
    node: {
      featured_media: {
        localFile: { url: image },
      },
    },
  },
}) => {
  return (
    <Cell>
      <Logo src={image}></Logo>
    </Cell>
  )
}

export default Block
