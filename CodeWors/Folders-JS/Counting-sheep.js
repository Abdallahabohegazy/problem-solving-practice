//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).



function countSheeps(sheep) {
        var sum = 0;
    for(var i = 0 ; i < sheep.length ; i++){
        if(sheep[i] == true){
            sum += 1;
        }
    }
    return sum;
}
///////////////////////////////////////////////////////////////


function countSheeps(sheep) {
    var sum = 0;
    sheep.map((m) => {
        if(m === true){
            sum++
        }
    });
    return sum;
}




