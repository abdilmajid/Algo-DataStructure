/*  type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet.
Example:  input string and number
caesarCipher("zoo keeper", 2) -> "bqq mggrgt"
caesarCipher("tall tree", 4) -> "xepp xvii"
** Cipher will also handle negative numbers
Ex. caesarCipher("tall tree", -4) -> "qxii qobb"
*/

/*
1st --> make strings lowerCase
2nd --> make refrence array (alphabet) for shifting
3rd -> Want to add newly shifted letter to a new string, So we use a forLoop and create a newString variable (initialy an empty string).
4th -> In the forLoop 1st thing we want to do is find the current letter
5th -> determine where current letter is in alphabet array ->currentIndex

**dealing extreme numbers ie. (< -26) or (> 26) etc... We would use the %
ie. num = num % 26
*/

const alphabet = 'abcdefghijklmnopqrstuvwxyz'

const caesarCipher = (str, num) => {
  num = num % 26;
  let lowerCaseString = str.toLowerCase()
  let alphaArr = alphabet.split('')
  let newString = '';

  for(let i=0; i<lowerCaseString.length; i++) {
    let currentLetter = lowerCaseString[i];
    if(currentLetter === ' ') {  // if current letter a space
      newString += currentLetter; // add space to string
      continue; // moves forLoop to next iteration
    }

    let currentIndex = alphabet.indexOf(currentLetter);
    // Index of new letter in alphabet array
    let newIndex = currentIndex + num;  
    if(newIndex > 25) {
      newIndex = newIndex - 26 // Loops index back to begining of alphabet
    } else if(newIndex < 0) {
      newIndex = 26 + newIndex // if using negative number input
    }
    // dealing with uppercase letters
    if(str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    } else {
      newString += alphabet[newIndex];
    }
  }

  console.log(newString)
}

caesarCipher("Tall Tree", 5)
caesarCipher("Yfqq Ywjj", -5)
caesarCipher("Zoo Keeper", 2)
caesarCipher("Javascript", -900)