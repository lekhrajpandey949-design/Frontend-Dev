(function() {
    const container = document.createElement('div');
    container.style.maxWidth = '200px';
    container.style.margin = '20px auto';
    container.style.fontFamily = 'Arial, sans-serif';
    container.style.position = 'relative';

    const button = document.createElement('button');
    button.textContent = 'Select an option';
    button.style.width = '100%';
    button.style.padding = '10px';
    button.style.border = '1px solid #ccc';
    button.style.backgroundColor = '#fff';
    button.style.cursor = 'pointer';
    button.style.textAlign = 'left';

    const optionsList = document.createElement('ul');
    optionsList.style.listStyle = 'none';
    optionsList.style.padding = '0';
    optionsList.style.margin = '0';
    optionsList.style.border = '1px solid #ccc';
    optionsList.style.borderTop = 'none';
    optionsList.style.backgroundColor = '#fff';
    optionsList.style.position = 'absolute';
    optionsList.style.width = '100%';
    optionsList.style.display = 'none';
    optionsList.style.zIndex = '1';

    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
    options.forEach(optionText => {
        const li = document.createElement('li');
        li.textContent = optionText;
        li.style.padding = '10px';
        li.style.cursor = 'pointer';
        li.addEventListener('click', () => {
            button.textContent = optionText;
            optionsList.style.display = 'none';
        });
        li.addEventListener('mouseover', () => {
            li.style.backgroundColor = '#f0f0f0';
        });
        li.addEventListener('mouseout', () => {
            li.style.backgroundColor = '#fff';
        });
        optionsList.appendChild(li);
    });

    container.appendChild(button);
    container.appendChild(optionsList);
    document.body.appendChild(container);

    button.addEventListener('click', () => {
        optionsList.style.display = optionsList.style.display === 'none' ? 'block' : 'none';
    });

    document.addEventListener('click', (e) => {
        if (!container.contains(e.target)) {
            optionsList.style.display = 'none';
        }
    }, true);
})();