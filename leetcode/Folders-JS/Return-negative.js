//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?




function makeNegative(num) {
    
    if(num > 0 ){
        return -1 * num ;
    }
    else{
        return num;
    }
    }
///////////////////////////////////////////////////////////////////




    function makeNegative(num) {
        return num > 0 ? -num : num ;
        }