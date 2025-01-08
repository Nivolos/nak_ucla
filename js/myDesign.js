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
    document.querySelectorAll(".tile").forEach(tile => {
        tile.addEventListener("mouseenter", () => {
            const container = document.querySelector(".tiles-container");
            const rect = tile.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();

            // Calculate the relative position of the tile within the container
            const top = rect.top - containerRect.top;
            const left = rect.left - containerRect.left;

            // Apply dynamic positioning to the hovered tile
            tile.style.position = "absolute";
            tile.style.top = `${top}px`;
            tile.style.left = `${left}px`;
            tile.style.width = `${containerRect.width}px`;
            tile.style.height = `${containerRect.height}px`;
            tile.style.zIndex = "10";

            // Hide other tiles
            document.querySelectorAll(".tile").forEach(otherTile => {
                if (otherTile !== tile) {
                    otherTile.style.opacity = "0";
                }
            });
        });

        tile.addEventListener("mouseleave", () => {
            // Reset the tile's style on mouse leave
            tile.style.position = "relative";
            tile.style.top = "";
            tile.style.left = "";
            tile.style.width = "";
            tile.style.height = "";
            tile.style.zIndex = "";

            // Show all tiles again
            document.querySelectorAll(".tile").forEach(otherTile => {
                otherTile.style.opacity = "1";
            });
        });
    });
});
