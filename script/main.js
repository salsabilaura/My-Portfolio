// =========================================
// MOBILE NAVIGATION
// =========================================

const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

if (burger && nav) {

    burger.addEventListener("click", function () {

        nav.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");

    });

}


// CLOSE MENU AFTER CLICKING NAV LINK

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("nav-active");
        burger.classList.remove("toggle-burger");

    });

});

// =========================================
// PROJECT DATA
// =========================================

const projects = {

    interior: {

        number: "01",

        title: "MODO INTERIORS - Company Profile",

        description:
            "A modern interior design website featuring a brand-focused Home page, company information and services on the About page, and an interactive Catalog for exploring material categories and design variations through a clean and responsive interface.",

        images: [
            "./img/modo/homepage-01.png",
            "./img/modo/homepage-02.png",
            "./img/modo/homepage-03.png",
            "./img/modo/aboutmodo-01.png",
            "./img/modo/aboutmodo-02.png",
            "./img/modo/katalog-01.png",
            "./img/modo/katalog-02.png",
            "./img/modo/katalog-03.png",
            
        ],

        tags: [
            "HTML",
            "CSS",
            "JavaScript"
        ]

    },


    simpnote: {

        number: "02",

        title: "SIMPNOTE",

        description:
            "A note-taking web application with search, dark and light mode, archive functionality, and user authentication features. Developed as a project during my internship experience.",

        images: [
            "./img/simpnote/Simpnote_0(1).png",
            "./img/simpnote/Simpnote_1(1).png",
            "./img/simpnote/Simpnote_2.png",
            "./img/simpnote/Simpnote_3.png",
            "./img/simpnote/Simpnote4(1).png",
            "./img/simpnote/Simpnote_6.png",
            "./img/simpnote/Simpnote_7(1).png"
        ],

        tags: [
            "React",
            "Bootstrap",
            "JavaScript"
        ]

    },


    seminfo: {

        number: "03",

        title: "Seminfo",

        description:
            "A web application that extracts seminar information from poster images using Optical Character Recognition (OCR) and Named Entity Recognition (NER).",

        images: [
            "./img/seminfo/Seminfo_0(1).png",
            "./img/seminfo/Seminfo_1(1).png",
            "./img/seminfo/Seminfo_2(1).png"
        ],

        tags: [
            "React",
            "JavaScript",
            "Python",
            "OCR",
            "NER"
        ]

    },


    undangan: {

        number: "04",

        title: "Digital Wedding Invitation",

        description:
            "A responsive digital wedding invitation website featuring event information, RSVP form, countdown, and interactive invitation sections.",

        images: [
            "./img/undangan/Undangan_1.jpeg",
            "./img/undangan/Undangan_2.jpeg",
            "./img/undangan/Undangan_3.jpeg",
            "./img/undangan/Undangan_4.jpeg",
            "./img/undangan/Undangan_5.jpeg",
            "./img/undangan/Undangan_6.jpeg",
            "./img/undangan/Undangan_7.jpeg",
            "./img/undangan/Undangan_8.jpeg"
        ],

        tags: [
            "HTML",
            "CSS",
            "JavaScript"
        ]

    }

};


// =========================================
// GET MODAL ELEMENTS
// =========================================

const modal =
    document.getElementById("projectModal");

const modalClose =
    document.getElementById("modalClose");

const modalImage =
    document.getElementById("modalImage");

const modalTitle =
    document.getElementById("modalTitle");

const modalNumber =
    document.getElementById("modalNumber");

const modalDescription =
    document.getElementById("modalDescription");

const modalTags =
    document.getElementById("modalTags");

const currentImage =
    document.getElementById("currentImage");

const totalImages =
    document.getElementById("totalImages");

const galleryPrev =
    document.getElementById("galleryPrev");

const galleryNext =
    document.getElementById("galleryNext");

const modalOverlay =
    document.querySelector(".modal-overlay");


// =========================================
// MODAL STATE
// =========================================

let activeProject = null;

let currentIndex = 0;


// =========================================
// UPDATE MODAL CONTENT
// =========================================

