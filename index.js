//Get input instance from DOM
var input1 = document.querySelector('#input1');
var input2 = document.querySelector('#input2');

var span = document.querySelector('span');

//Creates the observable from input event
var observable1 = Rx.Observable.fromEvent(input1, 'input');
var observable2 = Rx.Observable.fromEvent(input2, 'input');


/**
 * mergeMap operator allow us to merge two observables
 */

observable1.mergeMap(
    (event1) => {
        return observable2.map( (event2) => 
            event1.target.value + ' '+  event2.target.value
        )
    }
).subscribe( (combinedValue) => {
    span.textContent = combinedValue;
});
