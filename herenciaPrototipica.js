/*
    Herencia protitipica: Herencia entre objetos


*/

var padre = {nombre: 'Pepe', apellido: 'Perez'};
var hijo = Object.create(padre);
padre.mostrarNombre = function() {console.log(this.nombre)};

padre.mostrarNombre();
hijo.mostrarNombre;

hijo.nombre = 'Pedro';

padre.mostrarNombre();
hijo.mostrarNombre;

/*
    Clases con herencia prototipica
*/
//shape superclass
function Shape(){
    this.x = 0;
    this.y = 0;
}

//superclass method
Shape.prototype.move = function(x,y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved');
}

//Rectangle - subclass
function Rectangle(){
    Shape.call(this);//call super constructor
};

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle',
    rect instanceof Rectangle);

console.log('Is rect an instance of Rectangle',
    rect instanceof Shape);

rect.move(1,1);
