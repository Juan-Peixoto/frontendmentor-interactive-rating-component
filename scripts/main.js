const button = document.getElementById('button');
const numbers = document.querySelectorAll(".number");
const selectedNumberView = document.getElementById('selectedNumberView');
let selectedNumber = 0;

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', () => {
        for (let i = 0; i < numbers.length; i++) {
            numbers[i].classList.remove('selected');
        }

        numbers[i].classList.add('selected');
        selectedNumber = numbers[i].textContent;
        selectedNumberView.innerHTML = selectedNumber;
    });
}

button.addEventListener('click', () => {
    const ratingBox = document.getElementById('rating');
    const thankYouBox = document.getElementById('thankyou-state');

    ratingBox.classList.remove('show');
    ratingBox.classList.add('hide');
    thankYouBox.classList.remove('hide');
    thankYouBox.classList.add('show');
});