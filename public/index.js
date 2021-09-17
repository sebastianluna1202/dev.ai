let lastKnownYScroll = 0
let header = document.querySelector('header')
document.addEventListener('scroll', (e)=> {
    lastKnownYScroll = window.scrollY
    if (lastKnownYScroll != 0) {
        if (header.classList.contains('sm:bg-colorDarkBlue')) {
        } else {
            header.classList.add('sm:bg-colorDarkBlue')
        }
    } else {
        header.classList.remove('sm:bg-colorDarkBlue')
    }
})
