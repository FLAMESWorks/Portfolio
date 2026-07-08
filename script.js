const words = [
    "Roblox Scripter",
    "Lua Developer",
    "System Designer",
    "UI Animator"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.querySelector(".typing");

function type(){

    const current = words[wordIndex];

    if(!deleting){

        typing.textContent = current.substring(0,charIndex++);
        
        if(charIndex > current.length){
            deleting = true;
            setTimeout(type,1500);
            return;
        }

    }else{

        typing.textContent = current.substring(0,charIndex--);

        if(charIndex < 0){
            deleting = false;
            wordIndex++;

            if(wordIndex >= words.length){
                wordIndex = 0;
            }
        }

    }

    setTimeout(type,deleting ? 50 : 100);

}

type();

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

},{
    threshold:.2
});

document.querySelectorAll("section").forEach(sec=>{

    sec.style.opacity="0";
    sec.style.transform="translateY(80px)";
    sec.style.transition=".8s";

    observer.observe(sec);

});

const particles = document.getElementById("particles");

for(let i=0;i<70;i++){

    const star=document.createElement("span");

    star.style.position="fixed";
    star.style.width=Math.random()*4+2+"px";
    star.style.height=star.style.width;
    star.style.background="white";
    star.style.borderRadius="50%";
    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*100+"vh";
    star.style.opacity=Math.random();

    star.style.animation=
    "floatStar "+(6+Math.random()*10)+"s linear infinite";

    particles.appendChild(star);

}

const style=document.createElement("style");

style.innerHTML=`

@keyframes floatStar{

0%{

transform:translateY(0px);

}

100%{

transform:translateY(-1200px);

}

}

`;

document.head.appendChild(style);
