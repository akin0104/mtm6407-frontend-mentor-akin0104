const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
    dropdown.addEventListener("click", (e) => {

        dropdowns.forEach(item => {
            if(item !== dropdown){
                item.classList.remove("active");
            }
        });

        dropdown.classList.toggle("active");

        e.stopPropagation();
    });
});

document.addEventListener("click", () => {
    dropdowns.forEach(dropdown => {
        dropdown.classList.remove("active");
    });
});