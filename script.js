function showsidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hidesidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

function validateEmail() {
    var emailInput = document.getElementById('newsletterEmail');
    var email1 = emailInput.value.trim();

    if (email1 === "") {
        alert("Please enter an email address.");
    } else {
        alert("Thank you for subscribing!");

    }
}

document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    var name = document.getElementById('name');
    var company = document.getElementById('company');
    var email = document.getElementById('email');
    var service = document.getElementById('service');
    var description = document.getElementById('description');


    var isValid = true;


    var fields = [name, company, email, service, description];

    fields.forEach(function (field) {
        if (field.value.trim() === "") {
            field.style.border = "1px solid red";
            isValid = false;
        } else {
            field.style.border = ""; 
        }
    });

    if (isValid) {
        alert("Form submitted successfully!");
    } else {
        field.style.border = "1px solid red"; 
    }
});