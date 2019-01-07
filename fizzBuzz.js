//Write a program that prints the numbers from 1 to 100. If it’s a multiple of 3, it should print “Fizz”. If it’s a multiple of 5, it should print “Buzz”. If it’s a multiple of 3 and 5, it should print “Fizz Buzz”.


const fizzBuzz = (num) => {
  for(let i=1; i<=num; i++){
    if(i%15 === 0) {
      console.log('FizzBuzz')
    } else if(i%3 === 0) {
      console.log('Fizz')
    } else if(i%5 === 0) {
      console.log('Buzz')
    } else {
      console.log(i)
    }
  }
}

fizzBuzz(100)

// Solution 2
const fizzBuzz2 = (num) => {
  for(var i=1; i<=num; i++){
    var output = '';
    if(i%3 == 0) { output += 'Fizz';}
    if(i%5 == 0) { output += 'Buzz';}
    if(output == '') {output = i;}
    console.log(output);
  }
}

fizzBuzz2(100)



