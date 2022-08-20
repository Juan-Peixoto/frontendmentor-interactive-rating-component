const button = document.getElementById('button');
const numbers = document.querySelectorAll(".number");

button.addEventListener('click', () => {
    const ratingBox = document.getElementById('rating');
    const thankYouBox = document.getElementById('thankyou-state');

    ratingBox.classList.remove('show');
    ratingBox.classList.add('hide');
    thankYouBox.classList.remove('hide');
    thankYouBox.classList.add('show');
});

console.log(numbers);