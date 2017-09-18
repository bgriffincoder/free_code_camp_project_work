(function() {
    // Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
    
    // Note that inserting the three dots to the end will add to the string length.
    
    // However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.
    let truncateString = (myString: string, myMaxStrLength: number) => {
        //check if string argument is the same as maximum string length
        //or if maximum string length is bigger than string argument
        if(myString.length == myMaxStrLength || myMaxStrLength > myString.length) {
            return myString;
        }
        //check if maximum string length is less than 3
        else if(myMaxStrLength < 3) {
            let myStringStorage = myString.substr(0,myMaxStrLength)+"...";
            return myStringStorage;
        }
        //check if string argument is bigger than maximum string length
        else if(myString.length > myMaxStrLength) {
            let myStringStorage = myString.slice(0,myMaxStrLength-3)+"...";
            return myStringStorage;
        }        
    }
    truncateString("A-tisket a-tasket A green and yellow basket", 11);
    truncateString("Peter Piper picked a peck of pickled peppers", 14);
    truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
    truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
    truncateString("A-", 1);
    truncateString("Absolutely Longer", 2);
})();