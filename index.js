//Get input instance from DOM
var input = document.querySelector('input');

//Creates the observable from input event
var observable = Rx.Observable.fromEvent(input, 'input');

/**
 * pluck is applied to objects, and it allow to access to the 
 * object properties, something similar to map but more readable
 */
observable
    .pluck('target', 'value')
    .debounceTime(500)
    .distinctUntilChanged() 
    .subscribe({
        next: (value) => {
            console.log(value);
        }
    });