import {animate} from "./helpers";

const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const scroll = document.querySelector('main>a');

    buttons.forEach(btn => {
       btn.addEventListener('click', () => {
          const widthWindow = window.innerWidth;
          modal.style.display = 'block';

           if (widthWindow > 768){
               animate({
                   duration: 500,
                   timing(timeFraction) {
                       return timeFraction;
                   },
                   draw(progress) {
                       modal.style.opacity = progress;
                   }
               });
           }
       });
    });

    scroll.addEventListener('click', function (e) {
        e.preventDefault();

        const blockID = scroll.getAttribute('href')

        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    });

    modal.addEventListener('click', (e)=> {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none';
        }
    });
};

export default modal;