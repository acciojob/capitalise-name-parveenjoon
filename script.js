// Get the input field by its id
const inputField = document.getElementById('fname');

// Add event listener for the blur event
inputField.addEventListener('blur', function() {
    // Convert the input value to uppercase and set it back as the value of the input field
    this.value = this.value.toUpperCase();
});
