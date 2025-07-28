//You get an array of numbers, return the sum of all of the positives ones.





// var arr = []
// for(var i =0 ; i < 3 ; i++){
// var allNumber = Number(window.prompt('Enter your numbers'));
// arr.push(allNumber);
// }
// var sum = 0;
// for(var i =0 ; i < arr.length ; i++){
//     if(arr[i] > 0 ){
//         sum += arr[i];
//     }
//     }
//     console.log(sum);





/////////////////////////////////////////////
// function positiveSum(arr){
// var sum = 0;
// for(var i =0 ; i < arr.length ; i++){
//     if(arr[i] > 0 ){
//         sum += arr[i];
//     }
//     }
//     return sum ;

// }
// console.log(positiveSum([1,3,-1]));
/////////////////////////////////////////////////////






function positiveSum(arr){
    return arr.filter((x) => x > 0).reduce((acc ,current) => acc+ current , 0) ;
}

console.log(positiveSum([1,8,-1]));

