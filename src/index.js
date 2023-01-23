const menu = document.querySelector("#menu");
const openIcon = document.querySelector("#open");

openIcon.addEventListener("click", ()=> {
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden')
        // & openIcon.classList.add('hidden');
    }else{
        menu.classList.add('hidden')
    }
})



