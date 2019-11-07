//Get button instance from DOM
var button = document.querySelector('button');

var span = document.querySelector('span');

//Creates the observable from input event
var observable1 = Rx.Observable.fromEvent(button, 'click');
var observable2 = Rx.Observable.interval(1000);


/**
 * mergeMap operator allow us to merge two observables
 * but each new stream that is emitted, the previous stream is cancelled
 */
 observable1.switchMap(
     event$ => {
         return observable2;
     }
 ).subscribe(
     value => console.log(value)
 );
