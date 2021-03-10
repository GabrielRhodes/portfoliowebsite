function load() {
    newlink = document.createElement('a')
    newlink.innerHTML = 'here';
    newlink.setAttribute('href', 'https://github.com/TOPGamez/demo-repo');
    
    if (window.innerWidth > 500) {
        document.getElementById("words").innerHTML = "My experience in website development so far is compiled of this website, and a github repo that can be found in the link below. Expect more updates to this section as I grow my experience and portfolio in web development. The link to my website github repo is";
        document.getElementById("link").appendChild(newlink);
    } else {
        document.getElementById("words").innerHTML = "I have coded two websites, this portfolio site and another at this link https://github.com/TOPGamez/demo-repo. I will be updating this section as I complete more websites.";
    }
}
