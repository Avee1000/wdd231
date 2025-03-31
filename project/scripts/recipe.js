const images = [
    "images/recipe.jpg",
    "images/recipe1.jpg",
    "images/recipe3.jpg",
    "images/recipe4.jpg"
];

const randomIndex = Math.floor(Math.random() * images.length);
const style = document.createElement('style');
const header = document.querySelector('#header');
style.innerHTML += `
    header {
    position: relative;
    width: 100%;
    height: 100dvh;
    background-color: rgba(0, 0, 0, 0.5);
    background-image: linear-gradient(to bottom,rgba(0,0,0,.5) 0,rgba(0,0,0,0) 100%);
  }   
    
  #header::before {
    background-image: url('${images[randomIndex]}');
  }

`;
header.appendChild(style);

////////////////////////////////////////////////////
const heroContainerMain = document.querySelector('.heroContainer');
heroContainerMain.classList.add('recipesPage')
heroContainerMain.querySelector('.heroText h2').innerHTML = `Feeling hungry or curious?`;
heroContainerMain.querySelector('.heroText p').innerHTML = `Explore our handpicked recipes—from quickbreakfasts to indulgent desserts. Search by category or scroll to discover your next favorite dish.`;
heroContainerMain.querySelector('a').innerHTML = `Browse All Recipes`;