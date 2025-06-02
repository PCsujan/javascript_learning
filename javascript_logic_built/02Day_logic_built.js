// write a program  that print "hello world "on console

console.log("Hello World");

//write function to take input as two number and calculate sum.

function Sum(a, b){
    return a + b ;
}
// console.log(Sum(2,4));
// console.log(Sum(234, 456));


//write a function to calculate area of rectangle 

function Area(length, width){
   const Area = length * width ;
    console.log(Area);
}

 Area(4, 5);
// Area(15, 15);
// Area(-12, -5);
// Area(4, -5);


// write function to check given number is even or EvenorOdd.

function EvenorOdd(number){
    if(number % 2 ===0){
        console.log("the given number is even");
    } else{
        console.log("the given number is odd")
    }
}

// EvenorOdd(5);
// EvenorOdd(8);
// EvenorOdd(3456);
// EvenorOdd(253645);

//write function to check among three interger which one is smaller number.

function checksmallerNo(a, b, c) {
  if (a <= b && a <= c) {
    console.log("smaller number is", a);
  } else if (b <= c && b <= a) {
    console.log("smaller number is", b);
  } else {
    console.log("smaller number is:", c);
  }
}
// console.log(checksmallerNo(5, 3, 8));
// console.log(checksmallerNo(52423, 2434563, 8243));

//write a function to reverse string 

// function Reverse(inputString){
//   const  splitInput = inputString.split('');
//   const Reversearray = inputString.Reverse('');
//   const result = Reversearray;
//   console.log(Reversearray);
// }
// console.log(Reverse("hello"));

function reverse(inputString){
    let result = "";
    for(let i = inputString.length-1; i >= 0; i--){
       result = result + inputString[i];

    }
    return result ;
}

console.log(reverse("sujan"));
console.log(reverse("purushottam chaudhary"));

//write a function to calculate factorials of number.

function factorials(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}
console.log(factorials(4));
