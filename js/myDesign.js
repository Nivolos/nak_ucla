document.addEventListener("DOMContentLoaded", function () {
    const tiles = document.querySelectorAll(".tile");
    const background = document.querySelector(".background-container");

    // Function to reset all tiles and hide background content
    function resetTiles() {
        tiles.forEach((tile) => {
            tile.classList.remove("expanded", "hidden", "fade-out");
        });
        if (background) {
            background.style.opacity = "0";
        }
    }

    // Desktop: Hover functionality
    function enableDesktopTileEffects() {
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
    }

    // Mobile: Click functionality
    function enableMobileTileEffects() {
        tiles.forEach((tile) => {
            tile.addEventListener("click", () => {
                const isExpanded = tile.classList.contains("expanded");

                // Reset all tiles first
                resetTiles();

                // Expand clicked tile only if it was not already expanded
                if (!isExpanded) {
                    tile.classList.add("expanded");
                }
            });
        });
    }

    // Check screen size and enable appropriate functionality
    function updateTileFunctionality() {
        const isMobile = window.innerWidth <= 768;

        // Remove all event listeners to avoid duplication
        tiles.forEach((tile) => {
            tile.replaceWith(tile.cloneNode(true));
        });

        // Reattach the tiles after clearing event listeners
        const newTiles = document.querySelectorAll(".tile");

        if (isMobile) {
            enableMobileTileEffects();
        } else {
            enableDesktopTileEffects();
        }
    }

    // Apply the initial functionality
    updateTileFunctionality();

    // Update functionality on window resize
    window.addEventListener("resize", updateTileFunctionality);
});
