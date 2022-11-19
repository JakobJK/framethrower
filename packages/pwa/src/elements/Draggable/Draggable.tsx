import * as React from 'react'

const throttle = f => {
  let token = null,
    lastArgs = null
  const invoke = () => {
    f(...lastArgs)
    token = null
  }
  const result = (...args) => {
    lastArgs = args
    if (!token) {
      token = requestAnimationFrame(invoke)
    }
  }
  result.cancel = () => token && cancelAnimationFrame(token)
  return result
}

class Draggable extends React.Component {
  _left = 0
  _width = 0
  _timeLine = React.createRef()
  _childToMove = React.createRef()

  _onMouseDown = event => {
    if (event.button !== 0) {
      return
    }
    const { scrollLeft, clientLeft } = document.body
    // Try to avoid calling `getBoundingClientRect` if you know the size
    // of the moving element from the beginning. It forces reflow and is
    // the laggiest part of the code right now. Luckily it's called only
    // once per click.

    const warp = this._timeLine.current.getBoundingClientRect()
    this._left = warp.left
    this._width = warp.width
    document.addEventListener('mousemove', this._onMouseMove)
    document.addEventListener('mouseup', this._onMouseUp)
    event.preventDefault()
  }

  _onMouseUp = event => {
    event.preventDefault()
    document.removeEventListener('mousemove', this._onMouseMove)
    document.removeEventListener('mouseup', this._onMouseUp)
  }

  _onMouseMove = event => {
    this.props.onMove((event.pageX - this._left) / this._width)
    event.preventDefault()
  }

  _update = throttle(() => {
    const { x } = this.props
    let result
    if (x > 1) {
      result = 1
    } else if (x < 0) {
      result = 0
    } else {
      result = x
    }

    this.props.videoRef.current.currentTime = (
      Math.floor(this.props.videoRef.current.duration * result * 24) / 24
    ).toPrecision(6)
    this._childToMove.current.style.left = `${((Math.floor(
      this.props.videoRef.current.currentTime * 24
    ) +
      1) /
      (this.props.videoRef.current.duration * 24)) *
      100}%`
    this.props.setLocalCurrentFrame(
      Math.floor(this.props.videoRef.current.currentTime * 24) + 1
    )
  })

  componentDidMount() {
    this.props.setLocalCurrentFrame(
      Math.floor(this.props.videoRef.current.currentTime * 24) + 1
    )
    this._timeLine.current.addEventListener('mousedown', this._onMouseDown)
    this._update()
  }

  componentDidUpdate() {
    this._update()
  }

  componentWillUnmount() {
    this.props.setCurrentFrame(
      Math.floor(this.props.videoRef.current.currentTime * 24) + 1
    )
    this._timeLine.current.removeEventListener('mousedown', this._onMouseDown)
    this._update.cancel()
  }

  render() {
    return (
      <div
        className='w-full max-w-screen-xl bg-red-400 h-8 bg-opacity-25'
        ref={this._timeLine}
      >
        <div className='absolute bg-orange-600 h-8' ref={this._childToMove}>
          <div className='h-8 w-2'> </div>
        </div>
      </div>
    )
  }
}

export default Draggable
