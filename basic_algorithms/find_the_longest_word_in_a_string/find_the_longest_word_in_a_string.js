(function () {
    var length = 0;
    var longestWord = "";
    var findLongestWord = function (myWordString) {
        myWordString.split(" ").forEach(function (word) {
            if (word.length > length) {
                length = word.length;
                longestWord = word;
            }
        });
        return length;
    };
    console.log(findLongestWord("May the force be with you"));
})();
