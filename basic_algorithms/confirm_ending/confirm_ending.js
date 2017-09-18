(function () {
    //create a storage string
    var myStringArray = [];
    var confirmEnding = function (myCompareString, myTargetString) {
        //check if the compareString contains spaces
        if (/\s/.test(myCompareString)) {
            //split the string into array of strings
            myStringArray = myCompareString.split(" ");
            //check if the last string in the array equals the target string
            if (myStringArray[myStringArray.length - 1] === myTargetString) {
                return true;
            }
            else {
                //check if last string string the array contains a substring of the target string
                if (myStringArray[myStringArray.length - 1].includes(myTargetString)) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        else {
            //finds last letter of a single string and compares to target string
            if (myTargetString === myCompareString.substr(-1)) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    confirmEnding("Bastian", "n");
    confirmEnding("Connor", "n");
    confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");
    confirmEnding("He has to give me a new name", "name");
    confirmEnding("Open sesame", "same");
    confirmEnding("Open sesame", "pen");
    confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain");
})();
