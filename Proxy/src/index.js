let person = {
    name: 'Vinod',
    age: 31
};

let newPerson = new Proxy(person, {
    get: (obj, prop) => {
        if(!obj[prop]) {
            console.log('this property is not used');
        } else {
            // console.log(obj, prop, '====');
            console.log(Reflect.get(obj, prop), '====');
        }
    },
    set: (obj, prop, value) => {
        if(prop === 'age' && typeof value !== 'number') {
            console.log('only numbers are used');
        } else {
            // obj[prop] = value;
            Reflect.set(obj, prop, value);
            console.log(obj, prop, value, 'set====');
        }
    }
});

newPerson.name;
newPerson.age = 21;

// console.log(person, newPerson);
