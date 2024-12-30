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
    },
    section3: () => {
        let isValid = true;

        // Validation for Section 3 Fields
        const fieldsToValidate = [
            { id: 'pregnancyKit', errorMessage: 'Pregnancy Testing Kit selection is required.' },
            { id: 'condoms', errorMessage: 'Condoms selection is required.' },
            { id: 'hbncKit', errorMessage: 'HBNC Kit selection is required.' },
            { id: 'mbiKit', errorMessage: 'MBI Kit selection is required.' },
            { id: 'cocs', errorMessage: 'COCs (Mala N) selection is required.' },
            { id: 'emergencyPills', errorMessage: 'Emergency Contraceptive Pills selection is required.' },
            { id: 'centchroman', errorMessage: 'Centchroman (Chhaya Pills) selection is required.' },
            { id: 'amoxycillin', errorMessage: 'Syrup Amoxycillin selection is required.' },
            { id: 'pinkIFA', errorMessage: 'Pink IFA Tablets selection is required.' },
            { id: 'redIFATablets', errorMessage: 'Red IFA Tablets selection is required.' },
            { id: 'blueIFATablets', errorMessage: 'Blue IFA Tablets selection is required.' },
            { id: 'ifaSyrup', errorMessage: 'IFA Syrup selection is required.' },
            { id: 'cotrimoxazoleSyrup', errorMessage: 'Cotrimoxazole Syrup selection is required.' },
            { id: 'cotrimoxazoleTablets', errorMessage: 'Cotrimoxazole Tablets selection is required.' },
            { id: 'calciumTablets', errorMessage: 'Calcium Tablets selection is required.' },
            { id: 'ors', errorMessage: 'ORS selection is required.' },
            { id: 'zinc', errorMessage: 'Zinc selection is required.' },
            { id: 'paracetamol', errorMessage: 'Paracetamol selection is required.' }
        ];

        fieldsToValidate.forEach(field => {
            const inputElement = document.getElementById(field.id);
            const errorElement = document.getElementById(`error-${field.id}`);

            if (!inputElement || !inputElement.value.trim()) {
                if (errorElement) errorElement.textContent = field.errorMessage;
                inputElement.classList.add('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                inputElement.classList.remove('border-gray-300', 'focus:ring-indigo-500', 'focus:border-indigo-500');
                isValid = false;
            } else {
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
    section4: () => {
        let isValid = true;

        // Fields to validate
        const fieldsToValidate = [
            { 
                id: 'pregnantWomen', 
                minLength: 2, 
                maxLength: 250, 
                errorMessage: 'Please provide a valid summary for Pregnant Women (2-250 characters).' 
            },
            { 
                id: 'lactatingMothers', 
                minLength: 2, 
                maxLength: 250, 
                errorMessage: 'Please provide a valid summary for Lactating Mothers (2-250 characters).' 
            },
            { 
                id: 'newbornChildren', 
                minLength: 2, 
                maxLength: 250, 
                errorMessage: 'Please provide a valid summary for New-born/children (2-250 characters).' 
            },
            { 
                id: 'tbPatients', 
                minLength: 2, 
                maxLength: 250, 
                errorMessage: 'Please provide a valid summary for TB patients (2-250 characters).' 
            },
            { 
                id: 'ncdIndividuals', 
                minLength: 2, 
                maxLength: 250, 
                errorMessage: 'Please provide a valid summary for Individuals over 30 years (2-250 characters).' 
            }
        ];

        // Validate all fields at once
        fieldsToValidate.forEach(field => {
            const inputElement = document.getElementById(field.id);
            const errorElement = document.getElementById(`error-${field.id}`);
            const inputValue = inputElement?.value.trim();

            if (!inputValue || inputValue.length < field.minLength || inputValue.length > field.maxLength) {
                if (errorElement) errorElement.textContent = field.errorMessage;
                inputElement?.classList.add('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                inputElement?.classList.remove('border-gray-300', 'focus:ring-indigo-500', 'focus:border-indigo-500');
                isValid = false;
            } else {
                if (errorElement) errorElement.textContent = '';
                inputElement?.classList.remove('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                inputElement?.classList.add('border-gray-300', 'focus:ring-indigo-500', 'focus:border-gray-300');
            }
        });

        if (!isValid) {
            alert('Please fill out all required fields in Section 4 correctly before proceeding.');
        }

        return isValid;
    },
    section5: () => {
        let isValid = true;

        // Validate that at least one checkbox is selected
        const checkboxes = document.querySelectorAll('input[name="areasOfIssue"]');
        const noneCheckbox = document.getElementById("none");
        const errorMessages = [];

        if (noneCheckbox.checked) {
            // Ensure no other checkboxes are selected
            checkboxes.forEach((checkbox) => {
                if (checkbox !== noneCheckbox && checkbox.checked) {
                    errorMessages.push("You cannot select 'None' and other options simultaneously.");
                    isValid = false;
                }
            });
        } else {
            // Ensure at least one checkbox is selected
            const atLeastOneSelected = Array.from(checkboxes).some((checkbox) => checkbox.checked);
            if (!atLeastOneSelected) {
                errorMessages.push("Please select at least one area of issue.");
                isValid = false;
            }

            // Validate Issue and Action Plan fields for each selected checkbox
            const fieldValidation = [
                { id: "knowledge", issueId: "knowledgeIssue", actionId: "knowledgeAction", name: "Knowledge" },
                { id: "attitude", issueId: "attitudeIssue", actionId: "attitudeAction", name: "Attitude" },
                { id: "practice", issueId: "practiceIssue", actionId: "practiceAction", name: "Practice" },
                { id: "other", issueId: "otherIssue", actionId: "otherAction", name: "Other (Specify)" }
            ];

            fieldValidation.forEach((field) => {
                if (document.getElementById(field.id).checked) {
                    const issueValue = document.getElementById(field.issueId).value.trim();
                    const actionValue = document.getElementById(field.actionId).value.trim();

                    if (!issueValue) {
                        errorMessages.push(`Please provide an issue for ${field.name}.`);
                        isValid = false;
                    }
                    if (!actionValue) {
                        errorMessages.push(`Please provide an action plan for ${field.name}.`);
                        isValid = false;
                    }
                }
            });
        }

        // Display error messages
        if (errorMessages.length > 0) {
            alert(errorMessages.join("\n"));
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

document.querySelectorAll('select, input, textarea').forEach(element => {
    // Listen for both `input` and `change` events
    element.addEventListener('input', event => {
        const errorElement = document.getElementById(`error-${event.target.id}`);

        // Handle number inputs dynamically
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
        } 
        // Handle text and textarea inputs dynamically
        else if (event.target.tagName === 'TEXTAREA' || event.target.type === 'text') {
            const inputConfig = {
                pregnantWomen: {minLength: 2, maxLength: 250 },
                lactatingMothers: {minLength: 2, maxLength: 250 },
                newbornChildren: {minLength: 2, maxLength: 250 },
                tbPatients: {minLength: 2, maxLength: 250 },
                ncdIndividuals: {minLength: 2, maxLength: 250 },
                knowledgeIssue: {minLength: 2, maxLength: 200 },
                knowledgeAction: {minLength: 2, maxLength: 200 },
                attitudeIssue: {minLength: 2, maxLength: 200 },
                attitudeAction: {minLength: 2, maxLength: 200 },
                practiceIssue: {minLength: 2, maxLength: 200 },
                practiceAction: {minLength: 2, maxLength: 200 },
                otherIssue: {minLength: 2, maxLength: 200 },
                otherAction: {minLength: 2, maxLength: 200 }
            }[event.target.id];
            const value = event.target.value.trim();
            if (!value || value.length < inputConfig.minLength || value.length > inputConfig.maxLength) {
                errorElement.textContent = `Please provide a valid summary (${inputConfig.minLength}-${inputConfig.maxLength} characters).`;
                event.target.classList.add('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                event.target.classList.remove('border-gray-300', 'focus:ring-indigo-500', 'focus:border-gray-300');
            } else {
                errorElement.textContent = "";
                event.target.classList.remove('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                event.target.classList.add('border-gray-300', 'focus:ring-indigo-500', 'focus:border-gray-300');
            }
        } 
        // Handle select inputs dynamically
        else if (event.target.tagName === 'SELECT') {
            if (!event.target.value.trim()) {
                errorElement.textContent = "Selection is required.";
                event.target.classList.add('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                event.target.classList.remove('border-gray-300', 'focus:ring-indigo-500', 'focus:border-gray-300');
            } else {
                errorElement.textContent = "";
                event.target.classList.remove('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                event.target.classList.add('border-gray-300', 'focus:ring-indigo-500', 'focus:border-gray-300');
            }
        }
    });

    element.addEventListener('change', event => {
        const errorElement = document.getElementById(`error-${event.target.id}`);

        // Validate on change for all inputs
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
// Function to toggle None Checkbox Behavior
function toggleNone(noneCheckbox) {
    const checkboxes = document.querySelectorAll('input[name="areasOfIssue"]:not(#none)');
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
        const section = document.getElementById(`${checkbox.id}Fields`);
        if (section) {
            section.classList.add("hidden");
        }
    });
}

// Function to toggle fields for each checkbox
function toggleFields(sectionId, checkbox) {
    const section = document.getElementById(sectionId);
    if (checkbox.checked) {
        section.classList.remove("hidden");
    } else {
        section.classList.add("hidden");
    }
}




