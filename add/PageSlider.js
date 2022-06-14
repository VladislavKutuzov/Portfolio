let position = "#page_1";

function scrollTo(hash) {
    document.getElementById(hash).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
    position = "#" + hash
}

document.addEventListener('wheel', (e)=>{
    e.preventDefault()
    scrollHash(e)
}, { passive: false });

function scrollHash(e) {
    switch (position) {
        case "#page_1":
            if (e.deltaY < 0) {

            } else {
                scrollTo("page_2")
            }
            break;
        case "#page_2":
            if (e.deltaY < 0) {
                scrollTo("page_1")
            } else {
                scrollTo("page_3")
            }
            break;
        case "#page_3":
            if (e.deltaY < 0) {
                scrollTo("page_2")
            } else {

            }
            break;
        default:
            break;
    }
}