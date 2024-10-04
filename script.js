const container = document.querySelector('.container')
const setup = document.querySelector('button')
setup.addEventListener('click', () => {
    if (document.querySelector('.grid')) {
        const last = document.querySelectorAll('.grid')
        last.forEach((x) => {
            x.remove()
        })
    }
    const x = prompt('enter your grid')
    if (x > 100) {
        alert('invalid must be under 100')
    }
    else {
    for (let i =0; i <x; ++i) {
        for (let j =0; j <x; ++j) {
        const div = document.createElement('div')
        div.classList.add('grid')
        div.style.cssText = `width: calc(100% / ${x}); padding-bottom: calc(100%/${x})`
        container.appendChild(div)
        }
    }}
    const boxs = document.querySelectorAll('.grid')
    boxs.forEach((box) => {
    box.addEventListener('mouseover', () => {
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        box.style['background-color'] = randomColor
    })
})
    boxs.forEach((box) => {
        box.addEventListener('mouseout', () => {
            box.style['background-color'] = 'white'
        })
    })

})
