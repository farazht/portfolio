const serviceID = "service_uk46n0e";
const templateID = "template_52ypb2d";
const publicKey = "IosrT7wWfMddF8_7S";

document.getElementById("contact-button").addEventListener("click", function() {
    let from_name = document.getElementById("contact-name").value;
    let email_id = document.getElementById("contact-email").value;
    let message = document.getElementById("contact-message").value;

    let templateParams = {
        from_name: from_name,
        email_id: email_id,
        message: message
    };

    if (from_name && email_id && message) {
        emailjs.send(serviceID, templateID, templateParams, publicKey);
        alert("Your message has been sent successfully!");
        document.getElementById("contact-name").value = "";
        document.getElementById("contact-email").value = "";
        document.getElementById("contact-message").value = "";
    } else {
        alert("Please fill in all fields!");
    }
});

