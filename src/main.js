
document.addEventListener('DOMContentLoaded', () => {
    let el = document.getElementsByClassName('option-container');
    
    Array.from(el).forEach((item) => {
        let _self = this;
        item.addEventListener('click', (e) => {
            console.log(e)
        })
    })
})

function addClassToElement(elem) {
    elem.classList.toggle('checked');
}