function updateModal() {

    if (!activeProject) return;


    // IMAGE
    if (modalImage) {

        modalImage.src =
            activeProject.images[currentIndex];

        modalImage.alt =
            activeProject.title;

    }


    // TITLE
    if (modalTitle) {

        modalTitle.textContent =
            activeProject.title;

    }


    // PROJECT NUMBER
    if (modalNumber) {

        modalNumber.textContent =
            activeProject.number;

    }


    // DESCRIPTION
    if (modalDescription) {

        modalDescription.textContent =
            activeProject.description;

    }


    // CURRENT IMAGE NUMBER
    if (currentImage) {

        currentImage.textContent =
            currentIndex + 1;

    }


    // TOTAL IMAGE NUMBER
    if (totalImages) {

        totalImages.textContent =
            activeProject.images.length;

    }


    // TAGS
    if (modalTags) {

        modalTags.innerHTML = "";


        activeProject.tags.forEach((tag) => {

            const span =
                document.createElement("span");

            span.textContent = tag;

            modalTags.appendChild(span);

        });

    }

}


// =========================================
// OPEN PROJECT
// =========================================

const projectButtons =
    document.querySelectorAll(".view-project");


projectButtons.forEach((button) => {

    button.addEventListener("click", (event) => {

        event.preventDefault();


        const projectId =
            button.getAttribute("data-project");


        // CHECK PROJECT ID
        if (!projectId) {

            console.error(
                "Tombol View Project tidak memiliki data-project."
            );

            return;

        }


        // CHECK PROJECT
        if (!projects[projectId]) {

            console.error(
                "Project tidak ditemukan:",
                projectId
            );

            return;

        }


        // SET ACTIVE PROJECT
        activeProject =
            projects[projectId];


        // RESET IMAGE
        currentIndex = 0;


        // SHOW MODAL
        if (modal) {

            modal.classList.add("active");

        }


        // DISABLE BACKGROUND SCROLL
        document.body.style.overflow =
            "hidden";


        // UPDATE MODAL
        updateModal();

    });

});


// =========================================
// NEXT IMAGE
// =========================================

if (galleryNext) {

    galleryNext.addEventListener("click", () => {

        if (!activeProject) return;


        currentIndex++;


        // RETURN TO FIRST IMAGE
        if (
            currentIndex >=
            activeProject.images.length
        ) {

            currentIndex = 0;

        }


        updateModal();

    });

}


// =========================================
// PREVIOUS IMAGE
// =========================================

if (galleryPrev) {

    galleryPrev.addEventListener("click", () => {

        if (!activeProject) return;


        currentIndex--;


        // RETURN TO LAST IMAGE
        if (currentIndex < 0) {

            currentIndex =
                activeProject.images.length - 1;

        }


        updateModal();

    });

}


// =========================================
// CLOSE MODAL
// =========================================

function closeModal() {

    if (!modal) return;


    // HIDE MODAL
    modal.classList.remove("active");


    // ENABLE PAGE SCROLL
    document.body.style.overflow = "";


    // RESET PROJECT
    activeProject = null;


    // RESET IMAGE INDEX
    currentIndex = 0;

}


// =========================================
// CLOSE MODAL - BUTTON X
// =========================================

if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeModal
    );

}


// =========================================
// CLOSE MODAL - CLICK OVERLAY
// =========================================

if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        closeModal
    );

}


// =========================================
// KEYBOARD NAVIGATION
// =========================================

document.addEventListener("keydown", (event) => {

    // ONLY WHEN MODAL IS OPEN
    if (
        !modal ||
        !modal.classList.contains("active")
    ) {

        return;

    }


    // ESCAPE
    if (event.key === "Escape") {

        closeModal();

    }


    // NEXT IMAGE
    if (event.key === "ArrowRight") {

        if (galleryNext) {

            galleryNext.click();

        }

    }


    // PREVIOUS IMAGE
    if (event.key === "ArrowLeft") {

        if (galleryPrev) {

            galleryPrev.click();

        }

    }

});


// =========================================
// RESET FORM BEFORE UNLOAD
// =========================================

window.addEventListener("beforeunload", () => {

    const forms =
        document.getElementsByTagName("form");


    for (const form of forms) {

        form.reset();

    }

});

/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".project-card, " +
    ".certification-card, " +
    ".skills-tools-card, " +
    ".tool-card, " +
    ".contact-container, " +
    ".education"
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
});


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});