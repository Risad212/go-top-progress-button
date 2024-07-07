/*------------- scroll top progress bar ----------------------*/
const scrollTopButton = document.querySelector(".scroll-top-wrapper");
if (scrollTopButton) {
    const path = scrollTopButton.querySelector("path");
    const pathLength = path.getTotalLength();

    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;
    path.style.transition = "stroke-dashoffset 10ms linear";

    const updateDashoffset = () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        path.style.strokeDashoffset = pathLength - (window.pageYOffset * pathLength) / scrollHeight;
    };

    updateDashoffset();
    window.addEventListener("scroll", updateDashoffset);

    window.addEventListener("scroll", () => scrollTopButton.classList.toggle("show", window.pageYOffset > 50));

    scrollTopButton.addEventListener("click", (event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
/*------------- scroll top progress bar ----------------------*/