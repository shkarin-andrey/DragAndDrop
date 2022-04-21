import fetchServices from "./fetchServices"

const updateTable = () => {
    const form = document.querySelector('form')
    const updateElementTables = document.querySelectorAll('.update')
    const modal = document.querySelector('.modal')
    const modalTitle = modal.querySelector('.title')
    
    updateElementTables.forEach((item) => {
        item.addEventListener('click', () => {
            modal.classList.remove('hidden')
            modalTitle.textContent = 'Изменение цвета'
            modal.dataset.update = true

            if (modal.dataset.update) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault()
            
                    const formData = {}
                    formData.id = item.parentElement.dataset.id
                    formData.name = form[0].value
                    formData.type = form[1].value
                    formData.color = form[2].value.toUpperCase()
            
                    fetchServices(`http://localhost:3000/tables/${item.parentElement.dataset.id}`, 'PATCH', JSON.stringify(formData))
                })
            }
        })
    })
}

export default updateTable