var button = document.querySelector('button');

//Using RxJS for handling click button event, only each one second
Rx.Observable.fromEvent(button, 'click')
    .throttleTime(1000)
    .subscribe(
        (event) => console.log('button clicked')
    );