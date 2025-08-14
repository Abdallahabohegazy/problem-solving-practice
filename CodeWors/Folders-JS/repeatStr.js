//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.



function repeatString(number , str){
    let newString = '';
    for(var i = 0 ; i <=  number ; i++){
        newString +=  str ;
    }
return newString;
}
console.log(repeatString(5 , 'Hello'));
/////////////////////////////////////////////////////
function repeatString(number , str){
    return str.repeat(number);
}
console.log(repeatString(5 , 'Hello'));