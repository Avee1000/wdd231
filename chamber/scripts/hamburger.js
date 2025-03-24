const hamburger = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamburger.addEventListener('click', () => {
    navigation.classList.add('show');
    document.body.style.overflow = 'hidden';
});

document.querySelector("#close").addEventListener('click', () => {
    navigation.classList.remove('show');
    document.body.style.overflow = '';
});

////////////////////////////////////////////////////////////
const rightSideSections = document.querySelectorAll("#right-side section");

rightSideSections.forEach((section, index) => {
    section.style.animationDelay = `${index * 0.1}s`; // 0.5s delay between each section
});

const learnMore = document.querySelectorAll(".learnMore");

learnMore.forEach((button) => {
    button.addEventListener("click", () => {
        const section = button.parentElement;  //or use .closest(); or previousElementSibling;
        const listContainer = section.querySelector(".listContainer"); 
        listContainer.classList.toggle("show");

        if (listContainer.classList.contains("show")) {
            button.classList.add("show");
        } 
        else {
            button.classList.remove("show");
        }
    });
});