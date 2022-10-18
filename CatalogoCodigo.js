import DB from './DB.json' assert {type:'json'};
//console.log(DB.videojuego[2].precio);

function mostrarCatalogo(posc)
{
    let videojuego = DB.videojuego;
    let planilla = document.querySelector("article").lastElementChild;
    let fragmento = document.createDocumentFragment();
    let panelVideojuego,imagen;
    let itr = 0;
    //console.log(planilla);
    
    while(posc < videojuego.length && itr<8)
    {
        posc++;
        itr++;

        panelVideojuego = document.createElement('div');
        panelVideojuego.setAttribute('class','fondoVideojuego');

        imagen = document.createElement('img');
        imagen.setAttribute('src',videojuego[posc].imagen);
        imagen.setAttribute('class','imagenVideojuego');

        panelVideojuego.appendChild(document.createElement('div'));
        panelVideojuego.firstElementChild.setAttribute('class','videojuego');
        //panelVideojuego.firstElementChild.appendChild(imagen);
        
        fragmento.appendChild(panelVideojuego);
        console.log(panelVideojuego);
    };
    planilla.appendChild(fragmento);
    
}

mostrarCatalogo(0);





