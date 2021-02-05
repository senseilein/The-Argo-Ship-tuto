const messageConfirmation =
  "Thank you for submitting your message to the Argo ship. We will respond as soon as possible.";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(messageConfirmation);
  });
