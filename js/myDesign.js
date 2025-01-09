document.addEventListener("DOMContentLoaded", function () {
    // Dynamic active section highlighting
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".section-nav .nav-link");

    function activateLink() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[index].classList.add("active");
    }

    window.addEventListener("scroll", activateLink);
    activateLink();

    // Tile hover effect
    const tiles = document.querySelectorAll(".tile");
    const background = document.querySelector(".background-container");

    tiles.forEach(tile => {
        tile.addEventListener("mouseenter", () => {

            const title = tile.textContent;
            const content = tile.getAttribute("data-content");
            // Set the background container content
            background.textContent = tile.textContent;

            background.innerHTML = `
                <div class="background-title">${title}</div>
                <div class="background-content">${content}</div>
            `;
            
            // Show the background container
            background.style.opacity = "1";

            // Fade out all other tiles
            tiles.forEach(otherTile => {
                if (otherTile !== tile) {
                    otherTile.classList.add("hidden");
                }
            });

            // Fade out the hovered tile
            tile.classList.add("fade-out");
        });

        tile.addEventListener("mouseleave", () => {
            // Hide the background container
            background.style.opacity = "0";

            // Bring back all tiles, including the hovered tile
            tiles.forEach(otherTile => {
                otherTile.classList.remove("hidden", "fade-out");
            });
        });
    });
});
