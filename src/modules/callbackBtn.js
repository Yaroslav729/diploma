const callbackBtn = () => {
    const callback = document.querySelector('.header > a')
    const modalCallback = document.querySelector('.modal-callback')
    const modalOverlay = document.querySelector('.modal-overlay')
    const modalClose = document.querySelector('.modal-close')

    callback.addEventListener( "click" , () => {
        modalCallback.style.display = 'block'
        modalOverlay.style.display = 'block'
    })

    function modal(close, b) {
        close.addEventListener( "click" , () => {
            modalCallback.style.display = 'none'
            modalOverlay.style.display = 'none'
        })
    }

    modal(modalOverlay, modalClose)

    // modalClose.addEventListener( "click" , () => {
    //         modalCallback.style.display = 'none'
    //         modalOverlay.style.display = 'none'
    //
    // })
    //
    // modalOverlay.addEventListener( "click" , () => {
    //     modalCallback.style.display = 'none'
    //     modalOverlay.style.display = 'none'
    // })
}

export default callbackBtn