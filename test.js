const validations = {
    section1: () => {
        let isValid = true;

        const fieldsToValidate = [
            { id: 'dateOfVisit', errorMessage: 'Date of Visit is required.' },
            { id: 'state', errorMessage: 'State selection is required.' },
            { id: 'district', errorMessage: 'District selection is required.' },
            { id: 'block', errorMessage: 'Block selection is required.' },
            { id: 'villageWard', errorMessage: 'Village/Ward selection is required.' }
        ];

        const numberFields = [
            { id: 'villagesCovered', min: 0, max: 150, errorMessage: 'Villages/Wards must be between 0 and 150.' },
            { id: 'populationCovered', min: 4000, max: 500000, errorMessage: 'Population must be between 4000 and 500000.' }
        ];

        // Validate text/select inputs
        fieldsToValidate.forEach(field => {
            const inputElement = document.getElementById(field.id);
            const errorElement = document.getElementById(`error-${field.id}`);

            if (!inputElement) return;

            if (!inputElement.value || !inputElement.value.trim()) {
                // If input is empty, show error
                errorElement.textContent = field.errorMessage;
                inputElement.classList.add('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                inputElement.classList.remove('border-gray-300', 'focus:ring-indigo-500', 'focus:border-gray-300');
                isValid = false;
            } else {
                // If input is valid, clear the error
                errorElement.textContent = '';
                inputElement.classList.remove('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                inputElement.classList.add('border-gray-300', 'focus:ring-indigo-500', 'focus:border-gray-300');
            }
        });

        // Validate number inputs
        numberFields.forEach(field => {
            const inputElement = document.getElementById(field.id);
            const errorElement = document.getElementById(`error-${field.id}`);

            if (!inputElement) return;

            const value = parseInt(inputElement.value, 10);
            if (isNaN(value) || value < field.min || value > field.max) {
                // If input is out of range or not a number, show error
                errorElement.textContent = field.errorMessage;
                inputElement.classList.add('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                inputElement.classList.remove('border-gray-300', 'focus:ring-indigo-500', 'focus:border-gray-300');
                isValid = false;
            } else {
                // If input is valid, clear the error
                errorElement.textContent = '';
                inputElement.classList.remove('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                inputElement.classList.add('border-gray-300', 'focus:ring-indigo-500', 'focus:border-gray-300');
            }
        });

        if (!isValid) {
            alert('Please fill out all required fields correctly before proceeding.');
        }

        return isValid;
    }
};

// Add dynamic error handling for all input types (text, select, number, etc.)
document.querySelectorAll('input, select, textarea').forEach(element => {
    element.addEventListener('input', event => {
        const errorElement = document.getElementById(`error-${event.target.id}`);
        if (!errorElement) return;

        // Handle number inputs dynamically
        if (event.target.type === 'number') {
            const inputConfig = {
                villagesCovered: { min: 0, max: 150 },
                populationCovered: { min: 4000, max: 500000 }
            }[event.target.id];

            const value = parseInt(event.target.value, 10);
            if (!event.target.value.trim() || isNaN(value) || value < inputConfig.min || value > inputConfig.max) {
                errorElement.textContent = `Value must be between ${inputConfig.min} and ${inputConfig.max}.`;
                event.target.classList.add('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                event.target.classList.remove('border-gray-300', 'focus:ring-indigo-500', 'focus:border-gray-300');
            } else {
                errorElement.textContent = '';
                event.target.classList.remove('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                event.target.classList.add('border-gray-300', 'focus:ring-indigo-500', 'focus:border-gray-300');
            }
        }

        // Handle text/select inputs dynamically
        else {
            if (event.target.value.trim()) {
                errorElement.textContent = '';
                event.target.classList.remove('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                event.target.classList.add('border-gray-300', 'focus:ring-indigo-500', 'focus:border-gray-300');
            } else {
                errorElement.textContent = 'This field is required.';
                event.target.classList.add('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                event.target.classList.remove('border-gray-300', 'focus:ring-indigo-500', 'focus:border-gray-300');
            }
        }
    });
});

// Example usage of validateAndNext function
function validateAndNext(section) {
    if (validations[`section${section}`]()) {
        document.getElementById(`section${section}`).classList.add('hidden');
        const nextSection = document.getElementById(`section${section + 1}`);
        if (nextSection) {
            nextSection.classList.remove('hidden');
        }
    }
}

// Example of a save button functionality
document.querySelector('.save-next').addEventListener('click', () => validateAndNext(1));
