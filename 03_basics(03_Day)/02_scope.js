// var c = 300 // global scope // var diffuilt karsakta hai jab different coder can code in group which make debugging time.
// let a = 300

// if (true) {
//     let a = 10;//local scope 
//     const b = 20;
//     console.log("INNER:", a);   
// }
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// console.log(a);
// console.log(b);
// console.log(c);




function one(){
    const username = "sujan"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}
 one()



 if(true){
    const username = "pc sujan";
    if(username === "pc sujan"){
        const website = " youtube";
        // console.log( username + website);
    }
    // console.log(website);  
 }
//  console.log(username);


// **************interesting*********************

function oneadd(num){
    return num + 1;
}
oneadd(5);

//  console.log(oneadd(5));

 
 const addTwo = function(num){ //variable which hold any thing like function,arry ,jesan value (expression)
    return num + 2;
 }

 addTwo(5)// isame before initialization cannot access.
