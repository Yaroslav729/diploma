const callbackBtn = () => {
    const callback = document.querySelector('.header > a')
    const modalCallback = document.querySelector('.modal-callback')
    const modalOverlay = document.querySelector('.modal-overlay')
    const modalClose = document.querySelector('.modal-close')
    // let link = document.querySelectorAll('.top-menu > ul > li > a')

    callback.addEventListener( "click" , () => {
        modalCallback.style.display = 'block'
        modalOverlay.style.display = 'block'
    })

    modalClose.addEventListener( "click" , () => {
            modalCallback.style.display = 'none'
            modalOverlay.style.display = 'none'

    })

    modalOverlay.addEventListener( "click" , () => {
        modalCallback.style.display = 'none'
        modalOverlay.style.display = 'none'
    })

document.querySelectorAll('.top-menu > ul > li > a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault()

        const href = this.getAttribute('href').substring(1)
        const scrollTarget = document.getElementById(href)
        const topOffset = 0
        const elementPosition = scrollTarget.getBoundingClientRect().top
        const offsetPosition = elementPosition - topOffset

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        })
    })
})

}

export default callbackBtn