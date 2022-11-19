export const createDocumentName = async (documentName, data) => {
  const dateObj = new Date()

  let month = (dateObj.getUTCMonth() + 1).toString()
  month = month.length > 1 ? month : '0' + month
  let day = dateObj.getUTCDate()
  var year = dateObj.getUTCFullYear()
  let filename = `${documentName.split('_')[0]}_${data.firstname}${
    data.lastname
  }_${year}${month}${day}.pdf`

  return filename
}
