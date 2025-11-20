// Q8 – Order Processing Flow: Async Retry Mechanism
// submitOrder fails 50% of the time. processOrder tries up to 3 times.

function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) return reject(new Error('Random submit failure'));
      resolve('Order submitted successfully');
    }, 500 + Math.floor(Math.random() * 1500)); // 500-1999 ms
  });
}

async function processOrder() {
  const maxAttempts = 3;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      await submitOrder();
      console.log(`Attempt ${attempt}: Success`);
      return;
    } catch (err) {
      console.log(`Attempt ${attempt}: Failed`);
      if (attempt === maxAttempts) {
        throw new Error('Order could not be processed');
      }
      // small backoff before retrying
      await new Promise(r => setTimeout(r, 500));
    }
  }
}

(async () => {
  try {
    await processOrder();
    console.log('Order processed successfully.');
  } catch (err) {
    console.error(err.message);
  }
})();
