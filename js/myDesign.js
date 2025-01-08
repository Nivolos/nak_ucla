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
            document.querySelectorAll(".tile").forEach(otherTile => {
                if (otherTile !== tile) {
                    otherTile.style.display = "none";
                }
            });
        });

        tile.addEventListener("mouseleave", () => {
            document.querySelectorAll(".tile").forEach(otherTile => {
                otherTile.style.display = "flex";
            });
        });
    });
});
