  // Select the form, inputs, and error elements
  const form = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');

  // Function to reset errors and remove error classes
  function resetErrors() {
      emailError.style.display = 'none';
      passwordError.style.display = 'none';
      emailInput.classList.remove('input-error');
      passwordInput.classList.remove('input-error');
  }

  // Function to handle form submission
  form.addEventListener('submit', function(event) {
      // Prevent form from submitting by default
      event.preventDefault();
      
      // Clear previous error messages
      resetErrors();
      
      let valid = true;

      // Validate email input
      if (emailInput.value.trim() === "") {
          emailError.style.display = 'block';
          emailInput.classList.add('input-error');
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

  // Hide error message on focus or input for both email and password fields
  hideErrorOnInput(emailInput, emailError);
  hideErrorOnInput(passwordInput, passwordError);