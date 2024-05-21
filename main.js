const menuButton = document.querySelector('.menuButton');
const menu = document.querySelector('.menu');
const icon = document.querySelector('.icon');

menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('show');
    if (menu.classList.contains('show')) {
        menu.style.opacity = 1;
        icon.src = "img/close_white_36dp.svg";
    } else {
        menu.style.opacity = 0;
        icon.src = "img/menu (2).png";
    }
}
const menuItems = document.querySelectorAll('.menu > li');

menuItems.forEach(item => {
    let timeoutId;

    item.addEventListener('mouseenter', () => {
        clearTimeout(timeoutId);
        const submenu = item.querySelector('.submenu');
        if (submenu) {
            submenu.classList.add('show');
        }
    });

    item.addEventListener('mouseleave', () => {
        const submenu = item.querySelector('.submenu');
        if (submenu) {
            timeoutId = setTimeout(() => {
                submenu.classList.remove('show');
            }, 1000); 
        }
    });
});

