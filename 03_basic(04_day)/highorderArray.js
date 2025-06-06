// for of
// ["",  "",  ""]
// [{},  {},  {}]


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
    
}

const greeting = "hello world!"
for (const greter of greeting) {
    // console.log(greter);
    
    
}


// maps-> it like a object which hold unique id value in same order and also no repated value 

 const map = new Map()
 map.set('Nep', "Nepal")
 map.set('IN', "India")
 map.set('USA', "United States of America")
 map.set('Fr',"France")
//  map.set("Nep", "Nepal");

// console.log(map)

// for (const [key, value] of map) { //destructure
//     console.log(key, ':-',value);
    
// }

const MyObject= { //object is not iterable 
    'game1': 'NFS',
    'game2': 'spiderman'
}
// for (const [key, value] of MyObject) {
//     console.log(key, ":-", value);
     
// }