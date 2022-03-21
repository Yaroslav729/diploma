const up = () => {

    let scrolled;
    let timer;

    const buttonUp = document.querySelector('.up')
    buttonUp.addEventListener("click", () => {
        scrolled = window.pageYOffset;
        scrollTop()
    })

    function scrollTop() {
        if (scrolled > 0) {
            window.scrollTo(0, scrolled);
            scrolled = scrolled - 300;
            timer = setTimeout(scrollTop, 100);
        } else {
            clearTimeout(timer);
            window.scrollTo(0, 0);
        }
    }
}

export default up