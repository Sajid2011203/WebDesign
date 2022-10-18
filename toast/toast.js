const success = document.querySelector('.success')
const warning = document.querySelector('.warning')
const info = document.querySelector('.info')

let toastContainer;
    
(function initToast() {
    document.body.insertAdjacentHTML(`afterbegin`, `<div class="toast-container"></div>`)
    toastContainer = document.querySelector('.toast-container')
})()

function generateToast({
    message = 'There is no entry',
    background = 'lightblue',
    length = '3000ms'
}) {
    toastContainer.insertAdjacentHTML(`beforeend`, `<p class="toast" style="background-color: ${background}; animation-duration: ${length};">${message}</p>`)
    const toast = toastContainer.lastChild;
    toast.addEventListener('animationend', function () {
        toast.remove()
    })
}

success.addEventListener('click', function () {
    generateToast({
        message: 'Successfully Login'
    })
})

warning.addEventListener('click', function () {
    generateToast({
        message: 'You have deleted All File!!',
        background: 'rgb(229, 67, 67)',
        length: '4000ms'
    })
})

info.addEventListener('click', function () {
    generateToast({
        message: 'Your information is ----',
        background: 'coral',
        length: '5000ms'
    })
})


// success.addEventListener('click', function () {
//     generateToast('congratulations! you have successfully login..')
// })

// warning.addEventListener('click', function () {
//     generateToast('Your are hacker!!', 'rgb(229, 67, 67)')
// })

// info.addEventListener('click', function () {
//     generateToast('Provide your Information to login..', 'coral')
// })


// let div = document.createElement('div')
// div.className = 'toast-container'
// document.body.appendChild(div)

// function generateToast(msg, bgColor = 'lightblue') {
//     let p = document.createElement('p')
//     p.className = 'toast'
//     p.innerText = msg
//     p.style.backgroundColor = bgColor

//     div.append(p)

//     p.addEventListener('animationend', function () {
//         p.remove()
//     })
// }