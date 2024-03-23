// Specify where the JSON file is hosted.
const jsonDataURL = 'js/i-scream.json';

const populate = async () => {
    try {
        const response = await fetch(jsonDataURL);
        const jsonData = await response.json();

        populateHeader(jsonData); // Pass jsonData to populateHeader function
        showTopFlavors(jsonData); // Pass jsonData to showTopFlavors function
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Make a populateHeader function
function populateHeader(jsonData) {
    const companyName = jsonData.companyName;
    const headerElement = document.querySelector('header');
    const headingElement = document.createElement('h1');
    headingElement.textContent = companyName;
    headerElement.appendChild(headingElement);
}

// Design the showTopFlavors function
function showTopFlavors(jsonData) {
    const topFlavors = jsonData.topFlavors;
    const flavorsSection = document.getElementById('ice-cream-flavors');

    topFlavors.forEach(flavor => {
        const article = document.createElement('article');
        const flavorHeading = document.createElement('h2');
        const flavorImage = document.createElement('img');
        const flavorCalories = document.createElement('p');
        const flavorType = document.createElement('p');
        const flavorIngredients = document.createElement('ul'); 

        flavorHeading.textContent = flavor.name;
        flavorImage.src = `images/${flavor.image}`;
        flavorImage.alt = flavor.name;
        flavorCalories.textContent = `Calories: ${flavor.calories}`;
        flavorType.textContent = `Type: ${flavor.type}`;
        flavor.ingredients.forEach(ingredient => {
            const ingredientItem = document.createElement('li');
            ingredientItem.textContent = ingredient;
            flavorIngredients.appendChild(ingredientItem);
        });

        article.appendChild(flavorHeading);
        article.appendChild(flavorImage);
        article.appendChild(flavorCalories);
        article.appendChild(flavorType);
        article.appendChild(flavorIngredients); 
        flavorsSection.appendChild(article);
    });
}

// Call the populate function when the page is loading
populate();
