class Dog{
    constructor(name) {
        this.name = name;
    }

    bark() {
        console.log(this.name);
        console.log("ooooooo");
    }
}

class SuperDog extends Dog{
    constructor(name) {
        super(name);
    }

    fly() {
        console.log(this.name);
        console.log("flying");
    }
}

const pet1 = new Dog("tommy");
const pet2 = new Dog("sheparx");

const flyingPet = new SuperDog("flyer");

pet1.bark();
pet2.bark();

flyingPet.bark();
flyingPet.fly();

Dog.prototype.play = () => console.log('playing');

pet2.play();

console.log(Dog.prototype)
console.log(pet1.__proto__)

console.log(SuperDog.prototype)
console.log(flyingPet.__proto__)
