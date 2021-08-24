
function Animal(name,age,breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
}
Array.prototype.sayBreed = function () {
    console.log(`I am a ${this.breed}`);
}
const dog1 = new Animal("Spike",24,"Labrador");
const dog2 = new Animal("Spot", 2, "Goldenretriver");
//Now make the object Prototype method.
Animal.prototype.jewel = function () {
    console.log(`hello sir ${this.age}`);
}
// Animal.prototype.jewel();
// dog1.jewel();


//you can declare a prototype function using Object keyword and Array keyword so 
//declare a object prototype function and Array prototype function then access them with way way.


//pass data using function object.
function arrayObject(name="default",age=22,height="5ft") {
    this.name = name;
    this.age = age;
    this.height = height;
}

Array.prototype.sayHiArray = function (){//now the sayHiArray() method saved inside Array Prototype
    console.log(`hello bd`);
}
//now making instance for arrayObject();
const m = new arrayObject("jewel",23,5.7+"inch");

const obj = [];
obj.sayHiArray();//
