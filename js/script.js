const dot = document.querySelector('.dot');
const bod = document.querySelector('.input');
const bd = document.querySelector('body');

bod.addEventListener('click',()=>{
    console.log(bod.checked);
    if (bod.checked) {
        bd.classList.remove("light-theme")
        bd.classList.add("dark-theme")
      dot.classList.add("toggle");
    } else {
           dot.classList.remove("toggle");
        bd.classList.remove("dark-theme");
        bd.classList.add("light-theme");


    }
})