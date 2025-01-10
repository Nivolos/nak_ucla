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

    // Tile hover and click effects
    const tiles = document.querySelectorAll(".tile");
    const background = document.querySelector(".background-container");

    function resetTiles() {
        tiles.forEach((tile) => {
            tile.classList.remove("expanded", "hidden", "fade-out");
        });
        background.style.opacity = "0";
    }

    tiles.forEach((tile) => {
        // Desktop hover functionality
        tile.addEventListener("mouseenter", () => {
            if (window.innerWidth > 768) {
                const title = tile.textContent;
                const content = tile.getAttribute("data-content");

                background.innerHTML = `
                    <div class="background-title">${title}</div>
                    <div class="background-content">${content}</div>
                `;

                background.style.opacity = "1";

                tiles.forEach((otherTile) => {
                    if (otherTile !== tile) {
                        otherTile.classList.add("hidden");
                    }
                });

                tile.classList.add("fade-out");
            }
        });

        tile.addEventListener("mouseleave", () => {
            if (window.innerWidth > 768) {
                resetTiles();
            }
        });

        // Mobile click functionality
        tile.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                const isExpanded = tile.classList.contains("expanded");

                // Reset all tiles
                resetTiles();

                if (!isExpanded) {
                    tile.classList.add("expanded");
                }
            }
        });
    });

    // Reset on window resize
    window.addEventListener("resize", () => {
        resetTiles();
    });
});
