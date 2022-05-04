let counter = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
    btn.addEventListener("click", function(element) {
        const btnCondition = element.currentTarget.classList;
        if (btnCondition.contains("decrease")) {
            counter--;
        } else if (btnCondition.contains("increase")) {
            counter++;
        } else {
            counter = 0;
        }

        if (counter < 0) {
            value.style.color = "red";
        }
        if (counter > 0) {
            value.style.color = "green";
        }
        if (counter === 0) {
            value.style.color = "#222"
        }
        value.textContent = counter;
    });
});