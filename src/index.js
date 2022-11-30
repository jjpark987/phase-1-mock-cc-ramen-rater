document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('#ramen-menu')
    const image = document.querySelector('img.detail-image')
    const name = document.querySelector('h2.name')
    const restaurant = document.querySelector('h3.restaurant')
    const rating = document.querySelector('#rating-display')
    const comment = document.querySelector('#comment-display')
    const form = document.querySelector('#new-ramen')

    fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(data => {
        for(const ramen of data) {
            addRamen(ramen)
        }
    })

    form.addEventListener('submit', event => {
        event.preventDefault()
        
        const newRamen = {
            name: event.target[0].value,
            restaurant: event.target[1].value,
            image: event.target[2].value,
            rating: event.target[3].value,
            comment: event.target[4].value
        }

        addRamen(newRamen)
    })

    function addRamen(ramenObj) {
        const menuImage = document.createElement('img')
        menuImage.src = ramenObj.image
        menuImage.addEventListener('click', () => {
            image.src = ramenObj.image
            name.textContent = ramenObj.name
            restaurant.textContent = ramenObj.restaurant
            rating.textContent = ramenObj.rating
            comment.textContent = ramenObj.comment
        })
        menu.append(menuImage)
    }
})

