const images = [
    "images/food1.jpeg",
    "images/food2.jpeg",
    "images/food3.jpeg",
    "images/food4.jpeg",
    "images/food45.jpeg",
    "images/food5.jpeg"
];

const randomIndex = Math.floor(Math.random() * images.length);
const style = document.createElement('style');
style.innerHTML += `
  header::before {
    background-image: url('${images[randomIndex]}');
  }
`;
document.querySelector('header').appendChild(style);

const ms = document.querySelector('.learn-more');
let lastScroll = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll) {
        // scrolling down
        ms.style.opacity = '0';
    } else {
        // scrolling up
        ms.style.opacity = '1';
    }

    lastScroll = currentScroll;
});

ms.addEventListener('click', () => {
    document.querySelector('#homeMainContainer').scrollIntoView();
});