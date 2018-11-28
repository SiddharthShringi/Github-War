var arenaBtn = document.querySelector('.arena-btn');
var home = document.querySelector('.home');
var users = document.querySelector('.users');
var battleBtn = document.querySelector('.battle-btn');
var user1 = document.querySelector('.user1');
var user2 = document.querySelector('.user2');
var player1Data, player2Data

function createNode(tag) {
    return document.createElement(tag);
}

function enterTheArena(e) {
    e.preventDefault();
    home.style.display = "none";
    users.style.display = "flex";
    // for taking input value for both inputs
    var submitBtn1 = document.querySelector('.btn-1');
    var submitBtn2 = document.querySelector('.btn-2');
    submitBtn1.addEventListener('click', displayPlayer1);
    submitBtn2.addEventListener('click', displayPlayer2);
}

function displayPlayer1(e) {
    e.preventDefault()
    var player1 =document.querySelector('.user1 input').value;
    fetch(`https://api.github.com/users/${player1}`).then(res => res.json()).then(data => {
        player1Data = data;
        getPlayerInformation(data, 'user1')
    });
}

function displayPlayer2(e) {
    e.preventDefault()
    var player2 =document.querySelector('.user2 input').value;
    fetch(`https://api.github.com/users/${player2}`).then(res => res.json()).then(data => {
        player2Data = data;
        getPlayerInformation(data, 'user2')
    });
}

function getPlayerInformation(data, className) {
    var userClass = document.querySelector(`.${className}`);
    userClass.innerHTML = `<h3>@${data.login}</h3>
    <img src="${data.avatar_url}">
    <h5>Public Repository: ${data.public_repos}</h5>
    <h5>Following: ${data.following}</h5>
    <h5>Followers: ${data.followers}</h5>`
    if(className == 'user2') {
        battleBtn.style.display = "flex";
        battleBtn.addEventListener('click', displayScore); 
    }
}

function displayScore() {
    battleBtn.style.display = "none";
    player1Score = (player1Data.followers*2 + player1Data.public_repos);
    player2Score = (player2Data.followers*2 + player2Data.public_repos);
    user1.innerHTML += `<h5>Score: ${player1Score}</h5>`
    user2.innerHTML += `<h5>Score: ${player2Score}</h5>`
    if (player1Score>player2Score) {
        user1.classList.add('winner')
        user1.innerHTML += `<h1>Winner!</h1>`
    } else {
        user2.classList.add('winner')
        user2.innerHTML += `<h1>Winner!</h1>`
    }
}


arenaBtn.addEventListener('click', enterTheArena);


