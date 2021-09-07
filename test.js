// let c = 0;
// let done = 0;
// let a = setInterval(function () {
//     if (!done) {
//         console.log(c++);
//     }
// }, 200);
//
//
// setTimeout(function() {
//     clearInterval(a);
// }, 2000);

//render queue -> render is given higher priority then every other callback function
//something like it will render every 16 seconds
//60fps 60 frames per second


//let a = [1, 2, 3, 4];
//
// a.forEach((val) => {
//     console.log(val);
// });

//Asynchronous
// function asyncForEach(array, cb) {
//     let d = 100;
//     array.forEach(function(val) {
//         console.log(val);
//        setTimeout(cb, 0);
//     });
// }
//
// asyncForEach(a, function(val) {
//     console.log(val);
//     //console.log(d);
// });
//
// function calling(cal) {
//     let d = 12;
//     setTimeout(function() {
//         console.log('this is the value of : ' + d);
//     }, 2000);
// }
// calling();








// setTimeout(function() {
//     done = 1;
// }, 2000);

// while (!done) {
//     console.log(c++);
// }
//
//
// console.log('are you doing something 1');
// (function () {
//     console.log('are you doing something 2');
// })();
// console.log('are you doing something 3');

// function calling(d, cal) {
//     (function (){
//         cal(13);
//     })();
// }
//
//
// calling(1, function (data) {
//     console.log(data);
// });


/*
synchronus
Asynchronus callbacks
concurrency and event loop
stack webapis eventloop taskqueue
 */

