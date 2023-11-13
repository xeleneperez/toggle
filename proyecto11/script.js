const body= document.querySelector("body");
const toggle= document.getElementById("toggle");
// el metodo toggle de la interfaz elimina un token existente de la lista y devuelve false 
//si el token no existe  se agrega y la funcion devuelve verdadero

toggle.addEventListener('click',()=>{
    toggle.classList.toggle("toggleBlanco");
    body.classList.toggle("toggleBlanco");
})