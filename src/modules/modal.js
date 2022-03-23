import {handlersClickChangeStyle} from "./helpers.js";

const modal = () => {
    const buttonServices = document.querySelector('.button-services')
    const modalCallback = document.querySelector('.modal-callback')
    const modalOverlay = document.querySelector('.modal-overlay')
    const modalClose = document.querySelector('.modal-close')


    handlersClickChangeStyle([buttonServices, modalClose, modalOverlay],
        [modalCallback, modalOverlay])

}



export default modal