import React from "react"
import { graphql } from "gatsby"

import Vidskiptavinir from "../../components/Vidskiptavinir"
import About from "../../components/About"

import { TopVideo, VideoContainer, PaddedSection } from "./Styled"

const Stofan = ({
  data: {
    wordpressPage: {
      acf: {
        tvist_info_titill,
        tvist_info,
        top_image: {
          localFile: { url: video },
        },
      },
    },
  },
}) => {
  return (
    <>
      <VideoContainer>
        <TopVideo autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </TopVideo>
      </VideoContainer>
      <PaddedSection>
        <About text={tvist_info} title={tvist_info_titill}></About>
        <Vidskiptavinir></Vidskiptavinir>
      </PaddedSection>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    wordpressPage(slug: { eq: $slug }) {
      title
      slug
      acf {
        tvist_info_titill
        tvist_info
        top_image {
          localFile {
            url
          }
        }
      }
    }
  }
`

export default Stofan
