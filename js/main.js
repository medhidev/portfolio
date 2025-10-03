const mode = document.getElementById("light_mode");


// Mode sombre / claire
mode.addEventListener("click", () => {
    const header = document.querySelector("header");
    const body = document.querySelector("body");
    const footer = document.querySelector("footer");

    if (mode.id === "light_mode") {
        header.className = "light";
        body.className = "light";
        footer.className = "light";
        mode.textContent = "dark_mode";
        mode.id = "dark_mode";
    } else if (mode.id === "dark_mode") {
        header.className = "dark";
        body.className = "dark";
        footer.className = "dark";
        mode.id = "light_mode";
        mode.textContent = "sunny";
    }
});