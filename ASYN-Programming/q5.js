// Q5 – Frontend Rush: Avoiding Callback Hell
// Stage durations: 1 second each. First: nested callbacks (callback hell). Second: async/await version.

// Helper async stage generator
function stage(name) {
  return function(cb) {
    setTimeout(() => {
      console.log(name);
      cb();
    }, 1000);
  };
}

// Nested callbacks version (callback hell)
function pipelineWithCallbacks() {
  stage('design')(function() {
    stage('build')(function() {
      stage('test')(function() {
        stage('deploy')(function() {
          stage('celebrate')(function() {
            console.log('Callback pipeline finished');
          });
        });
      });
    });
  });
}

// Async/await version
function stagePromise(name) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(name);
      resolve();
    }, 1000);
  });
}

async function pipelineWithAsyncAwait() {
  try {
    await stagePromise('design');
    await stagePromise('build');
    await stagePromise('test');
    await stagePromise('deploy');
    await stagePromise('celebrate');
    console.log('Async/await pipeline finished');
  } catch (err) {
    console.error('Pipeline error:', err.message);
  }
}

// Run both (callbacks first, then async/await after a short delay)
pipelineWithCallbacks();

setTimeout(() => {
  console.log('--- Starting async/await pipeline ---');
  pipelineWithAsyncAwait();
}, 7000);

// Comment: async/await improves readability by making asynchronous code look like synchronous linear code,
// removing deeply nested callback levels and making error handling with try/catch straightforward.
