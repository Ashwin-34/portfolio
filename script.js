document.addEventListener("DOMContentLoaded", () => {
    const sectionTitles = document.querySelectorAll(".section-title");
    
    const observerOptions = {
        root: null, // default is the browser viewport
        rootMargin: "0px 0px -60px 0px", // triggers slightly before entering view
        threshold: 0.05
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
            } else {
                // Removing the class when the title leaves the screen resets the slide position
                entry.target.classList.remove("is-visible");
            }
        });
    }, observerOptions);

    sectionTitles.forEach(title => {
        revealObserver.observe(title);
    });
});