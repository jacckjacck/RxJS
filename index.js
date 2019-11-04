var button = document.querySelector('button');

//Using RxJS for handling click button event
Rx.Observable.fromEvent(button, 'click').subscribe(
  (event) => console.log(event)
);