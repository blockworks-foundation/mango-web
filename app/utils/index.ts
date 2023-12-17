export const copyToClipboard = (copyThis: string) => {
  const el = document.createElement('textarea')
  el.value = copyThis.toString()
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
}

export const tagToSlug = (tag: string) => {
  return tag
    .toLowerCase() // convert to lowercase
    .replace(/[^a-zA-Z0-9\s]/g, '') // remove non-alphanumeric characters
    .replace(/\s+/g, '-') // replace spaces with hyphens
    .replace(/-+/g, '-') // replace consecutive hyphens with a single hyphen
}
