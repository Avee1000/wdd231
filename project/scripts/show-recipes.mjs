
import { loadRecipes, showModal } from './featured-recipes.mjs';

const recipesContainer = document.getElementById('product-list');
const paginationContainer = document.getElementById('pagination'); 
const template = document.querySelector('#recipesCardTemplate');


let currentPage = 1;
const recipesPerPage = 10; // Number of recipes per page

async function displayRecipes(recipeData) {
    recipesContainer.innerHTML = '';

    recipeData.forEach(recipe => {
        const clone = template.content.cloneNode(true);
        const recipeImageContainer = clone.querySelector('.recipeImageContainer');
        const image = clone.querySelector('img');
        image.setAttribute('src', recipe.image);
        image.setAttribute('alt', recipe.name);
        image.setAttribute('height', 200);
        image.setAttribute('width', 200);     

        const recipeInformationContainer = clone.querySelector('.recipeInformationContainer');
        recipeInformationContainer.innerHTML = `<h3>${recipe.name}</h3>
                        <p class="mealType">${recipe.mealType}</p>
                        <p>Difficulty: ${recipe.difficulty}</p>
                        <p>Ratings: ${recipe.rating}</p>`;
        
        recipeImageContainer.querySelector('.text').innerHTML = `
        <p>Cuisine: ${recipe.cuisine}</p>
        <p>Servings: ${recipe.servings}</p>
        <p>Calories Per Serving: ${recipe.caloriesPerServing}</p>
        <p>Prep Time: ${recipe.prepTimeMinutes} minutes</p>
        <p>Cooking Time: ${recipe.cookTimeMinutes} minutes</p>
        `;
        const infoButton = recipeImageContainer.querySelector('.info-button');
        infoButton.addEventListener('mouseover', function () {
            const imgTextOverlay = infoButton.nextElementSibling.nextElementSibling;
            imgTextOverlay.style.top = "0";
            const child = infoButton.children[0];
            child.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        });
                
        infoButton.addEventListener("mouseout", () => { 
            const imgTextOverlay = infoButton.nextElementSibling.nextElementSibling;
            imgTextOverlay.style.top = "";
            const child = infoButton.children[0];
            child.style.backgroundColor = "";
        });



        /////////////////////////////////////////////////////////////////
        //WORKING WITH LOCAL STORAGE
        //loading saved recipes from localStorage
        const saveButton = clone.querySelector("a.addFavorites");
        const recipeLink = saveButton.parentElement;
        const recipeInfo = recipeLink.previousElementSibling;
        const nameOfRecipe = recipeInfo.querySelector('h3');


        const favorites = localStorage.getItem("favorites");
        const favoritesList = JSON.parse(favorites);
        if (favoritesList.length !== 0) {
            const alreadySaved = favoritesList.filter((p) => recipe.id === p.id);
            if (alreadySaved.length > 0) {
                if (nameOfRecipe.textContent === alreadySaved[0].name) {
                    const savedRecipeParentsibling = nameOfRecipe.parentElement.nextElementSibling;
                    const savedRecipeLinkbutton = savedRecipeParentsibling.querySelector('a span');
                    savedRecipeLinkbutton.textContent = "Saved";
                    savedRecipeLinkbutton.parentElement.classList.toggle('saved');
                }
            }

        } 


        ////////////////////////////////////////////////////////////
        // SAVE TO LOCAL STORAGE CODE
        saveButton.addEventListener("click", () => {
            saveButton.classList.toggle("saved");
            saveButton.querySelector('span').textContent = saveButton.classList.contains("saved") ? "Saved" : "Save";

            if (saveButton.querySelector('span').textContent === "Saved") {    
                if (recipe.name.includes(nameOfRecipe.textContent)) {
                    let savedRecipes = JSON.parse(localStorage.getItem("favorites")) || [];
                    const exists = savedRecipes.find(r => r.id === recipe.id);
                    if (!exists) {
                      savedRecipes.push(recipe);
                      localStorage.setItem("favorites", JSON.stringify(savedRecipes));
                    }
                }
            } else {
                const storedData = JSON.parse(localStorage.getItem("favorites"));
                if (storedData) {
                    const find = storedData.filter((d) => d.name !== nameOfRecipe.textContent);
                    localStorage.setItem("favorites", JSON.stringify(find));
                  }

            }

        });


        clone.querySelector('.view-recipe-btn').addEventListener('click', () => {
            document.body.style.overflow = "hidden";
            showModal(recipe);
        });


        recipesContainer.appendChild(clone);
    });
}


const difficultySelect = document.querySelector('#difficulty');
difficultySelect.addEventListener('change', () => {
    console.log(difficultySelect.value);
    renderRecipes();
});

const mealSelect = document.querySelector('#meal-filter');
mealSelect.addEventListener('change', () => {
    console.log(mealSelect.value);
    renderRecipes();
});

const sort = document.querySelector('#sort-products');
sort.addEventListener('change', () => {
    console.log(sort.value);
    renderRecipes();
});

// Function to render recipes
async function renderRecipes(page = 1) {
    try {
        const recipes = await loadRecipes();
        let filtered = recipes.filter((r) => {
            const meal = mealSelect.value === "all" || r.mealType.includes(mealSelect.value);
            const difficulty = difficultySelect.value === "all" || r.difficulty === difficultySelect.value; 
            return meal && difficulty;
        });

        if (sort.value === "name") {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        }else if (sort.value === "rating") {
            filtered.sort((a, b) => b.rating - a.rating);
        } else {
            filtered.sort((a, b) => b.caloriesPerServing - a.caloriesPerServing);
        }

        const startIndex = (page - 1) * recipesPerPage;
        console.log(startIndex)
        const endIndex = startIndex + recipesPerPage;
        console.log(endIndex)
        const paginatedRecipes = filtered.slice(startIndex, endIndex);
        console.log(paginatedRecipes);

        displayRecipes(paginatedRecipes);

        renderPagination(filtered.length, page);

    } catch (error) {
        console.error('Error fetching recipes:', error);
        recipesContainer.innerHTML = '<p>Failed to load recipes. Please try again later.</p>';
    }
}

// Function to render pagination controls
export function renderPagination(totalRecipes, currentPage) {
    const totalPages = Math.ceil(totalRecipes / recipesPerPage);
    paginationContainer.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.classList.add('page-button');
        if (i === currentPage) {
            pageButton.classList.add('active');
        }
        pageButton.addEventListener('click', () => {
            renderRecipes(i);
        });
        paginationContainer.appendChild(pageButton);
    }
}

// Initialize the recipe rendering
document.addEventListener('DOMContentLoaded', () => {
    renderRecipes(currentPage);
});


