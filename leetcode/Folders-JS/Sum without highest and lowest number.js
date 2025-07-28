//Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).




//حل المسئلة الصح


function SumWithoutHighestAndLowestNumber(arr){

    if(arr == null) return 0 ;
    return arr.sort((a,b) => a-b).slice(1 ,-1).reduce((acc , current)  => acc+current , 0);

}
SumWithoutHighestAndLowestNumber([ 2 , 2 , 3 , 5 , 6 ,10]);













// function SumWithoutHighestAndLowestNumber(arr){

//     if(arr == null){
//         return 0 ;
//     }
//     for(var i = 0 ; i < arr.length ; i++){
//         greaterThan = (num) => num > [i];
//         smallerThan = (num) => num < [i];
//     }
//     let resultGreater = arr.find(greaterThan);
//     let resultSmaller = arr.find(smallerThan);
//     let filterArrays = arr.filter((number) => number !== resultGreater &&  number !== resultSmaller );
//     let sum = 0 ;
//     for(var i = 0 ; i < filterArrays.length ; i++){
//         sum += filterArrays[i];
//     }   
//     return sum;

// }
// console.log(SumWithoutHighestAndLowestNumber([ 2 , 2 , 3 , 5 , 6 ,10]));









// function SumWithoutHighestAndLowestNumber(arr){

//     if(arr == null) return 0 ;
//     let maxValue = Math.max(...arr);
//     let minValue = Math.min(...arr);
//     let filterArrays = arr.filter((number) => number !== maxValue &&  number !== minValue );
//     let newArrays = filterArrays.reduce((acc , current)=> acc + current  ,0)
//     return newArrays;

// }
// console.log(SumWithoutHighestAndLowestNumber([ 2 , 2 , 3 , 5 , 6 ,10]));



