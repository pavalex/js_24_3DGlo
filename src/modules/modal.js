const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const scroll = document.querySelector('main>a');

    let active = false;
    let count = 0;
    let idInterval;


    function animationPopup() {
        let opacityValue = count * 0.04;

        modal.style.opacity = `${opacityValue}`;

        if (count < 25) {
            idInterval = requestAnimationFrame(animationPopup);
        } else {
            cancelAnimationFrame(idInterval);
        }

        count++;
    }

    buttons.forEach(btn => {
       btn.addEventListener('click', () => {
          const widthWindow = window.innerWidth;
          modal.style.display = 'block';

           if (active) {
               cancelAnimationFrame(idInterval);
               active = false;
           } else {
               if (widthWindow > 768) {
                   idInterval = requestAnimationFrame(animationPopup);
                   active = true;
               }
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
            count = 0;
        }
    });
};

export default modal;