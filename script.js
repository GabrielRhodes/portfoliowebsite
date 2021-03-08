var simpleText = "hello_world";
var finalSplitText = simpleText.split("_");
var splitText = finalSplitText[0];

function load() {
    if (window.innerWidth > 500) {
        document.getElementById("words").innerHTML = "I'm Gabriel a.k.a. TOPGames. I develop bots, websites, and games. I've spent around a year in software development and am starting to grow my portfolio with paid jobs. I have created several small games, functional bots for discord, and this website. Have a job you want me to complete? Feel free to contact me with an email at topgamez123@gmail or on discord at TØPGames#7029.";
    }
    else { 
        document.getElementById("words").innerHTML = "I'm a software developer who codes bots, websites, and games. Need me to code something for you? Email me at topgamez123@gmail.com or DM me at TØPGames#7029 on discord!"
    }
}
