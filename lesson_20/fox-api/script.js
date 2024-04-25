const imgContent = document.querySelector('#fox-img')
const btnChange = document.querySelector('#btn-change')

//! Вариант 1
// function getFox() {
//     btnChange.innerText = 'Loading...'
//     fetch('https://randomfox.ca/floof/')
//         .then(res => res.json())
//         .then(data => {
//             imgContent.src = data.image
//             btnChange.innerText = 'Change image'
//         })
    
// }

//! Вариант 2
async function getFox() {
    btnChange.innerText = 'Loading...'
    const response = await fetch('https://randomfox.ca/floof/')
    const data = await response.json()
    imgContent.src = data.image
    btnChange.innerText = 'Change image'
}

getFox()


btnChange.addEventListener('click', getFox)