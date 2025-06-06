// for

// for(let i =1; i <= 10; i++){
//     const elment = i;
//     if(elment == 5){
//         console.log("5 is best number")
//     }
//     console.log(i);
    
// }

for(let i = 1 ; i <= 10; i++){
    // console.log(`outer loop Value:${i}`);
    for( let j = 1; j <= 10; j++){
        // console.log(`Inner Loop value:${j} and inner loop outer ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
        
    }
    
}

let myArray = ["flash", "batman", "ironman", "hulk"]
// console.log(myArray.length);


for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}



// break and continue

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log(`detected 5`);
//          break;
//     }
// console.log(`value of i is ${index}`);

    
// }

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`detected 5`);
         continue; //ak bar mai skip karuga baki at is same print karu ga
    }
console.log(`value of i is ${index}`);

    
}