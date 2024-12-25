const menuButt = document.getElementById("menuButt");
const navbar = document.querySelector('.navbar');

menuButt.addEventListener("click", (e) => {

    menuButt.name = menuButt.name === "menu-outline" ? "close-outline" : "menu-outline";
    navbar.classList.toggle('opacity-0');
    // navbar.classList.toggle('h-screen');
    
})

// Animate the autowrite and delete characters

const autoText = document.getElementById('autoText');
const text = "Hi, I'm Timilehin Fortunate";
let charIndex = 0;
const typingSpeed = 100;
const deleteSpeed = 50;
let isDeleting = false;
const pauseTime = 1000;

function typeEffect(){
    if(!isDeleting){
        if(charIndex < text.length){
            autoText.textContent = text.slice(0, ++charIndex);
            setTimeout(typeEffect, typingSpeed);
        }else{
            isDeleting = true;
            setTimeout(typeEffect,pauseTime);
        }
    }else{
        if(charIndex > 0){
            autoText.textContent = text.slice(0, --charIndex);
            setTimeout(typeEffect,deleteSpeed);
        }else{
            isDeleting = false;
            setTimeout(typeEffect, typingSpeed);
        }
    }
}
typeEffect();

const scrollBtn = document.getElementById('scrollBtn');

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 300){
        scrollBtn.classList.remove('hidden');
    }else{
        scrollBtn.classList.add('hidden');
    }
})
window.addEventListener('click', ()=> {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
})