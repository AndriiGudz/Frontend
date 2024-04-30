const apiContent = document.querySelector('#api-content')
console.log(apiContent)
async function getAuto() {
    const res = await fetch('https://andriigudz.github.io/flowers-api/auto.json')
    const data = await res.json()

    data.map(auto => {
        const card = document.createElement('div')
        const paragrafDescr = document.createElement('p')
        paragrafDescr.textContent = `${auto.brand}, ${auto.model}, ${auto.age}, ${auto.color}`
        const imageAuto = document.createElement('img')
        imageAuto.classList.add('img-style')
        imageAuto.src = auto.image
        card.append(paragrafDescr, imageAuto)
        apiContent.append(card)
    })
}

getAuto()