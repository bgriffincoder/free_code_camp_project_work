(function () {
    var length = 0;
    var longestWord = "";
    let findLongestWord = (myWordString: string) => {
        myWordString.split(" ").forEach(function(word){
            if(word.length > length) {
              length = word.length;
              longestWord = word;
            }
          });
    return length;    
    }

    findLongestWord("The quick brown fox jumped over the lazy dog")


})();