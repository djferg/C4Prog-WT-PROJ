const initApp = () => {
    const hamburgerButton = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')
    const desktopMenu = document.getElementById('desktop-menu')
    const headerName = document.getElementById('header-name')
    const splashName = document.getElementById('splash-name')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
    }

    hamburgerButton.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { // Above the fold
                headerName.classList.add('invisible');
                desktopMenu.classList.add('left-1/2', 'transform', '-translate-x-1/2');
                desktopMenu.classList.remove('right-4');
            } else { // Below the fold
                headerName.classList.remove('invisible');
                desktopMenu.classList.remove('left-1/2', 'transform', '-translate-x-1/2');
                desktopMenu.classList.add('right-4');
            }
        })
    }, {threshold: 0.9})

    if (splashName) {
        observer.observe(splashName)
    }
}

document.addEventListener('DOMContentLoaded', initApp)