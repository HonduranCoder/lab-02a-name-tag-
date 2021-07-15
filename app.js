const headerEl = document.getElementById("header");


const buttonEl = document.getElementById("button");


buttonEl.addEventListener('click', () => {
    const inputEl = document.getElementById("input");
        console.log(inputEl.value);


    headerEl.textContent = inputEl.value;
});
