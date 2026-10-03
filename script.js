// ========================================
// CONDENSATION RATE CHART
// ========================================

const condensationCanvas = document.getElementById("condensationChart");

if (condensationCanvas) {

    new Chart(condensationCanvas, {

        type: "bar",

        data: {
            labels: [
                "Minimum",
                "Maximum"
            ],

            datasets: [{
                label: "Condensation Rate (g/h)",

                data: [
                    40.47,
                    198.16
                ],

                borderWidth: 1
            }]
        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {
                legend: {
                    display: false
                }
            },

            scales: {

                y: {
                    beginAtZero: true,

                    title: {
                        display: true,
                        text: "Condensation Rate (g/h)"
                    }
                },

                x: {
                    title: {
                        display: true,
                        text: "Measured Range"
                    }
                }

            }

        }

    });

}

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add("navbar-scrolled");

    } else {

        navbar.classList.remove("navbar-scrolled");

    }

});

// ========================================
// SCROLL REVEAL
// ========================================

const revealElements = document.querySelectorAll(
    ".section-title, .section-description, " +
    ".card, .flow-card, .result-card, " +
    ".production-card, .scada-card, " +
    ".advantage-card, .gap-card, " +
    ".roadmap-item, .focus-card, " +
    ".team-card, .supervisor-card"
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.1
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});