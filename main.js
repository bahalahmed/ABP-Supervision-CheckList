const validations = {
    section1: () => {
        let isValid = true;

        // List of fields to validate
        const fieldsToValidate = [
            { id: 'dateOfVisit', errorMessage: 'Date of Visit is required.' },
            { id: 'state', errorMessage: 'State selection is required.' },
            { id: 'district', errorMessage: 'District selection is required.' },
            { id: 'block', errorMessage: 'Block selection is required.' },
            { id: 'villageWard', errorMessage: 'Village/Ward selection is required.' },
            { id: 'vhndSession', errorMessage: 'VHND Session selection is required.' }
        ];

        const vhndSection = document.getElementById('vhndSection');
        if (vhndSection && !vhndSection.classList.contains('hidden')) {
            const vhndFields = [
                { id: 'dueList', errorMessage: 'Due list selection is required.' },
                { id: 'riMicroPlan', errorMessage: 'RI Microplan selection is required.' },
                { id: 'bpInstrument', errorMessage: 'BP Instrument selection is required.' },
                { id: 'stethoscope', errorMessage: 'Stethoscope selection is required.' },
                { id: 'albendazole', errorMessage: 'Albendazole selection is required.' },
                { id: 'familyPlanning', errorMessage: 'Family planning services selection is required.' },
                { id: 'riProvided', errorMessage: 'RI provided selection is required.' },
                { id: 'weighingScale', errorMessage: 'Weighing scale availability is required.' },
                { id: 'vitaminASyrup', errorMessage: 'Vitamin A Syrup availability is required.' },
                { id: 'ancProvided', errorMessage: 'ANC provided selection is required.' },
                { id: 'growthMonitoring', errorMessage: 'Growth monitoring selection is required.' },
                { id: 'hemoglobinometer', errorMessage: 'Hemoglobinometer selection is required.' },
                { id: 'ifaTablets', errorMessage: 'IFA Tablets selection is required.' },
                { id: 'calciumTablets', errorMessage: 'Calcium Tablets selection is required.' },
                { id: 'pncProvided', errorMessage: 'PNC provided selection is required.' },
                { id: 'nutritionHealth', errorMessage: 'Nutrition and health promotion is required.' },
                { id: 'vaccinesCarrier', errorMessage: 'Vaccine carrier availability is required.' }
            ];
            fieldsToValidate.push(...vhndFields);
        }
        fieldsToValidate.forEach(field => {
            const inputElement = document.getElementById(field.id);
            const errorElement = document.getElementById(`error-${field.id}`);

            if (inputElement && (!inputElement.value || !inputElement.value.trim())) {
                if (errorElement) errorElement.textContent = field.errorMessage;
                inputElement.classList.add('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                inputElement.classList.remove('border-gray-300', 'focus:ring-indigo-500', 'focus:border-indigo-500');
                isValid = false;
            } else if (inputElement) {
                if (errorElement) errorElement.textContent = '';
                inputElement.classList.remove('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                inputElement.classList.add('border-gray-300', 'focus:ring-indigo-500', 'focus:border-gray-300');
            }
        });
        if (!isValid) {
            alert('Please fill out all required fields correctly before proceeding.');
        }

        return isValid;
    },
    section2: () => {
        let isValid = true;

        // Validation for Text Inputs
        const textInputs = [
            { id: 'ashaName', minLength: 2, maxLength: 30, errorMessage: 'ASHA Name must be between 2 and 30 characters.' }
        ];

        textInputs.forEach(input => {
            const inputElement = document.getElementById(input.id);
            const errorElement = document.getElementById(`error-${input.id}`);
            if (!inputElement.value.trim() || inputElement.value.length < input.minLength || inputElement.value.length > input.maxLength) {
                errorElement.textContent = input.errorMessage;
                inputElement.classList.add('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                inputElement.classList.remove('border-gray-300', 'focus:ring-indigo-500', 'focus:border-indigo-500');
                isValid = false;
            } else {
                errorElement.textContent = "";
                inputElement.classList.remove('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                inputElement.classList.add('border-gray-300', 'focus:ring-indigo-500', 'focus:border-indigo-500');
            }
        });

        // Validation for Number Inputs
        const numberInputs = [
            { id: 'highRiskPregnancies', min: 0, max: 80, errorMessage: 'Value must be between 0 and 80.' },
            { id: 'newbornsHBYC', min: 0, max: 80, errorMessage: 'Value must be between 0 and 80.' },
            { id: 'sickNewbornIdentified', min: 0, max: 80, errorMessage: 'Value must be between 0 and 80.' },
            { id: 'sickNewbornReferred', min: 0, max: 80, errorMessage: 'Value must be between 0 and 80.' },
            { id: 'tbCases', min: 0, max: 500, errorMessage: 'Value must be between 0 and 500.' },
            { id: 'ncdScreening', min: 0, max: 1000, errorMessage: 'Value must be between 0 and 1000.' }
        ];

        numberInputs.forEach(input => {
            const inputElement = document.getElementById(input.id);
            const errorElement = document.getElementById(`error-${input.id}`);
            if (!inputElement.value.trim() || inputElement.value < input.min || inputElement.value > input.max) {
                errorElement.textContent = input.errorMessage;
                inputElement.classList.add('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                inputElement.classList.remove('border-gray-300', 'focus:ring-indigo-500', 'focus:border-indigo-500');
                isValid = false;
            } else {
                errorElement.textContent = "";
                inputElement.classList.remove('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                inputElement.classList.add('border-gray-300', 'focus:ring-indigo-500', 'focus:border-indigo-500');
            }
        });

        // Validation for Dropdown Inputs
        const dropdownInputs = [
            { id: 'dangerSigns', errorMessage: 'Selection is required.' },
            { id: 'trainedHBYC', errorMessage: 'Selection is required.' },
            { id: 'ecSurvey', errorMessage: 'Selection is required.' },
            { id: 'ncdTraining', errorMessage: 'Selection is required.' },
            { id: 'contraceptiveAwareness', errorMessage: 'Selection is required.' },
            { id: 'dotProvider', errorMessage: 'Selection is required.' },
            { id: 'module6And7', errorMessage: 'Selection is required.' },
            { id: 'fpIndenting', errorMessage: 'Selection is required.' },
            { id: 'delayPayments', errorMessage: 'Selection is required.' }
        ];

        dropdownInputs.forEach(input => {
            const inputElement = document.getElementById(input.id);
            const errorElement = document.getElementById(`error-${input.id}`);
            if (!inputElement.value.trim()) {
                errorElement.textContent = input.errorMessage;
                inputElement.classList.add('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                inputElement.classList.remove('border-gray-300', 'focus:ring-indigo-500', 'focus:border-indigo-500');
                isValid = false;
            } else {
                errorElement.textContent = "";
                inputElement.classList.remove('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                inputElement.classList.add('border-gray-300', 'focus:ring-indigo-500', 'focus:border-indigo-500');
            }
        });

        if (!isValid) {
            alert('Please fill out all required fields correctly before proceeding.');
        }

        return isValid;
    }
};



function validateAndNext(section) {
    if (validations[`section${section}`]()) {
        document.getElementById(`section${section}`).classList.add('hidden');
        const nextSection = document.getElementById(`section${section + 1}`);
        if (nextSection) {
            nextSection.classList.remove('hidden');
        }
    }
}

document.querySelectorAll('select, input').forEach(element => {
    // Listen for both `change` and `input` events
    element.addEventListener('input', event => {
        const errorElement = document.getElementById(`error-${event.target.id}`);
        
        // For number inputs, validate the range dynamically
        if (event.target.type === 'number') {
            const inputConfig = {
                highRiskPregnancies: { min: 0, max: 80 },
                newbornsHBYC: { min: 0, max: 80 },
                sickNewbornIdentified: { min: 0, max: 80 },
                sickNewbornReferred: { min: 0, max: 80 },
                tbCases: { min: 0, max: 500 },
                ncdScreening: { min: 0, max: 1000 }
            }[event.target.id];
            const value = parseInt(event.target.value, 10);
            if (!event.target.value.trim() || isNaN(value) || value < inputConfig.min || value > inputConfig.max) {
                errorElement.textContent = `Value must be between ${inputConfig.min} and ${inputConfig.max}.`;
                event.target.classList.add('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                event.target.classList.remove('border-gray-300', 'focus:ring-indigo-500', 'focus:border-gray-300');
            } else {
                errorElement.textContent = "";
                event.target.classList.remove('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                event.target.classList.add('border-gray-300', 'focus:ring-indigo-500', 'focus:border-gray-300');
            }
        } else {
            // For other inputs, remove error if valid
            if (event.target.value.trim() !== "") {
                errorElement.textContent = "";
                event.target.classList.remove('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                event.target.classList.add('border-gray-300', 'focus:ring-indigo-500', 'focus:border-gray-300');
            }
        }
    });

    element.addEventListener('change', event => {
        const errorElement = document.getElementById(`error-${event.target.id}`);
        
        if (event.target.value.trim() !== "") {
            errorElement.textContent = "";
            event.target.classList.remove('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
            event.target.classList.add('border-gray-300', 'focus:ring-indigo-500', 'focus:border-gray-300');
        }
        
        // Toggle VHND Section for specific input
        if (event.target.id === 'vhndSession') {
            toggleVHNDSection(event.target.value);
        }
    });
});

// Toggle VHND Section Visibility
function toggleVHNDSection(value) {
    const vhndSection = document.getElementById('vhndSection');
    if (vhndSection) {
        if (value === 'Yes') {
            vhndSection.classList.remove('hidden');
        } else {
            vhndSection.classList.add('hidden');
        }
    }
}



