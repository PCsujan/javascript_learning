
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNUmbers(number1, number2){  //this is call parameters function define banauda taking input string,numbers etc.
//     console.log(number1 + number2);
    
// }

// addTwoNUmbers(4, 5) // this is arguments jab function call garda value pass garxau .

function addTwoNUmbers(number1, number2){ // value stores ganko lagi console.log nahi karsakte.
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNUmbers(6, 7)
// console.log("Result:", result);


function loginUserMessage(username = "sam"){//defualt value set garyau bhane if condition vitra jadai jan adi value pass garxu sam override gare newvalue dekhauxa.
    if(username === undefined){ //if(!username){} same nai ho both
        console.log("Please enter a username");
        return
        }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Hitesh"));
// console.log(loginUserMessage());


function calculateCartPrice(...num1){ // (...) is rest and spread operater jo multiple value  pass karte hai array or object .
    return num1
}
// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "hitesh",
    price: 199
    // prices: 199// ku difficult ho sakta hai jo price ke me prices ho jayato.
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));



