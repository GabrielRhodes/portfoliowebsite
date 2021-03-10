function load() {
    if (window.innerWidth > 500) {
        document.getElementById("words").innerHTML = "My experience in website development so far is compiled of this website, and a github repo that can be found at https://github.com/TOPGamez/demo-repo. Expect more updates to this section as I grow my experience and portfolio in web development";
    } else {
        document.getElementById("words").innerHTML = "I have coded two websites, this portfolio site and another at this link https://github.com/TOPGamez/demo-repo. I will be updating this section as I complete more websites.";
    }
}
