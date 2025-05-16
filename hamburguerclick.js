const menuBtn = document.querySelector(".ham");
const nav = document.querySelector(".nav");



// Animação hamburger para X

menuBtn.addEventListener("click", (qualquer) =>{
            
      if(menuBtn.contains(qualquer.target) == true){
            nav.classList.toggle("open");
            menuBtn.classList.toggle("open");
          }else{
            menuBtn.classList.remove("open");
            nav.classList.remove("open");
          }      
      });


// para fechar o menu hamburger com click fora
    document.onclick = (qualquer) => {
      if(!menuBtn.contains(qualquer.target) && !nav.contains(qualquer.target)){
            menuBtn.classList.remove("open");
            nav.classList.remove("open");
           }
}
