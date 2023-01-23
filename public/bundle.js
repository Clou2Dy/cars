/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/addCar.ts":
/*!***********************!*\
  !*** ./src/addCar.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addingCars)
/* harmony export */ });
function addingCars() {
    var i = 0;
    document.querySelector('.create').addEventListener('click', function () {
        i++;
        var road = "<div class=\"blockCar\"><div class=\"settInfo\"><button class=\"select".concat(i, "\">Select</button><button class=\"remove\">Remove</button><div class=\"namCar").concat(i, "\"></div></div><div class=\"road\"><div class=\"startStop").concat(i, "\"><button class=\"start\">A</button><button class=\"stop\" disabled/>B</button></div><div class=\"way\"> <img class=\"carImg carColor").concat(i, "\" src=\"assets/car.png\" alt=\"car\"><img class=\"flag\" src=\"/assets/flag.png\" alt=\"flag\"></div></div></div>");
        var cars = document.createElement("blockCar".concat(i));
        cars.innerHTML = road;
        document.querySelector(".cars").appendChild(cars);
        document.querySelector(".namCar".concat(i)).textContent = document.querySelector('.inpCreat').value;
        document.querySelector(".carColor".concat(i)).style.backgroundColor = document.querySelector(".createColor").value;
    });
}


/***/ }),

/***/ "./src/animation.ts":
/*!**************************!*\
  !*** ./src/animation.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ anim)
/* harmony export */ });
function anim() {
    var width = +window.innerWidth - 120;
    if (document.querySelector('.start'))
        document.querySelector('.start').addEventListener('click', function () {
            var m = 10;
            var timer = setInterval(function () {
                m = m + 20;
                console.log(m);
                document.querySelector('.carImg').style.left = m + 'px';
                if (m >= width)
                    clearInterval(timer);
            }, 25);
        });
}


/***/ }),

/***/ "./src/startStop.ts":
/*!**************************!*\
  !*** ./src/startStop.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "race": () => (/* binding */ race),
/* harmony export */   "reset": () => (/* binding */ reset),
/* harmony export */   "startStop": () => (/* binding */ startStop)
/* harmony export */ });
function startStop() {
    document.addEventListener('click', function (el) {
        if (el.target.classList.contains('start')) {
            el.target.disabled = true;
            el.target.parentNode.childNodes[1].disabled = false;
        }
        else if (el.target.classList.contains('stop')) {
            el.target.disabled = true;
            el.target.parentNode.childNodes[0].disabled = false;
        }
    });
}
function race() {
    document.querySelector('.race').addEventListener('click', function () {
        document.querySelectorAll('.start').forEach(function (el) {
            el.disabled = true;
        });
        document.querySelectorAll('.stop').forEach(function (el) {
            el.disabled = false;
        });
    });
}
function reset() {
    document.querySelector('.reset').addEventListener('click', function () {
        document.querySelectorAll('.stop').forEach(function (el) {
            el.disabled = true;
        });
        document.querySelectorAll('.start').forEach(function (el) {
            el.disabled = false;
        });
    });
}


/***/ }),

/***/ "./src/views.ts":
/*!**********************!*\
  !*** ./src/views.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "garage": () => (/* binding */ garage),
/* harmony export */   "win": () => (/* binding */ win)
/* harmony export */ });
function win() {
    document.querySelector('.buttWinners').addEventListener('click', function () {
        document.querySelector('.garage').style.display = 'none';
        document.querySelector('.garage1').style.display = 'none';
        document.querySelector('.winners').style.display = '';
    });
}
function garage() {
    document.querySelector('.buttGarage').addEventListener('click', function () {
        document.querySelector('.winners').style.display = 'none';
        document.querySelector('.garage').style.display = '';
        document.querySelector('.garage1').style.display = '';
    });
}


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
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views */ "./src/views.ts");
/* harmony import */ var _addCar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addCar */ "./src/addCar.ts");
/* harmony import */ var _startStop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startStop */ "./src/startStop.ts");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animation */ "./src/animation.ts");





