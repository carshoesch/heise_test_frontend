/* variables */
const baseUrlNews = "https://www.heise.de/extras/frontend/news/"
const baseUrlNewsLimit= "https://www.heise.de/extras/frontend/news/?limit=";
const limiter = 5
const loadNewsBtn = document.getElementById('loadNewsBtn');
const newsWrapper = document.getElementById('news');
const newsTileWrapper = document.getElementById('newsTileWrapper');
let newsArray = [];



/* function definition */
const loadNews = () => {
    
    fetch(baseUrlNewsLimit 
        + limiter, {
        headers: {"X-Heise-Token": "zcJulkgE"},
    })
        .then((response) => (response.json()))
        .then((data) => {
            newsArray = data;
            
            displayNews(newsArray);
        })

}

const displayNews = (newsArray) => {

    if (newsArray.length == 0) {
        newsTileWrapper.innerHTML = '<h5>Keine News vorhanden</h5>'
        return;
    } else {
        /* TODO: create HTML-Blocks for every news-element within the array */
        newsArray.forEach(news => {


            const title = news.title;
            const fullText = news.synopsis;
            const imgSrc = news.image.src;
            const dateTime = news.meta.pubDate;
            const date = dateTime.split('T')[0];
            const time = dateTime.split('T')[1].split('+')[0];
            const id = news.id;

            const newNews = document.createElement('div');
            newNews.classList.add('news-tile-wrapper');
            newsWrapper.appendChild(newNews);

            const pubDateTime = document.createElement('div');
            pubDateTime.classList.add('news__dateTime');
            newNews.appendChild(pubDateTime);

            const pubDate = document.createElement('div');
            pubDate.classList.add('news__dateTime--date');
            pubDate.innerHTML = date;
            pubDateTime.appendChild(pubDate);

            const pubTime = document.createElement('div');
            pubTime.classList.add('news__dateTime--time');
            pubTime.innerHTML = time;
            pubDateTime.appendChild(pubTime);

            const heading = document.createElement('div');
            heading.classList.add('news__overview--title');
            heading.innerHTML = title;
            newNews.appendChild(heading);

           /*  const teaser = document.createElement('div');
            teaser.classList.add('news__overview--teaser');
            teaser.innerHTML = teaserText;
            newNews.appendChild(teaser); */

            const detail = document.createElement('a');
            const linkText = document.createTextNode("Mehr erfahren");
            detail.appendChild(linkText);
            detail.href = "readMore.html?" + 'imageSrc=' + imgSrc + "&content=" + fullText;
            detail.target="_blank";
            newNews.appendChild(detail)
        })
    }

}

    
/* function calls */
window.addEventListener('load', loadNews);