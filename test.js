//btn scroll
let btnscroll=document.getElementById("btnscroll");
window.onscroll =function(){
    if(scrollY>= 400){
        btnscroll.style.display="block";
    }else{
        btnscroll.style.display="none";

    }
}
btnscroll.onclick =function(){
    scroll({
        top:0,
        left:0,
        behavior:"smooth",
    })
}
//form contact
  const form = document.querySelector(".contact-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        alert("Your request has been submitted successfully! We will respond to you soon.");
        form.reset();
      } else {
        alert("An error occurred while posting. Try again.");
      }
    });
  });

