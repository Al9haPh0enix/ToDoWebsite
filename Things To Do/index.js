let JSONvariables;
console.log("Startup")

var todo = `
{
    "Watch_A_Show": ["Trollhunters", "Star Wars: Clone Wars", "Spirit", "The Mysterious Benedict Society", "Gravity Falls"],
    "Watch_A_Movie": ["Spiderman: Homecoming", "Moana", "Luca", "Mulan", "Captain America: The First Avenger", "Avengers"],
    "Play_A_Board_Game": ["Trouble", "Tak", "Chess", "Uno"],
    "Play_A_Video_Game": ["Minecraft", "Portal", "Roblox", "Fortnite", "Terraria"],
    "Play_A_Game": ["Hide And Seek", "Tag"]
}
`;

JSONvariables = JSON.parse(todo);

console.log(JSONvariables)