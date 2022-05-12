const modal = () => {
    const modal = document.querySelector('.popup');
    const popup = document.querySelector('.popup');
    const popupContent = document.querySelector('.popup-content');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');
    const scroll = document.querySelector('main>a');

    let count = 0;
    let idInterval;

    function animationPopup() {
        count++;

        idInterval = requestAnimationFrame(animationPopup);

        if (count > 4) {
            count = 0;
            cancelAnimationFrame(idInterval);
        }

        popupContent.animate([
            {opacity: '0'},
            {transition: 'opacity 1s linear'}
        ], 500);

        popup.animate([
            {opacity: '0'},
            {transition: 'opacity 0.5s linear'}
        ], 300);
    }

    buttons.forEach(btn => {
       btn.addEventListener('click', () => {
          const widthWindow = window.innerWidth;
          modal.style.display = 'block';
          if (widthWindow > 768) {
              idInterval = requestAnimationFrame(animationPopup);
          }
       });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    scroll.addEventListener('click', function (e) {
        e.preventDefault();

        const blockID = scroll.getAttribute('href')

        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
};

export default modal;