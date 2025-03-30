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
const header = document.querySelector('header');
style.innerHTML += `
  header::before {
    background-image: url('${images[randomIndex]}');
  }
`;
header.appendChild(style);

let isScrollingProgrammatically = false; // Flag to track programmatic scrolling
const ms = document.querySelector('.learn-more');
const navContainer = document.querySelector("#logoAndNavigationContainer")

window.addEventListener('scroll', () => {
  const heroBottom = header.getBoundingClientRect().bottom;
  const navTop = navContainer.getBoundingClientRect().top;

  // Add the 'static' class when the navContainer reaches the bottom of the header
  navContainer.classList.toggle('static', navTop >= heroBottom);
  navContainer.classList.toggle('remove-static', navTop < heroBottom);
    // lastScroll = currentScroll;
});


//////////////////////////////////////////////////////////
ms.addEventListener('click', () => {
  const target = document.querySelector('#homeMainContainer');
  const navHeight = navContainer.offsetHeight; // Get the height of the fixed nav container
  const targetPosition = target.getBoundingClientRect().top + window.scrollY; // Get the target's position relative to the document

  // Scroll to the target position minus the nav height
  window.scrollTo({
    top: targetPosition - navHeight // Adjust for the fixed nav height
  });
});


//////////////////////////////////////////////////////////
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


////////////////////////////////////////////////////
const heroText = document.querySelector('.heroText');
window.addEventListener('scroll', () => {
  const rect = heroText.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Get how far the element is from the middle of the screen
  const distanceFromCenter = Math.abs(rect.top + rect.height / 2 - windowHeight / 2);

  // Max distance before it's fully invisible
  const maxDistance = windowHeight / 2 + rect.height / 2;

  // Calculate opacity: 1 when centered, 0 when far away
  let opacity = 1 - distanceFromCenter / maxDistance;
  let scale = 1 - distanceFromCenter / maxDistance;

  console.log(windowHeight,rect.top, rect.height)
  // Clamp between 0 and 1
  opacity = Math.max(0, Math.min(1, opacity));
  scale = Math.max(0, Math.min(1, scale));

  heroText.style.opacity = opacity.toFixed(2);
  heroText.style.transform = `scale(${scale})`;

  const style = document.createElement('style');
  style.innerHTML = `
 a.learn-more {
  animation: unset;
  opacity: ${opacity.toFixed(2)}};`;
  document.querySelector(".learn-more").appendChild(style);

});