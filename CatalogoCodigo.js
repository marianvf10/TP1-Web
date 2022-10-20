import DB from './DB.json' assert {type:'json'};

//Metodos para mostrar el catalogo
function generarFondoVideojuego()
{
    let fondoVideojuego;
    fondoVideojuego = document.createElement('ul');
    fondoVideojuego.setAttribute('class','fondoVideojuego');

    return fondoVideojuego;
}

function generarPanelVideojuego()
{
    let panelVideojuego;
    panelVideojuego = document.createElement('li');
    panelVideojuego.setAttribute('class','videojuego');

    return panelVideojuego;
}

function generarImagen(posc)
{
    let imagen;
    imagen = document.createElement('img');
    imagen.setAttribute('src',videojuego[posc].imagen);
    imagen.setAttribute('class','imagenVideojuego');

    return imagen;
}

function generarTitulo(posc)
{
    let titulo;
    titulo = document.createElement('h3');
    titulo.appendChild(document.createTextNode(videojuego[posc].nombre));

    return titulo;
}

function generarInfoBasica(posc)
{
    let consola,precio,infoBasica;
    consola = document.createElement('p');
    consola.appendChild(document.createTextNode(videojuego[posc].consola));
    precio = document.createElement('p');
    precio.appendChild(document.createTextNode(videojuego[posc].precio+'$'));
    infoBasica = document.createElement('div');
    infoBasica.style.display = 'flex';
    infoBasica.style.justifyContent = 'space-between';
    infoBasica.appendChild(consola);
    infoBasica.appendChild(precio);
    return infoBasica;
}

function mostrarCatalogo(posc)
{
    let planilla = document.querySelector("article").lastElementChild;
    let fragmento = document.createDocumentFragment();
    let fondoVideojuego,panelVideojuego,imagen,titulo,infoBasica;
    let itr = 0;
    
    while(posc < videojuego.length && itr<8)
    {
        posc++;
        itr++;

        fondoVideojuego = generarFondoVideojuego();
        panelVideojuego = generarPanelVideojuego();
        imagen = generarImagen(posc);
        titulo = generarTitulo(posc);
        infoBasica = generarInfoBasica(posc);

        fondoVideojuego.appendChild(panelVideojuego);
        panelVideojuego.appendChild(imagen);
        panelVideojuego.appendChild(titulo);
        panelVideojuego.appendChild(infoBasica);
        
        fragmento.appendChild(fondoVideojuego);
    };
    planilla.appendChild(fragmento);
    
    return posc;
}

//Metodos de barras de informacion

function desplegarMenu(padre) {
    let hijo;
    //console.log(padre);
    hijo = padre.children;

    for (let i = 0; i < hijo.length; i++) {
        //console.log(hijo[i]);
        hijo[i].style.display = 'block';
        //console.log(hijo[i]);
    }
}

function cerrarMenu(padre) {
    let hijo;
    //console.log(padre);
    hijo = padre.children;
    for (let i = 1; i < hijo.length; i++) {
        //console.log(hijo[i]);
            hijo[i].style.display = 'none';
        //console.log(hijo[i]);
    }
}

function elegido(elegido) {
    let primerHijo = elegido.parentElement.firstElementChild;
    let elegidoInnerHTML = elegido.innerHTML;
    //innerHTML y outerHTML
    elegido.innerHTML = primerHijo.innerHTML;
    primerHijo.innerHTML = elegidoInnerHTML;

    cerrarMenu(elegido.parentElement);
}

function prenderElegido(elegido)
{
    elegido.style.background = "linear-gradient(180deg, rgb(132, 222, 83) 11%, rgb(41, 172, 152) 68%)";
    
}

function apagarElegido(elegido)
{
    elegido.style.background = "linear-gradient(180deg, rgb(232, 100, 100) 11%, rgb(240, 155, 59) 68%)";
}

function prenderOpcion(elegido){
    elegido.style.background = "linear-gradient(180deg, rgb(232, 100, 100) 11%, rgb(240, 155, 59) 68%)" ;
}

function apagarOpcion(elegido)
{
    elegido.style.background = "#1C1A20";
}

//Main
const videojuego = DB.videojuego;
const select = document.querySelectorAll('ul.barraInfo');
const opcion = document.querySelectorAll('li.barraInfo:not(#elegido)');
let poscInicial = 0;

poscInicial = mostrarCatalogo(poscInicial);

select.forEach(e => {
    e.addEventListener('click',() => desplegarMenu(e));
    e.addEventListener('mouseleave',() => cerrarMenu(e));
});

opcion.forEach(e => {
    e.addEventListener('click',() => elegido(e));
    e.addEventListener('mousedown',() => prenderElegido(e));
    e.addEventListener('mouseup',() => apagarElegido(e));
    e.addEventListener('mouseover',() => prenderOpcion(e));
    e.addEventListener('mouseleave',() => apagarOpcion(e));
})











