const url = "https://dummyjson.com/recipes?limit=50";

export async function loadRecipes() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.recipes;
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
}
    
async function displayRandomRecipes() {
    const recipes = await loadRecipes();

    const recipeList = [];

    const set = new Set();

    const recipeCard = document.querySelectorAll('.recipe-card');

    recipes.forEach((r) => {
        recipeList.push(r);
    })

    while (set.size < 3) {
        const ranNum = Math.floor(Math.random() * recipeList.length);
        set.add(ranNum);
    }

    const randomRecipes = Array.from(set).map(index => recipeList[index]);
    console.log(randomRecipes);
    // Step 2: Get the 3 recipe card elements

    // Step 3: Populate each card
    randomRecipes.forEach((recipe, index) => {
        const card = recipeCard[index];

        const recipeImage = card.querySelector('.recipe-card .imgContainer img');
        recipeImage.setAttribute('src', recipe.image);
        recipeImage.setAttribute('alt', recipe.name);
        recipeImage.setAttribute('height', 300);
        recipeImage.setAttribute('width', 200);

        const recipeInfo = card.querySelector('.recipe-card .recipes');
        recipeInfo.innerHTML += `
            <h3>${recipe.name}</h3>
            <p class="mealType">${recipe.mealType}</p>
            <p>Prep Time: ${recipe.prepTimeMinutes}</p>
            <p>Cooking Time: ${recipe.cookTimeMinutes} minutes</p>
            <p>Servings: ${recipe.servings}</p>
            <p>Ratings: ${recipe.rating}</p>
        `;

        card.querySelector('.imgContainer').addEventListener('mouseenter', function () {
            recipeImage.style.transform = "scale(1.1)";
            recipeImage.style.transition = "transform 0.7s ease-in-out";
        });
        card.querySelector('.imgContainer').addEventListener('mouseleave', function () {
            recipeImage.style.transform = "";
            recipeImage.style.transition = "transform 0.7s ease-in-out";
        });



    });
}

displayRandomRecipes();
