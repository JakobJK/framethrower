import { isNull } from 'util'

const uploadImage = async (canvas: HTMLCanvasElement, url: string) => {
  const mrBlob: Blob = await new Promise(resolve =>
    canvas.toBlob(resolve as BlobCallback, 'image/jpeg', 0.95)
  )

  const headers: HeadersInit = new Headers()
  headers.set('Content-Type', 'application/json')
  headers.append('authorization', localStorage.getItem('token') || '')

  const getsignedUrl = await fetch(`${SERVERLESS}/${url}`, {
    body: '',
    method: 'post',
    headers,
  })
    .then(res => res.json())
    .catch(e => {
      console.log(e)
    })

  await fetch(getsignedUrl.url, {
    method: 'put',
    body: mrBlob,
    headers: {
      ContentType: 'image/jpeg',
    },
    redirect: 'follow',
  })

  return getsignedUrl.file
}

export default uploadImage
