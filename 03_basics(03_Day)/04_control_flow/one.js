// const temperature = 40
// if( temperature < 50){
//     console.log("less than 50");
// }else{
//     console.log("greater than 50")
// }

// <, >, <=, >=, ==, !=,  ===, !===

// const socre = 200

// if(socre > 100){
//     let power = "fly"
//     console.log(`user power:${power}`);
// }
// console.log(`user power:${power}`);

// const balance = 700
// // if( balance > 500) console.log("test"),console.log("test2");//aap aaise code nahi likha sakte kiuki unreadable code ise scope likhana hoga karli baracket bitar

// if (balance < 500){
//     console.log("less than 500")
// }else if (balance < 750){
//     console.log("less than 750");
// }else if ( balance < 900){
//     console.log("less than 900");
// }else {
//     console.log("less than 1200");

// }

const userloggedIn = true;
const debitcard = true;
const loggedInfromGoogle = false;
const loggedInfromEmail = true;

if (userloggedIn && debitcard) {
  //And ststement both statement is true ho na chahiya
  console.log("allow to buy a course");
}

// if (loggedInfromGoogle || loggedInfromEmail) {// or statement isme once statement alway true
//   console.log("allow to acess the accounts");
// }

// logical operator [&&(AND),||(OR)]