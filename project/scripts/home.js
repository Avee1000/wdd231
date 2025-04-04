const images = [
    "images/food1.jpeg",
    "images/food2.jpeg",
    "images/food3.jpeg",
    "images/food4.jpeg",
    "images/food45.jpeg",
    "images/food5.jpeg",
    "images/food6.jpg",
    "images/food7.jpg",
    "images/food8.jpg",
    "images/food9.jpg",
    "images/food10.jpg"
];

const randomIndex = Math.floor(Math.random() * images.length);
const style = document.createElement('style');
const header = document.querySelector('#header');
style.innerHTML += `
  #header::before {
    background-image: url('${images[randomIndex]}');
  }
`;
header.appendChild(style);

const heroContainerMain = document.querySelector('.heroContainer');
heroContainerMain.querySelector('.heroText h2').innerHTML = `Discover, Cook, and Share Your Favorite Recipes`;
heroContainerMain.querySelector('.heroText p').innerHTML = `Find your next favorite dish today!`;

