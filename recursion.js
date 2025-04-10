let string = 'C\'mon!'
let recursOp = string.lastIndexOf(string);
let finalString = string.reverse

function reverseString(string) {
    if (string.length === 1) {
        return string;
    }       return string[string.length - 1] + reverseString(string.slice(0, -1));
}
 
console.log(reverseString("apple"));
console.log(reverseString("This is actually a lot of fun!"));