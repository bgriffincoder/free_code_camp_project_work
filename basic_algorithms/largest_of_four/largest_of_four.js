(function () {
    var numStorage = [];
    var largestOfFour = function (myNumArray) {
        for (var i = 0; i < myNumArray.length; i++) {
            var max = Math.max.apply(Math, myNumArray[i]);
            numStorage[i] = max;
        }
        return numStorage;
    };
    largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
})();
