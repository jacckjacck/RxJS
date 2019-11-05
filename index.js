/**
 * Subject is a kind of RxJS observable wich main functionality is 
 * allow milticasting, it means, each observer will receive 
 * the same data stream.
 */

 //Subject instance
var subject = new Rx.Subject();

//Subscribe to the Subject (Subcription #1)
subject.subscribe({
    next: (value) => {
        console.log(value);
    },
    error: (error) => {
        console.log(error);
    },
    complete: () => {
        console.log('Complete');
    }
});

//Subscribe to the Subject (Subcription #2)
subject.subscribe({
    next: (value) =>{
        console.log(value);
    }
});

// Emit new data from subject observable
subject.next('New data is comming');