/* variables */
const baseUrlNews= "https://www.heise.de/extras/frontend/news/?limit=5";
const loadNewsBtn = document.getElementById('load-news-btn');
const newsTileWrapper = document.getElementById('newsTileWrapper');
let newsArray = [];



/* function definition */
const loadNews = () => {
    /* within root */
    let id = null;
    let title = [];
    let synopsis = null;

    /* within meta */
    let dateDate = null; 
    let dateTime = null; 
    let imgSrc = null;

    /* within meta but only accessible with news-id */
    let content = null
    
    fetch(baseUrlNews, {
        headers: {"X-Heise-Token": "zcJulkgE"},
    })
        .then((response) => (response.json()))
        .then((data) => {
            newsArray = data;
            
            /* console.log('Das Array lautet: ' + newsArray); */
            for (let index = 0; index < newsArray.length; index++) {
                
            }
            displayNews(newsArray);
        })

}

const displayNews = (newsArray) => {
    /* newsTileWrapper.innerHTML = ""; */

    if (newsArray.length == 0) {
        newsTileWrapper.innerHTML = '<h5>Keine News vorhanden</h5>'
        return;
    } else {
        /* TODO: create HTML-Blocks for every news-element within the array */
        newsArray.forEach(news => {
            /* const div = document.createElement('div');
            div.className = "news-tile-wrapper";
            const overview = document.createElement('div');
            overview.className = "news__overview--title";
            div.appendChild(overview); */
        })
    }

}

    
/* function calls */
loadNewsBtn.addEventListener('click', loadNews);