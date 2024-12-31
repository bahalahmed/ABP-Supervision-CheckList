const validateSection3 = () => {
    let isValid = true;

    const sectionsToValidate = [
        'regularMO',
        'contractualMO',
        'regularDentalMO',
        'contractualDentalMO',
        'regularStaffNurse',
        'contractualStaffNurse',
        'regularPharmacists',
        'contractualPharmacists',
        'regularLabTechnician',
        'contractualLabTechnician',
        'regularLHV',
        'contractualLHV',
        'regularCHO',
        'contractualCHO',
        'regularMPWMale',
        'contractualMPWMale',
        'regularMPWFemale',
        'contractualMPWFemale',
        'regularASHA',
        'contractualASHA',
    ];

    sectionsToValidate.forEach((sectionId) => {
        if (!validateSection(sectionId)) isValid = false;
    });

    return isValid;
};

const validateSection = (sectionId) => {
    let isValid = true;

    // Get the section element
    const section = document.getElementById(sectionId);
    const sanctionedInputs = section.querySelectorAll('[id$="-sanctioned"]');
    const availableInputs = section.querySelectorAll('[id$="-available"]');

    // Validate Sanctioned and Available fields
    sanctionedInputs.forEach((sanctionedInput) => {
        const inputId = sanctionedInput.id;
        const errorElement = document.getElementById(`error-${inputId}`);
        const maxSanctioned = parseInt(sanctionedInput.getAttribute('max'), 10) || 10;

        if (!sanctionedInput.value || parseInt(sanctionedInput.value) < 0 || parseInt(sanctionedInput.value) > maxSanctioned) {
            errorElement.textContent = `Sanctioned value must be between 0 and ${maxSanctioned}.`;
            sanctionedInput.classList.add('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
            isValid = false;
        } else {
            errorElement.textContent = '';
            sanctionedInput.classList.remove('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
        }
    });

    availableInputs.forEach((availableInput) => {
        const inputId = availableInput.id;
        const errorElement = document.getElementById(`error-${inputId}`);
        const sanctionedInputId = inputId.replace('-available', '-sanctioned');
        const sanctionedInput = document.getElementById(sanctionedInputId);

        if (
            !availableInput.disabled &&
            (!availableInput.value ||
                parseInt(availableInput.value) < 0 ||
                parseInt(availableInput.value) > parseInt(sanctionedInput.value))
        ) {
            errorElement.textContent = `Available value must be between 0 and the Sanctioned value (${sanctionedInput.value || 0}).`;
            availableInput.classList.add('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
            isValid = false;
        } else {
            errorElement.textContent = '';
            availableInput.classList.remove('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
        }
    });

    // Separate Training Validation Logic
    if (!validateTrainings(sectionId, availableInputs)) {
        isValid = false;
    }

    return isValid;
};

const validateTrainings = (sectionId, availableInputs) => {
    let isValid = true;

    // Find the associated training container using the section ID
    const trainingContainerId = `${sectionId}-trainingsContainer`; // Adjust this logic based on your actual ID structure
    const trainingsContainer = document.getElementById(trainingContainerId);

    // Check if any available value is greater than 0
    const hasAvailableValues = Array.from(availableInputs).some((input) => parseInt(input.value || '0') > 0);

    if (trainingsContainer) {
        trainingsContainer.style.display = hasAvailableValues ? 'block' : 'none';

        if (hasAvailableValues) {
            // Validate Training fields
            const trainingFields = trainingsContainer.querySelectorAll('[id$="Training"]');
            trainingFields.forEach((trainingField) => {
                const inputId = trainingField.id;
                const errorElement = document.getElementById(`error-${inputId}`);
                const maxTrainingValue = parseInt(trainingField.getAttribute('max'), 10) || 10;

                if (
                    !trainingField.value ||
                    parseInt(trainingField.value) < 0 ||
                    parseInt(trainingField.value) > maxTrainingValue
                ) {
                    errorElement.textContent = `Value must be between 0 and ${maxTrainingValue}.`;
                    trainingField.classList.add('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                    isValid = false;
                } else {
                    errorElement.textContent = '';
                    trainingField.classList.remove('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                }
            });

            // Validate "Specify Other Trainings" text input
            const otherTrainingsField = trainingsContainer.querySelector('[id$="OtherTrainings"]');
            if (otherTrainingsField) {
                const errorElement = document.getElementById(`error-${otherTrainingsField.id}`);
                const minLength = parseInt(otherTrainingsField.getAttribute('minlength'), 10) || 2;
                const maxLength = parseInt(otherTrainingsField.getAttribute('maxlength'), 10) || 100;
                const valueLength = otherTrainingsField.value.trim().length;

                if (valueLength < minLength || valueLength > maxLength) {
                    errorElement.textContent = `Text must be between ${minLength} and ${maxLength} characters.`;
                    otherTrainingsField.classList.add('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                    isValid = false;
                } else {
                    errorElement.textContent = '';
                    otherTrainingsField.classList.remove('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                }
            }
        }
    }

    return isValid;
};

// Usage Example
function validateAndNext(section) {
    if (validateSection3()) {
        document.getElementById(`section${section}`).classList.add('hidden');
        const nextSection = document.getElementById(`section${section + 1}`);
        if (nextSection) {
            nextSection.classList.remove('hidden');
        }
    }
}
