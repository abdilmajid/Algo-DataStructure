// Return true if A string is a Palindrome, return false if string is not a Palindrome.

// Can use Regex to solve but will use String & Array methods/manipulations

// Ignore any punctuation characters when testing if palindrome

/* 
1st. -> Turn every letter into lowercase version. b/c dont want to have  
issues with upper and lowercase versions of same letter 
2nd. -> Turn string into array using split('')
**Key => split() -> ["madam i'm adam"]
         split('') -> ["m","a","d","a",.....,"a","m"]
         split(' ') -> ["madam", "i'm", "adam"]
3rd -> create variable to store valid characters. This is to ignore punctuations and spaces.
4th -> takeout any charachter in array that's not a letter using forEach loop. 1st create a empty array(to store)

*indexOf() -> returns first index where element is found, So if indexOf > -1 then element exists, if indexOf <= -1 then element doesn't exist.

*/
const lowerCaseAlphabet = 'abcdefghijklmnopqrstuvqxyz'; 

const isPalindrome = (string) => {
  let lowerCase = string.toLowerCase()
  let toArray = lowerCase.split('')
  let validChar = lowerCaseAlphabet.split('')

  let lettersArr = [];
  toArray.map(char => { // Creating clean version of string
    if(validChar.indexOf(char) > -1) { // see if element exists
      lettersArr.push(char) // put element in new array
    }
  });
  if(lettersArr.join('') === lettersArr.reverse().join('')){
    return true
  } else {
    return false
  }
}

const testString = "Madam I'm Adam";
console.log(isPalindrome(testString))