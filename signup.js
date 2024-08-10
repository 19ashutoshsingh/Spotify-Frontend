let email = document.getElementById("email");
let visible = document.getElementById("visible");

email.addEventListener("input", function() {
    let e = email.value.trim();
    // let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailPattern = /^[a-z0-9._]+@[a-z]+.[a-z]/;

    if (emailPattern.test(e)) {
        visible.style.display = "none";
        email.style.borderColor = ""; // Reset border color
    } else {
        visible.style.display = "block";
        email.style.borderColor = "red"; // Set border color to indicate error
    }
});


function navigateToHome(){
    document.body.classList.add("blur");
    setTimeout(function() {
        document.body.classList.remove("blur");
        window.location.href = "index.html"
    }, 500);
}

function navigateToLogin(){
    document.body.classList.add("blur");
    setTimeout(function() {
        document.body.classList.remove("blur");
        window.location.href = "login.html"
    }, 500); 
}
// email.addEventListener("blur", function() {
//     const e = email.value.trim();
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (e === "" || emailPattern.test(e)) {
//         visible.style.display = "none";
//         email.style.borderColor = ""; // Reset border color
//     }
// });