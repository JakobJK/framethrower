const getYoutube = (url: string): string | null => {
  if (url != undefined || url != '') {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/
    var match = url.match(regExp)
    return match && match[2].length == 11
      ? `https://www.youtube.com/embed/${match[2]}`
      : null
  }
  return null
}

const getVimeo = (url: string): string | null => {
  if (!url.includes('https://vimeo.com/')) return null
  const uri = url.split('https://vimeo.com/')[1]
  const num = '0123456789'

  let output = ''
  for (let i = 0; i < uri.length; i += 1) {
    if (num.includes(uri[i])) {
      output += uri[i]
    } else {
      break
    }
  }
  return `https://player.vimeo.com/video/${output}`
}

const getEmbedLink = (url: string): string | null => {
  if (url.includes('youtu')) return getYoutube(url)
  if (url.includes('vimeo')) return getVimeo(url)
  return null
}

export default getEmbedLink
