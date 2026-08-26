// =====================================
// SELECT NAVIGATION ELEMENTS
// =====================================

const animatedNavMenu = document.getElementById("navMenu");

const navLinks = document.querySelectorAll(".navbar a");

const navIndicator = document.getElementById("navIndicator");

const animatedMenuToggle = document.getElementById("menuToggle");


// =====================================
// ANIMATION VARIABLES
// =====================================

let animationFrame;

let currentLeft = 0;

let currentWidth = 0;


// =====================================
// GET ACTIVE NAVIGATION
// =====================================

function getActiveLink() {

    return document.querySelector(".navbar a.active");

}


// =====================================
// MOVE THE INDICATOR
// =====================================

function moveIndicator(link) {

    // Don't run desktop animation on mobile

    if (window.innerWidth <= 1203) {
        return;
    }


    // Get navbar position

    const navbarRect =
        animatedNavMenu.getBoundingClientRect();


    // Get clicked/hovered link position

    const linkRect =
        link.getBoundingClientRect();


    // Calculate the position inside navbar

    const targetLeft =
        linkRect.left - navbarRect.left;


    // Get target width

    const targetWidth =
        linkRect.width;


    // Stop previous animation

    cancelAnimationFrame(animationFrame);


    // Animation start values

    const startLeft = currentLeft;

    const startWidth = currentWidth;


    // Animation distance

    const leftDifference =
        targetLeft - startLeft;


    const widthDifference =
        targetWidth - startWidth;


    // Animation duration

    const duration = 350;


    // Starting time

    const startTime = performance.now();


    // =====================================
    // ANIMATION FUNCTION
    // =====================================

    function animate(currentTime) {

        // Calculate animation progress

        let progress =
            (currentTime - startTime) / duration;


        // Keep progress between 0 and 1

        progress =
            Math.min(progress, 1);


        // Ease in and out

        const ease =
            progress < 0.5
                ? 2 * progress * progress
                : 1 -
                  Math.pow(
                      -2 * progress + 2,
                      2
                  ) / 2;


        // Calculate current position

        currentLeft =
            startLeft +
            leftDifference * ease;


        // Calculate current width

        currentWidth =
            startWidth +
            widthDifference * ease;


        // Apply position

        navIndicator.style.left =
            currentLeft + "px";


        // Apply width

        navIndicator.style.width =
            currentWidth + "px";


        // Continue animation

        if (progress < 1) {

            animationFrame =
                requestAnimationFrame(animate);

        }

    }


    // Start animation

    animationFrame =
        requestAnimationFrame(animate);

}


// =====================================
// FIND CURRENT PAGE
// =====================================

function setCurrentPage() {

    // Get current file name

    const currentPage =
        window.location.pathname
        .split("/")
        .pop() || "index.html";


    navLinks.forEach(link => {

        const linkHref =
            link.getAttribute("href");


        // Remove old active class

        link.classList.remove("active");


        // Add active class to current page

        if (linkHref === currentPage) {

            link.classList.add("active");

        }

    });


    // Move indicator to active link

    const activeLink =
        getActiveLink();


    if (
        activeLink &&
        window.innerWidth > 1203
    ) {

        // Get exact position without animation

        setIndicatorPosition(activeLink);

    }

}


// =====================================
// SET INDICATOR WITHOUT ANIMATION
// =====================================

function setIndicatorPosition(link) {

    if (window.innerWidth <= 1203) {
        return;
    }


    const navbarRect =
        animatedNavMenu.getBoundingClientRect();


    const linkRect =
        link.getBoundingClientRect();


    currentLeft =
        linkRect.left -
        navbarRect.left;


    currentWidth =
        linkRect.width;


    navIndicator.style.left =
        currentLeft + "px";


    navIndicator.style.width =
        currentWidth + "px";

}


// =====================================
// HOVER EFFECT
// =====================================

navLinks.forEach(link => {

    link.addEventListener(
        "mouseenter",
        function () {

            if (
                window.innerWidth > 1203
            ) {

                // Remove hovered class
                // from all links

                navLinks.forEach(nav => {

                    nav.classList.remove(
                        "hovered"
                    );

                });


                // Add hovered class
                // to current link

                this.classList.add(
                    "hovered"
                );


                // Move indicator

                moveIndicator(this);

            }

        }
    );

});


// =====================================
// RETURN TO ACTIVE NAV
// =====================================

animatedNavMenu.addEventListener(
    "mouseleave",
    function () {

        if (
            window.innerWidth > 1203
        ) {

            // Remove hovered class

            navLinks.forEach(link => {

                link.classList.remove(
                    "hovered"
                );

            });


            // Get active link

            const activeLink =
                getActiveLink();


            // Move indicator back

            if (activeLink) {

                moveIndicator(
                    activeLink
                );

            }

        }

    }
);


// =====================================
// CLICK NAVIGATION
// =====================================

navLinks.forEach(link => {

    link.addEventListener(
        "click",
        function () {

            // Remove active class
            // from all links

            navLinks.forEach(nav => {

                nav.classList.remove(
                    "active"
                );

            });


            // Add active class
            // to clicked link

            this.classList.add(
                "active"
            );


            // Move indicator

            if (
                window.innerWidth > 1203
            ) {

                moveIndicator(this);

            }


            // Close mobile menu

            if (
                window.innerWidth <= 1203
            ) {

                animatedNavMenu.classList.remove(
                    "menu-open"
                );

            }

        }
    );

});


// =====================================
// MOBILE MENU
// =====================================

animatedMenuToggle.addEventListener(
    "click",
    function () {

        animatedNavMenu.classList.toggle(
            "menu-open"
        );

    }
);


// =====================================
// WINDOW RESIZE
// =====================================

window.addEventListener(
    "resize",
    function () {

        if (
            window.innerWidth > 1203
        ) {

            const activeLink =
                getActiveLink();


            if (activeLink) {

                setIndicatorPosition(
                    activeLink
                );

            }

        }

    }
);


// =====================================
// INITIALIZE NAVBAR
// =====================================

window.addEventListener(
    "load",
    function () {

        setCurrentPage();

    }
);


