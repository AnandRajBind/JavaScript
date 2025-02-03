const userEmail= [];

if(userEmail){
    console.log("Got User Email");
}
else{
    console.log("Dont Have User Email");
}

// false values( false value  ake aise value hoti hai jise assume ker liya jata hai ki ye false hi hogi).

/* 
false
null
undefined
NaN
0
-0
""
BingInt 0n
*/ 

// truthy values( truthy value ake aisi value hoti hai jise assume ker liya jata hai ki true hi hogi)
/*
[]
"0"
" "
'false'
{}
function(){}
*/
 
if(userEmail.length ===0){// check array empty or not 
    console.log("Array is empty");
}

const 