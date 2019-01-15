// Takes in a string as a perameter and reverses every word in that string and return the new string


const reverseWord = (str) => {
  let revWord = str.split('').reverse().join('')
  console.log(revWord)
}

const revSentance = (str) => {
  let revSentance = str.split(' ').reverse().join(' ')
  console.log(revSentance)
}

const reverseWordOnly = (str) => {
  let revWord = str.split('')
}

reverseWord('apple are')
revSentance('I really like apples')


// Answer -> Not using reverse() 
const reverseWordAns = (str) => {
  let revWord = str.split(' ')
  let newWords = []

  revWord.map(word => {
    let reverseWord = '';
    // Loop starts at last char of string, and we move backwords to the first char in string
    for(let i=word.length-1; i>=0; i--) {
      reverseWord += word[i];
    }
    newWords.push(reverseWord);
  });
  let joinedWord = newWords.join(' ')
  console.log(joinedWord)
}

reverseWordAns('I really like apples')