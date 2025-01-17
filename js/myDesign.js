document.addEventListener("DOMContentLoaded", function () {
    // Navigation Bar: Highlight the active section
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".section-nav .nav-link");
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinksContainer = document.querySelector(".nav-links");

    function activateLink() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[index].classList.add("active");
    }

    window.addEventListener("scroll", activateLink);
    activateLink();

    // Mobile Menu Toggle
    if (menuToggle && navLinksContainer) {
        menuToggle.addEventListener("click", () => {
            navLinksContainer.classList.toggle("active");
            menuToggle.setAttribute(
                "aria-expanded",
                navLinksContainer.classList.contains("active")
            );
        });
    }

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 768 && navLinksContainer.classList.contains("active")) {
                navLinksContainer.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            }
        });
    });

    // Campus Life: Tile click interaction
    const tiles = document.querySelectorAll(".tile");
    const background = document.querySelector(".background-container");

    // Function to reset all tiles and hide the overlay
    function resetTiles() {
        tiles.forEach((tile) => {
            tile.classList.remove("hidden", "fade-out");
        });
        if (background) {
            background.style.opacity = "0";
            background.innerHTML = ""; // Clear overlay content
        }
    }

    // Add click event listeners to tiles
    tiles.forEach((tile) => {
        tile.addEventListener("click", () => {
            // If background is already visible, reset tiles
            if (background.style.opacity === "1") {
                resetTiles();
                return;
            }

            // Get the tile's content
            const title = tile.textContent;
            const content = tile.getAttribute("data-content");

            // Update the overlay content and make it visible
            if (background) {
                background.innerHTML = `
                    <div class="background-title">${title}</div>
                    <div class="background-content">${content}</div>
                `;
                background.style.opacity = "1";
            }

            // Hide other tiles except the clicked one
            tiles.forEach((otherTile) => {
                if (otherTile !== tile) {
                    otherTile.classList.add("hidden");
                }
            });

            tile.classList.add("fade-out");
        });
    });

    // Close overlay when clicking anywhere on the background
    if (background) {
        background.addEventListener("click", resetTiles);
    }
});
