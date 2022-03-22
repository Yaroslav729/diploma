import {handlersClickChangeStyle} from './helpers.js'

const callbackBtn = () => {
    const callback = document.querySelector('.header > a')
    const modalCallback = document.querySelector('.modal-callback')
    const modalOverlay = document.querySelector('.modal-overlay')
    const modalClose = document.querySelector('.modal-close')


    handlersClickChangeStyle([callback, modalClose, modalOverlay],
        [modalCallback, modalOverlay])

}

export default callbackBtn