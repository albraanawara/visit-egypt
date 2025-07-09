// Scroll to top button
let btnscroll = document.getElementById("btnscroll");
window.onscroll = function () {
  btnscroll.style.display = scrollY >= 400 ? "block" : "none";
};
btnscroll.onclick = function () {
  scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

// Contact Form Submission
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // ✅ تحقق من ملء الحقول
  if (!form.checkValidity()) {
    alert("Please fill all required fields.");
    return;
  }

  const data = new FormData(form);
  fetch(form.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("Your request has been submitted successfully! We will respond to you soon.");
        form.reset();
      } else {
        alert("An error occurred while posting. Try again.");
      }
    })
    .catch(() => {
      alert("Something went wrong. Please try again later.");
    });
});
