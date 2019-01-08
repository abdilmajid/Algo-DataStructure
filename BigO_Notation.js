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

/*  O(1) — “Order 1” -> Constant-Time Algorithm
O(1) describes an algorithm that will always execute in the same time (or space) regardless of the size of the input data set. */

//Example code:
const getLast = items =>
  items[items.length-1];

//Example case:
getLast(['a', 'b', 'c', 'd']); // d (1 iteration)
getLast(['a', 'b', 'c', 'd', 'e', 'f', 'g']);// g(1 iteration)  

/* ------------------------------------------------------*/
/* O(N) — “Order N” -> Linear-Time Algorithm
O(N) describes an algorithm whose performance will grow linearly and in direct proportion to the size of the input data set. The example below also demonstrates how Big O favours the worst-case performance scenario; a matching string could be found during any iteration of the for loop and the function would return early, but Big O notation will always assume the upper limit where the algorithm will perform the maximum number of iterations.
*/


/* ------------------------------------------------------*/



/* ------------------------------------------------------*/


/* ------------------------------------------------------*/