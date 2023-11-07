 // Aquí tu código
const boton=document.getElementById("agregar");
const lista= document.getElementById("lista");
console.log(boton)

boton.addEventListener("click",function(){
    let dato=prompt("Introduce el dato");
    lista.innerHTML+="<li>"+dato+"</li>";
})