const modal = () => {
    const modal = document.querySelector('.popup');
    const popupContent = document.querySelector('.popup-content');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');
    const scroll = document.querySelector('main>a');

    const width = document.documentElement.offsetWidth;

    let count = 0;
    let idInterval;

    function animationPopup() {
        count++;

        idInterval = requestAnimationFrame(animationPopup);

        if (count > 4) {
            count = 0;
            cancelAnimationFrame(idInterval);
        }

        popupContent.style.transform = `skewX(${count}deg)`;
    }

    buttons.forEach(btn => {
       btn.addEventListener('click', () => {
          modal.style.display = 'block';

          if (width > 768) {
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