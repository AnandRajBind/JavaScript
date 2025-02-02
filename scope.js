// var c=300; // global scope/variable 

let a=300;
if(true){
    let a=10;// local/block  scope/variable
    const b=20;
    var c=30;
    // c=30;
    console.log("inner", a);
    
}

console.log(a);
// console.log(b);
// console.log(c);
