// Q1 – The Startup Morning: Async Coffee Maker
// Each step returns a Promise that resolves after 1–2 seconds. Random failures are simulated.

function randomDelay() {
  return 1000 + Math.floor(Math.random() * 1000); // 1000-1999 ms
}

function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error('Boiler failed'));
      console.log('Water boiled');
      resolve('Boiled water');
    }, randomDelay());
  });
}

function brewCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error('Brewing failed'));
      console.log('Coffee brewed');
      resolve('Brewed coffee');
    }, randomDelay());
  });
}

function pourIntoCup() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error('Cup broke'));
      console.log('Poured into cup');
      resolve('Coffee in cup');
    }, randomDelay());
  });
}

// Use Promise chaining
boilWater()
  .then(() => brewCoffee())
  .then(() => pourIntoCup())
  .then(() => {
    console.log('Coffee ready for the team!');
  })
  .catch(err => {
    console.error('Coffee preparation failed:', err.message);
  });
