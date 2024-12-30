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

// Event Listeners for Dynamic Error Removal
document.querySelectorAll('select, input').forEach(element => {
    element.addEventListener('change', event => {
        const errorElement = document.getElementById(`error-${event.target.id}`);
        if (event.target.value.trim() !== "") {
            errorElement.textContent = "";
            event.target.classList.remove('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
            event.target.classList.add('border-gray-300', 'focus:ring-indigo-500', 'focus:border-indigo-500');
        }
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
