let titulo = document.getElementById('titleEffect')
let productBtns = document.getElementsByClassName('productBtns')
let titleBtn = document.getElementById('titleBtn')

let isActive = false

function efectoTitulo(){
 if(!isActive){
  titulo.style.color="gray"; 
  titleBtn.style.color="gray";
  for(let i = 0; i < productBtns.length;i++){
    productBtns[i].style.color="gray";
  }  

  isActive=true;
 }else{
  titulo.style.removeProperty('color'); 
  titleBtn.style.removeProperty('color');
  for(let i = 0; i < productBtns.length;i++){
    productBtns[i].style.removeProperty('color');
  }  
  isActive=false;
 }
}

efectoTitulo();
setInterval(efectoTitulo,300)