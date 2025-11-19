(function() {
    const container = document.createElement('div');
    container.style.maxWidth = '400px';
    container.style.margin = '20px auto';
    container.style.fontFamily = 'Arial, sans-serif';
    container.style.border = '1px solid #ddd';
    container.style.padding = '20px';
    container.style.borderRadius = '5px';

    const steps = [
        { label: 'Name', type: 'text', placeholder: 'Enter your name' },
        { label: 'Email', type: 'email', placeholder: 'Enter your email' },
        { label: 'Password', type: 'password', placeholder: 'Enter your password' }
    ];

    let currentStep = 0;
    const formData = {};

    const stepIndicator = document.createElement('div');
    stepIndicator.style.marginBottom = '20px';
    stepIndicator.style.fontSize = '14px';
    stepIndicator.style.color = '#666';

    const inputContainer = document.createElement('div');
    inputContainer.style.marginBottom = '20px';

    const label = document.createElement('label');
    label.style.display = 'block';
    label.style.marginBottom = '5px';

    const input = document.createElement('input');
    input.style.width = '100%';
    input.style.padding = '10px';
    input.style.boxSizing = 'border-box';

    const error = document.createElement('div');
    error.style.color = 'red';
    error.style.fontSize = '12px';
    error.style.marginTop = '5px';

    inputContainer.appendChild(label);
    inputContainer.appendChild(input);
    inputContainer.appendChild(error);

    const buttonsContainer = document.createElement('div');
    buttonsContainer.style.display = 'flex';
    buttonsContainer.style.justifyContent = 'space-between';

    const backButton = document.createElement('button');
    backButton.textContent = 'Back';
    backButton.style.padding = '10px 20px';
    backButton.style.backgroundColor = '#ccc';
    backButton.style.border = 'none';
    backButton.style.cursor = 'pointer';
    backButton.style.display = 'none';

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.style.padding = '10px 20px';
    nextButton.style.backgroundColor = '#4CAF50';
    nextButton.style.color = 'white';
    nextButton.style.border = 'none';
    nextButton.style.cursor = 'pointer';

    buttonsContainer.appendChild(backButton);
    buttonsContainer.appendChild(nextButton);

    const summaryContainer = document.createElement('div');
    summaryContainer.style.display = 'none';

    container.appendChild(stepIndicator);
    container.appendChild(inputContainer);
    container.appendChild(buttonsContainer);
    container.appendChild(summaryContainer);
    document.body.appendChild(container);

    function updateStep() {
        const step = steps[currentStep];
        stepIndicator.textContent = `Step ${currentStep + 1} of ${steps.length}`;
        label.textContent = step.label;
        input.type = step.type;
        input.placeholder = step.placeholder;
        input.value = formData[step.label.toLowerCase()] || '';
        error.textContent = '';
        backButton.style.display = currentStep === 0 ? 'none' : 'block';
        nextButton.textContent = currentStep === steps.length - 1 ? 'Submit' : 'Next';
    }

    function validateStep() {
        const step = steps[currentStep];
        const value = input.value.trim();
        if (!value) {
            error.textContent = `${step.label} is required`;
            return false;
        }
        if (step.type === 'email' && !value.includes('@')) {
            error.textContent = 'Please enter a valid email';
            return false;
        }
        if (step.type === 'password' && value.length < 6) {
            error.textContent = 'Password must be at least 6 characters';
            return false;
        }
        error.textContent = '';
        return true;
    }

    nextButton.addEventListener('click', () => {
        if (validateStep()) {
            formData[steps[currentStep].label.toLowerCase()] = input.value.trim();
            if (currentStep < steps.length - 1) {
                currentStep++;
                updateStep();
            } else {
                inputContainer.style.display = 'none';
                buttonsContainer.style.display = 'none';
                summaryContainer.style.display = 'block';
                summaryContainer.innerHTML = `
                    <h3>Summary</h3>
                    <p>Name: ${formData.name}</p>
                    <p>Email: ${formData.email}</p>
                    <p>Password: ${'*'.repeat(formData.password.length)}</p>
                `;
            }
        }
    });

    backButton.addEventListener('click', () => {
        currentStep--;
        updateStep();
    });

    updateStep();
})();