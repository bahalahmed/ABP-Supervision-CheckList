// validation-common.js

// Helper function to enable/disable Available fields
function toggleAvailableField(sanctionedInput, availableInput, toggleDependentContainerCallback) {
    sanctionedInput.addEventListener("input", () => {
        const value = parseInt(sanctionedInput.value, 10);
        if (value > 0) {
            availableInput.disabled = false;
            availableInput.setAttribute("required", "true");
        } else {
            availableInput.disabled = true;
            availableInput.removeAttribute("required");
            availableInput.value = ""; // Clear value when disabled
        }
        if (typeof toggleDependentContainerCallback === "function") {
            toggleDependentContainerCallback(); // Call the callback to manage dependent container visibility
        }
    });
}

// Helper function to show/hide a dependent container based on Available fields
function toggleDependentContainer(availableFields, dependentContainer) {
    const totalAvailable = availableFields.reduce((sum, field) => sum + (parseInt(field.value, 10) || 0), 0);
    dependentContainer.style.display = totalAvailable > 0 ? "block" : "none";
}

// Generalized initializer for validation logic
export function initSectionValidation(config) {
    config.forEach(({ sanctionedId, availableId, dependentContainerId }) => {
        const sanctionedInput = document.getElementById(sanctionedId);
        const availableInput = document.getElementById(availableId);
        const dependentContainer = document.getElementById(dependentContainerId);

        if (sanctionedInput && availableInput) {
            toggleAvailableField(sanctionedInput, availableInput, () =>
                toggleTrainingsContainer(availableInput, dependentContainer)
            );
            availableInput.addEventListener("input", () =>
                toggleTrainingsContainer(availableInput, dependentContainer)
            );
        } else {
            console.error(`Element not found: ${sanctionedId} or ${availableId}`);
        }
    });
    
}

function toggleTrainingsContainer(availableInput, container) {
    if (parseInt(availableInput.value, 10) > 0) {
        container.style.display = "block";
       
    } else {
        container.style.display = "none";
       
    }
}
