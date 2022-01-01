function getNews(){
    fetch("./news.json")
        .then(response => {
            return response.json();
        })
        .then(data => formatNews(data));
}
function formatNews(data){
    let newsDiv = document.getElementById('news-div');

    data.news.forEach( one =>
    {
        //Creating Card
        let colDiv = document.createElement('div');
        colDiv.classList.add('col');
        let cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        let cardImg = document.createElement('img');
        cardImg.setAttribute('src', one.img_url);
        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        let title = document.createElement('h5');
        title.classList.add('card-title');
        title.innerHTML = one.title;
        let subject = document.createElement('p');
        subject.classList.add('card-text');
        subject.innerHTML = one.subject;
        let body = document.createElement('p');
        body.classList.add('card-text');
        body.innerHTML = one.content;
        let author = document.createElement('p');
        author.classList.add('card-text');
        author.innerHTML = 'Author : ' + one.author;

        //Child Appends
        newsDiv.appendChild(colDiv);
        colDiv.appendChild(cardDiv);
        cardDiv.appendChild(cardImg);
        cardDiv.appendChild(cardBody);
        cardBody.appendChild(title);
        cardBody.appendChild(subject);
        cardBody.appendChild(body);
        cardBody.appendChild(author);
    })
}