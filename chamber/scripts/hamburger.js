const hamburger = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('show');
});