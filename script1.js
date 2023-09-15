document.addEventListener('DOMContentLoaded', function() {
    const phoneNumberInput = document.getElementById('phoneNumber');
    const countryCodeSelect = document.getElementById('countryCode');
    const submitButton = document.getElementById('submitPhoneNumber');
    

    phoneNumberInput.addEventListener('change', function () {
        if (phoneNumberInput.validity.valid) {
            // Input is valid, show the green tick icon
            tickIcon.style.backgroundImage = 'url("images/green_tick.png")'; // Replace with your green tick icon image
            tickIcon.style.display = 'block';
        } else {
            // Input is not valid, hide the tick icon
            tickIcon.style.display = 'none';
        }
    });

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();  // Prevent default form submission

        const fullNumber = countryCodeSelect.value + phoneNumberInput.value;
        console.log(fullNumber);
        // Check if the input value is numeric (Note: We don't need to re-check this if the input type is already set to 'number')
        if (isNaN(phoneNumberInput.value)) {
            alert('Please enter a valid number.');
            return;
        }

        // Check for the specific phone number
        if (fullNumber === "+60173527250") {
            localStorage.setItem("phoneNumber", fullNumber);
            window.location.href = 'page2.html';  // Assuming you have a 'page2.html' for the loyalty points
        } else {
            alert('Invalid number for loyalty points check.');
        }
    });
});