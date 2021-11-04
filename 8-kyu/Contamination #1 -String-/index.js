function contamination(text, char) {
  // Code here ;)
  for (let i = 0; i < text.length; i++) {
    if (text === '' || char === '') {
      return ''
    } else {
      text = text.replace(text[i], char)
    }
  }

  return text
}
