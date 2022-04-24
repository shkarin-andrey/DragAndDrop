/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/js/assets/svg.js":
/*!******************************!*\
  !*** ./src/js/assets/svg.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteSvg": () => (/* binding */ deleteSvg),
/* harmony export */   "updateSvg": () => (/* binding */ updateSvg)
/* harmony export */ });
const deleteSvg = `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 4H4L5.26923 16H13.7308L15 4ZM13.8887 5H5.11135L6.16904 15H12.831L13.8887 5Z" fill="#8D8D8D"/>
    <rect x="4" y="3" width="11" height="2" fill="#8D8D8D"/>
    </svg>
`;

const updateSvg = `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.8701 3.60447C13.0429 3.41283 13.2481 3.26081 13.4739 3.1571C13.6997 3.05338 13.9417 3 14.1861 3C14.4306 3 14.6726 3.05338 14.8984 3.1571C15.1242 3.26081 15.3293 3.41283 15.5022 3.60447C15.675 3.79611 15.8121 4.02362 15.9056 4.27401C15.9991 4.5244 16.0473 4.79277 16.0473 5.06379C16.0473 5.33481 15.9991 5.60317 15.9056 5.85356C15.8121 6.10395 15.675 6.33146 15.5022 6.5231L6.61905 16.3735L3 17.468L3.98701 13.4549L12.8701 3.60447Z" stroke="#8D8D8D" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`;


/***/ }),

/***/ "./src/js/modules/createTable.js":
/*!***************************************!*\
  !*** ./src/js/modules/createTable.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");


const createTable = () => {
  const form = document.querySelector("form");
  const state = JSON.parse(window.localStorage.getItem("table"));

  const formData = {
    id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    name: form[0].value,
    type: form[1].value,
    color: form[2].value.toUpperCase(),
  };

  state.push(formData);
  window.localStorage.setItem("table", JSON.stringify(state));
  console.log("create");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTable);


/***/ }),

/***/ "./src/js/modules/deleteTable.js":
/*!***************************************!*\
  !*** ./src/js/modules/deleteTable.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTable */ "./src/js/modules/getTable.js");


const deleteTable = () => {
  const del = document.querySelectorAll(".delete");
  del.forEach((item) => {
    item.addEventListener("click", () => {
      const state = JSON.parse(window.localStorage.getItem("table"));
      const id = item.parentElement.dataset.id;

      const deleteItem = state.filter((x) => x.id !== id);
      window.localStorage.setItem("table", JSON.stringify(deleteItem));
      (0,_getTable__WEBPACK_IMPORTED_MODULE_0__["default"])();
      console.log("delete");
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteTable);


/***/ }),

/***/ "./src/js/modules/dndTable.js":
/*!************************************!*\
  !*** ./src/js/modules/dndTable.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const dndTable = () => {
  const table = document.querySelector("tbody");
  const listTable = document.querySelectorAll("tbody tr");

  listTable.forEach((element) => {
    element.addEventListener("dragstart", (e) => {
      element.classList.add("select");
    });
    element.addEventListener("dragend", (e) => {
      element.classList.remove("select");
    });

    element.addEventListener(`dragover`, (evt) => {
      evt.preventDefault();

      const activeElement = table.querySelector(`.select`);
      const currentElement = evt.currentTarget;

      const isMoveable = activeElement !== currentElement && element;

      if (!isMoveable) {
        return;
      }

      const nextElement =
        currentElement === activeElement.nextElementSibling
          ? currentElement.nextElementSibling
          : currentElement;

      table.insertBefore(activeElement, nextElement);
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dndTable);


/***/ }),

/***/ "./src/js/modules/getTable.js":
/*!************************************!*\
  !*** ./src/js/modules/getTable.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/svg */ "./src/js/assets/svg.js");
/* harmony import */ var _deleteTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteTable */ "./src/js/modules/deleteTable.js");
/* harmony import */ var _dndTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dndTable */ "./src/js/modules/dndTable.js");
/* harmony import */ var _listTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listTable */ "./src/js/modules/listTable.js");





