//uso de funciones de orden superior
/*
    Crear una funcion buscar(array,criterio,siVacio) que reciba un array y dos funciones.
        si criterio para algun elemento de array es verdadero,
        devolver el elemento encontrado, sino devolver el resultado de la funcion si vacio
 */
function ej1 (a , criterio , siVacio){

    var x =[];

    for ( i = 0 ; i<a.length; i++ ){
        if (criterio(a[i]))
            return a[i];
    };

    return siVacio(a[a.length - 1]);
}

function a (x){
    return x==0;
}

function b (x){
    return x==3;
}

console.log(ej1([1,2,3,3], a, b));


var x = [1,2,3,4,5];
console.log(x[x.length - 1]); 
