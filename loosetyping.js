var a = 1;
console.log(a);

a = 'hola mundo';
console.log(a);

function cuad(x){
    return x*x;
}

function cubo(x){
    return cuad(x)*x;
}

var x = [1,2,3,4];

console.log('uso funcion map: ', x.map(cubo));