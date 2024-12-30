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
