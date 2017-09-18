(function(){
    let titleCase = (myUppercaseString: string) => {
        var words = myUppercaseString.split(" ");
        let wordStorage = [];
        let lowerCaseStorage = [];
        for (var i = 0; i < words.length; i++) {
            lowerCaseStorage[i] = words[i].toLowerCase();
            wordStorage[i] = lowerCaseStorage[i].charAt(0).toUpperCase() + lowerCaseStorage[i].slice(1);
          }
         return wordStorage.join(" ");       
    }
    titleCase("I'm a little tea pot");
    titleCase("sHoRt AnD sToUt");
    titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
})();
