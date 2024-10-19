const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const response = document.getElementById('response');
const tontonBear = document.getElementById('tontonBear');

// When "Yes" button is clicked
yesButton.addEventListener('click', () => {
    response.textContent = "I love you always, Jen 💖";
    tontonBear.style.opacity = '1';
    tontonBear.style.bottom = '10px';  // Make the bear appear
});

// When mouse moves over "No" button
noButton.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

// Ensure she can't catch the "No" button
noButton.addEventListener('click', () => {
    response.textContent = "Gotcha! But I love you anyway! 💕";
    noButton.style.animation = "moveNoButton 0.5s forwards";
});
