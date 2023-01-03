// splash screen Function
const logo = document.querySelectorAll( '#logo path');

for (let i = 0; i < logo.length; i++) {
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`)
    
}

window.addEventListener("DOMContentLoaded",()=>{
    const splach = document.getElementById('splach');

    setTimeout(()=>{
         splach.classList.add('splashDisapire')
         console.log('hii')
    },8000)
})