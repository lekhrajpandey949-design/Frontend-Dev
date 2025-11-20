// Q7 – The Lazy Loader: Promise.allSettled()
// Load profile, posts, messages with different timing. Randomly reject one promise.
// Measure total time taken.

function loadProfile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.25) return reject('Profile failed');
      resolve('Profile Loaded');
    }, 2000);
  });
}

function loadPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.25) return reject('Posts failed');
      resolve('Posts Loaded');
    }, 1500);
  });
}

function loadMessages() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.25) return reject('Messages failed');
      resolve('Messages Loaded');
    }, 1000);
  });
}

async function loadAllModules() {
  const startTime = Date.now();
  const results = await Promise.allSettled([loadProfile(), loadPosts(), loadMessages()]);
  const endTime = Date.now();

  results.forEach((res, idx) => {
    const name = ['Profile', 'Posts', 'Messages'][idx];
    if (res.status === 'fulfilled') {
      console.log(`${name}: succeeded -> ${res.value}`);
    } else {
      console.log(`${name}: failed -> ${res.reason}`);
    }
  });

  console.log('Total time (ms):', endTime - startTime);
}

loadAllModules();
