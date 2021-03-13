var src = ['red', 'green', 'blue', 'white', 'brown']

var slideArea = document.querySelector('.slide-area')
var slideNav = document.querySelector('.slide-nav')

for (let e of src){
    let img = document.createElement('img')
    img.src = `./images/slides/slide-${e}.webp`
    img.classList.add(`slide-image`)
    img.setAttribute(`data-slide`, e)
    slideArea.appendChild(img.cloneNode())
    img.addEventListener('click', () => changeImage(e))
    slideNav.appendChild(img)
}

var currentImage = 'green'
document.querySelectorAll(`[data-slide="${currentImage}"]`)
    .forEach(e => e.classList.toggle('active'))

function changeImage(color) {
    document.querySelectorAll(`[data-slide="${currentImage}"]`)
        .forEach(e => e.classList.toggle('active'))
    document.querySelectorAll(`[data-slide="${color}"]`)
        .forEach(e => e.classList.toggle('active'))
    currentImage = color
}
