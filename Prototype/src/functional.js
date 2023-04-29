const dog = {
    bark() {
        console.log('wooof');
    }
};

const pet1 = Object.create(dog);

pet1.bark();

console.log(dog, pet1.__proto__)

console.log(Object.keys(pet1));
console.log(Object.keys(pet1.__proto__));
