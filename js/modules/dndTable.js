const dndTable = () => {
    const table = document.querySelector('tbody')
    const listTable = document.querySelectorAll('tbody tr')
    
    listTable.forEach(element => {
        console.dir(element.childNodes)
        element.addEventListener('dragstart', (e) => {
            element.classList.add('select')
        })
        element.addEventListener('dragend', (e) => {
            element.classList.remove('select')
        })

        element.addEventListener(`dragover`, (evt) => {
            evt.preventDefault();
          
            const activeElement = table.querySelector(`.select`);
            const currentElement = evt.currentTarget;

            const isMoveable = activeElement !== currentElement && element;

            if (!isMoveable) {
              return;
            }
          
            const nextElement = (currentElement === activeElement.nextElementSibling) ?
                currentElement.nextElementSibling :
                currentElement;
            
            table.insertBefore(activeElement, nextElement);
          });
    });

}

export default dndTable