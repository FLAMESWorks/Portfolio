// ============================
// Typing Animation
// ============================

const words = [
    "Roblox Scripter",
    "Lua Developer",
    "Gameplay Programmer",
    "UI Animator",
    "System Designer"
];

const typing = document.querySelector(".typing");

let word = 0;
let letter = 0;
let deleting = false;

function typeEffect(){

    if(!typing) return;

    let current = words[word];

    if(!deleting){

        typing.textContent = current.substring(0,letter++);

        if(letter > current.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }else{

        typing.textContent = current.substring(0,letter--);

        if(letter < 0){

            deleting = false;

            word++;

            if(word >= words.length)
                word = 0;

        }

    }

    setTimeout(typeEffect,deleting ? 45 : 100);

}

typeEffect();


// ============================
// Cursor Glow
// ============================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

    if(cursor){

        cursor.style.left = e.clientX+"px";
        cursor.style.top = e.clientY+"px";

    }

});


// ============================
// Create Stars
// ============================

const particles = document.getElementById("particles");

if(particles){

for(let i=0;i<250;i++){

    const star=document.createElement("div");

    star.className="star";

    let size=Math.random()*3+1;

    star.style.width=size+"px";
    star.style.height=size+"px";

    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*100+"vh";

    star.style.animationDuration=
    (2+Math.random()*5)+"s";

    particles.appendChild(star);

}

}


// ============================
// Shooting Stars
// ============================

function shootingStar(){

    if(!particles) return;

    const star=document.createElement("div");

    star.className="shooting";

    star.style.left=Math.random()*20+"vw";
    star.style.top=Math.random()*40+"vh";

    particles.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },4000);

}

setInterval(shootingStar,2500);


// ============================
// Scroll Reveal
// ============================

const reveals=document.querySelectorAll(

".glass,.card,.skill,.section-title"

);

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

},{threshold:.2});

reveals.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(80px)";

el.style.transition=".8s";

observer.observe(el);

});


// ============================
// Navbar Scroll Effect
// ============================

const nav=document.querySelector("nav");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

nav.style.background="rgba(5,8,22,.85)";
nav.style.backdropFilter="blur(20px)";

}else{

nav.style.background="rgba(5,8,22,.45)";

}

});


// ============================
// Card Tilt Effect
// ============================

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*18;
const rotateX=((y/rect.height)-0.5)*-18;

card.style.transform=
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-12px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(1000px) rotateX(0) rotateY(0)";

});

});


// ============================
// Smooth Fade
// ============================

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});


// ============================
// Floating Animation
// ============================

const profile=document.querySelector(".profile-card");

if(profile){

let angle=0;

setInterval(()=>{

angle+=0.02;

profile.style.transform=
`translateY(${Math.sin(angle)*10}px)`;

},20);

}
