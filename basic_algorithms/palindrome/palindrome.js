(function () {
    var palindrome = function (str) {
        var newString = str.replace(/[\W_]/ig, "").toLowerCase();
        var rev = newString.split("").reverse().join("");
        if (rev == newString) {
            return true;
        }
        else {
            return false;
        }
    };
    palindrome("not a palindrome");
    palindrome("nope");
    palindrome("almostomla");
    palindrome("1 eye for of 1 eye.");
    palindrome("five|\_/|four");
})();
