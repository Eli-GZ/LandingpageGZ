let titulo = document.getElementById('titleEffect')
let isActive = false

function efectoTitulo(){
 if(!isActive){
  titulo.style.color="gray";
  isActive=true;
 }else{
  titulo.style.removeProperty('color');
  isActive=false;
 }
}

efectoTitulo();
setInterval(efectoTitulo,300)