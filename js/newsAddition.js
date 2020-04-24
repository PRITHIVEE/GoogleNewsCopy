const newsContainer = document.getElementsByClassName('news-container')[1];
for(let key of Object.keys(localStorage)){
    let newNews = JSON.parse(localStorage.getItem(key));

    let listEle = document.createElement('li');
    let newsTile = document.createElement('div');
    let newsExpand = document.createElement('div');
    let tileContent = document.createElement('div');
    let nextPage = document.createElement('a');
    let insideTile = document.createElement('div');
    let tileTitle = document.createElement('p');
    let contentFrom = document.createElement('div');
    let moreOptions = document.createElement('span');
    listEle.setAttribute('class','news-tile-container');
    newsTile.setAttribute('class','news-tile');
    tileContent.setAttribute('class','tile-content');
    nextPage.setAttribute('class','next-page');
    nextPage.setAttribute('href','./viewNews.html');
    nextPage.setAttribute('id', key);
    insideTile.setAttribute('class','inside-tile');
    tileTitle.setAttribute('class','tile-title');
    contentFrom.setAttribute('class','content-from');
    moreOptions.setAttribute('class','more-options');
    newsExpand.setAttribute('class','news-expand');

    nextPage.onclick = function(){
        sessionStorage.setItem('newsId', this.id);
    }

    tileTitle.textContent= newNews[0];
    let contentFromContent = `User Created News`;
    let moreOptionsContent = `  <span class="popup-icon" aria-title="Save for later"><span class="bookmark-icon"></span></span>
                                <span class="popup-icon" aria-title="Share"><span class="share-icon"></span></span>
                                <span class="popup-icon" aria-title="More"><span class="more-icon"></span></span>`;

    let newsExpandContent = `<div class="newspaper-icon"><i></i></div>View full article<span>&#x2039;</span>`;
    moreOptions.innerHTML = moreOptionsContent;
    contentFrom.innerHTML = contentFromContent;
    contentFrom.append(moreOptions);
    newsExpand.innerHTML = newsExpandContent;
    insideTile.appendChild(tileTitle);
    insideTile.appendChild(contentFrom);

    tileContent.appendChild(nextPage);
    tileContent.appendChild(insideTile);

    newsTile.append(tileContent);

    listEle.appendChild(newsTile);
    listEle.appendChild(newsExpand);

    newsContainer.appendChild(listEle);
}



function showNewsAdder(){
    document.querySelector('.adder-compartment').style.display= "block";
    document.querySelector('.adder-compartment').classList.add('displaying');
}
function imgToBase64(inputImage){
    return new Promise( (resolve, reject) => {
        imgfile = new FileReader();
        if(inputImage)
            imgfile.readAsDataURL(inputImage);
        else
            reject(null);
        imgfile.onload = function() {
            resolve(imgfile.result);
        }
    });
}


function addNewNews(){
    const form = document.forms["news-adder-form"];
    const titleValue = form['headlines-data'].value;
    const descValue = form['description-data'].value;
    var newNewsData = [titleValue, descValue];
    imgToBase64(form['news-img'].files[0]).then(
        base64 => newNewsData.push(base64)  
    ).catch( 
        noImg => newNewsData.push(noImg)
    ).finally(
        () => localStorage.setItem('news'+localStorage.length , JSON.stringify(newNewsData))
    );
}
