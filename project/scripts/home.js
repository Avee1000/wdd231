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
header.classList.add('header');
style.innerHTML += `
  #header::before {
    background-image: url('${images[randomIndex]}');
  }
`;
header.appendChild(style);

const ms = document.querySelector('.learn-more');
const navContainer = document.querySelector("#logoAndNavigationContainer")

let isClickEventActive = false;


window.addEventListener('scroll', () => {
    if (isClickEventActive) return; // Skip scroll event if click event is active

    const heroBottom = header.getBoundingClientRect().bottom;
    const measure = header.offsetHeight - navContainer.offsetHeight;
  
    if (navContainer.offsetHeight >= heroBottom && window.scrollY >= measure) {
      navContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.976)';
      navContainer.querySelector('#logo').style.marginLeft = '2rem';
      navContainer.querySelector('#logo').style.transform = 'scale(.9)';
      navContainer.querySelector('#logo').style.transition = 'all .2s ease-in-out';
  
    }else {
      navContainer.style.backgroundColor = '';
      navContainer.querySelector('#logo').style.marginLeft = '';
      navContainer.querySelector('#logo').style.transform = '';
      navContainer.querySelector('#logo').style.transition = 'all .2s ease-in-out';
    }
  
    // if (navContainer.offsetHeight > heroBottom) {
    //   navContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.976)'
    // } else {
    //   navContainer.style.backgroundColor = '';
  
    // }
  
});


//////////////////////////////////////////////////////////
ms.addEventListener('click', () => {

    isClickEventActive = true; // Disable scroll event temporarily

    const target = document.querySelector('#homeMainContainer');
    const navHeight = navContainer.offsetHeight; 
    const targetPosition = target.getBoundingClientRect().top + window.scrollY; 

    window.scrollTo({
        top: targetPosition - navHeight 
    });
    const heroBottom = header.getBoundingClientRect().bottom;
    const measure = header.offsetHeight - navContainer.offsetHeight;
  
    if (navContainer.offsetHeight >= heroBottom && window.scrollY >= measure) {
        navContainer.style.backgroundColor = '';
        navContainer.querySelector('#logo').style.marginLeft = '';
        navContainer.querySelector('#logo').style.transform = '';
        navContainer.querySelector('#logo').style.transition = 'all .2s ease-in-out';
        console.log('dfdfdf')
    } else {
        console.log('fgddfd')
      navContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.976)';
      navContainer.querySelector('#logo').style.marginLeft = '2rem';
      navContainer.querySelector('#logo').style.transform = 'scale(.9)';
      navContainer.querySelector('#logo').style.transition = 'all .2s ease-in-out';
    }
    setTimeout(() => {
        isClickEventActive = false;
    }, 1000); 
    
});


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

  // Clamp between 0 and 1
  // opacity = Math.max(0, Math.min(1, opacity));
  // scale = Math.max(0, Math.min(1, scale));

  heroText.style.opacity = opacity;
  heroText.style.transform = `scale(${scale})`;

  const style = document.createElement('style');
  style.innerHTML = `
 a.learn-more {
  animation: unset;
  opacity: ${opacity.toFixed(2)}};`;
  document.querySelector(".learn-more").appendChild(style);
});