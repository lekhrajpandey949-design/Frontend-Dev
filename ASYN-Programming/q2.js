// Q2 – Task Scheduler: Micro vs Macro Challenge
// Demonstrates order of execution of synchronous logs, microtasks (Promise.then), and macrotasks (setTimeout).

console.log('Start');

setTimeout(() => {
  console.log('setTimeout macrotask');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise microtask');
});

console.log('Synchronous log');

console.log('End');

// Explanation:
// Microtasks (Promise callbacks) run after the current stack completes but before the event-loop proceeds to the next macrotask.
// Therefore the execution order will be:
// Start
// Synchronous log
// End
// Promise microtask
// setTimeout macrotask
// (This is why microtasks run before macrotasks.)
