var regionesDivs = document.querySelectorAll(".region");
const carta = document.getElementById('carta-inf');
const btnSubmit = document.getElementById('btn-submit');
const btnCerrarForm = document.getElementById('btn-cerrar-form');
const formActualizar = document.getElementById('form-modificar');

const descripcion= document.getElementById('descripcion');
const imagen= document.getElementById('imagen');

let r1 =  {
  nombre: 'Arica',
  descripcion: "Capital regional: Arica",
  imagen:"./assets/img/arica.jpg"
};
let r2 = {
  nombre:"Tarapacá",
  descripcion:"Capital regional: Iquique",
  imagen:"./assets/img/tarapaca.jpg"
};
let r3 = {
  nombre:"Antofagasta",
  descripcion:"Capital regional: Antogafasta",
  imagen:"./assets/img/antofa.jpg"
};
let r4 = {
  nombre:"Atacama",
  descripcion:"Capital regional: Copiapó",
  imagen:"./assets/img/atacama.jpg"
}

let r5 = {
    nombre:"Coquimbo",
    descripcion:"Capital regional: La Serena",
    imagen:"./assets/img/coquimbo.jpeg"
  }

  let r6 = {
    nombre:"Valparaíso",
    descripcion:"Capital regional: Valparaíso",
    imagen:"./assets/img/valpo.jpg"
  }

  let r7 = {
    nombre:"Metropolitana",
    descripcion:"Capital regional: Santiago",
    imagen:"./assets/img/stgo.jpg"
  }

  let r8 = {
    nombre:"O'Higgins",
    descripcion:"Capital regional: Rancagua",
    imagen:"./assets/img/ohiggins.jpg"
  }

  let r9 = {
    nombre:"Maule",
    descripcion:"Capital regional: Talca",
    imagen:"./assets/img/maule.jpg"
  }

  let r10 = {
    nombre:"Ñuble",
    descripcion:"Capital regional: Chillán",
    imagen:"./assets/img/nuble.jpg"
  }

  let r11 = {
    nombre:"Biobío",
    descripcion:"Capital regional: Concepción",
    imagen:"./assets/img/conce.jpg"
  }

  let r12 = {
    nombre:"Araucanía",
    descripcion:"Capital regional: Temuco",
    imagen:"./assets/img/araucania.jpg"
  }

  let r13 = {
    nombre:"Los Ríos",
    descripcion:"Capital regional: Valdivia",
    imagen:"./assets/img/rios.jpg"
  }

  let r14 = {
    nombre:"Los Lagos",
    descripcion:"Capital regional: Puerto Montt",
    imagen:"./assets/img/lagos.jpg"
  }

  let r15 = {
    nombre:"Aysén",
    descripcion:"Capital regional: Coyhaique",
    imagen:"./assets/img/aysen.jpg"
  }

  let r16 = {
    nombre:"Magallanes",
    descripcion:"Capital regional: Punta Arenas",
    imagen:"./assets/img/magallanes.jpg"
  }

let regiones = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16];

function actualizarDatos(){
  console.log("ACTUALIZDO");
}
function cerrarForm(){
  formActualizar.setAttribute('data-visible', false);
}
regionesDivs.forEach((element, i) => {
  element.addEventListener('click', (event) =>{
    formActualizar.setAttribute('data-visible', true);
  });

  element.addEventListener('mouseover',()=>{
    carta.style.display = 'flex';
    carta.innerHTML = 
    '<img class="carta-img" src="'+ regiones[i].imagen+'"></img>'+
    '<div class="carta-title">'+ regiones[i].nombre+'</div>' + 
    '<div class="carta-text">'+ regiones[i].descripcion +'</div>';
  });
  element.addEventListener('mouseout',()=>{
    carta.style.display = 'none';
  });

});

document.addEventListener('mousemove', (event)=>{
  carta.style.left = event.pageX + 70 +'px';
  carta.style.top = event.pageY + 'px';
})
btnCerrarForm.onclick = cerrarForm; 
btnSubmit.onclick = actualizarDatos;