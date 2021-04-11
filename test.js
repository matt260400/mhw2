function crea_elemento(immagine, nome, descriz, bottone_details, preferiti_h, genere){
    const carta = document.createElement('div')
    const img = document.createElement('img')
    const name = document.createElement('p')
    const description = document.createElement('p')
    const details = document.createElement('div')
    const button_details = document.createElement('p')
    const immagine_details_p = document.createElement('p')
    const favourite_h = document.createElement('img')

    img.src = immagine
    name.textContent = nome
    description.textContent = descriz
    button_details.textContent = bottone_details
    favourite_h.src = preferiti_h

    carta.classList.add('card')
    img.classList.add('immagine_artista')
    name.classList.add('alias')
    description.classList.add('descrizione')
    description.classList.add('nascondi')
    details.classList.add('dettagli')
    button_details.classList.add('mostra_dettagli')
    favourite_h.classList.add('preferiti')

    if(document.querySelector('#contenuti')){
        if(genere === 'rock'){
            const contenitore = document.querySelector('#rock .artisti')
            contenitore.appendChild(carta)
            const genitore = document.querySelector('#rock')
            genitore.classList.remove('nascondi')
        }
        if(genere === 'blues'){
            const contenitore = document.querySelector('#blues .artisti')
            contenitore.appendChild(carta)
            const genitore = document.querySelector('#blues')
            genitore.classList.remove('nascondi')
        }
        if(genere === 'compositori'){
            const contenitore = document.querySelector('#compositori .artisti')
            contenitore.appendChild(carta)
            const genitore = document.querySelector('#compositori')
            genitore.classList.remove('nascondi')
        }
    }

    carta.appendChild(img)
    carta.appendChild(name)
    carta.appendChild(description)
    carta.appendChild(details)
    details.appendChild(button_details)
    details.appendChild(immagine_details_p)
    immagine_details_p.appendChild(favourite_h)

    button_details.addEventListener('click', mostra_descrizione)
    favourite_h.addEventListener('click', aggiungi_preferiti)
}

function riempi_pagina(){
    for(let item of contents){
        if(item.genere === 'rock')
        console.log('ok')
    }
    for(let item of contents){
        crea_elemento(item.immagine_artista, item.alias, item.descrizione, item.mostra_dettagli, item.preferiti, item.genere)
    }
}

function mostra_descrizione(event){
    const button = event.currentTarget.parentElement.parentElement.querySelector(".descrizione")
    if(button.classList.contains("nascondi")){
        button.classList.remove("nascondi")
        const cambio_testo = event.currentTarget.parentElement.parentElement.querySelector(".mostra_dettagli")
        cambio_testo.textContent = 'Meno dettagli'
    }
    else {
        button.classList.add("nascondi")
        const cambio_testo = event.currentTarget.parentElement.parentElement.querySelector(".mostra_dettagli")
        cambio_testo.textContent = 'Mostra dettagli'
    }
}

function aggiungi_preferiti(event){
    if(document.querySelector('#preferiti').classList.contains("nascondi")){
        document.querySelector('#preferiti').classList.remove("nascondi")
    }

    if(document.querySelector('#preferiti_sidebar').classList.contains("nascondi")){
        document.querySelector('#preferiti_sidebar').classList.remove("nascondi")
    }

    const carta = document.createElement('div')
    const immagine = document.createElement('img')
    const nome = document.createElement('p')
    const descriz = document.createElement('p')
    const details = document.createElement('div')
    const bottone_details = document.createElement('p')
    const immagine_details_p = document.createElement('p')
    const preferiti_h = document.createElement('img')
    const preferiti_sidebar = document.createElement('p')

    carta.classList.add('card')
    immagine.classList.add('immagine_artista')
    nome.classList.add('alias')
    descriz.classList.add('descrizione')
    descriz.classList.add('nascondi')
    details.classList.add('dettagli')
    bottone_details.classList.add('mostra_dettagli')
    preferiti_h.classList.add('preferiti')

    const contenitore = document.querySelector('#preferiti .artisti')
    const contenitore_sidebar = document.querySelector('#preferiti_sidebar')
    

    immagine.src = event.currentTarget.parentElement.parentElement.parentElement.querySelector(".immagine_artista").src
    nome.textContent = event.currentTarget.parentElement.parentElement.parentElement.querySelector(".alias").textContent
    descriz.textContent = event.currentTarget.parentElement.parentElement.parentElement.querySelector(".descrizione").textContent
    bottone_details.textContent = event.currentTarget.parentElement.parentElement.parentElement.querySelector(".mostra_dettagli").textContent
    preferiti_h.src = event.currentTarget.parentElement.parentElement.parentElement.querySelector(".preferiti").src
    preferiti_sidebar.textContent = event.currentTarget.parentElement.parentElement.parentElement.querySelector(".alias").textContent
    
    contenitore.appendChild(carta)
    carta.appendChild(immagine)
    carta.appendChild(nome)
    carta.appendChild(descriz)
    carta.appendChild(details)
    details.appendChild(bottone_details)
    details.appendChild(immagine_details_p)
    immagine_details_p.appendChild(preferiti_h)
    contenitore_sidebar.appendChild(preferiti_sidebar)

    const padre_preferiti = event.currentTarget.parentElement.parentElement.querySelector('.preferiti')


    padre_preferiti.removeEventListener('click', aggiungi_preferiti)

    bottone_details.addEventListener('click', mostra_descrizione)
    preferiti_h.addEventListener('click', function() {rimuovi_preferiti(carta, padre_preferiti, preferiti_sidebar)})
}

function rimuovi_preferiti(carta, padre_preferiti, preferiti_sidebar){
    padre_preferiti.addEventListener('click', aggiungi_preferiti)
    carta.remove()
    preferiti_sidebar.remove()

    if(document.querySelectorAll('#preferiti div.card').length === 0){
        document.querySelector('#preferiti').classList.add('nascondi')
    }

    if(document.querySelectorAll('#preferiti_sidebar p').length === 0){
        document.querySelector('#preferiti_sidebar').classList.add('nascondi')
    }
}

const searchBar = document.getElementById('search')
searchBar.addEventListener('keyup', ricerca)

function ricerca(event){
    /*document.querySelector('#ricerca').classList.remove('nascondi')
    console.log(event.currentTarget.value)
    console.log(event.currentTarget.parentElement)

    document.querySelector('#ricerca').classList.add('cercando')

    const boh = document.querySelectorAll('.alias')

    for(item of boh){
        //console.log(item.textContent)
    }

    const genere = document.querySelectorAll('.genere')
    const linee = document.querySelectorAll('#contenuti .linea')

    for(item of genere){
        item.classList.add('nascondi')
    }

    for(item of linee){
        item.classList.add('nascondi')
    }*/

    if(event.currentTarget.value === 'David'){

    }
    crea_elemento()
}

riempi_pagina();