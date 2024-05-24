const menuButton = document.querySelector('.menuButton');
const menu = document.querySelector('.menu');
const icon = document.querySelector('.icon');

menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('show');
    icon.src = menu.classList.contains('show') ? "img/close_white_36dp.svg" : "img/menu (2).png";
}

const menuItems = document.querySelectorAll('.menu > li');

menuItems.forEach(item => {
    let timeoutId;

    item.addEventListener('mouseenter', () => {
        clearTimeout(timeoutId);
        const submenu = item.querySelector('.submenu');
        if (submenu) {
            submenu.style.display = 'block';
        }
    });

    item.addEventListener('mouseleave', () => {
        const submenu = item.querySelector('.submenu');
        if (submenu) {
            timeoutId = setTimeout(() => {
                submenu.style.display = 'none';
            }, 2000); 
        }
    });
});
