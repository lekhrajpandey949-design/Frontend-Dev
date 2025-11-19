(function() {
    const container = document.createElement('div');
    container.style.maxWidth = '600px';
    container.style.margin = '20px auto';
    container.style.fontFamily = 'Arial, sans-serif';

    const coordsDisplay = document.createElement('div');
    coordsDisplay.textContent = 'Mouse coordinates: X: 0, Y: 0';
    coordsDisplay.style.marginBottom = '20px';
    coordsDisplay.style.fontSize = '18px';

    const box = document.createElement('div');
    box.style.width = '400px';
    box.style.height = '400px';
    box.style.border = '2px solid #000';
    box.style.position = 'relative';
    box.style.backgroundColor = '#f0f0f0';

    container.appendChild(coordsDisplay);
    container.appendChild(box);
    document.body.appendChild(container);

    box.addEventListener('mousemove', (e) => {
        const rect = box.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        coordsDisplay.textContent = `Mouse coordinates: X: ${Math.round(x)}, Y: ${Math.round(y)}`;
    });

    box.addEventListener('dblclick', (e) => {
        const rect = box.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const dot = document.createElement('div');
        dot.style.position = 'absolute';
        dot.style.width = '10px';
        dot.style.height = '10px';
        dot.style.backgroundColor = 'red';
        dot.style.borderRadius = '50%';
        dot.style.left = `${x - 5}px`;
        dot.style.top = `${y - 5}px`;
        box.appendChild(dot);
    });
})();