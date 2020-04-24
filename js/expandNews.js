let newsData = JSON.parse(localStorage.getItem(sessionStorage.getItem('newsId')));

document.getElementsByClassName('tile-title')[0].textContent = newsData[0];
document.getElementsByClassName('tile-description')[0].innerHTML = newsData[1];
if(newsData[2])
    document.getElementsByClassName('footage')[0].src = newsData[2];
else
    document.getElementsByClassName('footage')[0].style.display = 'none';

