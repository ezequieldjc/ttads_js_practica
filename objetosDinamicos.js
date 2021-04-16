var object = {name: 'John'};
object.lastName = 'Doe';

object.print = function(a){
    console.log('Name:', this.name);
    console.log('Last Name:', this.lastName);
}

object.print();