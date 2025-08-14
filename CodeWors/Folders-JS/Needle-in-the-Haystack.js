// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle



let x = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]

// function findNeedle(haystack) {
//     const index = haystack.indexOf("needle");
//     return haystack.includes("needle") ? `found the needle at position ${index}` : "not found"
// }

// OR 

function findNeedle(haystack) {
    const index = haystack.indexOf("needle");
    return index !== -1 ? `found the needle at position ${index}` : "not found"
}

console.log(findNeedle(x));