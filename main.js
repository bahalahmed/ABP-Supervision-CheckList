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
    },
    section2: () => {
        let isValid = true;

        // Fields to validate
        const fieldsToValidate = [
            { id: 'building', errorMessage: 'Building selection is required.' },
            { id: 'roadAccessibility', errorMessage: 'Road Accessibility selection is required.' },
            { id: 'powerBackup', errorMessage: '24X7 Power Backup selection is required.' },
            { id: 'waitingArea', errorMessage: 'Patient Waiting Area selection is required.' },
            { id: 'separateToilets', errorMessage: 'Separate Toilets selection is required.' },
            { id: 'totalBeds', min: 0, max: 50, errorMessage: 'Total Number of Beds must be between 0 and 50.' },
            { id: 'totalLaborTables', min: 0, max: 10, errorMessage: 'Total Number of Labor Tables must be between 0 and 10.' },
            { id: 'laborRoom', errorMessage: 'Functional Labor Room selection is required.' },
            { id: 'internetConnectivity', errorMessage: 'Internet Connectivity selection is required.' },
            { id: 'runningWater', errorMessage: '24X7 Running Water Facility selection is required.' },
            { id: 'yogaSpace', errorMessage: 'Space for Yoga/Health Promotion selection is required.' },
            { id: 'radiantWarmer', errorMessage: 'Functional Radiant Warmer selection is required.' },
            { id: 'rchPortal', errorMessage: 'Operational RCH Portal selection is required.' },
            { id: 'anmolApp', errorMessage: 'Operational ANMOL App selection is required.' },
            { id: 'brandingCompleted', errorMessage: 'Branding Completed selection is required.' },
            { id: 'residentialFacility', errorMessage: 'Residential Facility selection is required.' },
            { id: 'privacyDuringExamination', errorMessage: 'Privacy During Patient Examination selection is required.' },
            { id: 'desktopAvailable', errorMessage: 'Desktop/Laptop/Tablet availability selection is required.' },
            { id: 'linkagesFacilities', errorMessage: 'Linkages with Higher Facilities selection is required.' },
            { id: 'afhcAvailable', errorMessage: 'AFHC Availability selection is required.' },
            { id: 'biomedicalWaste', errorMessage: 'Biomedical Waste Management selection is required.' },
            { id: 'drugStorage', errorMessage: 'Space for Drug Storage selection is required.' },
            { id: 'dotsCenter', errorMessage: 'DOTS Center selection is required.' }
        ];

        fieldsToValidate.forEach(field => {
            const inputElement = document.getElementById(field.id);
            const errorElement = document.getElementById(`error-${field.id}`);

            if (!inputElement) return;

            if (inputElement.type === 'number') {
                const value = parseInt(inputElement.value, 10);
                if (isNaN(value) || value < field.min || value > field.max) {
                    errorElement.textContent = field.errorMessage;
                    inputElement.classList.add('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                    inputElement.classList.remove('border-gray-300', 'focus:ring-indigo-500', 'focus:border-indigo-500');
                    isValid = false;
                } else {
                    errorElement.textContent = '';
                    inputElement.classList.remove('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                    inputElement.classList.add('border-gray-300', 'focus:ring-indigo-500', 'focus:border-gray-300');
                }
            } else if (!inputElement.value.trim()) {
                errorElement.textContent = field.errorMessage;
                inputElement.classList.add('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                inputElement.classList.remove('border-gray-300', 'focus:ring-indigo-500', 'focus:border-gray-300');
                isValid = false;
            } else {
                errorElement.textContent = '';
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

        // List of fields to validate
        const fieldsToValidate = [
            // OPD and IPD load
            { id: 'opdLoad', min: 0, max: 500, errorMessage: 'OPD Load must be between 0 and 500.' },
            { id: 'ipdLoad', min: 0, max: 500, errorMessage: 'IPD Load must be between 0 and 500.' },
            { id: 'teleConsultations', min: 0, max: 2000, errorMessage: 'Tele Consultations must be between 0 and 2000.' },

            // Maternal Child Health
            { id: 'pregnantFirstTrimester', min: 0, max: 1000, errorMessage: 'Pregnant Women Registered in First Trimester must be between 0 and 1000.' },
            { id: 'pregnant4ANC', min: 0, max: 1000, errorMessage: 'Pregnant Women Received 4 ANC Check-ups must be between 0 and 1000.' },
            { id: 'ifaTablets', min: 0, max: 500, errorMessage: 'Pregnant Women Given IFA Tablets must be between 0 and 500.' },
            { id: 'calciumTablets', min: 0, max: 500, errorMessage: 'Pregnant Women Given Calcium Tablets must be between 0 and 500.' },
            { id: 'albendazoleTablets', min: 0, max: 500, errorMessage: 'Pregnant Women Given Albendazole Tablets must be between 0 and 500.' },
            { id: 'highRiskPregnancies', min: 0, max: 250, errorMessage: 'High Risk Pregnancies Identified must be between 0 and 250.' },
            { id: 'totalANCRegistered', min: 0, max: 500, errorMessage: 'Total ANC Registered must be between 0 and 500.' },
            { id: 'highRiskReferred', min: 0, max: 500, errorMessage: 'High Risk Pregnancies Referred Out must be between 0 and 500.' },
            { id: 'deliveriesConducted', min: 0, max: 1000, errorMessage: 'Deliveries Conducted must be between 0 and 1000.' },
            { id: 'liveBirths', min: 0, max: 300, errorMessage: 'Live Births must be between 0 and 300.' },
            { id: 'stillBirths', min: 0, max: 300, errorMessage: 'Still Births must be between 0 and 300.' },
            { id: 'lowBirthWeightBabies', min: 0, max: 250, errorMessage: 'Low Birth Weight Babies must be between 0 and 250.' },
            { id: 'sickNewbornsReferred', min: 0, max: 500, errorMessage: 'Sick Newborns Referred must be between 0 and 500.' },
            { id: 'iucdInsertions', min: 0, max: 250, errorMessage: 'IUCD Insertions must be between 0 and 250.' },
            { id: 'ppiucdInsertions', min: 0, max: 500, errorMessage: 'PPIUCD Insertions must be between 0 and 500.' },
            { id: 'adolescentsCounseled', min: 0, max: 1000, errorMessage: 'Adolescents Counseled/Treated must be between 0 and 1000.' },
            { id: 'hepatitisVaccines', min: 0, max: 1000, errorMessage: 'Hepatitis B, OPV, BCG  must be between 0 and 1000.' },

            { id: 'childrenDiarrhea', min: 0, max: 1000, errorMessage: 'Under 5 Children Diagnosed with Diarrhoea must be between 0 and 1000.' },
            { id: 'injectableContraceptive', min: 0, max: 1000, errorMessage: 'Injectable Contraceptive (Antara) must be between 0 and 1000.' },
            { id: 'earlyBreastfeeding', min: 0, max: 500, errorMessage: 'Neonates Received Early Breastfeeding must be between 0 and 500.' },
            { id: 'childrenARI', min: 0, max: 500, errorMessage: 'Under 5 Children Diagnosed with ARI must be between 0 and 500.' },
            { id: 'treatedDiarrhea', min: 0, max: 500, errorMessage: 'Under 5 Children Treated for Diarrhoea with ORS and Zinc must be between 0 and 500.' },

            // NCDs 
            { id: 'targetPopulationNCD', min: 0, max: 2000, errorMessage: 'People Diagnosed with NCD (Hypertension) must be between 0 and 2000.' },
            { id: 'ncdScreeningCompleted', min: 0, max: 2000, errorMessage: 'People Diagnosed with NCD (Diabetes) must be between 0 and 2000.' },
            { id: 'cbacFilled', min: 0, max: 2000, errorMessage: 'People Diagnosed with CBAC must be between 0 and 2000.' },
            { id: 'ncdScreenedPositive', min: 0, max: 2000, errorMessage: 'Patients on NCD(Screened Positive) must be between 0 and 2000.' },
            { id: 'ncdDiagnosedHypertension', min: 0, max: 2000, errorMessage: ' Value must be between 0 and 2000.' },
            { id: 'ncdDiagnosedDiabetes', min: 0, max: 2000, errorMessage: 'Value must be between 0 and 2000.' },
            { id: 'ncdDiagnosedCancer', min: 0, max: 2000, errorMessage: 'Value must be between 0 and 2000.' },
            { id: 'ncdTreatmentHypertension', min: 0, max: 2000, errorMessage: 'Value must be between 0 and 2000.' },
            { id: 'ncdTreatmentDiabetes', min: 0, max: 2000, errorMessage: 'Value must be between 0 and 2000.' },
            { id: 'ncdTreatmentCancer', min: 0, max: 2000, errorMessage: 'Value must be between 0 and 2000.' },
            { id : 'ncdReferredHypertension', min: 0, max: 2000, errorMessage: 'Value must be between 0 and 2000.' },
            { id: 'ncdReferredDiabetes', min: 0, max: 2000, errorMessage: 'Value must be between 0 and 2000.' }, 
            { id: 'ncdReferredCancer', min: 0, max: 2000, errorMessage: 'Value must be between 0 and 2000.' },
        ];

        // Validate each field
        fieldsToValidate.forEach(field => {
            const inputElement = document.getElementById(field.id);
            const errorElement = document.getElementById(`error-${field.id}`);

            if (inputElement && (!inputElement.value || isNaN(inputElement.value) || inputElement.value < field.min || inputElement.value > field.max)) {
                errorElement.textContent = field.errorMessage;
                inputElement.classList.add('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                isValid = false;
            } else if (inputElement) {
                errorElement.textContent = '';
                inputElement.classList.remove('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
            }
        });

        if (!isValid) {
            alert('Please fill out all required fields correctly before proceeding.');
        }

        return isValid;
    },
    section5: () => {
        let isValid = true;

        // List all field IDs in Section 5
        const fieldsToValidate = [
            {id: 'injTd',errorMessage: 'Inj. TD selection is required.'},
            {id: 'injMgSulph', errorMessage: 'Inj. Mg Sulphate selection is required.'},
            {id: 'injectableMPA', errorMessage: 'Injectable MPA selection is required.'},
            {id:'injOxytocin', errorMessage: 'Inj. Oxytocin selection is required.'},
            {id: 'injIronSucrose', errorMessage: 'Inj. Iron Sucrose selection is required.'},
            {id: 'injDexamethasone', errorMessage: 'Inj. Dexamethasone selection is required.'},
            {id: 'tabCalcium', errorMessage: 'Tab. Calcium selection is required.'},
            {id: 'tabIFA', errorMessage: 'Tab. IFA selection is required.'},
            {id: 'antihistamines', errorMessage: 'Antihistamines selection is required.'},
            {id:  'vitaminK1', errorMessage: 'Vitamin K1 selection is required.'},
            {id: 'antiseptics', errorMessage: 'Antiseptics selection is required.'},
            {id: 'antihypertensives', errorMessage: 'Antihypertensives selection is required.'},
            {id: 'antidiabetics', errorMessage: 'Antidiabetics selection is required.'},
            {id :'ecPills', errorMessage: 'EC Pills selection is required.'},
            {id :'tabMisoprostol', errorMessage: 'Tab. Misoprostol selection is required.'},
            {id :'antiTbDrugs', errorMessage: 'Anti-TB Drugs selection is required.'},
            {id: 'zincTablets', errorMessage: 'Zinc Tablets selection is required.'},
            {id: 'paracetamol', errorMessage: 'Paracetamol selection is required.'},
            {id: 'tabAlbendazole', errorMessage: 'Tab. Albendazole selection is required.'},
            {id: 'antibiotics', errorMessage: 'Antibiotics selection is required.'},
            {id: 'orsSachets', errorMessage: 'ORS Sachets selection is required.'},
            {id: 'ipv',  errorMessage: 'IPV selection is required.'},
            {id: 'rotaVirus', errorMessage: 'Rota Virus selection is required.'},
            {id: 'bcg', errorMessage: 'BCG selection is required.'},
            {id: 'pentavalent', errorMessage: 'Pentavalent selection is required.'},
            {id: 'japaneseEncephalitis', errorMessage: 'Japanese Encephalitis selection is required.'},
            {id: 'hepatitisB', errorMessage: 'Hepatitis B selection is required.'},
            {id:'opv', errorMessage: 'OPV selection is required.'},
            {id: 'dpt', errorMessage: 'DPT selection is required.'},
            {id: 'measlesRubella', errorMessage: 'Measles Rubella selection is required.'},
            {id: 'antiRabiesVaccine', errorMessage: 'Anti Rabies Vaccine selection is required.'},
            {id: 'vitaminA', errorMessage: 'Vitamin A selection is required.'},
            {id: 'combinedOralContraceptives', errorMessage: 'Combined Oral Contraceptives selection is required.'},
            {id :'centchromanPills', errorMessage: 'Centchroman Pills selection is required.'},
            {id: 'iucd', errorMessage: 'IUCD selection is required.'},
            {id: 'mmaKit', errorMessage: 'MMA Kit selection is required.'},
            {id: 'maleCondoms', errorMessage:'Male Condoms selection is required.'},
            {id: 'sanitaryNapkins', errorMessage: 'Sanitary Napkins selection is required.'},
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
        if (!isValid) {
            alert('Please fill out all required fields correctly before proceeding.');
        }

        return isValid;
    },
};

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
                ncdTreatmentHypertension   : { min: 0, max: 2000 },
                ncdTreatmentDiabetes: { min: 0, max: 2000 },
                ncdTreatmentCancer: { min: 0, max: 2000 },
                ncdReferredHypertension: { min: 0, max: 2000 },
                ncdReferredDiabetes: { min: 0, max: 2000 },
                ncdReferredCancer: { min: 0, max: 2000 },   
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
