import * as React from 'react'

const { useState, forwardRef } = React
const Drawing = ({ drawActive, erase }, ref) => {
  const [penPosition, setPenPosition] = useState({ x: 0, y: 0 })
  const [penActive, setPenActive] = useState(false)

  return (
    <canvas
      className='absolute z-30'
      width='1280'
      height='720'
      ref={ref}
      onMouseMove={e => {
        if (!(drawActive || erase)) return
        if (!penActive) return
        const ctx = ref?.current?.getContext('2d')
        if (ctx) {
          ctx?.beginPath()
          ctx?.moveTo(penPosition.x, penPosition.y)
          ctx?.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
          ctx?.stroke()
          setPenPosition({
            x: e.nativeEvent.offsetX,
            y: e.nativeEvent.offsetY,
          })
        }
      }}
      onMouseDown={e => {
        setPenPosition({
          x: e.nativeEvent.offsetX,
          y: e.nativeEvent.offsetY,
        })
        setPenActive(true)
      }}
      onMouseOut={() => {
        setPenActive(false)
      }}
      onMouseUp={() => {
        setPenActive(false)
      }}
    />
  )
}

export default forwardRef(Drawing)
