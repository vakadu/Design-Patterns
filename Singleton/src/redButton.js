import Counter from './counter';

const redButton = document.getElementById("red");

redButton.addEventListener('click', () => {
    console.log("red button " + Counter.getCount());
    Counter.increment();
})
