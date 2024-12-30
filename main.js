const validations = {
    section1: () => {
        let isValid = true;

        // General Details Validation
        const fieldsToValidate = [
            { id: 'dateOfVisit', errorMessage: 'Date of Visit is required.' },
            { id: 'state', errorMessage: 'State selection is required.' },
            { id: 'district', errorMessage: 'District selection is required.' },
            { id: 'block', errorMessage: 'Block selection is required.' },
            { id: 'facilityType', errorMessage: 'Facility Type selection is required.' },
            { id: 'facilityName', errorMessage: 'Facility Name is required.' },
            { id: 'facilityInCharge', errorMessage: 'Name of Facility In-Charge is required.' },
            { id: 'designation', errorMessage: 'Designation of Facility In-Charge is required.' },
            { id: 'villagesCovered', errorMessage: 'No. of Villages/Wards Covered is required.' },
            { id: 'populationCovered', errorMessage: 'Population Covered is required.' },
            { id: 'qualityCommittee', errorMessage: 'Quality Committee selection is required.' }
        ];
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
        const numberInputs = [

                { id: 'villagesCovered', min: 0, max: 150, errorMessage: 'Number of Villages/Wards Covered must be between 0 and 150.' },
                { id: 'populationCovered', min: 4000, max: 500000, errorMessage: 'Population Covered must be between 4000 and 500000.' },
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
        if (!isValid) {
            alert('Please fill out all required fields correctly before proceeding.');
        }

        return isValid;
    }
};
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

        // Handle text inputs dynamically
        else if (event.target.type === 'text' || event.target.tagName === 'TEXTAREA') {
            const textConfig = {
                facilityName: { minLength: 2, maxLength: 30 },
                facilityInCharge: { minLength: 2, maxLength: 40 },
                designation: { minLength: 2, maxLength: 30 },
            }[event.target.id];

            if (textConfig) {
                const value = event.target.value.trim();
                if (!value || value.length < textConfig.minLength || value.length > textConfig.maxLength) {
                    errorElement.textContent = `Text must be between ${textConfig.minLength} and ${textConfig.maxLength} characters.`;
                    event.target.classList.add('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                    event.target.classList.remove('border-gray-300', 'focus:ring-indigo-500', 'focus:border-gray-300');
                } else {
                    errorElement.textContent = '';
                    event.target.classList.remove('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                    event.target.classList.add('border-gray-300', 'focus:ring-indigo-500', 'focus:border-gray-300');
                }
            }
        }

        // Handle select inputs dynamically
        else if (event.target.tagName === 'SELECT') {
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


function validateAndNext(section) {
    if (validations[`section${section}`]()) {
        document.getElementById(`section${section}`).classList.add('hidden');
        const nextSection = document.getElementById(`section${section + 1}`);
        if (nextSection) {
            nextSection.classList.remove('hidden');
        }
    }
}
