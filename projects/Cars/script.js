
document.querySelector(".content").onmouseover = function(){
    document.querySelector(".heading").style.border = "2px solid #d56231"
    document.querySelector(".heading").style.paddingLeft = "30px"
    document.querySelector(".heading").style.paddingRight = "30px"
    document.querySelector(".heading").style.borderRadius = "20px"
    document.querySelector(".content").style.border = "none"
}
document.querySelector(".content").onmouseout = function(){
    document.querySelector(".heading").style.border = "none"
    document.querySelector(".content").style.borderBottom = "2px solid #d56231"
    document.querySelector(".heading").style.padding = "0px"
}

thumb = document.querySelector(".thumb");
let isPlaying = false;

document.querySelector(".play").addEventListener("click", function(){
    if (!isPlaying) {
        document.querySelector(".vid3").play();
        document.querySelector(".thumb").style.display = "none";
        document.querySelector('.play').innerHTML = `<i class="bi bi-pause-fill"></i>`;
        isPlaying = true;
    } else {
        document.querySelector(".vid3").pause();
        document.querySelector(".thumb").style.display = "";
        document.querySelector('.play').innerHTML = `<i class="bi bi-play-fill"></i>`;
        isPlaying = false;
    }
});

document.querySelector(".scroll").onclick = function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', function () {
   let themeToggleBtn = document.querySelector(".dark")
   let body = document.querySelector("body")
   let head = document.querySelector(".darkhead1")
   let head2 = document.querySelector(".darkhead2")
   let playbtn = document.querySelector(".play")
   let nav = document.querySelectorAll("a")
   let container = document.querySelector(".ctn1")
   let container2 = document.querySelector(".ctn2")
   let first = document.querySelector(".first")
   let second = document.querySelector(".second")
   let arrow = document.querySelector(".arrow")
   let foot = document.querySelector("footer")
   let moon = document.querySelector(".moon")
    let isDarkTheme = false;
    themeToggleBtn.addEventListener('click', function () {
        console.log("he")
        isDarkTheme = !isDarkTheme;

        if (isDarkTheme) {
            // Switch to dark theme
            body.classList.add('dark-theme');
            head.classList.add('dark-theme');
            nav.forEach( function (e){
                e.style.color = "black"
            })
            playbtn.classList.add('dark-theme');
            container.classList.add('dark-theme');
            container2.classList.add('dark-theme');
            first.classList.add('dark-theme')
            second.classList.add('dark-theme')
            arrow.classList.add('dark-theme')
            foot.classList.add('dark-theme')
            moon.classList.add('dark-theme')

            var icon = document.querySelector('.dark i');
            if (icon.classList.contains('bi-brightness-high-fill')) {
                icon.classList.add('bi-moon-fill');
                icon.classList.remove('bi-brightness-high-fill');
            } else {
                icon.classList.add('bi-brightness-high-fill');
                icon.classList.remove('bi-moon-fill');
            }
            // head2.classList.add('dark-theme');
        } else {
            // Switch to light theme
            body.classList.remove('dark-theme');
            head.classList.remove('dark-theme');
            nav.forEach( function (e){
                e.style.color = "white"
            })
            playbtn.classList.remove('dark-theme');
            container.classList.remove('dark-theme');
            container2.classList.remove('dark-theme');
            first.classList.remove('dark-theme')
            second.classList.remove('dark-theme')
            arrow.classList.remove('dark-theme')
            foot.classList.remove('dark-theme')
            moon.classList.remove('dark-theme')
        }
    })})



const contents99 = document.getElementById('.content');

// Check if the device is a mobile device
const isMobile = window.matchMedia("only screen and (max-width: 767px)").matches;

// if (isMobile) {
//     // Remove the onmouseover event listener
//     contents99.removeEventListener('mouseover', function{
//         document.querySelector(".heading").style.border = "2px solid #d56231"
//     document.querySelector(".heading").style.paddingLeft = "30px"
//     document.querySelector(".heading").style.paddingRight = "30px"
//     document.querySelector(".heading").style.borderRadius = "20px"
//     document.querySelector(".content").style.border = "none"

//     });
// }


gsap.from(".img", {
    y: 100,
    overflow : "hidden",
    duration: 2
});
gsap.from(".head" , {
    y:-50 ,
    duration:3,
})
gsap.from(".navli" , {
    x:100,
    duration:2
})
gsap.from(".logo" , {
    x:-100,
    duration:2
})


gsap.from(".li1" , {
    x : 1000 ,
    duration : 1,
    scrollTrigger: {
        trigger: "body",
        // markers:true,
        start :850,
        duration :2 
    },
})
gsap.from(".li2" , {
    x : 1000 ,
    duration : 1,
    delay : 0.3,
    scrollTrigger: {
        trigger: "body",
        // markers:true,
        start :850,
        duration :2 
    },
})
gsap.from(".li3" , {
    x : 1000 ,
    duration : 1,
    delay : 0.6,
    scrollTrigger: {
        trigger: "body",
        // markers:true,
        start :850,
        duration :2 
    },
})
gsap.from(".li4" , {
    x : 1000 ,
    duration : 1,
    delay : 0.9,
    scrollTrigger: {
        trigger: "body",
        // markers:true,
        start :850,
        duration :2 
    },
})
gsap.from(".ctn1" , {
    // x : 800 ,
    opacity :0,
    duration : 1,
    // delay : 0.9,
    scrollTrigger: {
        trigger: "body",
        // markers:true,
        start :2250,
        duration :2 
    },
})
gsap.from(".ctn2" , {
    // x : 800 ,
    opacity :0,
    duration : 1,
    delay : 0.2,
    scrollTrigger: {
        trigger: "body",
        // markers:true,
        start :2250,
        duration :2 
    },
})
gsap.from(".ctn3" , {
    // x : 800 ,
    opacity :0,
    duration : 1,
    delay : 0.4,
    scrollTrigger: {
        trigger: "body",
        // markers:true,
        start :2250,
        duration :2 
    },
})


