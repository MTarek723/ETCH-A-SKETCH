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
    }}})