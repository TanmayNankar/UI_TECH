
// callback 

// let fun = () => {
//     console.log('fun message');
// }
// fun();

// let arg1 = () => { return 'fun message' }

// let fun = () => {
//     setTimeout(arg1, 1000);
// }

// let message = fun();
// console.log(message);

// let fun = () => {
//     setTimeout(() => {
//         return 'fun message';
//     } , 1000);
// }

// let message = fun();
// console.log(message);

let fun = () => {
    setTimeout(() => {
        return {message: 'fun message'};
    } , 1000);
}

let getFun = fun();
console.log(getFun.message);


//callback- function send arg to another Function
//line wait until first line to load 
