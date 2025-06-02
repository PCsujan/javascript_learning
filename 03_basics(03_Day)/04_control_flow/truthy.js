const userEmail = []

if(userEmail){
    console.log("got user email.");
}else {
    console.log("Don't have a user emails.");
}

// falsy value
// false, 0, -0, BigInt 0n, "",null, undefined, NaN

// truthy value
// "0", 'false', " ", [], {}, function(){}


// if (userEmail.length === 0){
//     console.log("array is empty.");//array checking for empty 
// }

const emptyobj = {}
if (Object.keys(emptyobj).length === 0){
    console.log("Object is empty");

}

//  Nullish coalescing operator(): Null, undefined

let val;
// val = 5 ?? 10 
/* kai bar kaya hota hai aap database call karege specially firebase,
apright used directly response nahi milti hai aapko do value milti hai
 chance hai null value respose aajay, respose aaihi na undifined ho us case
 pura ke pura code structure parixan hosakta hai us case specially ya banaigaihai
ki value null ho usi hisab se tret karlu ya undifne thik hai orna value aajay
 to value assign karlu.*/
// val = null ?? 10
val = undefined ?? 15
val = null ?? 15 ?? 20



console.log(val);


//terniary operator 

// condition ? true : false 

const iceTeaPrice = 100 

iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80")