import {handlersClickChangeStyle} from "./helpers.js";

const modal = () => {
    const buttonServices = document.querySelector('.button-services')
    const modalCallback = document.querySelector('.modal-callback')
    const modalOverlay = document.querySelector('.modal-overlay')

    handlersClickChangeStyle([buttonServices],
        [modalCallback, modalOverlay])

}



export default modal