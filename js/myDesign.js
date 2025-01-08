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

            // Determine the directions to expand based on the tile's position
            const isTopRow = top < containerRect.height / 2;
            const isBottomRow = !isTopRow;
            const isLeftColumn = left < containerRect.width / 2;
            const isRightColumn = !isLeftColumn;

            // Set position and size based on the tile's location
            tile.style.position = "absolute";
            tile.style.top = isTopRow ? `${top}px` : `0`;
            tile.style.left = isLeftColumn ? `${left}px` : `0`;
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
