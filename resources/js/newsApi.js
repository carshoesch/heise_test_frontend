/* variables */
const headerToken = "X-Heise-Token: zcJulkgE";
const baseUrlNews= "https://www.heise.de/extras/frontend/news/";
const loadNewsBtn = document.getElementById('load-news-btn');

/* const inputField = document.getElementById('input-field');
let city = document.getElementById("city");
let temp = document.getElementById("temp");
let condition = document.getElementById("condition");
let fetched = false; */ 


/* function definition */
const loadNews = () => {

    fetch(baseUrlNews, {
        headers: {"X-Heise-Token": "zcJulkgE"},
    })
        .then((response) => (response.json()))
        .then((data) => {
            console.log('Daten: ' + JSON.stringify(data));
        })
}

    
/* function calls */
loadNewsBtn.addEventListener('click', loadNews);