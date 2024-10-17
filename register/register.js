document.addEventListener("DOMContentLoaded", function () {
    var input = document.querySelector("#phone");

    var iti = window.intlTelInput(input, {
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.8/build/js/utils.js",
        initialCountry: "auto",
        autoPlaceholder: "aggressive",  // Force placeholder update
        placeholderNumberType: "MOBILE",
        separateDialCode: true,
        geoIpLookup: function (success, failure) {
            fetch('https://ipinfo.io?token=your_token_here')  // Replace with your IP info token
                .then(function (response) {
                    return response.json();
                })
                .then(function (response) {
                    var countryCode = (response && response.country) ? response.country : "US";
                    success(countryCode);
                })
                .catch(function () {
                    success("US");
                });
        }
    });

    // Validate phone number on submit
    $('form').on('submit', function (e) {
        var isValidNumber = iti.isValidNumber();
        if (!isValidNumber) {
            e.preventDefault();
            // alert("Please enter a valid phone number.");
        }
    });

    // Initialize Select2 for the dropdowns
    $('#state, #localGovernment').select2({
        placeholder: "Select",
        allowClear: true
    });
    // Form and input elements
const registerForm = document.getElementById('registerForm');
const formFields = [
    { element: document.getElementById('firstName'), error: document.getElementById('firstNameError') },
    { element: document.getElementById('lastName'), error: document.getElementById('lastNameError') },
    { element: document.getElementById('state'), error: document.getElementById('stateError') },
    { element: document.getElementById('localGovernment'), error: document.getElementById('localGovernmentError') },
    { element: document.getElementById('birthDate'), error: document.getElementById('birthDateError') },
    { element: document.getElementById('phone'), error: document.getElementById('phoneError') },
    { element: document.getElementById('gender'), error: document.getElementById('genderError') },
    { element: document.getElementById('address'), error: document.getElementById('addressError') },
    { element: document.getElementById('email'), error: document.getElementById('emailError') },
    { element: document.getElementById('password'), error: document.getElementById('passwordError') },
    { element: document.getElementById('confirmPassword'), error: document.getElementById('confirmPasswordError') }
];

// Function to reset errors and remove error classes
function resetErrors() {
    formFields.forEach(({ element, error }) => {
        error.style.display = 'none';
        element.classList.remove('input-error');
    });
}

// Attach 'input' and 'focus' event listeners to hide error message on user interaction
formFields.forEach(({ element, error }) => {
    element.addEventListener('input', () => {
        error.style.display = 'none';
        element.classList.remove('input-error');
    });

    element.addEventListener('focus', () => {
        error.style.display = 'none';
        element.classList.remove('input-error');
    });
    // For Select2 elements
    if (element.tagName === 'SELECT') {
        // Use Select2 events
        $(element).on('change', function () {
            error.style.display = 'none';
            element.classList.remove('input-error');
        });
    }
});

// Function to handle form submission
registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    resetErrors();
    let valid = true;

    // Validate each field
    if (formFields[0].element.value.trim() === "") {
        formFields[0].error.style.display = 'block';
        formFields[0].element.classList.add('input-error');
        valid = false;
    }
    if (formFields[1].element.value.trim() === "") {
        formFields[1].error.style.display = 'block';
        formFields[1].element.classList.add('input-error');
        valid = false;
    }
    if (formFields[2].element.value === "") {
        formFields[2].error.style.display = 'block';
        formFields[2].element.classList.add('input-error');
        valid = false;
    }
    if (formFields[3].element.value === "") {
        formFields[3].error.style.display = 'block';
        formFields[3].element.classList.add('input-error');
        valid = false;
    }
    if (formFields[4].element.value === "") {
        formFields[4].error.style.display = 'block';
        formFields[4].element.classList.add('input-error');
        valid = false;
    }
    if (formFields[5].element.value === "" || !/^[0-9]+$/.test(formFields[5].element.value)) {
        formFields[5].error.style.display = 'block';
        formFields[5].element.classList.add('input-error');
        valid = false;
    }
    if (formFields[6].element.value === "") {
        formFields[6].error.style.display = 'block';
        formFields[6].element.classList.add('input-error');
        valid = false;
    }
    if (formFields[7].element.value.trim() === "") {
        formFields[7].error.style.display = 'block';
        formFields[7].element.classList.add('input-error');
        valid = false;
    }
    if (formFields[8].element.value.trim() === "") {
        formFields[8].error.style.display = 'block';
        formFields[8].element.classList.add('input-error');
        valid = false;
    }
    if (formFields[9].element.value.trim() === "") {
        formFields[9].error.style.display = 'block';
        formFields[9].element.classList.add('input-error');
        valid = false;
    }

    // Password and Confirm Password validation
    const passwordValue = formFields[9].element.value.trim();
    const confirmPasswordValue = formFields[10].element.value.trim();

    if (confirmPasswordValue === "" || confirmPasswordValue !== passwordValue) {
        formFields[10].error.textContent = confirmPasswordValue === "" 
            ? "Please confirm your password" 
            : "Passwords do not match";
        formFields[10].error.style.display = 'block';
        formFields[10].element.classList.add('input-error');
        valid = false;
    }

    // If valid, submit the form
    if (valid) {
        console.log('Form submitted successfully');
        // You can add form submission logic here
    }
});
});
