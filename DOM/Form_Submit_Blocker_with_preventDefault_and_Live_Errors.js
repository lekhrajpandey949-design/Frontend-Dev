(function() {
    const container = document.createElement('div');
    container.style.maxWidth = '400px';
    container.style.margin = '20px auto';
    container.style.fontFamily = 'Arial, sans-serif';

    const form = document.createElement('form');

    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name:';
    nameLabel.style.display = 'block';
    nameLabel.style.marginBottom = '5px';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.style.width = '100%';
    nameInput.style.padding = '8px';
    nameInput.style.boxSizing = 'border-box';
    nameInput.style.marginBottom = '10px';
    const nameError = document.createElement('div');
    nameError.style.color = 'red';
    nameError.style.fontSize = '12px';
    nameError.style.marginBottom = '10px';

    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email:';
    emailLabel.style.display = 'block';
    emailLabel.style.marginBottom = '5px';
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.style.width = '100%';
    emailInput.style.padding = '8px';
    emailInput.style.boxSizing = 'border-box';
    emailInput.style.marginBottom = '10px';
    const emailError = document.createElement('div');
    emailError.style.color = 'red';
    emailError.style.fontSize = '12px';
    emailError.style.marginBottom = '10px';

    const passwordLabel = document.createElement('label');
    passwordLabel.textContent = 'Password:';
    passwordLabel.style.display = 'block';
    passwordLabel.style.marginBottom = '5px';
    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.style.width = '100%';
    passwordInput.style.padding = '8px';
    passwordInput.style.boxSizing = 'border-box';
    passwordInput.style.marginBottom = '10px';
    const passwordError = document.createElement('div');
    passwordError.style.color = 'red';
    passwordError.style.fontSize = '12px';
    passwordError.style.marginBottom = '10px';

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    submitButton.style.padding = '10px 20px';
    submitButton.style.backgroundColor = '#4CAF50';
    submitButton.style.color = 'white';
    submitButton.style.border = 'none';
    submitButton.style.cursor = 'pointer';

    const successMessage = document.createElement('div');
    successMessage.style.color = 'green';
    successMessage.style.marginTop = '20px';
    successMessage.style.display = 'none';

    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(nameError);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(emailError);
    form.appendChild(passwordLabel);
    form.appendChild(passwordInput);
    form.appendChild(passwordError);
    form.appendChild(submitButton);
    container.appendChild(form);
    container.appendChild(successMessage);
    document.body.appendChild(container);

    function validateName() {
        const value = nameInput.value.trim();
        if (!value) {
            nameError.textContent = 'Name is required';
            return false;
        }
        nameError.textContent = '';
        return true;
    }

    function validateEmail() {
        const value = emailInput.value.trim();
        if (!value) {
            emailError.textContent = 'Email is required';
            return false;
        }
        if (!value.includes('@')) {
            emailError.textContent = 'Email must contain @';
            return false;
        }
        emailError.textContent = '';
        return true;
    }

    function validatePassword() {
        const value = passwordInput.value;
        if (value.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters';
            return false;
        }
        passwordError.textContent = '';
        return true;
    }

    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        if (isNameValid && isEmailValid && isPasswordValid) {
            successMessage.textContent = `Form Submitted Successfully! Welcome, ${nameInput.value.trim()}`;
            successMessage.style.display = 'block';
            form.reset();
        }
    });
})();