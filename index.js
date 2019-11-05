//Creates the observable from input event
var observable = Rx.Observable.of(1,2,3,4,5);


/**
 * reduce operator apply a function for a entry stream sequentially
 * when input stream completes, it returns the acummulated value
 * */
observable
    .reduce( (total, currentValue) => {
        return total+currentValue;
    },0)
    .subscribe({
        next: (value) => {
            console.log(value)
        }
    });


/**
 * scan operator apply a function for a entry stream sequentially
 * and it returns each emitted value in an accumulative way
 * */
observable
    .scan( (total, currentValue) => {
        return total+currentValue;
    },0)
    .subscribe({
        next: (value) => {
            console.log(value)
        }
    });