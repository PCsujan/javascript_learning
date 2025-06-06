const user = {
    username: "hitesh",
    price: 999,


    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); // this matalb current context refer karne ke liya.
        console.log(this);
        
    }

}

// console.log(this);// empty value deta hai kuki gobal variable defined nahikay isiliya empty object
// user.welcomeMessage()

// user.username = "sam"
// user.welcomeMessage()


// function chai(){  // content/value object kam karhi hai function na hi 
//     let username ='hitesh'
//     console.log(this.username);
    
// }
// chai()


// const  chai = function(){
//     let username = 'hitesh'
//     console.log(this.username)
// } 


/*const  chai = () => {//arrow function
    let username = 'hitesh'
    console.log(this);
} 
chai() */


// const addtwo = (num1,num2) => { // this is pure arrow function basic
//     return num1 +num2;

// } karli braket likhan hai return likhana pare ga

// console.log(addtwo(4, 5));


// const addtwo = (num1, num2) => num1 + num2;
// const addtwo = (num1, num2) => (num1 + num2);//paranthesi used karogi to return na hi likhana padega


const addtwo = (num1,num2) => ({username:"hitesh"});//ise me  object kaise parathesis me arrow function  return karte hai 

console.log(addtwo(4, 5));

// const myArray = [2,5,3,7,8]
// myArray.forEach()  yasb loop 