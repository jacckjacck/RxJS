// Creates a built-in observable
var observable = Rx.Observable.interval(1000);

/**
 * Filter operator, filter data and only allow to pass events which 
 * condition returns true, otherwise the event is skipped
 */
observable
    .filter( (value) =>{
        return value % 2 == 0;
    })
    .subscribe({
        next: (value) => {
            console.log(value);
        },
        error: (error) => {
            console.log(error);
        }
    });