let counter = 0;
let instance;

class Counter{
    constructor() {
        if(instance) {
            throw new Error("instance is already created")
        }
        instance = this;
    }

    getInstance() {
        console.log(this)
        
        function abc() {
            let that = this;
            console.log(that, '====')
        }
        abc();
        return this;
    }

    increment() {
        return counter++;
    }

    decrement() {
        return counter--;
    }

    getCount() {
        return counter;
    }
}

const singleTonCounter = Object.freeze(new Counter());

console.log(singleTonCounter.getInstance())

export default singleTonCounter;
