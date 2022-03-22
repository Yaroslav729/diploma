const up = () => {

    const scrollUp = document.querySelector('.up')
    scrollUp.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
}

export default up