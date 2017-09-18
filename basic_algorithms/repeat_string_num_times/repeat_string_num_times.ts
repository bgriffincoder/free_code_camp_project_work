(function() { 
    let repeatStringNumTimes = (myString: string, numRepeat: number) => {
        let stringContainer: string = "";
        if(numRepeat < 0) {
            return "";
        } else {
            for (let i = 1; i <= numRepeat; i++  ) {
                stringContainer += myString;
            }
            return stringContainer;
        }
        
    }
    repeatStringNumTimes("*", 3);
    repeatStringNumTimes("abc", 3);
    repeatStringNumTimes("abc", 4);
    repeatStringNumTimes("abc", 1);
    repeatStringNumTimes("*", 8);
    repeatStringNumTimes("abc", -2);
})();