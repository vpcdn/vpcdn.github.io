function removePaddingOnLoad() {
    // Function to remove vertical padding from an element using !important
    function removeVerticalPadding(element) {
        element.style.setProperty('padding-top', '0', 'important');
        element.style.setProperty('padding-bottom', '0', 'important');
    }

    // Get all elements with the class 'vp-section-auto-height'
    const sections = document.querySelectorAll('.vp-section-auto-height');

    sections.forEach(section => {
        let currentElement = section;

        // Traverse up through parents until finding a parent with the class 'content-wrapper'
        while (currentElement) {
            // Remove vertical padding from the current element
            removeVerticalPadding(currentElement);

            // Check if the current element has the class 'content-wrapper'
            if (currentElement.classList.contains('content-wrapper')) {
                break; // Stop traversing once 'content-wrapper' is found
            }

            // Move to the parent element
            currentElement = currentElement.parentElement;
        }
    });
}

// Run the function once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', removePaddingOnLoad);