export const copyToClipboard = (copyThis: string) => {
  const el = document.createElement('textarea')
  el.value = copyThis.toString()
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
}
