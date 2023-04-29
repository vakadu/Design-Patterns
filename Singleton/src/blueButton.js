import Counter from './counter';

const blueButton = document.getElementById("blue");

blueButton.addEventListener('click', () => {
    console.log("blue button " + Counter.getCount());
    Counter.decrement();
})
