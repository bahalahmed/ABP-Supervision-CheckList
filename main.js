document.addEventListener("DOMContentLoaded", () => {
    const totalHealthFacilitiesField = document.getElementById("totalHealthFacilities");

    const updateTotalHealthFacilities = () => {
        const totalPHC = parseInt(document.getElementById("totalPHC").value || 0, 10);
        const totalCHC = parseInt(document.getElementById("totalCHC").value || 0, 10);
        const totalSubCenter = parseInt(document.getElementById("totalSubCenter").value || 0, 10);
        
        const total = totalPHC + totalCHC + totalSubCenter;

        totalHealthFacilitiesField.value = total; // Update the total in the field
    };

    // Add event listeners to the relevant fields
    ["totalPHC", "totalCHC", "totalSubCenter"].forEach((id) => {
        const inputField = document.getElementById(id);
        inputField.addEventListener("input", updateTotalHealthFacilities);
    });
});
const validations = {
    section1: () => {
        let isValid = true;

        // General Details Validation
        const fieldsToValidate = [
            { id: 'dateOfVisit', errorMessage: 'Date of Visit is required.' },
            { id: 'district', errorMessage: 'District selection is required.' },
            { id: 'block', errorMessage: 'Block selection is required.' },
            { id: 'bmoname', errorMessage: 'Name selection is required.' },
            { id: 'bmocontact', errorMessage: 'Contact is required.' },
            { id: 'bmoemail', errorMessage: 'Email is required.' },
            { id:'areaType', errorMessage: 'Area Type is required.'},
            {id:'villagesCovered', errorMessage: 'Villages Covered is required.'},
            {id:'totalPHC', errorMessage: 'Total PHC is required.',},
            {id:'totalCHC', errorMessage: 'Total CHC is required.',},
            {id:'totalSubCenter', errorMessage: 'Total SubCenter is required.',},
            {id:'anganwadiCentres', errorMessage: 'Anganwadi Centers is required.',},
            {id:'populationCovered', errorMessage: 'Population Covered is required.',},
            {id:'totalEligibleCouple', errorMessage: 'Total Eligible Couple is required.',},
            {id:'totalPregnantWomen', errorMessage:"Total Pregnant women is required"},
            {id:'totalLiveBirth', errorMessage:"Total Live Births is required"},
            {id:'children0to1', errorMessage:"Children 0-1 is required"},
            {id:'populationAbove30', errorMessage:"Population above 30 is required"},
            {id:'pmjayCardIssued', errorMessage:"PMJAY Card Issued is required"},
            {id:'abhaCardGenerated', errorMessage:"ABHA Card Generated is required"},
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

        // Phone Number Validation
        const phoneFields = ["bmocontact"];
        phoneFields.forEach((id) => {
            const phoneInput = document.getElementById(id);
            const errorElement = document.getElementById(`error-${id}`);
            const phonePattern = /^[6-9]\d{9}$/; // Starts with 6-9 and has exactly 10 digits

            if (!phonePattern.test(phoneInput.value)) {
                errorElement.textContent =
                    "Phone number must start with 6-9 and be exactly 10 digits.";
                phoneInput.classList.add(
                    "border-red-500",
                    "focus:ring-red-500",
                    "focus:border-red-500"
                );
                phoneInput.classList.remove(
                    "border-gray-300",
                    "focus:ring-indigo-500",
                    "focus:border-gray-500"
                );
                isValid = false;
            } else {
                errorElement.textContent = "";
                phoneInput.classList.remove(
                    "border-red-500",
                    "focus:ring-red-500",
                    "focus:border-red-500"
                );
                phoneInput.classList.add(
                    "border-gray-300",
                    "focus:ring-indigo-500",
                    "focus:border-gray-500"
                );
            }
        });

        // Email Validation
        const emailFields = ["bmoemail"];
        emailFields.forEach((id) => {
            const emailInput = document.getElementById(id);
            const errorElement = document.getElementById(`error-${id}`);
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            if (!emailPattern.test(emailInput.value)) {
                errorElement.textContent = "Please enter a valid email address.";
                emailInput.classList.add(
                    "border-red-500",
                    "focus:ring-red-500",
                    "focus:border-red-500"
                );
                emailInput.classList.remove(
                    "border-gray-300",
                    "focus:ring-indigo-500",
                    "focus:border-gray-500"
                );
                isValid = false;
            } else {
                errorElement.textContent = "";
                emailInput.classList.remove(
                    "border-red-500",
                    "focus:ring-red-500",
                    "focus:border-red-500"
                );
                emailInput.classList.add(
                    "border-gray-300",
                    "focus:ring-indigo-500",
                    "focus:border-gray-500"
                );
            }
        });



       
        const numberInputs = [

                { id: 'villagesCovered', min: 0, max: 150, errorMessage: 'Number of Villages/Wards Covered must be between 0 and 150.' },
                { id: 'totalPHC', min: 0, max: 50, errorMessage: 'Total PHC must be between 0 and 50.' },
                { id: 'totalCHC', min: 0, max: 20, errorMessage: 'Total CHC must be between 0 and 20.' },
                { id: 'totalSubCenter', min: 0, max: 100, errorMessage: 'Total SubCenter must be between 0 and 100.' },
                { id: 'anganwadiCentres', min: 0, max: 150, errorMessage: 'Anganwadi Centers must be between 0 and 150.' },
                { id: 'populationCovered', min: 50000, max: 1000000, errorMessage: 'Population Covered must be between 500000 and 1000000.' },
                { id: 'totalEligibleCouple', min: 0, max: 100000, errorMessage: 'Total Eligible Couple must be between 0 and 100000.' },
                { id: 'totalPregnantWomen', min: 0, max: 99999, errorMessage: 'Total Pregnant women must be between 0 and 99999.' },
                { id: 'totalLiveBirth', min: 0, max: 99999, errorMessage: 'Total Live Births must be between 0 and 99999.' },
                { id: 'children0to1', min: 0, max: 99999, errorMessage: 'Children 0-1 must be between 0 and 99999.' },
                { id: 'populationAbove30', min: 0, max: 99999, errorMessage: 'Population above 30 must be between 0 and 99999.' },
                { id: 'pmjayCardIssued', min: 0, max: 99999,errorMessage: 'PMJAY Card Issued must be between 0 and 99999.' },
                { id: 'abhaCardGenerated', min: 0, max: 99999, errorMessage: 'ABHA Card Generated must be between 0 and 99999.' },
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
    },
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



document.querySelectorAll('input, select, textarea, checkbox').forEach(element => {
    element.addEventListener('input', event => {

        
        const errorElement = document.getElementById(`error-${event.target.id}`);
        if (!errorElement) return;
        // Email Validation
        if (event.target.type === "email") {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(event.target.value)) {
                errorElement.textContent = "Please enter a valid email address.";
            } else {
                errorElement.textContent = "";
            }
        }
         // Phone Number Validation
         if (event.target.type === "tel") {
            const phonePattern = /^[6-9]\d{9}$/;
            if (!phonePattern.test(event.target.value)) {
                errorElement.textContent =
                    "Phone number must start with 6-9 and be exactly 10 digits.";
            } else {
                errorElement.textContent = "";
            }
            if (event.target.value.length > 10) {
                event.target.value = event.target.value.slice(0, 10);
            }
        }



        // Handle number inputs dynamically
        if (event.target.type === 'number') {
            const inputConfig = {
                villagesCovered: { min: 0, max: 150 },
                totalPHC: { min: 0, max: 50 },
                totalCHC: { min: 0, max: 20 },
                totalSubCenter: { min: 0, max: 100 },
                anganwadiCentres: { min: 0, max: 150 },
                populationCovered: { min: 50000, max: 1000000 },
                totalEligibleCouple: { min: 0, max: 100000 },
                totalPregnantWomen: { min: 0, max: 99999 },
                totalLiveBirth: { min: 0, max: 99999 },
                children0to1: { min: 0, max: 99999 },
                populationAbove30: { min: 0, max: 99999 },
                pmjayCardIssued: { min: 0, max: 99999 },
                abhaCardGenerated: { min: 0, max: 99999 },



      
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
                bmoname: { minLength: 2, maxLength: 30 },
                
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
        else if ( event.target.type === 'checkbox' || event.target.tagName === 'SELECT' ) {
              const isCheckbox = event.target.type === 'checkbox';
              if (isCheckbox && event.target.checked) {
                errorElement.textContent = '';
                event.target.classList.remove('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                event.target.classList.add('border-gray-300', 'focus:ring-indigo-500', 'focus:border-gray-300');
            } else if (!isCheckbox && event.target.value.trim()) {
                errorElement.textContent = '';
                event.target.classList.remove('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                event.target.classList.add('border-gray-300', 'focus:ring-indigo-500', 'focus:border-gray-300');
            } else {
                errorElement.textContent = 'This field is required.';
                event.target.classList.add('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                event.target.classList.remove('border-gray-300', 'focus:ring-indigo-500', 'focus:border-gray-300');
            }
        }
        // Dynamic handling for sanctioned and available inputs
        const sanctionedFieldMatch = event.target.id.match(/(regular|contractual)-(.*?)-(sanctioned|available)/);
        if (sanctionedFieldMatch) {
            const [_, type, role, fieldType] = sanctionedFieldMatch;
            const sanctionedInput = document.getElementById(`${type}-${role}-sanctioned`);
            const availableInput = document.getElementById(`${type}-${role}-available`);
            //const trainingContainer = document.getElementById(`trainingsContainer-${role}`);
            const trainingContainer = document.getElementById(`trainingsContainer-${role}`);
            console.log('Training Container:', trainingContainer);



            if (fieldType === 'sanctioned') {
                const sanctionedValue = parseInt(event.target.value, 10);
                if (isNaN(sanctionedValue) || sanctionedValue <= 0) {
                    availableInput.setAttribute('disabled', true);
                    availableInput.value = ''; // Clear available field
                    errorElement.textContent = 'Sanctioned value must be greater than 0.';
                    if (trainingContainer) trainingContainer.style.display = 'none'; // Hide training container
                } else {
                    availableInput.removeAttribute('disabled'); // Enable available input
                    //errorElement.textContent = '';
                }
            } else if (fieldType === 'available') {
                const sanctionedValue = parseInt(sanctionedInput?.value || 0, 10);
                const availableValue = parseInt(event.target.value, 10);
                if (isNaN(availableValue) || availableValue <= 0 || availableValue > sanctionedValue) {
                    errorElement.textContent = `Count should not exceed the ${sanctionedValue} count`;
                    if (trainingContainer) trainingContainer.style.display = 'none'; // Hide training container
                } else {
                    errorElement.textContent = '';
                    if (trainingContainer) trainingContainer.style.display = 'block'; // Show training container
                }
            }
        }
        
    });
});





