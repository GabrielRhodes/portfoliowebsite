function load() {
    newlink = document.createElement('a')
    newlink.innerHTML = 'here';
    newlink.setAttribute('title', 'Google');
    newlink.setAttribute('href', 'https://github.com/GabrielRhodes?tab=repositories');
    
    newlinktwo = document.createElement('a')
    newlinktwo.innerHTML = 'here';
    newlinktwo.setAttribute('title', 'Google');
    newlinktwo.setAttribute('href', 'https://www.fiverr.com/topgamez?up_rollout=true');
    
    if (window.innerWidth > 500) {
        
        document.getElementById("words").innerHTML = "While games and websites are a part of my repertoire, they are not all I have to offer. I have build discord bots, calculators, and more in different languages and platforms. You can check out my full github account containing most of my work";
        
        document.getElementById("link").appendChild(newlink);
        
        document.getElementById("words-two").innerHTML = "You can also check out my fiverr account where I create custom discord bots for cheap. I will also be selling my services in web development soon. The link is";
     
        document.getElementById("link-two").appendChild(newlinktwo);
        
    } else {
        document.getElementById("words").innerHTML = "I have coded more than just games and websites. You can check out my other work";
        
        document.getElementById("link").appendChild(newlink);
        
        document.getElementById("words-two").innerHTML = "You can also check out my fiverr account where I create custom discord bots. I will also be selling my services in web development soon. The link is";
     
        document.getElementById("link-two").appendChild(newlink);
    }
}
