import DB from './DB.json' assert {type:'json'};
//console.log(DB.videojuego[2].precio);

function mostrarCatalogo(poscInicial)
{
    let videojuego = DB.videojuego;
    let planilla = document.querySelector("article").lastElementChild;
    let fragmento = document.createDocumentFragment();
    let panelVideojuego,imagen;
    let itr = 0;
    //console.log(planilla);
    
    while(poscInicial < videojuego.length && itr<8)
    {
        poscInicial++;
        itr++;

        panelVideojuego = document.createElement('dib');
        panelVideojuego.setAttribute('class','fondoVideojuego');

        imagen = document.createElement('img');
        imagen.setAttribute('src','');

        panelVideojuego.appendChild(document.createElement('div'));
        panelVideojuego.firstElementChild.appendChild();
        
        fragmento.appendChild(panelVideojuego);
        console.log(panelVideojuego);
    };
    planilla.appendChild(fragmento);
    
}

mostrarCatalogo(0);





