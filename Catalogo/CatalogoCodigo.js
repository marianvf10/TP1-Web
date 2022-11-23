import DB from '../DB.json' assert {type: 'json'};

//Metodos para mostrar el catalogo
function generarBordeVideojuego() {
    let bordeVideojuego;
    bordeVideojuego = document.createElement('ul');
    bordeVideojuego.setAttribute('class', 'videogame-border');

    return bordeVideojuego;
}

function generarFondoVideojuego() {
    let fondoVideojuego;
    fondoVideojuego = document.createElement('li');
    fondoVideojuego.setAttribute('class', 'videogame-background');

    return fondoVideojuego;
}

function generarImagen(posc) {
    let imagen;
    imagen = document.createElement('img');
    imagen.setAttribute('src', videojuego[posc].imagen);
    imagen.setAttribute('class', 'videogame-img');

    return imagen;
}

function generarTitulo(posc) {
    let titulo;
    titulo = document.createElement('h3');
    titulo.appendChild(document.createTextNode(videojuego[posc].nombre));

    return titulo;
}

function generarInfoBasica(posc) {
    let consola, precio, infoBasica;
    consola = document.createElement('p');
    consola.appendChild(document.createTextNode(videojuego[posc].consola));
    precio = document.createElement('p');
    precio.appendChild(document.createTextNode(videojuego[posc].precio + '$'));
    infoBasica = document.createElement('div');
    infoBasica.style.display = 'flex';
    infoBasica.style.justifyContent = 'space-between';
    infoBasica.appendChild(consola);
    infoBasica.appendChild(precio);
    return infoBasica;
}

function mostrarCatalogo(catalogo,posc) {
    let planilla = document.querySelector('.grid');
    let fragmento = document.createDocumentFragment();
    let bordeVideojuego, fondoVideojuego, imagen, titulo, infoBasica;
    let itr = 0;

    while (posc < videojuego.length && itr < 8) {
        bordeVideojuego = generarBordeVideojuego();
        fondoVideojuego = generarFondoVideojuego();
        imagen = generarImagen(posc);
        titulo = generarTitulo(posc);
        infoBasica = generarInfoBasica(posc);

        bordeVideojuego.appendChild(fondoVideojuego);
        fondoVideojuego.appendChild(imagen);
        fondoVideojuego.appendChild(titulo);
        fondoVideojuego.appendChild(infoBasica);

        fragmento.appendChild(bordeVideojuego);

        posc++;
        itr++;
    };
    planilla.appendChild(fragmento);

    return posc;
}

function eliminarCatalogo()
{
    let planilla = document.querySelector('.grid');
    let videojuego = planilla.children;
    let long = videojuego.length;

    for(let itr=0;itr<long;itr++)
    {
        console.log(videojuego[0]);
        planilla.removeChild(videojuego[0]);
    }

    return long;
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

function prenderElegido(elegido) {
    elegido.style.background = "linear-gradient(180deg, rgb(132, 222, 83) 11%, rgb(41, 172, 152) 68%)";

}

function apagarElegido(elegido) {
    elegido.style.background = "linear-gradient(180deg, rgb(232, 100, 100) 11%, rgb(240, 155, 59) 68%)";
}

function prenderOpcion(elegido) {
    elegido.style.background = "linear-gradient(180deg, rgb(232, 100, 100) 11%, rgb(240, 155, 59) 68%)";
}

function apagarOpcion(elegido) {
    elegido.style.background = "#1C1A20";
}

//Auxiliares

function masBarato(a,b)
{
    let res;

    if(a.precio > b.precio)
    {
        res = 1
    }
    else if(a.precio < b.precio)
    {
        res = -1;
    }
    else
    {
        res = 0;
    }

        return res;
}


//Main
//INEFICIENTE:ESTOY HACIENDO UN SORT CADA VEZ QUE HAGO UNA CAMBIO DE ORDEN,DEBERIA TENER LOS ARREGLOS PRECREADOS
//POR SEPARADO Y UNICAMENTE CAMBIAR EL INPUT A LOS METODOS DE MOSTRAR CATALOGO
const videojuego = DB.videojuego.sort(masBarato);
const select = document.querySelectorAll('ul.barraInfo');
const opcion = document.querySelectorAll('li.barraInfo:not(#elegido)');
const boton = document.querySelectorAll('button');
let poscInicial = 0;

poscInicial = mostrarCatalogo(videojuego,poscInicial);

select.forEach(e => {
    e.addEventListener('click', () => desplegarMenu(e));
    e.addEventListener('mouseleave', () => cerrarMenu(e));
});

opcion.forEach(e => {
    e.addEventListener('click', () => elegido(e));
    e.addEventListener('mousedown', () => prenderElegido(e));
    e.addEventListener('mouseup', () => apagarElegido(e));
    e.addEventListener('mouseover', () => prenderOpcion(e));
    e.addEventListener('mouseleave', () => apagarOpcion(e));
})

boton[0].addEventListener('click', () => {
    let aux;
    if(poscInicial != 8)
    {
        aux = eliminarCatalogo();
        poscInicial = mostrarCatalogo(videojuego,poscInicial-8-aux);
    }
});

boton[1].addEventListener('click', () => {
    if(poscInicial != videojuego.length)
    {
        eliminarCatalogo();
        poscInicial = mostrarCatalogo(videojuego,poscInicial);
    }

});













