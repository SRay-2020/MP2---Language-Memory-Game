/*jshint esversion: 6 */
// EmailJS email service
// Code Institute Lessons
// Fucntion calls on emailjs to send mail and resend in template to author
// let emailjs;
function sendMail(contactForm) {
    emailjs.send("service_motdhpp", "template_kjnqbzq", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "feedback_request": contactForm.feedbacksummary.value
    })


        .then(
            function(response) {

                // Stack Overflow lesson - return empty fields
                console.log("SUCCESS!", response);
                // document.getElementById('fullname').value = '';
                // document.getElementById('email').value = '';
                // // Returns a comment to user in feedback field to confirm email has sent 
                // document.getElementById('feedback-summary').value = 'We have received your email. Thank you for your feedback :)';
            },
            function(error) {
                console.log("FAILED", error);
            });

    // return false;
}
