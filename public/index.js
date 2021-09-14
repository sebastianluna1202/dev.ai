let lastKnownYScroll = 0
let header = document.querySelector('#header')
document.addEventListener('scroll', (e)=> {
    lastKnownYScroll = window.scrollY
    if (lastKnownYScroll != 0) {
        if (header.classList.contains('bg-colorDarkBlue')) {
        } else {
            header.classList.add('bg-colorDarkBlue')
        }
    } else {
        header.classList.remove('bg-colorDarkBlue')
    }
})
