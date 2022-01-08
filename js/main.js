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
function getFaq(){
    fetch("./faq.json")
        .then(response => {
            return response.json();
        })
        .then(data => formatFaq(data));
}
function formatFaq(data){
    let questionOne = document.getElementById('questionOne');
    let questionTwo = document.getElementById('questionTwo');
    let questionThree = document.getElementById('questionThree');
    let answerOne = document.getElementById('answerOne');
    let answerTwo = document.getElementById('answerTwo');
    let answerThree = document.getElementById('answerThree');
    questionOne.innerText = data.faq[0].question;
    questionTwo.innerText = data.faq[1].question;
    questionThree.innerText = data.faq[2].question;
    let p = document.createElement('p');
    p.innerHTML = data.faq[0].answer;
    answerOne.appendChild(p);
    let p2 = document.createElement('p');
    p2.innerHTML = data.faq[1].answer;
    answerTwo.appendChild(p2);
    let p3 = document.createElement('p');
    p3.innerHTML = data.faq[2].answer;
    answerThree.appendChild(p3);
}