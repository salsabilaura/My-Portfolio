const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");


// =========================================
// MOBILE NAVIGATION
// =========================================

burger.addEventListener("click", () => {

    nav.classList.toggle("nav-active");

    burger.classList.toggle("toggle-burger");

});


// CLOSE MOBILE NAVIGATION AFTER CLICKING LINK

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

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

            title: "Interior Design Website",

            description:
                "A modern interior design website focused on presenting interior concepts, room selections, and customization features through a clean and responsive interface.",

            images: [
                "./img/interior/Interior_1.png",
                "./img/interior/Interior_2.png",
                "./img/interior/Interior_3.png",
                "./img/interior/Interior_4.png",
                "./img/interior/Interior_5.png"
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
    "A note-taking web application with search, dark and light mode, archive functionality, and user authentication features. Developed as a project during my internship experience."

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

    const modal = document.getElementById("projectModal");

    const modalClose = document.getElementById("modalClose");

    const modalImage = document.getElementById("modalImage");

    const modalTitle = document.getElementById("modalTitle");

    const modalNumber = document.getElementById("modalNumber");

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

        // Gambar
        if (modalImage) {

            modalImage.src =
                activeProject.images[currentIndex];

            modalImage.alt =
                activeProject.title;

        }


        // Judul
        if (modalTitle) {

            modalTitle.textContent =
                activeProject.title;

        }


        // Nomor project
        if (modalNumber) {

            modalNumber.textContent =
                activeProject.number;

        }


        // Deskripsi
        if (modalDescription) {

            modalDescription.textContent =
                activeProject.description;

        }


        // Counter
        if (currentImage) {

            currentImage.textContent =
                currentIndex + 1;

        }

        if (totalImages) {

            totalImages.textContent =
                activeProject.images.length;

        }


        // Tags
        if (modalTags) {

            modalTags.innerHTML = "";

            activeProject.tags.forEach(tag => {

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


    projectButtons.forEach(button => {

        button.addEventListener("click", function (event) {

            event.preventDefault();

            const projectId =
                this.getAttribute("data-project");


            // Cek apakah project tersedia
            if (!projectId) {

                console.error(
                    "Tombol View Project tidak memiliki data-project."
                );

                return;

            }


            if (!projects[projectId]) {

                console.error(
                    "Project tidak ditemukan:",
                    projectId
                );

                return;

            }


            // Set project aktif
            activeProject =
                projects[projectId];


            // Mulai dari gambar pertama
            currentIndex = 0;


            // Tampilkan modal
            if (modal) {

                modal.classList.add("active");

            }


            // Mencegah halaman belakang ikut scroll
            document.body.style.overflow = "hidden";


            // Isi modal
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


            // Kembali ke gambar pertama
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


            // Jika berada di gambar pertama,
            // kembali ke gambar terakhir
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


        modal.classList.remove("active");


        // Kembalikan scroll halaman
        document.body.style.overflow = "";


        // Reset project
        activeProject = null;


        currentIndex = 0;

    }


// Tombol X
    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeModal
        );

    }


// Klik background modal
    if (modalOverlay) {

        modalOverlay.addEventListener(
            "click",
            closeModal
        );

    }


// =========================================
// KEYBOARD NAVIGATION
// =========================================

    document.addEventListener("keydown", event => {

        // Jangan melakukan apa-apa
        // jika modal tidak sedang terbuka
        if (
            !modal ||
            !modal.classList.contains("active")
        ) {

            return;

        }


        // ESC
        if (event.key === "Escape") {

            closeModal();

        }


        // Arrow Right
        if (event.key === "ArrowRight") {

            if (galleryNext) {

                galleryNext.click();

            }

        }


        // Arrow Left
        if (event.key === "ArrowLeft") {

            if (galleryPrev) {

                galleryPrev.click();

            }

        }

    });


// =========================================
// RESET FORM BEFORE UNLOAD
// =========================================

    window.onbeforeunload = () => {

        const forms =
            document.getElementsByTagName("form");


        for (const form of forms) {

            form.reset();

        }

    };

});