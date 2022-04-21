/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/createTable.js":
/*!***********************************!*\
  !*** ./js/modules/createTable.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fetchServices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchServices */ "./js/modules/fetchServices.js");


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
           return (0,_fetchServices__WEBPACK_IMPORTED_MODULE_0__["default"])(`http://localhost:3000/tables`, 'POST', JSON.stringify(formData))
        }
    })
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTable);

/***/ }),

/***/ "./js/modules/deleteTable.js":
/*!***********************************!*\
  !*** ./js/modules/deleteTable.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fetchServices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchServices */ "./js/modules/fetchServices.js");


const deleteTable = () => {
    const deleteElementTable = document.querySelectorAll('.delete')

    deleteElementTable.forEach((item, i) => {
        item.addEventListener('click', async (e) => {
            e.preventDefault()
            ;(0,_fetchServices__WEBPACK_IMPORTED_MODULE_0__["default"])(`http://localhost:3000/tables/${item.parentElement.dataset.id}`, 'DELETE')
        })
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteTable);

/***/ }),

/***/ "./js/modules/dndTable.js":
/*!********************************!*\
  !*** ./js/modules/dndTable.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dndTable);

/***/ }),

/***/ "./js/modules/fetchServices.js":
/*!*************************************!*\
  !*** ./js/modules/fetchServices.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const fetchServices = async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
    const response = await fetch(url, {
        method,
        headers,
        body
    })
        .then(data => data.json())
    
    return response
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchServices);

/***/ }),

/***/ "./js/modules/getTable.js":
/*!********************************!*\
  !*** ./js/modules/getTable.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fetchServices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchServices */ "./js/modules/fetchServices.js");
/* harmony import */ var _dndTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dndTable */ "./js/modules/dndTable.js");



const deleteSvg = `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 4H4L5.26923 16H13.7308L15 4ZM13.8887 5H5.11135L6.16904 15H12.831L13.8887 5Z" fill="#8D8D8D"/>
    <rect x="4" y="3" width="11" height="2" fill="#8D8D8D"/>
    </svg>
`

const updateSvg = `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.8701 3.60447C13.0429 3.41283 13.2481 3.26081 13.4739 3.1571C13.6997 3.05338 13.9417 3 14.1861 3C14.4306 3 14.6726 3.05338 14.8984 3.1571C15.1242 3.26081 15.3293 3.41283 15.5022 3.60447C15.675 3.79611 15.8121 4.02362 15.9056 4.27401C15.9991 4.5244 16.0473 4.79277 16.0473 5.06379C16.0473 5.33481 15.9991 5.60317 15.9056 5.85356C15.8121 6.10395 15.675 6.33146 15.5022 6.5231L6.61905 16.3735L3 17.468L3.98701 13.4549L12.8701 3.60447Z" stroke="#8D8D8D" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`

const getTable = async () => {
    const tbody = document.querySelector('tbody')
    tbody.innerHTML = ''
    
    const resp = await (0,_fetchServices__WEBPACK_IMPORTED_MODULE_0__["default"])('http://localhost:3000/tables')
        .then(dataTable => {
            return dataTable
        })
        .catch((e) => {
            console.log(e)
        })

    if (resp.length < 1) {
        return tbody.innerHTML = `<div>Пока нет цветов</div>`
    }

    resp.map((item) => {
        const rowTable = document.createElement('tr')
        rowTable.dataset.id = item.id
        rowTable.draggable = true

        rowTable.innerHTML = `
            <td>
                <div style="background:${item.color}" class="table-color"></div>    
            </td>
            <td>${item.name}</td>
            <td>${item.type}</td>
            <td>${item.color}</td>
            <td class="update">${updateSvg}</td>
            <td class="delete">${deleteSvg}</td>
        `

        tbody.appendChild(rowTable)
    })

    ;(0,_dndTable__WEBPACK_IMPORTED_MODULE_1__["default"])()
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTable);

/***/ }),

/***/ "./js/modules/modalForm.js":
/*!*********************************!*\
  !*** ./js/modules/modalForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalForm);

/***/ }),

/***/ "./js/modules/table.js":
/*!*****************************!*\
  !*** ./js/modules/table.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTable */ "./js/modules/getTable.js");
/* harmony import */ var _deleteTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteTable */ "./js/modules/deleteTable.js");
/* harmony import */ var _createTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTable */ "./js/modules/createTable.js");
/* harmony import */ var _updateTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateTable */ "./js/modules/updateTable.js");





const table = async () => {
    await (0,_getTable__WEBPACK_IMPORTED_MODULE_0__["default"])()
    ;(0,_deleteTable__WEBPACK_IMPORTED_MODULE_1__["default"])()
    ;(0,_createTable__WEBPACK_IMPORTED_MODULE_2__["default"])()
    ;(0,_updateTable__WEBPACK_IMPORTED_MODULE_3__["default"])()
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (table);

/***/ }),

/***/ "./js/modules/updateTable.js":
/*!***********************************!*\
  !*** ./js/modules/updateTable.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fetchServices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchServices */ "./js/modules/fetchServices.js");


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
            
                    ;(0,_fetchServices__WEBPACK_IMPORTED_MODULE_0__["default"])(`http://localhost:3000/tables/${item.parentElement.dataset.id}`, 'PATCH', JSON.stringify(formData))
                })
            }
        })
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateTable);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/table */ "./js/modules/table.js");
/* harmony import */ var _modules_modalForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modalForm */ "./js/modules/modalForm.js");



(0,_modules_table__WEBPACK_IMPORTED_MODULE_0__["default"])()
;(0,_modules_modalForm__WEBPACK_IMPORTED_MODULE_1__["default"])()
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map