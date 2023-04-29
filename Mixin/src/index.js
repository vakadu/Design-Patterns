//Add functionsality to another object or class without inheritence
class Dog{
    constructor(name) {
        this.name = name;
    }
}

const animalFunctionality = {
    walk: () => console.log('walking'),
    sleep: () => console.log('sleeping')
}

const dogFunctionality = {
    bark: () => console.log("bark"),
    play: () => console.log("playing")
}

Object.assign(dogFunctionality, animalFunctionality)
Object.assign(Dog.prototype, dogFunctionality);

const pet1 = new Dog("tommy");
pet1.name;
pet1.bark();
pet1.play();
pet1.walk();
