//kód implementuje hamburger menu pre responzívnosti
const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector("ul");
hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    ul.classList.toggle("active");
});
document.querySelectorAll("a").forEach(n => n.addEventListener("click", ()=>{
    hamburger.classList.remove("active");
    ul.classList.remove("active");
}));


//implementacia: tmavá a svetlá téma
const btn = document.querySelector(".darkmodebtn");
btn.addEventListener("click", ()=>{
    document.body.classList.toggle("dark-mode");
});
//po stlačení prepínacieho tlačidla
btn.onclick = function(){
    const logo = document.querySelector(".logo-a");
    const hd = document.querySelector("header");
    let links = document.querySelectorAll(".ul-li-a");
    let bars = document.querySelectorAll(".bar");
    let buttons = document.querySelectorAll(".card__button");
    let link_bottoms = document.querySelectorAll(".link-bottom");
    //pre každý odkaz napíšeme cyklus for
    for (const link of links) {
        link.classList.toggle('darker-mode');
    }
    //pre každý bar v menu napíšeme cyklus for
    for (const bar of bars) {
        bar.classList.toggle('darker-mode');
    }
    //pre každeho tlačidla napíšeme cyklus for
    for (const button of buttons) {
        button.classList.toggle('darker-mode');
    }
    for (const link_bottom of link_bottoms) {
        link_bottom.classList.toggle('darker-mode');
    }
    const uldiv = document.querySelector(".ul");

    hd.classList.toggle("darker-mode");
    logo.classList.toggle("darker-mode");
    uldiv.classList.toggle("darker-mode");
};









