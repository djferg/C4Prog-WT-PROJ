const initApp = () => {
    const hamburgerButton = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')
    const desktopMenu = document.getElementById('main-menu')
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
                headerName.classList.add('hidden');
                desktopMenu.classList.add('justify-center');
                desktopMenu.classList.remove('justify-between');
            } else { // Below the fold
                headerName.classList.remove('hidden');
                desktopMenu.classList.remove('justify-center');
                desktopMenu.classList.add('justify-between');
            }
        })
    }, {threshold: 0.9})

    if (splashName) {
        observer.observe(splashName)
    }
}

document.addEventListener('DOMContentLoaded', initApp)