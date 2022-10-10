let arraySelected = JSON.parse(localStorage.getItem('vacancy')) || []

function createCards(array) {
    const cardUl = document.getElementById('cardsUl')
    cardUl.innerText = ''

    array.forEach(element => {
        const cardLi = document.createElement('li')

        const cardTitle = document.createElement('div')
        const titleH4 = document.createElement('h4')
        titleH4.innerText = element.title
        const divTitleP = document.createElement('div')
        const p1 = document.createElement('p')
        p1.innerText = element.enterprise
        const p2 = document.createElement('p')
        p2.innerText = element.location
    
        const cardDescription = document.createElement('div')
        const pDescription = document.createElement('p')
        pDescription.innerText = element.descrition
    
        const cardFooter = document.createElement('div')
        const pFooter = document.createElement('p')
        pFooter.innerText = element.modalities
        const button = document.createElement('button')
        button.className = 'button-submit'
        button.id = element.id
        let item = arraySelected.some(item => item.id == element.id)
    
        if(item){
            button.innerText = 'Remover candidatura'
        } else {
            button.innerText = 'Candidatar'
        }

        divTitleP.append(p1, p2)
        cardTitle.append(titleH4, divTitleP)
        cardDescription.append(pDescription)
        cardFooter.append(pFooter, button)
        cardLi.append(cardTitle, cardDescription, cardFooter)
        cardUl.append(cardLi)
       
    });
    
}

createCards(jobsData)