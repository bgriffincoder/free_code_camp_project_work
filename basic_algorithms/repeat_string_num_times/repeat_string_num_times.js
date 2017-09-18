(function () {
    var repeatStringNumTimes = function (myString, numRepeat) {
        var stringContainer = "";
        if (numRepeat < 0) {
            return "";
        }
        else {
            for (var i = 1; i <= numRepeat; i++) {
                stringContainer += myString;
            }
            return stringContainer;
        }
    };
    repeatStringNumTimes("*", 3);
    repeatStringNumTimes("abc", 3);
    repeatStringNumTimes("abc", 4);
    repeatStringNumTimes("abc", 1);
    repeatStringNumTimes("*", 8);
    repeatStringNumTimes("abc", -2);
})();
