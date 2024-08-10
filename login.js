let user = document.getElementById("username");
let msg = document.getElementById("visible1");

user.addEventListener("input", function(){
    if(user.value.trim() === ""){
        msg.style.display = "block"
        user.style.borderColor = "rgba(255, 0, 0, 0.865)"
    }else{
        msg.style.display = "none"
        user.style.borderColor = ""
    }
})


let pwd = document.getElementById("password_input");
let hide = document.getElementById("hide");
let show = document.getElementById("show");
let msg2 = document.getElementById("visible2");

hide.addEventListener('click', function(){
    show.style.display = "block"
    hide.style.display = "none"
    pwd.type = 'text'
})
show.addEventListener('click', function(){
    hide.style.display = "block"
    show.style.display = "none"
    pwd.type = 'password'
})

pwd.addEventListener("input", function(){
    if(pwd.value.trim() === ""){
        msg2.style.display = "block"
        pwd.style.borderColor = "rgba(255, 0, 0, 0.865)"
    }else{
        msg2.style.display = "none"
        pwd.style.borderColor = ""
    }
})


let allow = document.getElementById("allow")
let deny = document.getElementById("deny")

allow.addEventListener('click', function(){
    allow.style.display = 'none'
    deny.style.display = 'block'
})
deny.addEventListener('click', function(){
    deny.style.display = 'none'
    allow.style.display = 'block'
})

function navigateToHome(){
    document.body.classList.add("blur");
    setTimeout(function() {
        document.body.classList.remove("blur");
        window.location.href = "index.html"
    }, 500);
}
function navigateToSignup(){
    document.body.classList.add("blur");
    setTimeout(function() {
        document.body.classList.remove("blur");
        window.location.href = "signup.html"
    }, 500);
}