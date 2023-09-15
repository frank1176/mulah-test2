window.addEventListener("DOMContentLoaded", function() {
    const phoneNumber = localStorage.getItem("phoneNumber");
    const name = localStorage.getItem("name");
    const birthday = localStorage.getItem("birthday");
    const email = localStorage.getItem("email");

    document.getElementById("phoneNumber").textContent = phoneNumber || "Not provided";
    document.getElementById("userName").textContent = name || "Not provided";
    document.getElementById("userBirthday").textContent = birthday || "Not provided";
    document.getElementById("userEmail").textContent = email || "Not provided";
});

function goBack() {
    window.location.href = "index.html"; 
}
