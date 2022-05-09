function sentencify(words) {
  let fLetter = words[0][0].toUpperCase() 
  let fWord = fLetter + words[0].slice(1,)
  let newArr = []
  newArr.push(fWord)
  for (let i = 1; i < words.length; i++){
    newArr.push(words[i])
  }
  return newArr.join(' ') + '.'
 
}
