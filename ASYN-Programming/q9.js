// Q9 – Debugging the Event Loop
// Predict output then run to compare. Promises are microtasks and run before macrotasks (setTimeout).

/*
Predicted output order:
1. Script start
2. Script end
3. Promise callback
4. Timeout callback

Reason: Promise callbacks (microtasks) run after the current call stack completes (after "Script end"),
but before macrotasks (setTimeout) are processed.
*/

console.log('Script start');

setTimeout(() => console.log('Timeout callback'), 0);

Promise.resolve().then(() => console.log('Promise callback'));

console.log('Script end');
