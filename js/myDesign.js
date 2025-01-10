document.addEventListener("DOMContentLoaded", function () {
    // Dynamic active section highlighting
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

    // Highlight the current section in the navigation bar
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

    // Tile hover effect for desktop
    const tiles = document.querySelectorAll(".tile");
    const background = document.querySelector(".background-container");

    // Function to reset all tiles and hide background content
    function resetTiles() {
        tiles.forEach((tile) => {
            tile.classList.remove("hidden", "fade-out");
        });
        if (background) {
            background.style.opacity = "0";
        }
    }

    // Enable hover functionality for desktop
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
});
