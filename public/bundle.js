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
        var road = "<div class=\"blockCar\"><div class=\"settInfo\"><button class=\"select".concat(i, "\">Select</button><button class=\"remove\">Remove</button><div class=\"namCar").concat(i, "\"></div></div><div class=\"road\"><div class=\"startStop").concat(i, "\"><button class=\"start\">A</button><button class=\"stop\" disabled/>B</button></div><div class=\"way\"> <img class=\"carImg carColor").concat(i, "\" src=\"assets/car.png\" alt=\"car\"><img class=\"flag\" src=\"assets/flag.png\" alt=\"flag\"></div></div></div>");
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
    document.querySelector('.start').addEventListener('click', function () {
        if (document.querySelector('.start').disabled = false) {
            var m_1 = 10;
            var timer_1 = setInterval(function () {
                m_1 = m_1 + 20;
                console.log(m_1);
                document.querySelector('.carImg').style.left = m_1 + 'px';
                if (m_1 >= width)
                    clearInterval(timer_1);
            }, 25);
        }
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
alert('Здравствуйте, не могли бы вы проверить мою работу в конце кросс чека. Заранее спасибо <3');
(0,_animation__WEBPACK_IMPORTED_MODULE_4__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsT0FBTyxFQUFFO1FBQzVELFFBQVEsQ0FBQyxhQUFhLENBQWMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBSSxNQUFNO1FBQ3ZFLFFBQVEsQ0FBQyxhQUFhLENBQWMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBSSxFQUFFO1FBQ2xFLFFBQVEsQ0FBQyxhQUFhLENBQWMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBSSxFQUFFO0lBQ3ZFLENBQUMsQ0FBQztBQUNOLENBQUM7Ozs7Ozs7VUNiRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNhO0FBQ0Q7QUFDaUI7QUFDcEI7QUFFOUIsMkNBQUcsRUFBRTtBQUNMLDhDQUFNLEVBQUU7QUFDUixtREFBVSxFQUFFO0FBQ1oscURBQVMsRUFBRTtBQUNYLGdEQUFJLEVBQUU7QUFDTixpREFBSyxFQUFFO0FBRVAsS0FBSyxDQUFDLDBGQUEwRixDQUFDO0FBQ2pHLHNEQUFJLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc3luYy1yYWNlLWFwaS8uL3NyYy9zdHlsZS5zY3NzP2JjM2IiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS1hcGkvLi9zcmMvYWRkQ2FyLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UtYXBpLy4vc3JjL2FuaW1hdGlvbi50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLWFwaS8uL3NyYy9zdGFydFN0b3AudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS1hcGkvLi9zcmMvdmlld3MudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS1hcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS1hcGkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FzeW5jLXJhY2UtYXBpL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS1hcGkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLWFwaS8uL3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkaW5nQ2FycygpIHtcclxuICAgIHZhciBpID0gMFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XHJcbiAgICAgICAgaSsrXHJcbiAgICAgICAgbGV0IHJvYWQgPSBgPGRpdiBjbGFzcz1cImJsb2NrQ2FyXCI+PGRpdiBjbGFzcz1cInNldHRJbmZvXCI+PGJ1dHRvbiBjbGFzcz1cInNlbGVjdCR7aX1cIj5TZWxlY3Q8L2J1dHRvbj48YnV0dG9uIGNsYXNzPVwicmVtb3ZlXCI+UmVtb3ZlPC9idXR0b24+PGRpdiBjbGFzcz1cIm5hbUNhciR7aX1cIj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwicm9hZFwiPjxkaXYgY2xhc3M9XCJzdGFydFN0b3Ake2l9XCI+PGJ1dHRvbiBjbGFzcz1cInN0YXJ0XCI+QTwvYnV0dG9uPjxidXR0b24gY2xhc3M9XCJzdG9wXCIgZGlzYWJsZWQvPkI8L2J1dHRvbj48L2Rpdj48ZGl2IGNsYXNzPVwid2F5XCI+IDxpbWcgY2xhc3M9XCJjYXJJbWcgY2FyQ29sb3Ike2l9XCIgc3JjPVwiYXNzZXRzL2Nhci5wbmdcIiBhbHQ9XCJjYXJcIj48aW1nIGNsYXNzPVwiZmxhZ1wiIHNyYz1cImFzc2V0cy9mbGFnLnBuZ1wiIGFsdD1cImZsYWdcIj48L2Rpdj48L2Rpdj48L2Rpdj5gXHJcbiAgICBsZXQgY2FycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGJsb2NrQ2FyJHtpfWApXHJcbiAgICBjYXJzLmlubmVySFRNTCA9IHJvYWQgXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcnNcIikuYXBwZW5kQ2hpbGQoY2FycykgXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubmFtQ2FyJHtpfWApLnRleHRDb250ZW50ID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJy5pbnBDcmVhdCcpLnZhbHVlXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KGAuY2FyQ29sb3Ike2l9YCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXCIuY3JlYXRlQ29sb3JcIikudmFsdWVcclxuICAgIFxyXG59KVxyXG59XHJcblxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbmltICgpe1xyXG4gICAgbGV0IHdpZHRoOm51bWJlciA9ICt3aW5kb3cuaW5uZXJXaWR0aCAtIDEyMFxyXG4gICAgXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJy5zdGFydCcpLmRpc2FibGVkID0gZmFsc2Upe1xyXG4gICAgICAgICAgICBsZXQgbTpudW1iZXIgPSAxMFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIG09bSArIDIwXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignLmNhckltZycpLnN0eWxlLmxlZnQ9bSsncHgnXHJcbiAgICAgICAgICAgICAgICBpZihtID49IHdpZHRoKWNsZWFySW50ZXJ2YWwodGltZXIpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSwyNSkgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gc3RhcnRTdG9wKCkge1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZWw6YW55KTp2b2lkIHsgXHJcbiAgICAgICAgaWYoZWwudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc3RhcnQnKSl7XHJcbiAgICAgICAgICAgIGVsLnRhcmdldC5kaXNhYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgZWwudGFyZ2V0LnBhcmVudE5vZGUuY2hpbGROb2Rlc1sxXS5kaXNhYmxlZCA9IGZhbHNlIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGVsLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3N0b3AnKSl7XHJcbiAgICAgICAgICAgIGVsLnRhcmdldC5kaXNhYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgZWwudGFyZ2V0LnBhcmVudE5vZGUuY2hpbGROb2Rlc1swXS5kaXNhYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhY2UoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFjZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhcnQnKS5mb3JFYWNoKGZ1bmN0aW9uKGVsOmFueSl7XHJcbiAgICAgICAgICAgIGVsLmRpc2FibGVkID0gdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0b3AnKS5mb3JFYWNoKGZ1bmN0aW9uKGVsOmFueSl7XHJcbiAgICAgICAgICAgIGVsLmRpc2FibGVkID0gZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNldCgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNldCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RvcCcpLmZvckVhY2goZnVuY3Rpb24oZWw6YW55KXtcclxuICAgICAgICAgICAgZWwuZGlzYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhcnQnKS5mb3JFYWNoKGZ1bmN0aW9uKGVsOmFueSl7XHJcbiAgICAgICAgICAgIGVsLmRpc2FibGVkID0gZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxufVxyXG5cclxuIiwiZXhwb3J0ICBmdW5jdGlvbiB3aW4oKXtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0V2lubmVycycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLmdhcmFnZScpLnN0eWxlLmRpc3BsYXkgID0gJ25vbmUnXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5nYXJhZ2UxJykuc3R5bGUuZGlzcGxheSAgPSAnbm9uZSdcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLndpbm5lcnMnKS5zdHlsZS5kaXNwbGF5ICA9ICcnXHJcbiAgICB9KVxyXG59XHJcbmV4cG9ydCAgZnVuY3Rpb24gZ2FyYWdlKCl7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dEdhcmFnZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLndpbm5lcnMnKS5zdHlsZS5kaXNwbGF5ICA9ICdub25lJ1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcuZ2FyYWdlJykuc3R5bGUuZGlzcGxheSAgPSAnJ1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcuZ2FyYWdlMScpLnN0eWxlLmRpc3BsYXkgID0gJydcclxuICAgIH0pXHJcbn0gXHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJ1xyXG5pbXBvcnQge3dpbixnYXJhZ2V9IGZyb20gJy4vdmlld3MnXHJcbmltcG9ydCBhZGRpbmdDYXJzIGZyb20gJy4vYWRkQ2FyJ1xyXG5pbXBvcnQge3N0YXJ0U3RvcCwgcmFjZSwgcmVzZXR9IGZyb20gJy4vc3RhcnRTdG9wJ1xyXG5pbXBvcnQgYW5pbSBmcm9tICcuL2FuaW1hdGlvbidcclxuXHJcbndpbigpXHJcbmdhcmFnZSgpXHJcbmFkZGluZ0NhcnMoKVxyXG5zdGFydFN0b3AoKVxyXG5yYWNlKClcclxucmVzZXQoKVxyXG5cclxuYWxlcnQoJ9CX0LTRgNCw0LLRgdGC0LLRg9C50YLQtSwg0L3QtSDQvNC+0LPQu9C4INCx0Ysg0LLRiyDQv9GA0L7QstC10YDQuNGC0Ywg0LzQvtGOINGA0LDQsdC+0YLRgyDQsiDQutC+0L3RhtC1INC60YDQvtGB0YEg0YfQtdC60LAuINCX0LDRgNCw0L3QtdC1INGB0L/QsNGB0LjQsdC+IDwzJylcclxuYW5pbSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9