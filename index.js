let arenaButton = document.querySelector('button');
let home = document.querySelector('.home');
let container = document.querySelector('.container');
console.log(arenaButton);
console.log(home);
console.log(container);

arenaButton.addEventListener('click', enterTheArena);

function createNode(tag) {
    return document.createElement(tag);
}

function createPlayerNode(player) {
    let playerDiv = createNode('div');
    playerDiv.classList.add(`${player}`);
    let playerText = createNode("h3");
    playerText.textContent = player;
    let inputPlayer = createNode('input');
    let submit = createNode('button');
    submit.textContent = 'Submit';
    playerDiv.appendChild(playerText);
    playerDiv.appendChild(inputPlayer);
    playerDiv.appendChild(submit);
    return playerDiv;
}

function enterTheArena(e) {
    e.preventDefault();
    home.style.display = "none";
    let player1 = createPlayerNode('Warrior1');
    let player2 = createPlayerNode('Warrior2');
    container.appendChild(player1);
    container.appendChild(player2);
}

let userxx;
function fetchData(userName) {
    let userObj = fetch(`https://api.github.com/users/${userName}`).then(d => d.json());
    let userxx = userObj.then(d => userxx = d);
    console.log("userxx =",userxx);
    return userObj;
}
