// Q6 – E-Commerce Dashboard: Product Card Fetcher
// Fetches product data from Fake Store API and logs Title, Price, Image.
// Use try/catch and prints an error message on failure.

async function fetchAndLogProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) throw new Error('Network response was not ok');
    const products = await response.json();

    products.forEach(product => {
      console.log('Product:', product.title);
      console.log('Price: $' + product.price);
      console.log('Image:', product.image);
      console.log('---');
    });

    // Bonus (optional) DOM rendering (uncomment when running in browser)
    /*
    const container = document.createElement('div');
    container.id = 'product-grid';
    products.forEach(p => {
      const card = document.createElement('div');
      const title = document.createElement('h3');
      const price = document.createElement('p');
      const img = document.createElement('img');

      title.textContent = p.title;
      price.textContent = '$' + p.price;
      img.src = p.image;
      img.alt = p.title;
      img.style.width = '150px';

      card.appendChild(title);
      card.appendChild(price);
      card.appendChild(img);
      container.appendChild(card);
    });
    document.body.appendChild(container);
    */
  } catch (err) {
    console.error('Failed to load products. Please try again.');
    console.error(err.message);
  }
}

fetchAndLogProducts();
