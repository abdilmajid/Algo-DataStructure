// You have been given two strings. You have to find out whether you can make up the first string with the words present in the second string.
/* Example
Note1: 'this is a secret note for you from a secret admirer'
Note2: 'this is a note for you from a secret admirer'
Magazine: 'puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice for you

/* Purpose is do we have enough words to create our note, If yes then algorithm returns true else it returns false.
* Note1 would return false because the word secret is used once in the Magazine but appears twice in Note1.
* Note2 Would retun true because all words needed could be found in the magazine.
*/


// 1st. Create 2 variables -> noteText, magazineText
// 2nd. Create arrays from the note & magazine variables using splite() method
// 3rd. Create magazine Object, want magazine object to have every word in the magazine array as a property on it, and for each word we want its value to be the number of times it appears in the magazine array. we build this object using a forEach loop on the magazine array.
// so in our forEach we loop through the magazineArr and check to see it the words is currently in the magazineObj. If the word is not we put it in the magazine object and set it equal to zero, If it does appear in the magazineObj we just increment it.

const harmlessRansomNote = (noteText, magazineText) => {
  let noteArr = noteText.split(' ');
  let magazineArr = magazineText.split(' ');
  let magazineObj = {}

  magazineArr.forEach(word => {
    if(!magazineObj[word]) {
      magazineObj[word] = 0;
      magazineObj[word]++;
    }
  });

// As we loop through the noteArr we want to check if each word is present on the magazineObj. If the word is not present we know we cant write the ransome note because we don't have the right words. If the word is present the we want to decrement that words value by 1 because we used that word for our note.
// 1st. set boolean variable to see if can make note.

  let noteIsPossible = true;
  noteArr.forEach(word => {
    if(magazineObj[word]) {
      magazineObj[word]--;
      if(magazineObj[word] < 0) {
        noteIsPossible = false;
      };
    } else {
      noteIsPossible = false;
    };
  });
    return noteIsPossible;
}

const note1 = 'this is a secret note for you from a secret admirer'
const note2 = 'this is a note for you from secret admirer'
const magazine = 'puerto rico is a great place you must hike far from this town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice for you';


console.log(harmlessRansomNote(note2, magazine))


// This algorithm has a Linear Time Complexity ie. BigO of O(N), eventhough we have two loops they are not nested