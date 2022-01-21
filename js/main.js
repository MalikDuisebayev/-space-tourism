$(function(){
    $('.slider__box').slick({
        prevArrow: `<img class = 'slider__arrow slider__arrow-left' src="./images/arrow-left.svg" alt="left arrow">`,
        nextArrow: `<img class = 'slider__arrow slider__arrow-right' src="./images/arrow-rigth.svg" alt="rigth arrow">`,
        responsive: [
            {
              breakpoint: 1080,
              settings: {
                  arrows: false
              }
            }
        ]

    })
});

const btnActive = document.querySelector('.menu__btn')
btnActive.addEventListener('click',()=>{
    document.querySelector('.menu__list').classList.toggle('active')
})
