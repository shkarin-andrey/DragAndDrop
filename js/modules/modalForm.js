const modalForm = () => {
    const btn = document.querySelector('.js-open'),
          modal = document.querySelector('.modal'),
          close = modal.querySelector('.close'),
          modalTitle = modal.querySelector('.title')

    btn.addEventListener('click', () => {
        modal.classList.remove('hidden')
        modalTitle.textContent = 'Добавление цвета'
        modal.dataset.update = false
    })

    close.addEventListener('click', () => {
        modal.classList.add('hidden')
    })

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden')
        }   
    })
}

export default modalForm