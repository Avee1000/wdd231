const banner = document.getElementById("banner");

window.addEventListener("load", function () {

    let today = new Date();
    let day = today.getDay();
  
    if (day >= 1 && day <= 3) {

        const prompt = document.getElementById('prompt');
        prompt.setAttribute('class', 'prompt');
        prompt.style.position = "fixed";
        prompt.style.padding = "10px";
    
        banner.style.display = "flex";

        document.querySelector('.delete').addEventListener('click', function () { 

            banner.style.display = "none";
        });
    } else {
        banner.style.display = "none";
    }

    // const button = document.createElement('button');
    // button.textContent = `❌`;
    // button.setAttribute('type', 'submit');
});