import ReactQuill from 'react-quill'
const getUrl = async (blob: Blob | null | void, imageType: string) => {
  const headers: HeadersInit = new Headers()
  headers.set('Content-Type', 'application/json')
  headers.append('authorization', localStorage.getItem('token') || '')

  const response = await fetch(`${SERVERLESS}/upload-image`, {
    body: JSON.stringify({ type: imageType }),
    method: 'post',
    headers,
  })
    .then(res => res.json())
    .catch(e => console.log(e))

  await fetch(response.url, {
    method: 'put',
    body: blob as Blob,
    headers: {
      ContentType: imageType,
    },
    redirect: 'follow',
  })
  return `${STORAGE}/${response.file}`
}

const createImageHandler = (
  quillRef: React.MutableRefObject<ReactQuill>,
  setProcessing: React.Dispatch<React.SetStateAction<boolean>>
) => {
  return async (
    _imageDataUrl: string,
    _type: MimeType,
    imageData: imageData
  ) => {
    setProcessing(true)
    const quillEditor = quillRef.current.getEditor()
    if (imageData.type === 'image/jpeg' || imageData.type === 'image/png') {
      imageData
        .minify({
          maxWidth: 480,
          maxHeight: 480,
          quality: 0.7,
        })
        .then(async (miniImageData: HTMLCanvasElement) => {
          const imageUrl = await getUrl(
            miniImageData.toBlob(() => {}),
            imageData.type
          )
          let index =
            (quillEditor.getSelection() || {}).index || quillEditor.getLength()
          if (index) quillEditor.insertEmbed(index, 'image', imageUrl, 'user')

          setProcessing(false)
        })
    } else {
      console.log(
        'Unfortunate we do not support the image format. Use PNGs or JPGs'
      )
    }
  }
}

export default createImageHandler
