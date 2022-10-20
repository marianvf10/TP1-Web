import DB from '../DB.json' assert {type:'json'};

//Metodos para mostrar proximos estrenos
function mostrarProximosEstrenos()
{
    let planilla = document.querySelector("div.game-container");
    let fragmento = document.createDocumentFragment();
    let fondoVideojuego,panelVideojuego,imagen,titulo,mesEstreno,infoBasica;
    
    for(let itr = 0;itr<3;itr++)
    {
        fondoVideojuego = generarFondoVideojuego();
        panelVideojuego = generarPanelVideojuego();
        imagen = generarImagen(itr);
        titulo = generarTitulo(itr);
        mesEstreno = generarMesEstreno(itr);
        infoBasica = generarInfoBasica(itr);

        fondoVideojuego.appendChild(panelVideojuego);
        panelVideojuego.appendChild(imagen);
        panelVideojuego.appendChild(titulo);
        panelVideojuego.appendChild(mesEstreno);
        panelVideojuego.appendChild(infoBasica);
        
        fragmento.appendChild(fondoVideojuego);
    }

    planilla.appendChild(fragmento);
}

//Metodos para mostrar el catalogo
function generarFondoVideojuego()
{
    let fondoVideojuego;
    fondoVideojuego = document.createElement('div');
    fondoVideojuego.setAttribute('class','game-card');

    return fondoVideojuego;
}

function generarPanelVideojuego()
{
    let panelVideojuego;
    panelVideojuego = document.createElement('div');
    panelVideojuego.setAttribute('class','game-card2');

    return panelVideojuego;
}

function generarImagen(posc)
{
    let imagen;
    imagen = document.createElement('img');
    imagen.setAttribute('src',proximoEstreno[posc].imagen);
    imagen.setAttribute('class','game-img');

    return imagen;
}

function generarTitulo(posc)
{
    let titulo;
    titulo = document.createElement('h3');
    titulo.appendChild(document.createTextNode(proximoEstreno[posc].nombre));

    return titulo;
}

function generarMesEstreno(posc)
{
    let mesEstreno = document.createElement('p');
    mesEstreno.appendChild(document.createTextNode(proximoEstreno[posc].estreno[1]))

    return mesEstreno;
}

function generarInfoBasica(posc)
{
    let consola,precio,infoBasica,mesEstreno;
    consola = document.createElement('p');
    consola.appendChild(document.createTextNode(proximoEstreno[posc].consola));
    precio = document.createElement('p');
    precio.appendChild(document.createTextNode(proximoEstreno[posc].precio+'$'));
    infoBasica = document.createElement('div');
    infoBasica.style.display = 'flex';
    infoBasica.style.justifyContent = 'space-between';
    infoBasica.appendChild(consola);
    infoBasica.appendChild(precio);
    return infoBasica;
}

//Main
const proximoEstreno = DB.proximoEstreno;

console.log('a');
mostrarProximosEstrenos();












