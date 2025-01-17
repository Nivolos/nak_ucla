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
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    // Function to reset all tiles and hide the overlay
    function resetTiles() {
        tiles.forEach((tile) => {
            tile.classList.remove("hidden", "fade-out", "expanded");
        });
        if (background) {
            background.style.opacity = "0";
            background.style.pointerEvents = "none"; // Disable clicks on the background
            background.innerHTML = ""; // Clear overlay content
        }
    }

    // Add interaction for tiles
    if (isMobile) {
        // For mobile: Toggle content on click
        tiles.forEach((tile) => {
            tile.addEventListener("click", () => {
                // Collapse all other tiles
                tiles.forEach((otherTile) => {
                    if (otherTile !== tile) {
                        otherTile.classList.remove("expanded");
                    }
                });

                // Toggle the clicked tile
                tile.classList.toggle("expanded");
                const content = tile.getAttribute("data-content");
                if (tile.classList.contains("expanded")) {
                    tile.innerHTML = `<div class="background-title">${tile.textContent}</div>
                                      <div class="background-content">${content}</div>`;
                } else {
                    tile.innerHTML = tile.dataset.title;
                }
            });
        });
    } else {
        // For desktop: Hover interaction
        tiles.forEach((tile) => {
            tile.addEventListener("mouseenter", () => {
                const title = tile.textContent;
                const content = tile.getAttribute("data-content");

                if (background) {
                    background.innerHTML = `
                        <div class="background-title">${title}</div>
                        <div class="background-content">${content}</div>
                    `;
                    background.style.opacity = "1";
                    background.style.pointerEvents = "auto"; // Enable clicks on the background
                }

                tiles.forEach((otherTile) => {
                    if (otherTile !== tile) {
                        otherTile.classList.add("hidden");
                    }
                });

                tile.classList.add("fade-out");
            });

            tile.addEventListener("mouseleave", () => {
                resetTiles();
            });
        });

        // Close overlay when clicking anywhere on the background
        if (background) {
            background.addEventListener("click", resetTiles);
        }
    }
});
