//using the interval built-in RxJS observable
// emiting a tick every second
var observale = Rx.Observable.interval(1000);

var observer = {
    next: (value) => {
        console.log(value);
    }
};

/*using map operator for transforming each value that is getting from the observable
 the map operator returns a new observable and it's passed to the subscribe method
*/
observale
    .map( (value) => {
        return `New value is ${value * 1.25}`;
    })
    .subscribe(observer); 