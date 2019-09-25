import { SET_DEVICE } from "../actions/scaleActions"
import { DEVICE } from "../../constants"

const initialState = {
  device: undefined,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DEVICE:
      if (action.width >= DEVICE.browser) return { ...state, device: `browser` }
      else if (action.width < DEVICE.browser && action.width >= DEVICE.tablet)
        return { ...state, device: `tablet` }
      else return { ...state, device: `mobile` }
    default:
      return state
  }
}
