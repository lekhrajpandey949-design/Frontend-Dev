(function() {
    const themes = {
        light: {
            backgroundColor: '#ffffff',
            color: '#000000'
        },
        dark: {
            backgroundColor: '#333333',
            color: '#ffffff'
        },
        blue: {
            backgroundColor: '#e3f2fd',
            color: '#0d47a1'
        }
    };

    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '20px';
    container.style.right = '20px';
    container.style.zIndex = '1000';

    const buttons = ['Light', 'Dark', 'Blue'];
    buttons.forEach(theme => {
        const button = document.createElement('button');
        button.textContent = theme;
        button.style.padding = '10px 20px';
        button.style.margin = '5px';
        button.style.border = 'none';
        button.style.cursor = 'pointer';
        button.style.borderRadius = '5px';
        button.addEventListener('click', () => switchTheme(theme.toLowerCase()));
        container.appendChild(button);
    });

    document.body.appendChild(container);

    function switchTheme(themeName) {
        const theme = themes[themeName];
        document.body.setAttribute('data-theme', themeName);
        document.body.style.backgroundColor = theme.backgroundColor;
        document.body.style.color = theme.color;
    }

    const savedTheme = document.body.getAttribute('data-theme') || 'light';
    switchTheme(savedTheme);
})();