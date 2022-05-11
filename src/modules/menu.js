const menu = () => {
   const menuBtn = document.querySelector('.menu');
   const menu = document.querySelector('menu');
   const closeBtn = document.querySelector('.close-btn');
   const menuItems = document.querySelectorAll('ul>li>a');

   const handleMenu = () => menu.classList.toggle('active-menu');

   menuBtn.addEventListener('click', handleMenu);
   closeBtn.addEventListener('click', handleMenu);

   menuItems.forEach((menuItem) => {
      menuItem.addEventListener('click', handleMenu);
   })

   for (let anchor of menuItems) {
      anchor.addEventListener('click', function (e) {
         e.preventDefault();

         const blockID = anchor.getAttribute('href');

         document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         })
      })
   }
};

export default menu;