const getTable = () => {
  const tbody = document.querySelector("tbody");
  const state = JSON.parse(window.localStorage.getItem("table"));

  tbody.innerHTML = "";

  state.forEach((item) => {
    const rowTable = document.createElement("tr");

    rowTable.dataset.id = item.id;
    rowTable.draggable = true;
    rowTable.innerHTML = `
        <td>
            <div style="background:${item.color}" class="table-color"></div>    
        </td>
        <td>${item.name}</td>
        <td>${item.type}</td>
        <td>${item.color}</td>
        <td class="update">${_assets_svg__WEBPACK_IMPORTED_MODULE_0__.updateSvg}</td>
        <td class="delete">${_assets_svg__WEBPACK_IMPORTED_MODULE_0__.deleteSvg}</td>
    `;
    tbody.appendChild(rowTable);
  });

  (0,_dndTable__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_listTable__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_deleteTable__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTable);


/***/ }),

/***/ "./src/js/modules/initialState.js":
/*!****************************************!*\
  !*** ./src/js/modules/initialState.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const initialState = () => {
  const mockDB = [
    {
      id: "1",
      name: "Мятное утро",
      type: "base",
      color: "#86EAE9",
    },
    {
      name: "Тест",
      type: "main",
      color: "#00F030",
      id: "s0MNBD8",
    },
  ];

  window.localStorage.setItem("table", JSON.stringify(mockDB));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialState);


/***/ }),

/***/ "./src/js/modules/listTable.js":
/*!*************************************!*\
  !*** ./src/js/modules/listTable.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const listTable = () => {
  const modal = document.querySelector(".modal"),
    modalBtn = modal.querySelector(".btn"),
    modalTitle = modal.querySelector(".title"),
    updateBtn = document.querySelectorAll(".update"),
    form = modal.querySelector("form");

  updateBtn.forEach((item) => {
    item.addEventListener("click", () => {
      const id = item.parentElement.dataset.id;

      modal.classList.remove("hidden");
      modalTitle.textContent = "Измениение цвета";
      modalBtn.textContent = "Изменить";
      modal.dataset.update = true;
      window.localStorage.setItem("updateId", id);

      const state = JSON.parse(window.localStorage.getItem("table"));
      const thisElement = state.filter((x) => x.id === id);

      form[0].value = thisElement[0].name;
      form[1].value = thisElement[0].type;
      form[2].value = thisElement[0].color;
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listTable);


/***/ }),

/***/ "./src/js/modules/modalForm.js":
/*!*************************************!*\
  !*** ./src/js/modules/modalForm.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const modalForm = () => {
  const btn = document.querySelector(".js-open"),
    modal = document.querySelector(".modal"),
    modalBtn = modal.querySelector(".btn"),
    close = modal.querySelector(".close"),
    modalTitle = modal.querySelector(".title"),
    form = modal.querySelector("form");

  btn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modalTitle.textContent = "Добавление цвета";
    modalBtn.textContent = "Добавить";
    modal.dataset.update = false;

    form[0].value = "";
    form[1].value = "";
    form[2].value = "";
  });

  close.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalForm);


/***/ }),

/***/ "./src/js/modules/updateTable.js":
/*!***************************************!*\
  !*** ./src/js/modules/updateTable.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const updateTable = () => {
  const form = document.querySelector("form");
  const state = JSON.parse(window.localStorage.getItem("table"));
  const id = window.localStorage.getItem("updateId");

  const idx = state.findIndex((x) => x.id === id);

  const formData = {
    id: window.localStorage.getItem("updateId"),
    name: form[0].value,
    type: form[1].value,
    color: form[2].value.toUpperCase(),
  };
  state[idx] = formData;
  window.localStorage.setItem("table", JSON.stringify(state));
  console.log("update");
};

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
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _modules_initialState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/initialState */ "./src/js/modules/initialState.js");
/* harmony import */ var _modules_modalForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modalForm */ "./src/js/modules/modalForm.js");
/* harmony import */ var _modules_getTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/getTable */ "./src/js/modules/getTable.js");
/* harmony import */ var _modules_createTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/createTable */ "./src/js/modules/createTable.js");
/* harmony import */ var _modules_updateTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/updateTable */ "./src/js/modules/updateTable.js");







// import deleteTable from "./modules/deleteTable";

window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const modal = document.querySelector(".modal");

  (0,_modules_initialState__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_getTable__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_modules_modalForm__WEBPACK_IMPORTED_MODULE_2__["default"])();

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (modal.dataset.update === "false") {
      (0,_modules_createTable__WEBPACK_IMPORTED_MODULE_4__["default"])();
    } else {
      (0,_modules_updateTable__WEBPACK_IMPORTED_MODULE_5__["default"])();
    }

    (0,_modules_getTable__WEBPACK_IMPORTED_MODULE_3__["default"])();
    modal.classList.add("hidden");
    form.reset();
  });

  // deleteTable();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map