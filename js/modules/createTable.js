import fetchServices from "./fetchServices"

const createTable = () => {
    const modal = document.querySelector('.modal')
    const form = document.querySelector('form')

    form.addEventListener('submit', (event) => {
        event.preventDefault()

        console.log(event)

        const formData = {}
        formData.name = form[0].value
        formData.type = form[1].value
        formData.color = form[2].value.toUpperCase()

        if (modal.dataset.update === 'false') {
           return fetchServices(`http://localhost:3000/tables`, 'POST', JSON.stringify(formData))
        }
    })
}


export default createTable