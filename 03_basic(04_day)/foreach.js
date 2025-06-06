const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// coding.forEach( function (item) {
//     console.log(item);
// })

// coding.forEach(  (item) => {
//     console.log(item);
    
// })

// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme) // Referance dena hai execution mat karna


// coding.forEach( (item, index, array)=>{
//     console.log(item, index, array);
    
// })



const mycoding = [
  {
    languageName: "javascript",
    langaugeFileName: "js",
  },
  {
    languageName: "java",
    langaugeFileName: "jkd",
  },
  {
    languageName: "python",
    langaugeFileName: "pyth",
  }
];

mycoding.forEach((iteam) => {
    console.log(iteam.languageName);//aapne array andar object andar ka value nikaliya 
    
})