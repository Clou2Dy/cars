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
        var road = "<div class=\"blockCar\"><div class=\"settInfo\"><button class=\"select".concat(i, "\">Select</button><button class=\"remove\">Remove</button><div class=\"namCar").concat(i, "\"></div></div><div class=\"road\"><div class=\"startStop").concat(i, "\"><button class=\"start\" id=\"").concat(i, "\">A</button><button class=\"stop sto").concat(i, "\" disabled/>B</button></div><div class=\"way\"> <img class=\"carImg carColor").concat(i, "\" src=\"assets/car.png\" alt=\"car\"><img class=\"flag\" src=\"assets/flag.png\" alt=\"flag\"></div></div></div>");
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
    document.addEventListener('click', function (co) {
        if (co.target.className == 'start') {
            var m_1 = 10;
            var i_1 = co.target.id;
            console.log(co.target.className);
            var timer_1 = setInterval(function () {
                m_1 = m_1 + 20;
                console.log(m_1);
                document.querySelector(".carColor".concat(i_1)).style.left = m_1 + 'px';
                if (m_1 >= width)
                    clearInterval(timer_1);
            }, 25);
        }
        else {
            return;
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
alert('Здравствуйте, не могли бы вы проверить мою работу в конце кросс чека. Заранее спасибо  <3');
(0,_animation__WEBPACK_IMPORTED_MODULE_4__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBSSxFQUFFO0lBQ3ZFLENBQUMsQ0FBQztBQUNOLENBQUM7QUFDTSxTQUFVLE1BQU07SUFDbkIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7UUFDNUQsUUFBUSxDQUFDLGFBQWEsQ0FBYyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFJLE1BQU07UUFDdkUsUUFBUSxDQUFDLGFBQWEsQ0FBYyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFJLEVBQUU7UUFDbEUsUUFBUSxDQUFDLGFBQWEsQ0FBYyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFJLEVBQUU7SUFDdkUsQ0FBQyxDQUFDO0FBQ04sQ0FBQzs7Ozs7OztVQ2JEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ2E7QUFDRDtBQUNpQjtBQUNwQjtBQUU5QiwyQ0FBRyxFQUFFO0FBQ0wsOENBQU0sRUFBRTtBQUNSLG1EQUFVLEVBQUU7QUFDWixxREFBUyxFQUFFO0FBQ1gsZ0RBQUksRUFBRTtBQUNOLGlEQUFLLEVBQUU7QUFFUCxLQUFLLENBQUMsMkZBQTJGLENBQUM7QUFDbEcsc0RBQUksRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2FzeW5jLXJhY2UtYXBpLy4vc3JjL3N0eWxlLnNjc3M/YmMzYiIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLWFwaS8uL3NyYy9hZGRDYXIudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS1hcGkvLi9zcmMvYW5pbWF0aW9uLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UtYXBpLy4vc3JjL3N0YXJ0U3RvcC50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLWFwaS8uL3NyYy92aWV3cy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLWFwaS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLWFwaS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS1hcGkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLWFwaS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FzeW5jLXJhY2UtYXBpLy4vc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRpbmdDYXJzKCkge1xyXG4gICAgdmFyIGkgPSAwXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcclxuICAgICAgICBpKytcclxuICAgICAgICBsZXQgcm9hZCA9IGA8ZGl2IGNsYXNzPVwiYmxvY2tDYXJcIj48ZGl2IGNsYXNzPVwic2V0dEluZm9cIj48YnV0dG9uIGNsYXNzPVwic2VsZWN0JHtpfVwiPlNlbGVjdDwvYnV0dG9uPjxidXR0b24gY2xhc3M9XCJyZW1vdmVcIj5SZW1vdmU8L2J1dHRvbj48ZGl2IGNsYXNzPVwibmFtQ2FyJHtpfVwiPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJyb2FkXCI+PGRpdiBjbGFzcz1cInN0YXJ0U3RvcCR7aX1cIj48YnV0dG9uIGNsYXNzPVwic3RhcnRcIiBpZD1cIiR7aX1cIj5BPC9idXR0b24+PGJ1dHRvbiBjbGFzcz1cInN0b3Agc3RvJHtpfVwiIGRpc2FibGVkLz5CPC9idXR0b24+PC9kaXY+PGRpdiBjbGFzcz1cIndheVwiPiA8aW1nIGNsYXNzPVwiY2FySW1nIGNhckNvbG9yJHtpfVwiIHNyYz1cImFzc2V0cy9jYXIucG5nXCIgYWx0PVwiY2FyXCI+PGltZyBjbGFzcz1cImZsYWdcIiBzcmM9XCJhc3NldHMvZmxhZy5wbmdcIiBhbHQ9XCJmbGFnXCI+PC9kaXY+PC9kaXY+PC9kaXY+YFxyXG4gICAgbGV0IGNhcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBibG9ja0NhciR7aX1gKVxyXG4gICAgY2Fycy5pbm5lckhUTUwgPSByb2FkIFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJzXCIpLmFwcGVuZENoaWxkKGNhcnMpIFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm5hbUNhciR7aX1gKS50ZXh0Q29udGVudCA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCcuaW5wQ3JlYXQnKS52YWx1ZVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihgLmNhckNvbG9yJHtpfWApLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFwiLmNyZWF0ZUNvbG9yXCIpLnZhbHVlXHJcbiAgICBcclxufSlcclxufVxyXG5cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYW5pbSAoKXtcclxuICAgIGxldCB3aWR0aDpudW1iZXIgPSArd2luZG93LmlubmVyV2lkdGggLSAxMjBcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oY286YW55KXtcclxuICAgICAgICBpZiAoY28udGFyZ2V0LmNsYXNzTmFtZSA9PSAnc3RhcnQnKXtcclxuICAgICAgICAgICAgbGV0IG06bnVtYmVyID0gMTBcclxuICAgICAgICAgICAgbGV0IGkgPSBjby50YXJnZXQuaWRcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY28udGFyZ2V0LmNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgdGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgbT1tICsgMjBcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KGAuY2FyQ29sb3Ike2l9YCkuc3R5bGUubGVmdD1tKydweCdcclxuICAgICAgICAgICAgICAgIGlmKG0gPj0gd2lkdGgpY2xlYXJJbnRlcnZhbCh0aW1lcilcclxuICAgICAgICAgICAgfSwyNSkgXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9ICBcclxuICAgIH0pXHJcbiAgICB9IiwiZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0U3RvcCgpIHtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGVsOmFueSk6dm9pZCB7IFxyXG4gICAgICAgIGlmKGVsLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXJ0Jykpe1xyXG4gICAgICAgICAgICBlbC50YXJnZXQuZGlzYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIGVsLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMV0uZGlzYWJsZWQgPSBmYWxzZSBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihlbC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdG9wJykpe1xyXG4gICAgICAgICAgICBlbC50YXJnZXQuZGlzYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIGVsLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMF0uZGlzYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYWNlKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhY2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0YXJ0JykuZm9yRWFjaChmdW5jdGlvbihlbDphbnkpe1xyXG4gICAgICAgICAgICBlbC5kaXNhYmxlZCA9IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdG9wJykuZm9yRWFjaChmdW5jdGlvbihlbDphbnkpe1xyXG4gICAgICAgICAgICBlbC5kaXNhYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzZXQoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0b3AnKS5mb3JFYWNoKGZ1bmN0aW9uKGVsOmFueSl7XHJcbiAgICAgICAgICAgIGVsLmRpc2FibGVkID0gdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0YXJ0JykuZm9yRWFjaChmdW5jdGlvbihlbDphbnkpe1xyXG4gICAgICAgICAgICBlbC5kaXNhYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH0pXHJcbn1cclxuXHJcbiIsImV4cG9ydCAgZnVuY3Rpb24gd2luKCl7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dFdpbm5lcnMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5nYXJhZ2UnKS5zdHlsZS5kaXNwbGF5ICA9ICdub25lJ1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcuZ2FyYWdlMScpLnN0eWxlLmRpc3BsYXkgID0gJ25vbmUnXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy53aW5uZXJzJykuc3R5bGUuZGlzcGxheSAgPSAnJ1xyXG4gICAgfSlcclxufVxyXG5leHBvcnQgIGZ1bmN0aW9uIGdhcmFnZSgpe1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRHYXJhZ2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy53aW5uZXJzJykuc3R5bGUuZGlzcGxheSAgPSAnbm9uZSdcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLmdhcmFnZScpLnN0eWxlLmRpc3BsYXkgID0gJydcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLmdhcmFnZTEnKS5zdHlsZS5kaXNwbGF5ICA9ICcnXHJcbiAgICB9KVxyXG59IFxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuc2NzcydcclxuaW1wb3J0IHt3aW4sZ2FyYWdlfSBmcm9tICcuL3ZpZXdzJ1xyXG5pbXBvcnQgYWRkaW5nQ2FycyBmcm9tICcuL2FkZENhcidcclxuaW1wb3J0IHtzdGFydFN0b3AsIHJhY2UsIHJlc2V0fSBmcm9tICcuL3N0YXJ0U3RvcCdcclxuaW1wb3J0IGFuaW0gZnJvbSAnLi9hbmltYXRpb24nXHJcblxyXG53aW4oKVxyXG5nYXJhZ2UoKVxyXG5hZGRpbmdDYXJzKClcclxuc3RhcnRTdG9wKClcclxucmFjZSgpXHJcbnJlc2V0KClcclxuXHJcbmFsZXJ0KCfQl9C00YDQsNCy0YHRgtCy0YPQudGC0LUsINC90LUg0LzQvtCz0LvQuCDQsdGLINCy0Ysg0L/RgNC+0LLQtdGA0LjRgtGMINC80L7RjiDRgNCw0LHQvtGC0YMg0LIg0LrQvtC90YbQtSDQutGA0L7RgdGBINGH0LXQutCwLiDQl9Cw0YDQsNC90LXQtSDRgdC/0LDRgdC40LHQviAgPDMnKVxyXG5hbmltKClcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==