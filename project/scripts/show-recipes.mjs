
import { loadRecipes } from './featured-recipes.mjs';
const recipesContainer = document.getElementById('product-list'); // Container to display recipes
const paginationContainer = document.getElementById('pagination'); // Container for pagination controls

let currentPage = 1;
const recipesPerPage = 10; // Number of recipes per page

// Function to render recipes
async function renderRecipes(page = 1) {
    try {
        const recipes = await loadRecipes();

        const startIndex = (page - 1) * recipesPerPage;
        console.log(startIndex)
        const endIndex = startIndex + recipesPerPage;
        console.log(endIndex)
        const paginatedRecipes = recipes.slice(startIndex, endIndex);
        console.log(paginatedRecipes);

        // Clear the container before rendering
        recipesContainer.innerHTML = '';

        // Render each recipe
        paginatedRecipes.forEach(recipe => {
            const recipeElement = document.createElement('div');
            recipeElement.classList.add('recipesProductCard');
            recipeElement.innerHTML = `
                <div class="recipeImageContainer">
                    <img src="${recipe.image}" alt="${recipe.name}" loading="lazy">
                </div>
                <h3>${recipe.name}</h3>
                <p class="mealType">${recipe.mealType}</p>
                <p>Prep Time: ${recipe.prepTimeMinutes}</p>
                <p>Cooking Time: ${recipe.cookTimeMinutes} minutes</p>
                <p>Servings: ${recipe.servings}</p>
                <p>Ratings: ${recipe.rating}</p>`;
            recipesContainer.appendChild(recipeElement);
        });

        // Render pagination controls
        renderPagination(recipes.length, page);
    } catch (error) {
        console.error('Error fetching recipes:', error);
        recipesContainer.innerHTML = '<p>Failed to load recipes. Please try again later.</p>';
    }
}

// Function to render pagination controls
function renderPagination(totalRecipes, currentPage) {
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