// Q4 – DevOps Delay: Async Timeout Race
// Server A responds in 2s, Server B in 3s. Use Promise.all and Promise.race with random failure simulation.

function serverA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error('Server A failed'));
      resolve('Server A response (2s)');
    }, 2000);
  });
}

function serverB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error('Server B failed'));
      resolve('Server B response (3s)');
    }, 3000);
  });
}

// Promise.all
Promise.all([serverA(), serverB()])
  .then(results => {
    console.log('Deployment completed for all servers');
    console.log('Results:', results);
  })
  .catch(err => {
    console.error('Deployment (all) failed:', err.message);
  });

// Promise.race
Promise.race([serverA(), serverB()])
  .then(fastest => {
    console.log('Fastest response:', fastest);
  })
  .catch(err => {
    console.error('Race failed:', err.message);
  });
