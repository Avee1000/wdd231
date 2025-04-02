import { loadRecipes } from "./featured-recipes.mjs";

const images = [
    "images/recipe.jpg",
    "images/recipe1.jpg",
    "images/recipe3.jpg",
    "images/recipe4.jpg"
];

const searchBut = document.querySelector('#searchButtonContainer');
searchBut.style.transform = 'scale(0)';
searchBut.style.transition = '.5s ease-in-out';

const randomIndex = Math.floor(Math.random() * images.length);
const style = document.createElement('style');
const header = document.querySelector('#header');
style.innerHTML += `    
  #header::before {
    background-image: url('${images[randomIndex]}');
  }

`;
header.appendChild(style);


////////////////////////////////////////////////////
const heroContainerMain = document.querySelector('.heroContainer');
heroContainerMain.classList.add('recipesPage')
heroContainerMain.querySelector('.heroText h2').innerHTML = `Feeling hungry or curious?`;
heroContainerMain.querySelector('.heroText p').innerHTML = `Explore our handpicked recipes—from quick breakfasts to indulgent desserts. Search by category or scroll to discover your next favorite dish.`;
heroContainerMain.querySelector('a').innerHTML = `Browse All Recipes`;

const searchBox = document.querySelector('#searchBoxContainer');
searchBox.classList.add('recipeSearchBox');

// const search = document.querySelector('#search');
// const recipes = await loadRecipes();
// search.addEventListener('input', (e) => {

//   const button = search.nextElementSibling;
//   button.onclick = null;
//   recipes.forEach((recipe) => {
//     if (recipe.name.toLowerCase().includes(e.target.value)) {
//       button.addEventListener('click', () => {
//         console.log(recipe.name)
//       });
//     }
//   });

// });

