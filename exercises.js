
// For each of the functions lised below, indicate the O notation as well as your reasoning behind the answer.

// 1. Even or odd

function isEven(value){
    if (value % 2 == 0){
      return true;
    }
    else
      return false;
  }

 //Constant Time Complexity - O(1), whether you give it a small number or a really big number, it still just does a quick check and gives you the answer without taking longer for bigger numbers."
  

  
// 2. Are You Here?
  
  function areYouHere(arr1, arr2) {
      for (let i=0; i<arr1.length; i++) {
          const element1 = arr1[i];
          for (let j=0; j<arr2.length; j++) {
              const element2 = arr2[j];
              if (element1 === element2) return true;
          }
      }
      return false;
  }

 //Quadratic Time Complexity - O(n^2), here yo have a nested array, where you have a nested loop on an O(n) operation inside of and O(n) operation. As n grows larger,the runtime grows even larger, it grows n*n
  
  
// 3. Doubler
  
  function doubleArrayValues(array) {
      for (let i=0; i<array.length; i++) {
          array[i] *= 2;
      }
      return array;
  }

//Linear Time Complexity - O(n), the size of the array increases so the time increases to execute the function. The larger the n, the more work the function and/or program has to do. 

  
// 4. New Search
  
  function newSearch(array, item) {
      for (let i=0; i<array.length; i++) {
          if (array[i] === item) {
              return i;
          }
      }
  }

//Linear Time Complexity -  O(n), because it iterates through the array once, and the time taken is directly proportional to the size of the array.
  
  
// 5. Creating Pairs
  
  function createPairs(arr) {
      for (let i = 0; i < arr.length; i++) {
          for(let j = i+1; j < arr.length; j++) {
              console.log(arr[i] + ", " +  arr[j] );
          }
      }
  }

//Quadratic Time Complexity - O(n^2), everytime I see a nested loop I'm considering it a quadratic. You have a nested loop on an O(n) operation inside of and O(n) operation. As n grows larger,the runtime grows even larger, it grows n*n
  

  
// 6. Computing Fibonacci Numbers
  
  function generateFib(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
      if (i === 1) {
        result.push(0);
      }
      else if (i == 2) {
        result.push(1);
      }
      else {
        result.push(result[i - 2] + result[i - 3]);
      }
    }
    return result;
  }
 //Linear Time Complexity -  O(n), because it iterates through the array once, and the time taken is directly proportional to the size of the array. The time it takes to make the list grows at the same rate as the size of the list.

  
// 7. Efficient Search
  
  function efficientSearch(array, item) {
      let minIndex = 0;
      let maxIndex = array.length - 1;
      let currentIndex;
      let currentElement;
  
      while (minIndex <= maxIndex) {
          currentIndex = Math.floor((minIndex + maxIndex) / 2);
          currentElement = array[currentIndex];
  
          if (currentElement < item) {
              minIndex = currentIndex + 1;
          }
          else if (currentElement > item) {
              maxIndex = currentIndex - 1;
          }
          else {
              return currentIndex;
          }
      }
      return -1;
  }

  //Logarithmic Time Complexity -  O(log n) - This function implements a binary search algorithm. In a binary search, the algorithm repeatedly divides the search interval in half, reducing the size of the search space by half with each iteration.
  

// 8. Random element
  
  function findRandomElement(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
  }

//Constant Time Complexity - O(1), This conclusion is reached because regardless of the size of the input array (arr), the time it takes for the function to execute remains constant.
  
  
// 9. Is It Prime?
  
  function isPrime(n) {
      if (n < 2 || n % 1 != 0) {
          return false;
      }
      for (let i = 2; i < n; ++i) {
          if (n % i == 0) return false;
      }
      return true;
  }
 //Linear Time Complexity -  O(n), for this function means that as the size of the number you're checking (let's call it "n") gets larger, the time it takes for the function to run also increases at about the same rate. 
  
  
// 10. Factorial of a number w/ recursion
  
  function factorialOf(n) {
      switch (n) {
          case 0:
          case 1:
              return 1;
          default: return n * factorialOf(n - 1);
      }
  }

  //Linear Time Complexity -  O(n), For the base case (when n is 0 or 1), the function returns immediately, regardless of the input. So, it takes constant time, which we can consider as O(1).
  
  
  