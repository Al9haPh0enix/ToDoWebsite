let JSONvariables;
console.log("Startup")

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var todo = `
{
    "Watch A Show": ["Trollhunters", "Star Wars: Clone Wars", "Spirit", "The Mysterious Benedict Society"],
    "Watch A Movie": ["Spiderman: Homecoming", "Moana", "Luca", "Mulan", "Captain America: The First Avenger", "Avengers"],
    "Play A Board Game": ["Trouble", "Tak", "Chess", "Uno"],
    "Play A Video Game": ["Minecraft", "Portal", "Roblox", "Fortnite", "Terraria"],
    "Play A Game": ["Hide And Seek", "Tag"]
}
`;

JSONvariables = JSON.parse(todo);

const keys = Object.keys(JSONvariables);
console.log("keys: " + keys)

rKey1 = keys[getRandomInt(4)];
rKey2 = JSONvariables[rKey1];

const one = JSONvariables[rKey1];
console.log(one);
const two = JSONvariables[rKey1][getRandomInt(JSONvariables[rKey1].length)];
console.log(two);

window.onload = function(){
    document.getElementById("one").innerHTML = rKey1;
    document.getElementById("two").innerHTML = two;
}
