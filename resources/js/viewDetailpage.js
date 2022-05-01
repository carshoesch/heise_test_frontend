const url = window.location.href;
const newsDetail = document.getElementById('newsDetail');

const getUrl = () => {

    let paramString = url.split('?');
    const imageSrc = paramString[1].split('imageSrc=')[1]
    const fullText = paramString[2].split('content=')[1]
    const fullTextStripped = decodeURIComponent(fullText)

    displayData(imageSrc, fullTextStripped);
}

const displayData = (imageSrc, fullTextStripped) => {

    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('news-detail__image');
    newsDetail.appendChild(imageWrapper);

    const image = document.createElement('img');
    image.src = imageSrc;
    imageWrapper.appendChild(image);

    const content = document.createElement('div');
    content.classList.add('news-detail__content')
    content.innerHTML = fullTextStripped;
    newsDetail.appendChild(content);
}
window.addEventListener('load', getUrl);