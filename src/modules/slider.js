const slider = () => {
    const sliderBlock = document.querySelector('.top-slider')
    const slider = document.querySelectorAll('.item')
    for(let i = 0; i < slider.length; i++) {slider[i].classList.remove('active')}

}
export default slider