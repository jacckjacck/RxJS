//Get input instance from DOM
var input = document.querySelector('input');

//Creates the observable from input event
var observable = Rx.Observable.fromEvent(input, 'input');

/**
 * debounceTime allow to emit values from the observable only 
 * after a specific time without emitting event from source
 * 
 * disctinctUntilChanged only emits values if data has some change
 */
observable
    .map( event$ => event$.target.value)
    .debounceTime(4000)
    .distinctUntilChanged() 
    .subscribe({
        next: (value) => {
            console.log(value);
        }
    });