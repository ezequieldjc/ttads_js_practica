var array = [1,2,3,4];

function cubo(x){
    return x*x*x;
}

function mostrar(elemento){
    console.log(elemento);
}

//Con foreach
array.forEach(mostrar);

//con map
array.map(mostrar);

/*
    Funciones de orden superior
*/

function mapear (unArray , unaFuncion){
    var rta = [];

    for (i=0; i < unArray.length ; i++){
        rta.push(unaFuncion(unArray[i]));
    }
    return rta;
}

console.log('Mapear', mapear(array, cubo));