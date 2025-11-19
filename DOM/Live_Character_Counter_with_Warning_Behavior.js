(function() {
    const container = document.createElement('div');
    container.style.maxWidth = '400px';
    container.style.margin = '20px auto';
    container.style.fontFamily = 'Arial, sans-serif';

    const textarea = document.createElement('textarea');
    textarea.placeholder = 'Type here...';
    textarea.style.width = '100%';
    textarea.style.height = '100px';
    textarea.style.padding = '10px';
    textarea.style.boxSizing = 'border-box';
    textarea.style.resize = 'vertical';

    const counter = document.createElement('div');
    counter.textContent = '100 characters remaining';
    counter.style.marginTop = '10px';
    counter.style.fontSize = '14px';
    counter.style.color = 'green';

    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reset';
    resetButton.style.padding = '10px 20px';
    resetButton.style.marginTop = '10px';
    resetButton.style.backgroundColor = '#f44336';
    resetButton.style.color = 'white';
    resetButton.style.border = 'none';
    resetButton.style.cursor = 'pointer';

    container.appendChild(textarea);
    container.appendChild(counter);
    container.appendChild(resetButton);
    document.body.appendChild(container);

    const maxChars = 100;

    function updateCounter() {
        const remaining = maxChars - textarea.value.length;
        counter.textContent = `${remaining} characters remaining`;

        if (remaining <= 0) {
            counter.style.color = 'red';
        } else if (remaining <= 20) {
            counter.style.color = 'orange';
        } else {
            counter.style.color = 'green';
        }
    }

    textarea.addEventListener('input', updateCounter);

    textarea.addEventListener('keydown', (e) => {
        if (textarea.value.length >= maxChars && e.key !== 'Backspace' && e.key !== 'Delete' && !e.ctrlKey) {
            e.preventDefault();
        }
    });

    resetButton.addEventListener('click', () => {
        textarea.value = '';
        updateCounter();
    });

    updateCounter();
})();