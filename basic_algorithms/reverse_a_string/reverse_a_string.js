(function () {
    var reverseString = function (myString) {
        var arrayOfStrings = myString.split("").reverse().join("");
        return arrayOfStrings;
    };
    reverseString("hello");
    reverseString("Howdy");
    reverseString("Greetings from Earth");
})();
