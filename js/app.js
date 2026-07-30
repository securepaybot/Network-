// ============================================
// app.js
// ============================================

document.addEventListener("DOMContentLoaded", () => {
    initializeCopyButtons();
    initializeAnimations();
    initializeSmoothScroll();
    initializeMobileMenu();
    initializeScrollTop();
    updateFooterYear();
});

// ============================================
// Copy Buttons
// ============================================

function initializeCopyButtons() {

    document.querySelectorAll(".copy-btn").forEach(button => {

        button.addEventListener("click", async () => {

            const target = button.dataset.target;
            const element = document.getElementById(target);

            if (!element) return;

            const value =
                element.value ||
                element.textContent ||
                "";

            try {

                await navigator.clipboard.writeText(value);

                const original = button.textContent;

                button.textContent = "Copied!";
                button.classList.add("copied");

                showToast("Copied successfully.");

                setTimeout(() => {

                    button.textContent = original;
                    button.classList.remove("copied");

                }, 1800);

            } catch {

                showToast("Unable to copy.");

            }

        });

    });

}

// ============================================
// Toast
// ============================================

function showToast(message) {

    let toast = document.getElementById("toast");

    if (!toast) {

        toast = document.createElement("div");
        toast.id = "toast";

        Object.assign(toast.style, {
            position: "fixed",
            bottom: "25px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#1f1f1f",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: "12px",
            opacity: "0",
            transition: ".3s",
            zIndex: "9999"
        });

        document.body.appendChild(toast);

    }

    toast.textContent = message;
    toast.style.opacity = "1";

    setTimeout(() => {
        toast.style.opacity = "0";
    }, 2200);

}

// ============================================
// Fade-in Animation
// ============================================

function initializeAnimations() {

    const items = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, {
        threshold: 0.15
    });

    items.forEach(item => observer.observe(item));

}

// ============================================
// Smooth Scroll
// ============================================

function initializeSmoothScroll() {

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", e => {

            e.preventDefault();

            const target = document.querySelector(link.getAttribute("href"));

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

}

// ============================================
// Mobile Menu
// ============================================

function initializeMobileMenu() {

    const menuButton = document.getElementById("menu-toggle");
    const nav = document.getElementById("mobile-menu");

    if (!menuButton || !nav) return;

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("open");

    });

}

// ============================================
// Scroll To Top
// ============================================

function initializeScrollTop() {

    let button = document.getElementById("scrollTop");

    if (!button) {

        button = document.createElement("button");

        button.id = "scrollTop";
        button.textContent = "↑";

        Object.assign(button.style, {
            position: "fixed",
            bottom: "25px",
            right: "25px",
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            display: "none",
            fontSize: "20px"
        });

        document.body.appendChild(button);

    }

    window.addEventListener("scroll", () => {

        button.style.display =
            window.scrollY > 300 ? "block" : "none";

    });

    button.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

// ============================================
// Footer Year
// ============================================

function updateFooterYear() {

    const year = document.getElementById("year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }

}