import * as React from 'react'
import Draggable from '../../elements/Draggable'

class ScrubLine extends React.PureComponent {
  state = { x: 0 }

  _move = x => this.setState({ x })

  // you can implement grid snapping logic or whatever here
  /*
  _move = (x, y) => this.setState({
      x: ~~((x - 5) / 10) * 10 + 5,
      y: ~~((y - 5) / 10) * 10 + 5,
  });
  */

  render() {
    return (
      <Draggable
        setCurrentFrame={this.props.setCurrentFrame}
        setLocalCurrentFrame={this.props.setLocalCurrentFrame}
        x={this.state.x}
        onMove={this._move}
        videoRef={this.props.videoRef}
      >
        Drag me
      </Draggable>
    )
  }
}

export default ScrubLine
