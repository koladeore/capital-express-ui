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
            alert("Please enter a valid phone number.");
        }
    });

    // Initialize Select2 for the dropdowns
    $('#state, #localGovernment').select2({
        placeholder: "Select",
        allowClear: true
    });
});
