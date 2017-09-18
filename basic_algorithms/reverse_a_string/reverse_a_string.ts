(function() {

let reverseString = (myString: string) => {
    let arrayOfStrings = myString.split("").reverse().join("");
    return arrayOfStrings;
}

reverseString("hello");
reverseString("Howdy");
reverseString("Greetings from Earth");

})(); 