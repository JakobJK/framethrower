const resizeImage = (file: File, canvas: HTMLCanvasElement) => {
  const imageUrl = URL.createObjectURL(file)
  const ctx = canvas.getContext('2d')
  const baseImage = new Image()
  baseImage.src = imageUrl
  baseImage.onload = function() {
    const { width, height } = baseImage

    if (canvas.width > width) {
      console.log('Log error!')
      return null
    }
    if (canvas.height > height) {
      console.log('Log Error!')
      return null
    }

    const scaleWidth = width / canvas.width > height / canvas.height

    let newHeight = canvas.height
    let newWidth = canvas.width
    let outputX = 0
    let outputY = 0

    if (scaleWidth) newWidth = (width / height) * canvas.height
    if (!scaleWidth) newHeight = (height / width) * canvas.width

    outputX = (newWidth - canvas.width) * -0.5
    outputY = (newHeight - canvas.height) * -0.5

    baseImage.width = newWidth
    baseImage.height = newHeight

    ctx?.drawImage(baseImage, outputX, outputY, newWidth, newHeight)
  }
}

export default resizeImage
