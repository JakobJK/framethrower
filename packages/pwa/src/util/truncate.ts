const truncate = (title: string, amount: number) =>
  title.length > amount - 3 ? title.slice(0, amount - 3) + '...' : title

export default truncate
