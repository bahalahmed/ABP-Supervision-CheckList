
import { initSectionValidation } from './validation-common.js';
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("checklistForm");
    const sections = document.querySelectorAll(".section");
    const saveNextButtons = document.querySelectorAll(".save-next");


    const anmConfig = [
        {
            sanctionedId: "regular-ANMs-sanctioned",
            availableId: "regular-ANMs-available",
            dependentContainerId: "trainingsContainer", // This container will show/hide based on total available
        },
        {
            sanctionedId: "contractual-ANMs-sanctioned",
            availableId: "contractual-ANMs-available",
            dependentContainerId: "trainingsContainer", // Same container as above
        },
    ];

    const staffNurseConfig = [
        {
            sanctionedId: "regular-StaffNurse-sanctioned",
            availableId: "regular-StaffNurse-available",
            dependentContainerId: "staffNurseTrainingsContainer",
        },
        {
            sanctionedId: "contractual-StaffNurse-sanctioned",
            availableId: "contractual-StaffNurse-available",
            dependentContainerId: "staffNurseTrainingsContainer",
        },
    ];
    const medicalOfficersConfig = [
        {
            sanctionedId: "regular-MedicalOfficers-sanctioned",
            availableId: "regular-MedicalOfficers-available",
            dependentContainerId: "medicalOfficerTrainingsContainer",
        },
        {
            sanctionedId: "contractual-MedicalOfficers-sanctioned",
            availableId: "contractual-MedicalOfficers-available",
            dependentContainerId: "medicalOfficerTrainingsContainer",
        },
    ];

    const generalSurgeonsConfig = [
        {
            sanctionedId: "regular-GeneralSurgeon-sanctioned",
            availableId: "regular-GeneralSurgeon-available",
            dependentContainerId: "generalSurgeonTrainingsContainer",
        },
        {
            sanctionedId: "contractual-GeneralSurgeon-sanctioned",
            availableId: "contractual-GeneralSurgeon-available",
            dependentContainerId: "generalSurgeonTrainingsContainer",
        },
    ];
    const gynaecologistsConfig = [
        {
            sanctionedId: "regular-Gynaecologist-sanctioned",
            availableId: "regular-Gynaecologist-available",
            dependentContainerId: "GynaecologistTrainingsContainer",
        },
        {
            sanctionedId: "contractual-Gynaecologist-sanctioned",
            availableId: "contractual-Gynaecologist-available",
            dependentContainerId: "GynaecologistTrainingsContainer",
        },
    ];
    const anaesthetistsConfig = [
        {
            sanctionedId: "regular-Anaesthetist-sanctioned",
            availableId: "regular-Anaesthetist-available",
            dependentContainerId: "AnaesthetistTrainingsContainer",
        },
        {
            sanctionedId: "contractual-Anaesthetist-sanctioned",
            availableId: "contractual-Anaesthetist-available",
            dependentContainerId: "AnaesthetistTrainingsContainer",
        },
    ];
    const paediatriciansConfig = [
        {
            sanctionedId: "regular-Paediatricians-sanctioned",
            availableId: "regular-Paediatricians-available",
            dependentContainerId: "PaediatriciansTrainingsContainer",
        },
        {
            sanctionedId: "contractual-Paediatricians-sanctioned",
            availableId: "contractual-Paediatricians-available",
            dependentContainerId: "PaediatriciansTrainingsContainer",
        },
    ];
    const labTechniciansConfig = [
        {
            sanctionedId: "regular-LabTechnicians-sanctioned",
            availableId: "regular-LabTechnicians-available",
            dependentContainerId: "LabTechniciansTrainingsContainer",
        },
        {
            sanctionedId: "contractual-LabTechnicians-sanctioned",
            availableId: "contractual-LabTechnicians-available",
            dependentContainerId: "LabTechniciansTrainingsContainer",
        },
    ];
   
    
   const allStaffConfigs = [
    ...anmConfig,
    ...staffNurseConfig,
    ...medicalOfficersConfig,
    ...generalSurgeonsConfig,
    ...gynaecologistsConfig,
    ...anaesthetistsConfig,
    ...paediatriciansConfig,
    ...labTechniciansConfig
];


    console.log(allStaffConfigs);


    // Real-time validation listeners
    attachEventListenersToConfig(allStaffConfigs);

    // Validate all sections on form submission
    form.addEventListener("submit", e => {
        if (!validateStaffSection(allStaffConfigs)) {
            e.preventDefault();
            alert("Please fix the errors in the form.");
        }
    });

    function validateStaffSection(config) {
        let isValid = true;
    
        config.forEach(({ sanctionedId, availableId, dependentContainerId }) => {
            const sanctionedInput = document.getElementById(sanctionedId);
            const availableInput = document.getElementById(availableId);
            const dependentContainer = document.getElementById(dependentContainerId);
    
            const sanctionedValue = parseInt(sanctionedInput.value, 10) || 0;
            const availableValue = parseInt(availableInput.value, 10) || 0;
    
            // Validate sanctioned and available inputs
           
    
            // Show/hide dependent container and validate training fields
            if (dependentContainer) {
                if (availableValue > 0) {
                    dependentContainer.style.display = "block";
                    if (!validateTrainingFields(dependentContainer)) {
                        isValid = false;
                    }
                } else {
                    dependentContainer.style.display = "none";
                    clearTrainingErrors(dependentContainer);
                }
            }
        });
    
        return isValid;
    }
    
    function validateTrainingFields(container) {
        let isValid = true;
        const trainingFields = container.querySelectorAll("input[type='number']");
        
        trainingFields.forEach(field => {
            const value = parseInt(field.value, 10) || 0;
            if (value < 0 || value > 10) {
                showError(document.getElementById(`error-${field.id}`), "Value must be between 0 and 10.");
                isValid = false;
            } else {
                clearError(document.getElementById(`error-${field.id}`));
            }
        });
    
        const otherTrainingField = container.querySelector("input[type='text']");
        if (otherTrainingField) {
            const textValue = otherTrainingField.value.trim();
            if (textValue.length > 0 && (textValue.length < 2 || textValue.length > 100)) {
                showError(document.getElementById(`error-${otherTrainingField.id}`), "Text must be between 2 and 100 characters.");
                isValid = false;
            } else {
                clearError(document.getElementById(`error-${otherTrainingField.id}`));
            }
        }
    
        return isValid;
    }
    
    function clearTrainingErrors(container) {
        const errors = container.querySelectorAll(".text-red-500");
        errors.forEach(error => {
            error.textContent = "";
        });
    }
    
    // Initialize validation for different sections
    initSectionValidation(anmConfig);
    initSectionValidation(staffNurseConfig);
    initSectionValidation(medicalOfficersConfig);
    initSectionValidation(generalSurgeonsConfig);
    initSectionValidation(gynaecologistsConfig);
    initSectionValidation(anaesthetistsConfig);
    initSectionValidation(paediatriciansConfig);
    initSectionValidation(labTechniciansConfig);

   

    const nominatedInput = document.getElementById("dotsProviderNominated");
    const ntepTrainingContainer = document.getElementById("ntepTrainingContainer");
    const ntepTrainingRadios = document.querySelectorAll('input[name="ntepTraining"]');
    const nominatedError = document.getElementById("dotsProviderNominatedError");
    const ntepTrainingError = document.getElementById("ntepTrainingError");

    function toggleNtepTrainingContainer() {
        const nominatedValue = parseInt(nominatedInput.value, 10);
        if (nominatedValue > 0) {
            ntepTrainingContainer.style.display = "block";
            ntepTrainingRadios.forEach(radio => radio.setAttribute("required", "true"));
        } else {
            ntepTrainingContainer.style.display = "none";
            ntepTrainingRadios.forEach(radio => {
                radio.removeAttribute("required");
                radio.checked = false;
            });
            ntepTrainingError.textContent = ""; // Clear error
        }
    }

    nominatedInput.addEventListener("input", () => {
        const nominatedValue = parseInt(nominatedInput.value, 10);
        if (isNaN(nominatedValue) || nominatedValue < 0 || nominatedValue > 100) {
            nominatedError.textContent = "Please enter a number between 0 and 100.";
        } else {
            nominatedError.textContent = "";
        }
        toggleNtepTrainingContainer();
    });

    ntepTrainingRadios.forEach(radio => {
        radio.addEventListener("change", () => {
            if (Array.from(ntepTrainingRadios).some(r => r.checked)) {
                ntepTrainingError.textContent = ""; // Clear error
            } else {
                ntepTrainingError.textContent = "Please select an option for NTEP Training.";
            }
        });
    });

    // Ensure the NTEP Training container is correctly toggled on page load
    toggleNtepTrainingContainer();





        setupConditionalField(
            "sncuNbsuAvailable",       // Radio group name
            "Yes",                     // Condition value
            document.getElementById("sncuBedsContainer"), // Container for conditional field
            document.getElementById("numSncuBeds")       // Input for conditional field
        );

        setupConditionalField(
            "nrcMtcAvailable",
            "Yes",
            document.getElementById("nrcMtcBedsContainer"),
            document.getElementById("numNrcMtcBeds")
        );
        setupConditionalField(
            "dotsProviderNominated", 
            "Yes",
            document.getElementById("ntepTrainingContainer"), 
            document.querySelector('input[name="ntepTraining"]')
        );

        saveNextButtons.forEach(button => {
            button.addEventListener("click", (e) => {
                const currentSection = button.closest(".section");
                const nextSectionId = button.getAttribute("data-next");
        
                // Validate the current section
                const isValid = validateSection(currentSection);
                if (!isValid) {
                    e.preventDefault(); // Stop default navigation
                    alert("Please fix the highlighted errors before proceeding.");
                } else {
                    navigateToSection(nextSectionId); // Proceed only if valid
                }
            });
        });
        

    /**
     * Validates all fields within a section.
     * @param {HTMLElement} section - The section to validate.
     * @returns {boolean} - Returns true if the section is valid, false otherwise.
     */
    function validateSection(section) {
        let isValid = true;
        const sectionId = section.id;

        console.log("Validating section:", section.id);

        // Validate inputs and selects
        const inputs = section.querySelectorAll("input[required], select[required]");
        inputs.forEach(input => {
            const errorDiv = getErrorDiv(input);
            // const value = input.value.trim();
            const validationRules = getValidationRules(input, sectionId);

            // const errorMessage = validateField(value, validationRules);
            // if (errorMessage) {
            //     showError(errorDiv, errorMessage);
            //     isValid = false;
            // } else {
            //     clearError(errorDiv);
            // }

            // Attach real-time validation
            input.addEventListener("input", () => {
                const errorMessage = validateField(input.value.trim(), validationRules);
                errorMessage ? showError(errorDiv, errorMessage) : clearError(errorDiv);
            });
        });
       
    
        // Section-specific logic (e.g., radio groups)
        if (sectionId === "section1") {
            const radioGroups = ["facilityLevel", "teleconsultation", "nqasCommittee"];
            isValid = validateRadioGroups(section, radioGroups) && isValid;
        } else if (sectionId === "section2") {
                const radioGroups = ["buildingType",
            "runningWater",
            "powerBackup",
            "separateToilet",
            "privacyCurtain",
            "labourRoom",
            "afhcAvailable",
            "bloodBank",
            "waitingArea",
            "sncuNbsuAvailable",
            "radiantWarmer",
            "nrcMtcAvailable",
            "residentialFacility",
            "higherFacilitiesLinkages",
            "biomedicalWaste",
            "functionalLabs",
            "drugStorage",
            "dotsCenter"
            ];
            isValid = validateRadioGroups(section, radioGroups) && isValid;
        }
        else if (sectionId === "section3") {
            const radioGroups = [
                "ntepTraining"
            ];
            isValid = validateRadioGroups(section, radioGroups) && isValid;
        
            // const inputs = section.querySelectorAll("input[required]");
            // inputs.forEach(input => {
            //     const errorDiv = getErrorDiv(input);
            //     const maxLimit = parseInt(document.getElementById("dotsProviderNominated").value, 10);
            //     if (input.id === "ntepTraining" && maxLimit > 0) {
            //         if (!input.checked) {
            //             showError(errorDiv, "Please select an option for NTEP Training.");
            //             isValid = false;
            //         } else {
            //             clearError(errorDiv);
            //         }
            //     }
            // });
        }  
        console.log("Validation result for section:", section.id, isValid);
        return isValid;      
        
    }

    /**
     * Validates radio button groups in a section.
     * @param {HTMLElement} section - The section to validate.
     * @param {string[]} radioGroups - List of radio group names.
     * @returns {boolean} - Returns true if all radio groups are valid.
     */
    function validateRadioGroups(section, radioGroups) {
        let isValid = true;
        radioGroups.forEach(name => {
            const radios = section.querySelectorAll(`input[name="${name}"]`);
            const errorDiv = getErrorDivByName(name);
            const isChecked = Array.from(radios).some(radio => radio.checked);

            if (!isChecked) {
                showError(errorDiv, `Please select an option for ${formatFieldName(name)}.`);
                isValid = false;
            } else {
                clearError(errorDiv);
            }

            // Attach real-time validation
            radios.forEach(radio => {
                radio.addEventListener("change", () => clearError(errorDiv));
            });
        });
        return isValid;
    }

    /**
     * Retrieves validation rules for a specific field.
     * @param {HTMLElement} input - The input field.
     * @param {string} sectionId - The ID of the current section.
     * @returns {Object} - An object containing validation rules.
     */
    function getValidationRules(input, sectionId) {
        const rules = { required: true }; // Default rules
    
        // Ensure input is valid
        if (!input || !input.id) {
            console.error("Invalid input or missing ID", input);
            return rules;
        }
    
        // Handle hidden or disabled fields
        if (input.hidden || input.disabled) {
            rules.required = false;
            return rules;
        }
    
        // Apply section-specific rules
        if (sectionId === "section1") {
            if (input.id === "populationCovered") {
                rules.min = 50000;
                rules.max = 1000000;
            } else if (input.id === "facilityIncharge") {
                rules.minLength = 2;
                rules.maxLength = 40;
            } else if (input.id === "facilityInchargeDesignation") {
                rules.minLength = 2;
                rules.maxLength = 30;
            }
        } else if (sectionId === "section2") {
            if (input.id === "numLabourTables") {
                rules.min = 0;
                rules.max = 50;
            } else if (input.id === "numBeds") {
                rules.min = 15;
                rules.max = 500;
            } else if (input.id === "numMchBeds") {
                rules.min = 0;
                rules.max = 150;
            } else if (input.id === "numSncuBeds") {
                rules.min = 0;
                rules.max = 100;
            } else if (input.id === "numNrcMtcBeds") {
                rules.min = 0;
                rules.max = 100;
            }
        } else if (sectionId === "section3") {
            if (input.id.includes("sanctioned") || input.id.includes("available")) {
                rules.min = 0;
                rules.max = 100;
            }
        } else {
            console.warn(`Unexpected section ID: ${sectionId}`);
        }
    
        return rules;
    }
    

    /**
     * Validates a field value against given rules.
     * @param {string} value - The field value to validate.
     * @param {Object} rules - The validation rules.
     * @returns {string|null} - Returns an error message if invalid, otherwise null.
     */
    function validateField(value, rules) {
        if (rules.required && !value) return "This field is required.";
        if (rules.min !== undefined && +value < rules.min) return `Value must be at least ${rules.min}.`;
        if (rules.max !== undefined && +value > rules.max) return `Value must not exceed ${rules.max}.`;
        if (rules.minLength !== undefined && value.length < rules.minLength)
            return `Minimum ${rules.minLength} characters required.`;
        if (rules.maxLength !== undefined && value.length > rules.maxLength)
            return `Maximum ${rules.maxLength} characters allowed.`;
        return null;
    }

    /**
     * Navigates to the specified section.
     * @param {string} nextSectionId - The ID of the section to navigate to.
     */
    function navigateToSection(nextSectionId) {
        sections.forEach(section => (section.style.display = "none"));
        const nextSection = document.getElementById(nextSectionId);
        if (nextSection) nextSection.style.display = "block";
    }

    /**
     * Displays an error message in the specified error container.
     * @param {HTMLElement} errorDiv - The error container.
     * @param {string} message - The error message to display.
     */
    function showError(errorDiv, message) {
        if (errorDiv) {
            errorDiv.textContent = message;
            errorDiv.style.display = "block";
        }
    }

    /**
     * Clears the error message in the specified error container.
     * @param {HTMLElement} errorDiv - The error container.
     */
    function clearError(errorDiv) {
        if (errorDiv) {
            errorDiv.textContent = "";
            errorDiv.style.display = "none";
        }
    }

    /**
     * Gets the error container for a specific input.
     * @param {HTMLElement} input - The input field.
     * @returns {HTMLElement} - The error container element.
     */
    function getErrorDiv(input) {
        return document.getElementById(`error-${input.id}`);
    }

    /**
     * Gets the error container for a radio group.
     * @param {string} name - The name of the radio group.
     * @returns {HTMLElement} - The error container element.
     */
    function getErrorDivByName(name) {
        return document.getElementById(`error-${name}`);
    }

    /**
     * Formats a field name for display in error messages.
     * @param {string} name - The field name.
     * @returns {string} - A human-readable field name.
     */
    function formatFieldName(name) {
        return name.replace(/([A-Z])/g, " $1").toLowerCase();
    }
    

    function setupConditionalField(radioGroupName, conditionValue, container, input) {
        const radios = document.querySelectorAll(`input[name="${radioGroupName}"]`);
        const errorDiv = document.getElementById(`error-${input.id}`);
    
        radios.forEach(radio => {
            radio.addEventListener("change", () => {
                if (radio.value === conditionValue) {
                    container.style.display = "block";
                    input.setAttribute("required", "true");
                } else {
                    container.style.display = "none";
                    input.removeAttribute("required");
                    input.value = ""; // Clear value when hidden
                    if (errorDiv) errorDiv.textContent = ""; // Clear error when hidden
                }
            });
        });
    }
    function validateInputPair(sanctionedId, availableId, minValue, maxValue) {
        const sanctionedInput = document.getElementById(sanctionedId);
        const availableInput = document.getElementById(availableId);
        const sanctionedValue = parseInt(sanctionedInput.value, 10);
        const availableValue = parseInt(availableInput.value, 10);

        let isValid = true;

        // Create or find error elements
        let sanctionedError = document.getElementById(`${sanctionedId}-error`);
        if (!sanctionedError) {
            sanctionedError = document.createElement("span");
            sanctionedError.id = `${sanctionedId}error`;
            sanctionedError.className = "text-red-500 text-sm";
            sanctionedInput.parentElement.appendChild(sanctionedError);
        }

        let availableError = document.getElementById(`${availableId}-error`);
        if (!availableError) {
            availableError = document.createElement("span");
            availableError.id = `${availableId}-error`;
            availableError.className = "text-red-500 text-sm";
            availableInput.parentElement.appendChild(availableError);
        }

        // Validate sanctioned input
        if (isNaN(sanctionedValue) || sanctionedValue < minValue || sanctionedValue > maxValue) {
            sanctionedError.textContent = `Sanctioned value must be between ${minValue} and ${maxValue}.`;
            isValid = false;
        } else {
            sanctionedError.textContent = "";
        }

        // Validate available input if sanctioned is valid
        if (sanctionedValue > 0) {
            availableInput.disabled = false;
            if (isNaN(availableValue) || availableValue < 0 || availableValue > sanctionedValue) {
                availableError.textContent = "Available value must be between 0 and the sanctioned value.";
                isValid = false;
            } else {
                availableError.textContent = "";
            }
        } else {
            availableInput.disabled = true;
            availableInput.value = "";
            availableError.textContent = "";
        }

        return isValid;
    }
    function validateSection(section) {
        const inputs = section.querySelectorAll("input[type='number']");
        let isValid = true;

        inputs.forEach(input => {
            const inputId = input.id;
            if (inputId.includes("sanctioned")) {
                const availableId = inputId.replace("sanctioned", "available");
                const minValue = parseInt(input.getAttribute("data-min"), 10) || 0;
                const maxValue = parseInt(input.getAttribute("data-max"), 10) || 200;
                if (!validateInputPair(inputId, availableId, minValue, maxValue)) {
                    isValid = false;
                }
            }
        });

        return isValid;
    }
    document.querySelectorAll("input[type='number']").forEach(input => {
        if (input.id.includes("sanctioned")) {
            const sanctionedId = input.id;
            const availableId = sanctionedId.replace("sanctioned", "available");
            const minValue = parseInt(input.getAttribute("data-min"), 10) || 0;
            const maxValue = parseInt(input.getAttribute("data-max"), 10) || 200;

            input.addEventListener("input", () => validateInputPair(sanctionedId, availableId, minValue, maxValue));
            const availableInput = document.getElementById(availableId);
            availableInput.addEventListener("input", () => validateInputPair(sanctionedId, availableId, minValue, maxValue));
        }
    });

    function attachEventListenersToConfig(config) {
        config.forEach(({ sanctionedId, availableId, dependentContainerId }) => {
            const sanctionedInput = document.getElementById(sanctionedId);
            const availableInput = document.getElementById(availableId);
            const dependentContainer = document.getElementById(dependentContainerId);
    
            // Debugging Logs
            if (!sanctionedInput) console.error(`Sanctioned input not found for ID: ${sanctionedId}`);
            if (!availableInput) console.error(`Available input not found for ID: ${availableId}`);
            if (!dependentContainer) console.error(`Dependent container not found for ID: ${dependentContainerId}`);
    
            // Check if inputs exist before adding event listeners
            if (sanctionedInput) {
                sanctionedInput.addEventListener("input", () => validateStaffSection(config));
            }
    
            if (availableInput) {
                availableInput.addEventListener("input", () => validateStaffSection(config));
            }
    
            // Add event listeners to dependent container fields if it exists
            if (dependentContainer) {
                const trainingFields = dependentContainer.querySelectorAll("input");
                trainingFields.forEach(field => {
                    field.addEventListener("input", () => validateTrainingFields(dependentContainer));
                });
            }
        });
    }
    
    
});
