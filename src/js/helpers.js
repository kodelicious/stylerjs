export default {
    removeClass: (elm, cls) => {
        if (elm) {
            elm.classList.remove(cls)
            if (! elm.classList.length) {
                elm.removeAttribute('class')
            }
        }
    }
}