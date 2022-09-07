const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  if(word === null ){
    return null
  }

 if(word === undefined){
    return undefined
  }
  else
  return startWord + word
}
module.exports = fillStartWord

console.log(fillStartWord('1-2565-','Hello World'))
console.log(fillStartWord('JS','beginner'))
console.log(fillStartWord('first',null))
console.log(fillStartWord('first',undefined))
