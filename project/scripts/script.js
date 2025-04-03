
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

const ms = document.querySelector('.learn-more');
const navContainer = document.querySelector("#logoAndNavigationContainer")

let isClickEventActive = false;


//////////////////////////////////////////////////////////
ms.addEventListener('click', () => {

    isClickEventActive = true; // Disable scroll event temporarily

    const target = document.querySelector('main');
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
    } else {
      navContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.976)';
      navContainer.querySelector('#logo').style.marginLeft = '10px';
      navContainer.querySelector('#logo').style.transform = 'scale(.9)';
      navContainer.querySelector('#logo').style.transition = 'all .2s ease-in-out';
    }
    setTimeout(() => {
        isClickEventActive = false;
    }, 1000); 
});


//////////////////////////////////////////
window.addEventListener('scroll', () => {

  if (isClickEventActive) return; // Skip scroll event if click event is active

  const heroBottom = header.getBoundingClientRect().bottom;
  const measure = header.offsetHeight - navContainer.offsetHeight;

  if (navContainer.offsetHeight >= heroBottom && window.scrollY >= measure) {
    navContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.976)';
    navContainer.querySelector('#logo').style.marginLeft = '10px';
    navContainer.querySelector('#logo').style.transform = 'scale(.9)';
    navContainer.querySelector('#logo').style.transition = 'marginLeft transform .5s ease-in-out';

  }else {
    navContainer.style.backgroundColor = '';
    navContainer.querySelector('#logo').style.marginLeft = '';
    navContainer.querySelector('#logo').style.transform = '';
    navContainer.querySelector('#logo').style.transition = 'all .5s ease-in-out';
  }

  // if (navContainer.offsetHeight > heroBottom) {
  //   navContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.976)'
  // } else {
  //   navContainer.style.backgroundColor = '';

// }  
});



//////////////////////////////////////////////////
const heroText = document.querySelector('.heroText');
const logoCont = document.querySelector('#logoAndNavigationContainer');
const main = document.querySelector('.main');
const heroCont = document.querySelector('.heroContainer');
const learnMore = document.querySelector('.learn-more');
window.addEventListener('scroll', () => {
  const heroTextTop = heroText.getBoundingClientRect().top;
  const logocontBottom = logoCont.getBoundingClientRect().bottom;

  if (heroTextTop <= logocontBottom) {
    main.style.transform = 'scale(0)';
    main.style.opacity = '0';
    main.style.transition = 'all .3s ease';
  } else {
    main.style.transform = 'scale(1)';
    main.style.opacity = '1';
    main.style.transition = 'all .3s ease';

  }
  const rect = heroText.getBoundingClientRect();
  const windowHeight = window.innerHeight;


//   // Get how far the element is from the middle of the screen
  const distanceFromCenter = Math.abs(rect.top + rect.height / 2 - windowHeight / 2);

//   // Max distance before it's fully invisible
  const maxDistance = windowHeight / 3 + rect.height / 2;

//   // Calculate opacity: 1 when centered, 0 when far away
  let opacity = 1 - distanceFromCenter / maxDistance;
//   let scale = 1 - distanceFromCenter / maxDistance;

//   // Clamp between 0 and 1
  opacity = Math.max(0, Math.min(1, opacity));
//   // scale = Math.max(0, Math.min(1, scale));

//   heroText.style.opacity = opacity;
//   // heroText.style.transform = `scale(${scale})`;

  const style = document.createElement('style');
  style.innerHTML = `
 .heroLinkContainer a.learn-more {
  animation: unset;
  opacity: ${opacity.toFixed(2)}};`;
  document.querySelector(".learn-more").appendChild(style);
});

// document.addEventListener('DOMContentLoaded', () => {
//   const heroBottom = header.getBoundingClientRect().bottom;
//   const measure = header.offsetHeight - navContainer.offsetHeight;

//   if (navContainer.offsetHeight >= heroBottom && window.scrollY >= measure) {
//       navContainer.style.backgroundColor = '';
//       navContainer.querySelector('#logo').style.marginLeft = '';
//       navContainer.querySelector('#logo').style.transform = '';
//       navContainer.querySelector('#logo').style.transition = 'all .2s ease-in-out';
//   } else {
//     navContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.976)';
//     navContainer.querySelector('#logo').style.marginLeft = '10px';
//     navContainer.querySelector('#logo').style.transform = 'scale(.9)';
//     navContainer.querySelector('#logo').style.transition = 'all .2s ease-in-out';
//   }
// });