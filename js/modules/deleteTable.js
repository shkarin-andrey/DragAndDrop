import fetchServices from "./fetchServices"

const deleteTable = () => {
    const deleteElementTable = document.querySelectorAll('.delete')

    deleteElementTable.forEach((item, i) => {
        item.addEventListener('click', async (e) => {
            e.preventDefault()
            fetchServices(`http://localhost:3000/tables/${item.parentElement.dataset.id}`, 'DELETE')
        })
    })
}

export default deleteTable