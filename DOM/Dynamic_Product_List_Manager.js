(function() {
    const container = document.createElement('div');
    container.style.maxWidth = '600px';
    container.style.margin = '20px auto';
    container.style.fontFamily = 'Arial, sans-serif';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter product name';
    input.style.padding = '10px';
    input.style.width = '70%';
    input.style.marginRight = '10px';

    const addButton = document.createElement('button');
    addButton.textContent = 'Add Product';
    addButton.style.padding = '10px 20px';
    addButton.style.backgroundColor = '#4CAF50';
    addButton.style.color = 'white';
    addButton.style.border = 'none';
    addButton.style.cursor = 'pointer';

    const ul = document.createElement('ul');
    ul.style.listStyle = 'none';
    ul.style.padding = '0';
    ul.style.marginTop = '20px';

    container.appendChild(input);
    container.appendChild(addButton);
    container.appendChild(ul);
    document.body.appendChild(container);

    function createProductItem(text) {
        const li = document.createElement('li');
        li.style.display = 'flex';
        li.style.alignItems = 'center';
        li.style.padding = '10px';
        li.style.border = '1px solid #ddd';
        li.style.marginBottom = '5px';
        li.style.backgroundColor = '#f9f9f9';

        const span = document.createElement('span');
        span.textContent = text;
        span.style.flexGrow = '1';
        span.style.marginRight = '10px';

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.style.padding = '5px 10px';
        editButton.style.marginRight = '5px';
        editButton.style.backgroundColor = '#2196F3';
        editButton.style.color = 'white';
        editButton.style.border = 'none';
        editButton.style.cursor = 'pointer';

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.padding = '5px 10px';
        deleteButton.style.backgroundColor = '#f44336';
        deleteButton.style.color = 'white';
        deleteButton.style.border = 'none';
        deleteButton.style.cursor = 'pointer';

        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        return li;
    }

    addButton.addEventListener('click', () => {
        const productName = input.value.trim();
        if (productName) {
            const li = createProductItem(productName);
            ul.appendChild(li);
            input.value = '';
        }
    });

    ul.addEventListener('click', (e) => {
        const target = e.target;
        const li = target.closest('li');
        if (!li) return;

        if (target.textContent === 'Edit') {
            const span = li.querySelector('span');
            const input = document.createElement('input');
            input.type = 'text';
            input.value = span.textContent;
            input.style.flexGrow = '1';
            input.style.marginRight = '10px';
            input.style.padding = '5px';

            li.replaceChild(input, span);
            input.focus();
            input.select();

            const saveEdit = () => {
                span.textContent = input.value.trim() || span.textContent;
                li.replaceChild(span, input);
            };

            input.addEventListener('blur', saveEdit);

            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    saveEdit();
                }
            });

            const handleOutsideClick = (e) => {
                if (!li.contains(e.target)) {
                    saveEdit();
                    document.removeEventListener('click', handleOutsideClick);
                }
            };
            setTimeout(() => document.addEventListener('click', handleOutsideClick), 0);

        } else if (target.textContent === 'Delete') {
            ul.removeChild(li);
        }
    });
})();