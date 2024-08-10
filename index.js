let lib_toolkit = document.querySelector(".lib-toolkit");
let close_toolkit = document.querySelector(".close-toolkit");
let lib_text = document.querySelector(".lib-text");
let svg_close = document.querySelector(".svg-close");

lib_text.addEventListener("mouseenter", function(){
    setTimeout(() =>{
        lib_toolkit.style.opacity = 1;
    },300)
    
})
lib_text.addEventListener("mouseleave", function(){
    setTimeout(() =>{
        lib_toolkit.style.opacity = 0;
    },200)
})

svg_close.addEventListener("mouseenter", function(){
    setTimeout(() =>{
        close_toolkit.style.opacity = 1;
    },300)
})
svg_close.addEventListener("mouseleave", function(){
    setTimeout(() =>{
        close_toolkit.style.opacity = 0;
    },300)
})



let cards = document.querySelectorAll(".card");

cards.forEach(card => {
    let play = card.querySelector(".play");

    card.addEventListener("mouseenter", function(){
        play.style.opacity = 1;
        // play.style.transition = "transform 0.5s ease, opacity 0.5s ease";
        play.style.transform = "translateY(-1rem)";
    });

    card.addEventListener("mouseleave", function(){
        play.style.opacity = 0;
        // play.style.transition = "transform 0.5s ease, opacity 0.5s ease";
        play.style.transform = "translateY(0)";
    });
});


function navigateToSignup(){
    document.body.classList.add("blur");
    setTimeout(function() {
        document.body.classList.remove("blur");
        window.location.href = "signup.html"
    }, 1000);
}
function navigateToLogin(){
    document.body.classList.add("blur");
    setTimeout(function() {
        document.body.classList.remove("blur");
        window.location.href = "login.html"
    }, 1000); 
}

let msg = document.querySelector(".msg");
let createPlaylist = document.querySelector(".createPlaylist");
let notNow = document.querySelector(".notNow");
let login = document.querySelector(".login");
createPlaylist.addEventListener('click', function(){
    msg.style.display = 'block';
})
notNow.addEventListener('click', function(){
    msg.style.display = 'none';
})


document.getElementById("container").classList.add("blur");

// var lastScrollTop = 0;
// var scrollThreshold = 2 * parseInt(getComputedStyle(document.documentElement).fontSize);

// window.addEventListener('scroll', function() {
//     var currentScroll = window.scrollY || document.documentElement.scrollTop;

//     if (currentScroll > lastScrollTop + scrollThreshold) {
//       // Scrolling down more than 2rem
//       document.getElementById('navbar').style.backgroundColor = 'black';
//     } else if (currentScroll < lastScrollTop - scrollThreshold) {
//       // Scrolling up more than 2rem
//       document.getElementById('navbar').style.backgroundColor = 'rgba(0, 0, 0, 0.826)';
//     }

//     lastScrollTop = currentScroll;
// });


// var container = document.getElementById('main_section');

// container.addEventListener('mouseenter', function() {
//     this.classList.add('show-scrollbar');
// });

// container.addEventListener('mouseleave', function() {
//     this.classList.remove('show-scrollbar');
// });



// timerCode
/* <script>
    function showDivBasedOnTime() {
        var currentTime = new Date().getHours();

        // Hide all divs initially
        var divs = document.querySelectorAll('.hidden');
        divs.forEach(function(div) {
            div.classList.add('hidden');
        });

        // Show div based on time
        if (currentTime >= 6 && currentTime < 12) {
            document.getElementById('div1').classList.remove('hidden');
        } else if (currentTime >= 12 && currentTime < 18) {
            document.getElementById('div2').classList.remove('hidden');
        } else {
            document.getElementById('div3').classList.remove('hidden');
        }
    }

    // Run initially
    showDivBasedOnTime();

    // Update every minute
    setInterval(showDivBasedOnTime, 60000);
</script> */
