/* Big O Notation 

What is it? -> Simplified analysis of an algorithm's efficiency
** 1. Complexity in terms of input size, N 
** 2. machine-independent
** 3. basic computer steps of the code
** 4. Use to analyse time & space

-> Big O Looks at only worst case when measuring efficiency

General Rules
1. Ignore constants
  5n -> O(N) *as n gets large the 5 doesn't matter
2. Certain terms 'dominate' others (bigocheatsheet.com)
  O(1) < O(logN) < O(N) < O(NlogN) < O(N^2) < O(2^N) < O(N!)
  ie. ignore or drop low-order terms dominated by higher ones
*/

/* ------------------------------------------------------*/
/* ------------------------------------------------------*/
/*  O(1) — “Order 1” -> Constant-Time Algorithm
O(1) describes an algorithm that will always execute in the same time (or space) regardless of the size of the input data set. */

/* Ex. 
x = 5 + (15 * 20)
 -independent of input size, N  
 
x = 5 + (15 * 20)  -> O(1)
y = 15 - 2         -> O(1)
console.log(x + y) -> O(1)
 total time = O(1) + O(1) + O(1) = 3*O(1) => O(1)
  *Since remove constanst we remove 3
 */

//Example code:
const getLast = items =>
  items[items.length-1];

//Example case:
getLast(['a', 'b', 'c', 'd']); // d (1 iteration)
getLast(['a', 'b', 'c', 'd', 'e', 'f', 'g']);// g(1 iteration)  

/* ------------------------------------------------------*/
/* ------------------------------------------------------*/
/* O(N) — “Order N” -> Linear-Time Algorithm
O(N) describes an algorithm whose performance will grow linearly and in direct proportion to the size of the input data set. In other words, for N elements we will require N iterations.
*/

/* Ex.1 
for(let i=0; i<=n; i++) { -> O(n)
console.log(x)}  -> O(1)
 *So our code loops n times and console executes once -> N * O(1)
 * The BigO is N*O(1) => O(N)
 
Ex.2
y = 5 + (15 * 20)  --> O(1)
for(let i=0; i<=n; i++) { -> O(n)
console.log(x) } -> O(1)

total time = O(1) + (O(n) + O(1))
           = O(1) + O(n)
           = O(n) 
*Remember that we drop Low-Order terms, so we only look at the highest order term which here is O(n)
  */

//Example code:
const findIndex = (items, match) => {
  for (let i = 0, total = items.length; i < total; i++)
    if (items[i] == match)
      return i;
   return -1;
};

//Example case:
const array= ['a', 'b', 'c', 'd'];
findIndex(array, 'a'); // 0  (1 iteration - best case)
findIndex(array, 'd'); // 3  (4 iterations - worst case)
findIndex(array, 'e'); // -1 (4 iterations - worst case)

/* ------------------------------------------------------*/
/* ------------------------------------------------------*/
/* O(N^2) — “Order N squared” -> Quadratic-Time Algorithm
O(N^2) For this kind of order, the worst case time (iterations) is the square of the number of inputs. The time grows exponentially related to the number of inputs.
*/

/* Ex.1 
const addAndLog = (array) => {  -> O(1)
  for(let i=0; i<=array.length; i++) {  -> O(n)
    for(let j=0; j<= array.length; i++){ -> O(n)
      console.log(array[i] + array[j]);
    }
  }
}
total time = O(1) + (O(N) * O(N)) -> nested forLoop
           = O(N) * O(N)
           = O(N^2)

**SO 
=> for loop inside a for loop gives us O(n)*O(n) = O(N^2)
* So we don't need to add the constants O(1)
* Our final BigO is O(N^2) 

addAndLog(['a', 'b', 'c']);  => 9 pairs logged Out
addAndLog(['a', 'b', 'c', 'd']);  => 16 pairs logged Out
addAndLog(['a', 'b', 'c', 'd', 'e']);  => 25 pairs logged Out
*/

//Example code:
const build2Matrix = items => {
  let matrix = [];
  for (let i = 0, total = items.length; i < total; i++){ 
    matrix[i] = [];
    for (let j = 0, total = items.length; j < total; j++)
      matrix[i].push(items[j]);
  }
  return matrix;
};

//Example case:
build2Matrix(['a', 'b', 'c']); 
/* 9 iterations for 3 elements, returns:
[
  ['a', 'b', 'c'],
  ['a', 'b', 'c'],
  ['a', 'b', 'c']
]
*/
build2Matrix(['a', 'b', 'c', 'd']); 
/* 16 iterations for 4 elements, returns:
[
  ['a', 'b', 'c', 'd'],
  ['a', 'b', 'c', 'd'],
  ['a', 'b', 'c', 'd']
]
*/

/* ------------------------------------------------------*/
/* ------------------------------------------------------*/
/* O(log n) — “Order log N” -> Logarithmic-Time Algorithm
O(N^2) is one of the most efficient approach when dealing with large collections. Instead of looking through the components one by one, they split the data in chunks and discard a large amount on every iteration, usually the half, or log base 2.
Assuming we are using a log base 2, we could -ideally- find a specific element in a collection of one million elements using less than 20 iterations, if we scale the size of the collection to a billion we would require only less than 30 iterations.
The most popular of this algorithms is the Quicksort algorithm, which can be used to find a specific element or sort a list very efficiently. Another popular example of this order is the Merge-Sort algorithm.
*/

// Example
const binarySearch = (array, key) => {
  let low = 0;
  let high = array.length - 1;
  let mid;
  let element;
  while(low <= high) {
    mid = Math.floor((low + high) / 2, 10);
    element = array[mid];
    if(element < key) {
      low = mid + 1;
    } else if(element > key) {
      high = mid - 1;
    } else {
      return mid;
    }
    return -1;
  }
}

/* Think about looking for a word in the dictionary, (ie. HOUSE)you would open the dictionary in the middle and flip the pages closer to the begining in chuncks (not single page) at a time until your closer to HOUSE where you begin to turn page by page.

 ie. ABCDEFGHIJKLMNOPQRSTUVWXYZ
     ABCDEFGHIJKLM
           GHIJKLM
           GHI
            H
            
 So instead of performing 26 operations to Get to H, we only needed to perform 4 operations.
-> As our input grows the number of operations doesn't grow proportionally but logarithmically
 */