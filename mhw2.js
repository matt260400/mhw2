function crea_elemento(){
    for(let item of contents){
        const carta = document.createElement('div')
        const immagine = document.createElement('img')
        const nome = document.createElement('p')
        const descriz = document.createElement('p')
        const details = document.createElement('div')
        const bottone_details = document.createElement('p')
        const immagine_details_p = document.createElement('p')
        const preferiti_h = document.createElement('img')

        carta.classList.add('card')
        immagine.classList.add('immagine_artista')
        nome.classList.add('alias')
        descriz.classList.add('descrizione')
        descriz.classList.add('nascondi')
        details.classList.add('dettagli')
        bottone_details.classList.add('mostra_dettagli')
        preferiti_h.classList.add('preferiti')

        immagine.src = item.immagine_artista
        nome.textContent = item.alias
        descriz.textContent = item.descrizione
        bottone_details.textContent = item.mostra_dettagli
        preferiti_h.src = item.preferiti

        if(item.genere === 'rock'){
            const contenitore = document.querySelector('#rock .artisti')
            contenitore.appendChild(carta)
            const genitore = document.querySelector('#rock')
            genitore.classList.remove('nascondi')
        }
        if(item.genere === 'blues'){
            const contenitore = document.querySelector('#blues .artisti')
            contenitore.appendChild(carta)
            const genitore = document.querySelector('#blues')
            genitore.classList.remove('nascondi')
        }
        if(item.genere === 'compositori'){
            const contenitore = document.querySelector('#compositori .artisti')
            contenitore.appendChild(carta)
            const genitore = document.querySelector('#compositori')
            genitore.classList.remove('nascondi')
        }

        carta.appendChild(immagine)
        carta.appendChild(nome)
        carta.appendChild(descriz)
        carta.appendChild(details)
        details.appendChild(bottone_details)
        details.appendChild(immagine_details_p)
        immagine_details_p.appendChild(preferiti_h)

        bottone_details.addEventListener('click', mostra_descrizione)
        preferiti_h.addEventListener('click', aggiungi_preferiti)

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
    preferiti_h.src = 'red_heart.png'
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
    const inserimento = event.target.value.toLowerCase();
    const card = document.querySelectorAll('.card');
    const pref = document.querySelector('#preferiti')

    if (inserimento !== "") {
        pref.classList.add('nascondi')
        for(item of card){
            const nome = item.querySelector('.alias').textContent.toLowerCase()
            if(nome.indexOf(inserimento) === -1){
                item.classList.add('nascondi')
            }
            else{
                item.classList.remove('nascondi')
            }
        }
    }
    else{
        if(document.querySelectorAll('#preferiti div.card').length !== 0){
            document.querySelector('#preferiti').classList.remove('nascondi')
        }
        for(item of card){
            item.classList.remove('nascondi')
        }
    }
}

crea_elemento();