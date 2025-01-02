if (fieldType === 'sanctioned') {
    const sanctionedValue = parseInt(event.target.value, 10);
    if (isNaN(sanctionedValue) || sanctionedValue <= 0) {
        availableInput.setAttribute('disabled', true);
        availableInput.value = ''; // Clear available field
        errorElement.textContent = 'Sanctioned value must be greater than 0.';
        if (trainingContainer) trainingContainer.style.display = 'none'; // Hide training container if it exists
    } else {
        availableInput.removeAttribute('disabled'); // Enable available input
        errorElement.textContent = ''; // Clear error message
    }
} else if (fieldType === 'available') {
    const sanctionedValue = parseInt(sanctionedInput?.value || 0, 10);
    const availableValue = parseInt(event.target.value, 10);
    if (isNaN(availableValue) || availableValue <= 0 || availableValue > sanctionedValue) {
        errorElement.textContent = `Available value must be between 1 and ${sanctionedValue}.`;
        if (trainingContainer) trainingContainer.style.display = 'none'; // Hide training container if it exists
    } else {
        errorElement.textContent = ''; // Clear error message
        if (trainingContainer) trainingContainer.style.display = 'block'; // Show training container if it exists
    }
}
