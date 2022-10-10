function createAside(array) {
    const ul = document.getElementById('arrayAside')
    ul.innerText = ''

    array.forEach((element, index) => {
        const liAside = document.createElement('li')
        const titleH4 = document.createElement('h4')
        titleH4.innerText = element.title
        const divTitleP = document.createElement('div')
        const p1 = document.createElement('p')
        p1.innerText = element.enterprise
        const p2 = document.createElement('p')
        p2.innerText = element.location
        const button = document.createElement('button')
        button.innerText = 'x'
        button.addEventListener('click', () => {
            arraySelected.splice(index, 1)
            localStorage.setItem('vacancy', JSON.stringify(arraySelected))
            createAside(arraySelected)
            createCards(jobsData)
        })

        divTitleP.append(p1, p2)
        liAside.append(titleH4, divTitleP, button)
        ul.appendChild(liAside)
        console.log(ul)
    });
}

function arrayAside() {
    const ulButtons = document.querySelectorAll('.button-submit')

    ulButtons.forEach((button) => {
        button.addEventListener('click', (event) => {

            if (button.innerText === 'Candidatar') {
                button.innerText = 'Remover candidatura'
                const find = jobsData.find(element => element.id == event.target.id)
                arraySelected.push(find) 
            } else {
                button.innerText = 'Candidatar'
                const arrayRemove = arraySelected.filter(element => element.id != event.target.id)
                arraySelected = arrayRemove
            }
            localStorage.setItem('vacancy', JSON.stringify(arraySelected))
            createAside(arraySelected)
            createCards(jobsData)
        })

    })
}
arrayAside()
createAside(arraySelected)