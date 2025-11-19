(function() {
    const container = document.createElement('div');
    container.style.maxWidth = '600px';
    container.style.margin = '20px auto';
    container.style.fontFamily = 'Arial, sans-serif';

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search students...';
    searchInput.style.width = '100%';
    searchInput.style.padding = '10px';
    searchInput.style.marginBottom = '20px';
    searchInput.style.boxSizing = 'border-box';

    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    ['Name', 'Branch', 'CGPA'].forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        th.style.border = '1px solid #ddd';
        th.style.padding = '8px';
        th.style.backgroundColor = '#f2f2f2';
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');

    const students = [
        { name: 'Alice Johnson', branch: 'CSE', cgpa: 8.5 },
        { name: 'Bob Smith', branch: 'ECE', cgpa: 7.8 },
        { name: 'Charlie Brown', branch: 'ME', cgpa: 9.0 },
        { name: 'Diana Prince', branch: 'CSE', cgpa: 8.2 },
        { name: 'Eve Adams', branch: 'CE', cgpa: 7.5 }
    ];

    students.forEach(student => {
        const row = document.createElement('tr');
        Object.values(student).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            td.style.border = '1px solid #ddd';
            td.style.padding = '8px';
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });

    table.appendChild(tbody);

    const noResults = document.createElement('div');
    noResults.textContent = 'No results found';
    noResults.style.textAlign = 'center';
    noResults.style.padding = '20px';
    noResults.style.display = 'none';
    noResults.style.color = '#888';

    container.appendChild(searchInput);
    container.appendChild(table);
    container.appendChild(noResults);
    document.body.appendChild(container);

    function filterTable() {
        const query = searchInput.value.toLowerCase();
        const rows = tbody.querySelectorAll('tr');
        let visibleCount = 0;

        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            if (text.includes(query)) {
                row.style.display = '';
                visibleCount++;
            } else {
                row.style.display = 'none';
            }
        });

        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }

    searchInput.addEventListener('input', filterTable);
})();