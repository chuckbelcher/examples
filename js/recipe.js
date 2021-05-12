//API Endpoint
const baseEndpoint="http://www.recipepuppy.com/api"

//needs a cors proxy -- never use with sensitive data
const corsproxy="https://cors-anywhere.herokuapp.com"

//Grab the form
const form = document.querySelector('form.search')

//Grab Element to put recipes after they are pulled
const recipeGrid = document.querySelector('.recipes');

async function fetchRecipes(query) {
    const res = await fetch(`${corsproxy}/${baseEndpoint}?q=${query}`);
    const data = await res.json();
    return data;
}

async function handleSubmit(e) {
    e.preventDefault();
    const submitBtn = form.submit
    const food = form.query.value;
    submitBtn.disabled = true;
    const recipes = await fetchRecipes(food);
    submitBtn.disabled = false;
    displayRecipes(recipes.results)
}

function displayRecipes(recipes) {
    console.log(recipes);
    const html = recipes.map(recipe => {
        return`<div class="recipe">
            <a href="${recipe.href}"><h3>${recipe.title}</h3></a>
            <p>${recipe.ingredients}</p>
            ${recipe.thumbnail && `<img src="${recipe.thumbnail}" alt="${recipe.title} picture" />`}
            
        </div>`
    });
    recipeGrid.innerHTML = html.join('');
}

form.addEventListener('submit', handleSubmit);