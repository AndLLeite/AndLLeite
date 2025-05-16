const myObserver = new IntersectionObserver( (pega) => {
    //console.log(pega)
       pega.forEach((element) => {
            if(element.isIntersecting){
                element.target.classList.add("show");
            }
            else{
                element.target.classList.remove("show");
                }
        })
}); 
const elementos = document.querySelectorAll(".hidden");

elementos.forEach((element) =>
     myObserver.observe(element)
);



const vidObserver = new IntersectionObserver( (pegavid) => {
        pegavid.forEach((element) => {
    
        })
pega.forEach((element) => {
    if(element.isIntersecting){
        element.target.classList.add("videoaula");
    }
    else{
        element.target.classList.remove("videoaula");
        }
        })
}); 

const videovan = document.querySelector(".vid");
videovan.foreach((element) =>
    vidObserver.observe(element)
);

