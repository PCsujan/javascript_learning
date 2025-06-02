// immediately invoked functipon expression(IIFE) ()declation()excution
/**golabal scope se polution kaibar problem hotai hai  jo golbal polution hatane ke liya hamne iife used kiya(jo funtion immdelatly excution ho jay) */

(function chai(){
    //named iife
    console.log("DB connected");
})();//immdiately invoked hogaya ise pata nahi hota hai kaha rokani chahiya so rokaneke liya hamko (;)

( (name) => {//argument leliya
    console.log(`DB CONNECTED TWO ${name}`);
})('pc sujan')//parameter dediya