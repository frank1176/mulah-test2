document.getElementById("registrationForm").addEventListener("submit", function(event){
    event.preventDefault();
    let valid = true;

    // Name validation
    let name = document.getElementById("name").value;
    if(name.trim() === "") {
        document.getElementById("nameError").textContent = "Please insert the name.";
        valid = false;
    } else {
        document.getElementById("nameError").textContent = "";
    }

    // Birthday validation
    // For simplicity, just checking if any field is empty
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    if(day.trim() === "" || month.trim() === "" || year.trim() === "") {
        document.getElementById("birthdayError").textContent = "Please insert the complete birthday.";
        valid = false;
    } else {
        document.getElementById("birthdayError").textContent = "";
    }

    // Email validation
    
    let email = document.getElementById("email").value;
    let skipEmail = document.getElementById("skipEmailCheck").checked;

    if(email.trim() === "" && !skipEmail) {
        document.getElementById("emailError").textContent = "Please insert the validate email address";
        valid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }
    if(!valid) {
        event.preventDefault(); // Stops form from submitting if there's any error
    }else{
        const birthday = `${day}-${month}-${year}`;

        localStorage.setItem("name", name);
        localStorage.setItem("birthday", birthday);
        localStorage.setItem("email", email);

        window.location.href = "page3.html"; 
    }
});
