/* variables */
const baseUrlNews= "https://www.heise.de/extras/frontend/news/?limit=5";
const loadNewsBtn = document.getElementById('load-news-btn');



/* function definition */
const loadNews = () => {
    /* within root */
    let id = null;
    let title = [];
    let synopsis = null;

    /* within meta */
    let dateDate = null; 
    let dateTime = null; 
    let imgSrc = null

    /* within meta but only accessible with news-id */
    let content = null
    
    fetch(baseUrlNews, {
        headers: {"X-Heise-Token": "zcJulkgE"},
    })
        .then((response) => (response.json()))
        .then((data) => {
            console.log('Daten: ' + JSON.stringify(data));

            title = data[0].title


            
            console.log('Der Titel lautet: ' + title);
        })
}

    
/* function calls */
loadNewsBtn.addEventListener('click', loadNews);