document.querySelectorAll('input, select, textarea').forEach(element => {
    element.addEventListener('input', event => {
        const errorElement = document.getElementById(`error-${event.target.id}`);
        if (!errorElement) return;

        // Handle number inputs dynamically
        if (event.target.type === 'number') {
            const inputConfig = {
                villagesCovered: { min: 0, max: 150 },
                populationCovered: { min: 4000, max: 500000 },
                totalBeds: { min: 0, max: 50 },
                totalLaborTables: { min: 0, max: 10 },
                regularDentalMOSanctioned: { min: 0, max: 5 },
                opdLoad: { min: 0, max: 500 },
                ipdLoad: { min: 0, max: 500 },
                teleConsultations: { min: 0, max: 2000 },
                pregnantFirstTrimester: { min: 0, max: 1000 },
                pregnant4ANC: { min: 0, max: 1000 },
                ifaTablets: { min: 0, max: 500 },
                calciumTablets: { min: 0, max: 500 },
                albendazoleTablets: { min: 0, max: 500 },
                highRiskPregnancies: { min: 0, max: 250 },
                totalANCRegistered: { min: 0, max: 500 },
                highRiskReferred: { min: 0, max: 500 },
                deliveriesConducted: { min: 0, max: 1000 },
                liveBirths: { min: 0, max: 300 },
                stillBirths: { min: 0, max: 300 },
                lowBirthWeightBabies: { min: 0, max: 250 },
                sickNewbornsReferred: { min: 0, max: 500 },
                iucdInsertions: { min: 0, max: 250 },
                ppiucdInsertions: { min: 0, max: 500 },
                adolescentsCounseled: { min: 0, max: 1000 },
                hepatitisVaccines: { min: 0, max: 1000 },
                childrenDiarrhea: { min: 0, max: 1000 },
                injectableContraceptive: { min: 0, max: 1000 },
                earlyBreastfeeding: { min: 0, max: 500 },
                childrenARI: { min: 0, max: 500 },
                treatedDiarrhea: { min: 0, max: 500 },
                targetPopulationNCD: { min: 0, max: 2000 },
                ncdScreeningCompleted: { min: 0, max: 2000 },
                cbacFilled: { min: 0, max: 2000 },
                ncdDiagnosedHypertension: { min: 0, max: 2000 },
                ncdDiagnosedDiabetes: { min: 0, max: 2000 },
                ncdDiagnosedCancer: { min: 0, max: 2000 },
                ncdTreatmentHypertension: { min: 0, max: 2000 },
                ncdTreatmentDiabetes: { min: 0, max: 2000 },
                ncdTreatmentCancer: { min: 0, max: 2000 },
                ncdReferredHypertension: { min: 0, max: 2000 },
                ncdReferredDiabetes: { min: 0, max: 2000 },
                ncdReferredCancer: { min: 0, max: 2000 },
                diagnosticsTestConducted: { min: 0, max: 250 },
                nonFunctionalTests: { min: 0, max: 250 },
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

        // Handle select and checkbox inputs dynamically
        else if (event.target.type === 'checkbox' || event.target.tagName === 'SELECT') {
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
    });
});
