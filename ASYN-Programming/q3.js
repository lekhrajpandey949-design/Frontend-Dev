// Q3 – Bug Tracker: Callback to Promise Migration
// Converts old callback API to Promise-based getBugs() and simulates random failure.

function fetchBugs(callback) {
  setTimeout(() => callback(['UI glitch', 'API timeout', 'Login failure']), 1000);
}

// Promise-based version
function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const apiFailed = Math.random() < 0.2; // 20% chance to fail
      if (apiFailed) return reject(new Error('Failed to fetch bugs (simulated)'));
      resolve(['UI glitch', 'API timeout', 'Login failure']);
    }, 1000);
  });
}

// Use the promise
getBugs()
  .then(bugs => {
    console.table(bugs.map((bug, idx) => ({ id: idx + 1, bug })));
  })
  .catch(err => {
    console.error('Error fetching bugs:', err.message);
  });
