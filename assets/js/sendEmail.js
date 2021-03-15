function sendMail(contactForm) {
emailjs.send("service_motdhpp","template_kjnqbzq",{
"from_name": contactForm.name.value,
"feedback_request": contactForm.feedbacksummary.value,
"from_email": contactForm.email.value,
})
.then( function(response) {

console.log("SUCCESS!", response);
document.getElementById('fullname').value='';
document.getElementById('email').value='';
document.getElementById('feedback-summary').value='Thank you for your feedback :)';
},
function(error) {
console.log("FAILED", error);
});
return false;
}

