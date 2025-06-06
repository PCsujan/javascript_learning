// const coding = ["js", "ruby", "java", "python", "cpp"];

// const value = coding.forEach( (iteam) => {//foeeach return na hi karta hai
//     // console.log(iteam);
//     return iteam;
// })
// console.log(value);


const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNUm = myNum.filter((num) => num > 4)// filter ondar callfunction milega  har value each acess kiya jayga lekin usake bad diya jaiga condition jo jo log us condition satification or true hogi jo jo value ki return kiya jaiga orna nahi karegi
// const newNUm = myNum.filter((num) => {//scope return likha jaiga
//    return num >4
// })


// const newNUm = []

// myNum.forEach((num) => {
//     if (num > 5) {
//         newNUm.push(num)
        
//     }
// } )
// console.log(newNUm); 


const books = [
  { title: "Book one", genre: "fiction",publish:1981,edition:2004 },
  { title: "Book two", genre: "Non-fiction",publish:1992,edition:2008 },
  { title: "Book three", genre: "History",publish:1999,edition:2007 },
  { title: "Book four", genre: "Non-friction",publish:1989,edition:2010 },
  { title: "Book five", genre: "science",publish:2009,edition:2014 },
  { title: "Book six", genre: "fiction",publish:1987,edition:2010 },
  { title: "Book seven", genre: "History",publish:1987,edition:1996},
  { title: "Book eight", genre: "fiction",publish:1986,edition:2016 },
  { title: "Book nine", genre: "science",publish:2011,edition:1989 },
];


// const userBooks = books.filter((bk) => bk.genre === 'History')
const userBooks = books.filter((bk) => bk.publish >= 1995 && bk.genre === "History")

console.log(userBooks);