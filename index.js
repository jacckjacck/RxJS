//Get input instance from DOM
var input = document.querySelector('input');

//Creates the observable from input event
var observable = Rx.Observable.fromEvent(input, 'input');

/**
 * debounceTime allow to emit values from the observable only 
 * after a specific time without emitting event from source
 * 
 */
observable
    .debounceTime(4000)
    .subscribe({
        next: (event$) => {
            console.log(event$.target.value);
        }
    });