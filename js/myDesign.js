document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".site-nav");
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
    const trackedSections = navLinks
        .map((link) => document.querySelector(link.getAttribute("href")))
        .filter(Boolean);
    const revealItems = document.querySelectorAll(".reveal");
    const heroMedia = document.querySelector(".hero-media");
    const tiltCards = document.querySelectorAll("[data-tilt]");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", () => {
            const isOpen = nav.classList.toggle("is-open");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
        });

        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                nav.classList.remove("is-open");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -8% 0px",
        }
    );

    revealItems.forEach((item) => {
        if (prefersReducedMotion) {
            item.classList.add("is-visible");
        } else {
            revealObserver.observe(item);
        }
    });

    const sectionObserver = new IntersectionObserver(
        (entries) => {
            const visibleEntry = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

            if (!visibleEntry) {
                return;
            }

            navLinks.forEach((link) => {
                const matches = link.getAttribute("href") === `#${visibleEntry.target.id}`;
                link.classList.toggle("is-active", matches);
            });
        },
        {
            threshold: [0.25, 0.45, 0.7],
            rootMargin: "-20% 0px -55% 0px",
        }
    );

    trackedSections.forEach((section) => sectionObserver.observe(section));

    if (!prefersReducedMotion && heroMedia) {
        const updateHeroParallax = () => {
            const offset = Math.min(window.scrollY * 0.06, 20);
            heroMedia.style.transform = `scale(1.06) translateY(${offset}px)`;
        };

        updateHeroParallax();
        window.addEventListener("scroll", updateHeroParallax, { passive: true });
    }

    if (!prefersReducedMotion && window.matchMedia("(min-width: 1024px)").matches) {
        tiltCards.forEach((card) => {
            card.addEventListener("pointermove", (event) => {
                const rect = card.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;
                const rotateY = ((x / rect.width) - 0.5) * 5;
                const rotateX = ((y / rect.height) - 0.5) * -5;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
            });

            card.addEventListener("pointerleave", () => {
                card.style.transform = "";
            });
        });
    }
});
