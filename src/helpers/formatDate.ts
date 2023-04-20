export const formatDateObj = (date: Date):string => {
  const day:string = date.getDate().toString().padStart(2, "0");
  const month:string = (date.getMonth() + 1).toString().padStart(2, "0");
  const year:string = date.getFullYear().toString();

  return `${day}/${month}/${year}`
}

export const formatDateYMD = (dateObj: Date) => {
  const day:string = dateObj.getDate().toString().padStart(2, "0");
  const month:string = (dateObj.getMonth() + 1).toString().padStart(2, "0");
  const year:string = dateObj.getFullYear().toString();

  return `${year}/${month}/${day}`

}