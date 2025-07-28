//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


function evenOrodd(number) {
    return number % 2 == 0 ? "Even" : "Odd" ; 
}

console.log(evenOrodd(5));