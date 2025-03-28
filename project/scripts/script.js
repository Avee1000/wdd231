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
style.innerHTML += `
  header::before {
    background-image: url('${images[randomIndex]}');
  }
`;
document.querySelector('header').appendChild(style);

const ms = document.querySelector('.learn-more');
const navContainer = document.querySelector("#logoAndNavigationContainer")

let lastScroll = window.scrollY;

window.addEventListener('scroll', () => {
    const s = window.scrollY;
    navContainer.classList.toggle('static', s > 0);
    navContainer.classList.toggle('remove-static', s < 30);
    // lastScroll = currentScroll;
});

ms.addEventListener('click', () => {
    document.querySelector('#homeMainContainer').scrollIntoView();
});
// const target = document.querySelector('header');

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//       if (!entry.isIntersecting) {
//         console.log('Element is not in view!');
//     } else {
//       console.log('Element is in view!');
//     }
//   });
// }, {
//   threshold: 0 // triggers as soon as any part is not visible
// });

// observer.observe(target);

const searchButton = document.querySelector('.search');
searchButton.addEventListener('click', () => {
  document.querySelector('#searchBoxContainer').classList.add('searchActive');
  document.body.style.overflow = 'hidden';
})

const closeSearchButton = document.querySelector('.close');
closeSearchButton.addEventListener('click', () => {
  document.querySelector('#searchBoxContainer').classList.remove('searchActive');
  document.body.style.overflow = '';
})