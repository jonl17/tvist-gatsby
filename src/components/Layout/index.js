import React from "react"
import { connect } from "react-redux"
import { setDevice } from "../../state/actions/scaleActions"

/**
 * This component is really just a device width detector
 */
class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.callBack = this.callBack.bind(this)
  }
  componentDidMount() {
    this.callBack()
    window.addEventListener("resize", this.callBack)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.callBack)
  }

  callBack() {
    this.props.dispatch(setDevice(window.innerWidth))
  }
  render() {
    const { children } = this.props
    return <>{children}</>
  }
}

const mapStateToProps = state => ({
  device: state.scaleReducer.device,
})

export default connect(mapStateToProps)(Layout)
