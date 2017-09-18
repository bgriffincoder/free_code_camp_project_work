(function() {

    let factorialize = (myNum: number) => {
        let counter: number = 1;
        for (let i = 0; i < myNum; i++) {
            counter = counter * (i + 1);
        }
        return counter;
    }

    factorialize(5);
    factorialize(10);
    factorialize(20);
    factorialize(0);

})();