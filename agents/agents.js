 // Select the form, inputs, and error elements
 const form = document.getElementById('secondForm');
 const usernameOrEmailInput = document.getElementById('usernameOrEmail');
 const passwordInput = document.getElementById('passwordField');
 const usernameOrEmailError = document.getElementById('usernameOrEmailError');
 const passwordError = document.getElementById('passwordFieldError');

 // Function to reset errors and remove error classes
 function resetErrors() {
    usernameOrEmailError.style.display = 'none';
    passwordError.style.display = 'none';
    usernameOrEmailInput.classList.remove('input-error');
    passwordInput.classList.remove('input-error');
 }

 // Function to handle form submission
 form.addEventListener('submit', function(event) {
    // Prevent form from submitting by default
    event.preventDefault();
    
    // Clear previous error messages
    resetErrors();
    
    let valid = true;

    // Validate username/email input
    if (usernameOrEmailInput.value.trim() === "") {
    usernameOrEmailError.style.display = 'block';
    usernameOrEmailInput.classList.add('input-error');
    valid = false;
    }

    // Validate password input
    if (passwordInput.value.trim() === "") {
    passwordError.style.display = 'block';
    passwordInput.classList.add('input-error');
    valid = false;
    }

    // If both fields are valid, proceed with form submission
    if (valid) {
    alert('Login successful!');
    form.reset();
    }
 });

 // Function to hide error on focus or typing
 function hideErrorOnInput(inputElement, errorElement) {
    inputElement.addEventListener('focus', function() {
        errorElement.style.display = 'none';
        inputElement.classList.remove('input-error');
    });

    inputElement.addEventListener('input', function() {
        errorElement.style.display = 'none';
        inputElement.classList.remove('input-error');
    });
 }

 // Hide error message on focus or input for both username/email and password fields
 hideErrorOnInput(usernameOrEmailInput, usernameOrEmailError);
 hideErrorOnInput(passwordInput, passwordError);