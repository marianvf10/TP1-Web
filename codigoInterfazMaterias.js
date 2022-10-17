
    /*
    Tarea:reversionar pagina para que las casillas ya estan creadas previamente, y simplemente se modifique
    la visibilidad de los nodos desde JS
    */

function limiteNumero(numero)
{
    return numero.value <= 10 && numero.value >= 1;
}

function limitarNumeros(numero)
{

    if(!limiteNumero(numero))
    {
        numero.setAttribute('style','background-color:red');
    }
    else
    {
        numero.setAttribute('style','background-color:white');

    }
}

function mostrarLista()
{
    let cantRows,cantCasillasRest = numero.value;

    if(limiteNumero(numero))
    {
        prelista.setAttribute('style','display:none');
        cantRows = Math.ceil(numero.value / 3);
       
        crearFilas(cantRows,cantCasillasRest);
        /*c.appendChild(x);
        x.outerHTML = '<div class="row"></div>'
        console.log(x);*/
    }
}

function crearInput()
{
    const input = document.createElement('INPUT');
    input.setAttribute('type','date');

    return input;
}

function llenarCasilla(casilla,posc)
{

    let input = crearInput();
    let estiloBasico = "margin:10px; border-color:rgb(145, 153, 160); border-style:groove; border-radius: 10px; "+ 
    "box-shadow: 3px 2px 4px rgb(48, 35, 59);";

    //Se asignan hijos a la casilla para darle forma.
    casilla.appendChild(document.createTextNode('Nombre completo: ' +baseDatos[0][posc]));
    casilla.appendChild(document.createElement('BR'));
    casilla.appendChild(document.createTextNode('Email: ' +baseDatos[1][posc]));
    casilla.appendChild(document.createElement('BR'));
    casilla.appendChild(document.createTextNode('Materia adeudada: ' +baseDatos[2][posc]));
    casilla.appendChild(input);

    //Se setea el estilo css de la casilla
    casilla.setAttribute("style",
    "background-color:rgb(195, 195, 218);" +estiloBasico);
  
    //Se programa el evento de aceptacion del input de la casilla.
    input.addEventListener('keyup',(evento) => {
        
        if(evento.code == 'Enter')
        {
            input.setAttribute('style','visibility:hidden');
            casilla.setAttribute("style","background-color:green;" + estiloBasico)
        }
    })
}

function crearCasillas(cantCasillasRest, padre)
{
    let maxCasillasXFila = 3;
    let elemActual;
    let casillas = document.createDocumentFragment();

    while(maxCasillasXFila > 0)
    {
        elemActual = document.createElement("DIV");
        elemActual.setAttribute('class','col');

        if(cantCasillasRest > 0)
        {
            llenarCasilla(elemActual,cantCasillasRest-1);
        }
        else
        {
            elemActual.setAttribute("style","margin:10px;");
        }

        casillas.appendChild(elemActual);
        cantCasillasRest--;
        maxCasillasXFila--;
    }

    padre.appendChild(casillas);
    return cantCasillasRest;
}

function crearFilas(cantRows,cantCasillasRest)
{
    let rows = document.createDocumentFragment();
    let elemActual;

    for(let i = 0;i<cantRows;i++)
    {
        elemActual = document.createElement("DIV");

        elemActual.setAttribute('class','row');
        cantCasillasRest = crearCasillas(cantCasillasRest,elemActual);

        rows.appendChild(elemActual);
    }

    lista.appendChild(rows);
}


const lista = document.getElementById('lista');
const prelista = document.getElementById('prelista');
const numero = document.getElementById('numero');
const enviar = document.getElementById('enviar');
const baseDatos = 
[
    //Nombres
    ['Adriano Lusso','Ramiro Lusso','Pedro Nicolas Santo','Leticia Sanchez','Lucas Ranto','Juana Seris',
    'Mateo Prometeo Santos','Laura Ponce','Cecilia Juanez','Ricardo Falovencio'],

    //Mails
    ['praupiyawizo-6468@yopmail.com','caulligoijoinnoi-2673@yopmail.com','biladeicrassu-2329@yopmail.com',
    'sucinofeisau-2481@yopmail.com','heuddeiqueinausse-7519@yopmail.com','boqueveirika-7167@yopmail.com',
    'tummadujazi-9323@yopmail.com','criloizeddautu-7194@yopmail.com','beixituffitau-9772@yopmail.com',
    'nojinnihoite-1297@yopmail.com'],

    //Materias adeudadas
    ['Matematicas','Matematicas','Matematicas','Lengua','Lengua','Lengua','Lengua','Programacion',
    'Teoria','Teoria']
]

console.log(enviar);

numero.addEventListener('click',() => limitarNumeros(numero));
numero.addEventListener('keyup',() => limitarNumeros(numero));
enviar.addEventListener('click',() => mostrarLista(baseDatos,lista,prelista,numero));