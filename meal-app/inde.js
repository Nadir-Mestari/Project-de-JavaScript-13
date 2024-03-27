

const result = document.getElementById("result")
const form = document.querySelector("form");
const input = document.querySelector("input")

let meals = [];
async function repas(search) {

    await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then((req) => req.json())
        .then((code) => meals = code.meals);

    console.log(meals)
}


function mealsplat() {
    //
    if (meals == null) {
        result.innerHTML = "<h2>Pas de résultat</h2>"
    } else {

        result.innerHTML = meals.map(
            (meal) => {
                let ingridients = [];
                for (i = 1; i < 21; i++) {
                    if (meal[`strIngredient${i}`]) {
                        let ingridient = meal[`strIngredient${i}`]
                        let gramme = meal[`strMeasure${i}`]


                        ingridients.push("<li>" + ingridient + "-" + gramme + "</li>")
                        console.log(ingridients)
                    }
                }


                return ` 
                <li class="card">
                <h2>${meal.strMeal}</h2>
                <p>${meal.strArea}</p>
                <img src=${meal.strMealThumb} alt="Phode de ${meal.strMeal}">
                <ul>${ingridients.join("")}</ul>
                </li>
                `
            }

        ).join("");
    }

};
input.addEventListener("input", (e) => {
    repas(e.target.value).then(() => mealsplat())
});


form.addEventListener("submit", (e) => {
    e.preventDefault();
    mealsplat();


});

