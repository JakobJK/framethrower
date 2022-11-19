export const checkInvidividual = (
  arr: Array<{ page: string; display: string; url: string }>,
  targetPage: string,
  targetMember: string
) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].page === targetPage && arr[i].display === targetMember)
      return true
  }
  return false
}
