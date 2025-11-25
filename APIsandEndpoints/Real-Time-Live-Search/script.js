$(function() {
  const $input = $('#search');
  const $results = $('#results');
  const $loading = $('#loading');
  const $noResults = $('#no-results');

  const API_BASE = 'http://localhost:3001'; // change port if you ran json-server on different port
  let debounceTimer = null;
  const DEBOUNCE_MS = 250;

  function renderProducts(products) {
    $results.empty();
    if (!products || products.length === 0) {
      $noResults.prop('hidden', false);
      return;
    }
    $noResults.prop('hidden', true);

    products.forEach(p => {
      const $li = $(`
        <li>
          <img src="${p.image}" alt="${p.name}" />
          <div class="product-info">
            <div class="product-name">${p.name}</div>
            <div class="product-price">₹${Number(p.price).toFixed(2)}</div>
          </div>
        </li>`);
      $results.append($li);
    });
  }

  function showLoading(show) {
    if (show) $loading.show();
    else $loading.hide();
  }

  function search(query) {
    // Use the json-server q= full-text query param
    // Example: GET /products?q=shoe
    showLoading(true);
    $.ajax({
      url: `${API_BASE}/products`,
      method: 'GET',
      data: { q: query },
      dataType: 'json',
      success: function(data) {
        renderProducts(data);
      },
      error: function(xhr, status, err) {
        console.error('Search error', err);
        $results.empty();
        $noResults.text('Error fetching results').prop('hidden', false);
      },
      complete: function() {
        showLoading(false);
      }
    });
  }

  // Live search with debounce
  $input.on('input', function() {
    const val = $(this).val().trim();

    // If you want to search only when length>=1, add check here:
    // if (val.length === 0) { $results.empty(); $noResults.prop('hidden', true); return; }

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      search(val);
    }, DEBOUNCE_MS);
  });

  // Initial: optional - show all products on load
  // search('');
});
