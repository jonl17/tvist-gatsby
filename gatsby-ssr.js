import React from "react"
import { Provider } from "react-redux"
import { createStore as doTheTVIST } from "redux"
import rootReducer from "./src/state/index"
import { GlobalStyle } from "./src/components/GlobalStyle"

const createStore = () => doTheTVIST(rootReducer)

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={createStore()}>
      <GlobalStyle></GlobalStyle>
      {element}
    </Provider>
  )
}
