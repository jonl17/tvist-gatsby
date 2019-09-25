import styled from "styled-components"

export const Cell = styled.div`
  height: 200px;
  width: 100%;
  text-align: center;
`
export const Logo = styled.img`
  max-height: 100px;
  max-width: 150px;
  height: 100%;
  vertical-align: middle;
  filter: grayscale(100%);
  &&:hover {
    filter: grayscale(0%);
    opacity: 1;
  }
  transition: 0.3s ease-in-out;
  opacity: 0.8;
`