(0,_views__WEBPACK_IMPORTED_MODULE_1__.win)();
(0,_views__WEBPACK_IMPORTED_MODULE_1__.garage)();
(0,_addCar__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_startStop__WEBPACK_IMPORTED_MODULE_3__.startStop)();
(0,_startStop__WEBPACK_IMPORTED_MODULE_3__.race)();
(0,_startStop__WEBPACK_IMPORTED_MODULE_3__.reset)();
// alert('Здравствуйте, не могли бы вы проверить мою работу в конце кросс чека. Заранее спасибо <3')
(0,_animation__WEBPACK_IMPORTED_MODULE_4__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxDQUFjLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUksTUFBTTtRQUN2RSxRQUFRLENBQUMsYUFBYSxDQUFjLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUksRUFBRTtRQUNsRSxRQUFRLENBQUMsYUFBYSxDQUFjLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUksRUFBRTtJQUN2RSxDQUFDLENBQUM7QUFDTixDQUFDOzs7Ozs7O1VDYkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDYTtBQUNEO0FBQ2lCO0FBQ3BCO0FBRTlCLDJDQUFHLEVBQUU7QUFDTCw4Q0FBTSxFQUFFO0FBQ1IsbURBQVUsRUFBRTtBQUNaLHFEQUFTLEVBQUU7QUFDWCxnREFBSSxFQUFFO0FBQ04saURBQUssRUFBRTtBQUVQLG9HQUFvRztBQUNwRyxzREFBSSxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS1hcGkvLi9zcmMvc3R5bGUuc2Nzcz9iYzNiIiwid2VicGFjazovL2FzeW5jLXJhY2UtYXBpLy4vc3JjL2FkZENhci50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLWFwaS8uL3NyYy9hbmltYXRpb24udHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS1hcGkvLi9zcmMvc3RhcnRTdG9wLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UtYXBpLy4vc3JjL3ZpZXdzLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UtYXBpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FzeW5jLXJhY2UtYXBpL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLWFwaS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FzeW5jLXJhY2UtYXBpL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS1hcGkvLi9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZGluZ0NhcnMoKSB7XHJcbiAgICB2YXIgaSA9IDBcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xyXG4gICAgICAgIGkrK1xyXG4gICAgICAgIGxldCByb2FkID0gYDxkaXYgY2xhc3M9XCJibG9ja0NhclwiPjxkaXYgY2xhc3M9XCJzZXR0SW5mb1wiPjxidXR0b24gY2xhc3M9XCJzZWxlY3Qke2l9XCI+U2VsZWN0PC9idXR0b24+PGJ1dHRvbiBjbGFzcz1cInJlbW92ZVwiPlJlbW92ZTwvYnV0dG9uPjxkaXYgY2xhc3M9XCJuYW1DYXIke2l9XCI+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cInJvYWRcIj48ZGl2IGNsYXNzPVwic3RhcnRTdG9wJHtpfVwiPjxidXR0b24gY2xhc3M9XCJzdGFydFwiPkE8L2J1dHRvbj48YnV0dG9uIGNsYXNzPVwic3RvcFwiIGRpc2FibGVkLz5CPC9idXR0b24+PC9kaXY+PGRpdiBjbGFzcz1cIndheVwiPiA8aW1nIGNsYXNzPVwiY2FySW1nIGNhckNvbG9yJHtpfVwiIHNyYz1cImFzc2V0cy9jYXIucG5nXCIgYWx0PVwiY2FyXCI+PGltZyBjbGFzcz1cImZsYWdcIiBzcmM9XCIvYXNzZXRzL2ZsYWcucG5nXCIgYWx0PVwiZmxhZ1wiPjwvZGl2PjwvZGl2PjwvZGl2PmBcclxuICAgIGxldCBjYXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgYmxvY2tDYXIke2l9YClcclxuICAgIGNhcnMuaW5uZXJIVE1MID0gcm9hZCBcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyc1wiKS5hcHBlbmRDaGlsZChjYXJzKSBcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5uYW1DYXIke2l9YCkudGV4dENvbnRlbnQgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignLmlucENyZWF0JykudmFsdWVcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oYC5jYXJDb2xvciR7aX1gKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcIi5jcmVhdGVDb2xvclwiKS52YWx1ZVxyXG59KVxyXG59XHJcblxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbmltICgpe1xyXG4gICAgbGV0IHdpZHRoOm51bWJlciA9ICt3aW5kb3cuaW5uZXJXaWR0aCAtIDEyMFxyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCcpKVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGxldCBtOm51bWJlciA9IDEwXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgbT1tICsgMjBcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCcuY2FySW1nJykuc3R5bGUubGVmdD1tKydweCdcclxuICAgICAgICBpZihtID49IHdpZHRoKWNsZWFySW50ZXJ2YWwodGltZXIpXHJcbiAgICAgICAgXHJcbiAgICB9LDI1KSBcclxufSlcclxufSIsImV4cG9ydCBmdW5jdGlvbiBzdGFydFN0b3AoKSB7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlbDphbnkpOnZvaWQgeyBcclxuICAgICAgICBpZihlbC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdGFydCcpKXtcclxuICAgICAgICAgICAgZWwudGFyZ2V0LmRpc2FibGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICBlbC50YXJnZXQucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzFdLmRpc2FibGVkID0gZmFsc2UgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoZWwudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc3RvcCcpKXtcclxuICAgICAgICAgICAgZWwudGFyZ2V0LmRpc2FibGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICBlbC50YXJnZXQucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzBdLmRpc2FibGVkID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmFjZSgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYWNlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGFydCcpLmZvckVhY2goZnVuY3Rpb24oZWw6YW55KXtcclxuICAgICAgICAgICAgZWwuZGlzYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RvcCcpLmZvckVhY2goZnVuY3Rpb24oZWw6YW55KXtcclxuICAgICAgICAgICAgZWwuZGlzYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0KCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdG9wJykuZm9yRWFjaChmdW5jdGlvbihlbDphbnkpe1xyXG4gICAgICAgICAgICBlbC5kaXNhYmxlZCA9IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGFydCcpLmZvckVhY2goZnVuY3Rpb24oZWw6YW55KXtcclxuICAgICAgICAgICAgZWwuZGlzYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG59XHJcblxyXG4iLCJleHBvcnQgIGZ1bmN0aW9uIHdpbigpe1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRXaW5uZXJzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcuZ2FyYWdlJykuc3R5bGUuZGlzcGxheSAgPSAnbm9uZSdcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLmdhcmFnZTEnKS5zdHlsZS5kaXNwbGF5ICA9ICdub25lJ1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcud2lubmVycycpLnN0eWxlLmRpc3BsYXkgID0gJydcclxuICAgIH0pXHJcbn1cclxuZXhwb3J0ICBmdW5jdGlvbiBnYXJhZ2UoKXtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0R2FyYWdlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcud2lubmVycycpLnN0eWxlLmRpc3BsYXkgID0gJ25vbmUnXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5nYXJhZ2UnKS5zdHlsZS5kaXNwbGF5ICA9ICcnXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5nYXJhZ2UxJykuc3R5bGUuZGlzcGxheSAgPSAnJ1xyXG4gICAgfSlcclxufSBcclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnXHJcbmltcG9ydCB7d2luLGdhcmFnZX0gZnJvbSAnLi92aWV3cydcclxuaW1wb3J0IGFkZGluZ0NhcnMgZnJvbSAnLi9hZGRDYXInXHJcbmltcG9ydCB7c3RhcnRTdG9wLCByYWNlLCByZXNldH0gZnJvbSAnLi9zdGFydFN0b3AnXHJcbmltcG9ydCBhbmltIGZyb20gJy4vYW5pbWF0aW9uJ1xyXG5cclxud2luKClcclxuZ2FyYWdlKClcclxuYWRkaW5nQ2FycygpXHJcbnN0YXJ0U3RvcCgpXHJcbnJhY2UoKVxyXG5yZXNldCgpXHJcblxyXG4vLyBhbGVydCgn0JfQtNGA0LDQstGB0YLQstGD0LnRgtC1LCDQvdC1INC80L7Qs9C70Lgg0LHRiyDQstGLINC/0YDQvtCy0LXRgNC40YLRjCDQvNC+0Y4g0YDQsNCx0L7RgtGDINCyINC60L7QvdGG0LUg0LrRgNC+0YHRgSDRh9C10LrQsC4g0JfQsNGA0LDQvdC10LUg0YHQv9Cw0YHQuNCx0L4gPDMnKVxyXG5hbmltKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=