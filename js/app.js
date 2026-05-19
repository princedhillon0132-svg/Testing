// Load Favorites from Browser Memory
let favorites = JSON.parse(localStorage.getItem('fusionFavs')) || [];

const container = document.getElementById('recipeContainer');
const searchInput = document.getElementById('searchInput');
const fridgeInput = document.getElementById('fridgeInput');
const chips = document.querySelectorAll('.chip');
let activeCategory = "All";

function updateDisplay() {
    if (!container) return; 

    const searchText = searchInput ? searchInput.value.toLowerCase() : "";
    const fridgeText = fridgeInput ? fridgeInput.value.toLowerCase() : "";
    const fridgeItems = fridgeText.split(',').map(i => i.trim()).filter(i => i !== "");

    // 1. Filter the massive array based on user input
    let filtered = recipes.filter(recipe => {
        const matchesCategory = activeCategory === "All" || recipe.tags.includes(activeCategory);
        const matchesSearch = recipe.title.toLowerCase().includes(searchText);
        let matchesFridge = true;
        if (fridgeItems.length > 0) {
            matchesFridge = fridgeItems.some(fridgeItem => 
                recipe.ingredients.some(ing => ing.includes(fridgeItem))
            );
        }
        return matchesCategory && matchesSearch && matchesFridge;
    });

    // 2. LIMIT TO 6 RECIPES ONLY ON THE HOMEPAGE
    // We check if we are on the homepage by seeing if the category chips exist
    if (chips.length > 0) {
        filtered = filtered.slice(0, 6);
    }

    // 3. Render
    container.innerHTML = '';
    if(filtered.length === 0) {
        container.innerHTML = '<h3 style="color:#fff; text-align:center; width:100%;">No matches found. Try different filters or ingredients!</h3>';
        return;
    }

    filtered.forEach(recipe => {
        const isFav = favorites.includes(recipe.id) ? "❤️" : "🤍";
        
        const card = document.createElement('div');
        card.className = 'recipe-card glass-panel';
        card.innerHTML = `
            <button class="fav-btn" onclick="toggleFav(event, '${recipe.id}')">${isFav}</button>
            <a href="recipe.html?id=${recipe.id}" style="text-decoration:none; color:inherit;">
                <img src="${recipe.image}" alt="${recipe.title}">
                <div class="card-text">
                    <h2>${recipe.title}</h2>
                    <p style="font-size:0.8rem; color:#e2e8f0;">${recipe.tags.join(' • ')}</p>
                </div>
            </a>
        `;
        container.appendChild(card);
    });
}

window.toggleFav = function(event, id) {
    event.preventDefault(); 
    if(favorites.includes(id)) {
        favorites = favorites.filter(favId => favId !== id); 
    } else {
        favorites.push(id); 
    }
    localStorage.setItem('fusionFavs', JSON.stringify(favorites)); 
    updateDisplay(); 
    if(typeof renderFavorites === "function") renderFavorites(); 
};

// Event Listeners Initialization
if (searchInput || fridgeInput) {
    if(searchInput) searchInput.addEventListener('input', updateDisplay);
    if(fridgeInput) fridgeInput.addEventListener('input', updateDisplay);

    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            activeCategory = chip.getAttribute('data-filter');
            updateDisplay();
        });
    });
    updateDisplay();
}

// Hide the custom loader when the page is fully loaded
window.addEventListener('load', () => {
    const loader = document.getElementById('fusion-loader');
    if (loader) {
        // Adds the CSS class that fades the opacity to 0
        loader.classList.add('loader-hidden');
        
        // Optional: Completely remove it from the DOM after the fade transition ends
        // to keep your HTML clean and prevent it from blocking clicks
        setTimeout(() => {
            loader.remove();
        }, 600); // 600ms matches the CSS transition time
    }
});