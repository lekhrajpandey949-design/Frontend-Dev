(function() {
    const container = document.createElement('div');
    container.style.maxWidth = '600px';
    container.style.margin = '20px auto';
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(3, 1fr)';
    container.style.gap = '10px';

    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
    modal.style.display = 'none';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';

    const modalImg = document.createElement('img');
    modalImg.style.maxWidth = '80%';
    modalImg.style.maxHeight = '80%';
    modal.appendChild(modalImg);

    const images = [
        'https://via.placeholder.com/200x200?text=Image+1',
        'https://via.placeholder.com/200x200?text=Image+2',
        'https://via.placeholder.com/200x200?text=Image+3',
        'https://via.placeholder.com/200x200?text=Image+4',
        'https://via.placeholder.com/200x200?text=Image+5',
        'https://via.placeholder.com/200x200?text=Image+6'
    ];

    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.style.width = '100%';
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            modalImg.src = src;
            modal.style.display = 'flex';
        });
        container.appendChild(img);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    modalImg.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    document.body.appendChild(container);
    document.body.appendChild(modal);
})();