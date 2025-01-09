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

    // Hamburger menu toggle for mobile
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinksContainer = document.querySelector(".nav-links");

    if (menuToggle && navLinksContainer) {
        menuToggle.addEventListener("click", () => {
            navLinksContainer.classList.toggle("active");
        });
    }

    // Tile hover effect
    const tiles = document.querySelectorAll(".tile");
    const background = document.querySelector(".background-container");
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    tiles.forEach(tile => {
        tile.addEventListener("mouseenter", () => {

            const title = tile.textContent;
            const content = tile.getAttribute("data-content");

            console.log(`Title: ${title}, Content: ${content}`);
            
            // Set the background container content
            background.textContent = tile.textContent;

            background.innerHTML = `
                <div class="background-title">${title}</div>
                <div class="background-content">${content}</div>
            `;
            console.log(background.innerHTML);
            
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

 if (isMobile) {
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
            });
        });
    } else {
        // Keep desktop hover functionality
        tiles.forEach((tile) => {
            tile.addEventListener("mouseenter", () => {
                // Add hover behavior
                tile.classList.add("expanded");
            });

            tile.addEventListener("mouseleave", () => {
                // Remove hover behavior
                tile.classList.remove("expanded");
            });
        });
    }
    
});
