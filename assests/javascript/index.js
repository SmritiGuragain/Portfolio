document.addEventListener("DOMContentLoaded", function() {
    // Typed.js initialization
    var options = {
        strings: ["passionate developer", "creative designer", "problem solver"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    };

    var typed = new Typed(".typed-text", options);

    // Skills animation
    let skillsSection = document.querySelector('.skills');
    if (skillsSection) {
        new Waypoint({
            element: skillsSection,
            offset: '80%',
            handler: function(direction) {
                let progressBars = skillsSection.querySelectorAll('.progress-bar');
                progressBars.forEach(el => {
                    el.style.width = el.getAttribute('aria-valuenow') + '%';
                });
            }
        });
    }
});