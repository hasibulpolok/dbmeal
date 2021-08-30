const searchFood = () => {
    const searchField = document.getElementById('seacrh-field');
    const searchText = searchField.value;
    searchField.value = "";
    const url = (`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`);
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals));
}


const displaySearchResult = meals =>{
    const searchResult = document.getElementById('search-result');
    searchResult.innerHTML = '';
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                     <p><strong>${meal.strCategory}</strong></p>
                    <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
                </div>
            </div>
        `;
        searchResult.appendChild(div);

    })
}