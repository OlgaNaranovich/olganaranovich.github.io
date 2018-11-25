/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create_DOM_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-DOM-elements */ \"./js/create-DOM-elements.js\");\n/* harmony import */ var _swipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swipe */ \"./js/swipe.js\");\n/* harmony import */ var _buildCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buildCard */ \"./js/buildCard.js\");\n\n\n\n\nObject(_create_DOM_elements__WEBPACK_IMPORTED_MODULE_0__[\"createDOMElements\"])();\nconst call = document.getElementById('button');\nconst input = document.getElementById('inp');\n\nconst cardWrap = document.getElementById('cardWrap');\nconst dots = document.getElementById('dots');\nlet countCards = cardWrap.childNodes.length;\n\n\nlet getData = () => {\n  let inputV = document.getElementById('inp').value.replace(/\\s/g, '+');\n  cardWrap.innerHTML = '';\n  fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyDlWlilu0UTE_GossNNbXtqrBL7fTaupFA&type=video&part=snippet&maxResults=15&q=' + inputV)\n    .then((response) => {\n        response.json().then((data) => {\n          pageToken.className = data.nextPageToken;\n          for (let i = 0; i < data.items.length; i++) {\n            Object(_buildCard__WEBPACK_IMPORTED_MODULE_2__[\"buildCard\"])(data.items[i]);\n            countCards++;\n            if (countCards % 4 === 1) {\n              const dot = document.createElement('div');\n              dot.className = 'dot';\n              dots.appendChild(dot);\n              dot.innerText = '' + (Math.floor(countCards / 4) + 1);\n              dot.id = (Math.floor(countCards / 4) + 1) + 'dot';\n            }\n            document.getElementById('1dot').classList.add('active');\n\n          }\n        });\n      }\n)\n    .catch((err) => {\n      console.log('Fetch Error :', err);\n    });\n};\ncall.addEventListener('click', getData);\n\ninput.addEventListener(\"keydown\", function(event) {\n  if (event.key === \"Enter\") {\n    event.preventDefault();\n    getData();\n  }\n});\n\ndots.addEventListener('click', _swipe__WEBPACK_IMPORTED_MODULE_1__[\"swipe\"]);\n\n\n\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/buildCard.js":
/*!*************************!*\
  !*** ./js/buildCard.js ***!
  \*************************/
/*! exports provided: buildCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildCard\", function() { return buildCard; });\nlet buildCard = (item) => {\n  const slider = document.getElementById('slider');\n  const card = document.createElement('div');\n  card.className = 'card';\n  const aTitle = document.createElement('a');\n  aTitle.target = \"_blank\";\n  aTitle.href = 'https://www.youtube.com/watch?v=' + item.id.videoId;\n  aTitle.setAttribute('data-title', aTitle.textContent);\n  const figure = document.createElement('figure');\n  const img = document.createElement('img');\n  const description = document.createElement('figcaption');\n  const clipInfo = document.createElement('div');\n  clipInfo.className = 'clipInfo';\n  const spanAutor = document.createElement('span');\n  const spanDate = document.createElement('span');\n  const spanRate = document.createElement('span');\n  cardWrap.appendChild(card);\n  card.style.width = '230px';\n  slider.style.width = (parseInt(card.style.width) * 4) + 'px';\n  cardWrap.style.width = (parseInt(card.style.width) * cardWrap.childNodes.length) + 'px';\n  card.appendChild(aTitle);\n  card.appendChild(figure);\n  figure.appendChild(img);\n  figure.appendChild(description);\n  card.appendChild(clipInfo);\n  clipInfo.appendChild(spanAutor);\n  clipInfo.appendChild(spanDate);\n  clipInfo.appendChild(spanRate);\n  aTitle.textContent = item.snippet.title;\n  img.src = item.snippet.thumbnails.medium.url;\n  description.textContent = item.snippet.description;\n  spanAutor.innerHTML = '<i class=\"fa fa-user\" aria-hidden=\"true\"></i>' + item.snippet.channelTitle;\n  spanDate.innerHTML = '<i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>' + item.snippet.publishedAt.substr(0, 10);\n\n  getStats(item.id.videoId).then((response) => {\n      response.json().then((data)=> {\n        spanRate.innerHTML = '<i class=\"fa fa-eye\" aria-hidden=\"true\"></i>' + data.items[0].statistics.viewCount;\n      })\n    }\n  ).catch((err) => {\n    console.log('Fetch Error :', err);\n  });\n};\n\nlet getStats = (id) => {\n  return fetch('https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&id=' + id + '&part=statistics')\n};\n\n\n\n//# sourceURL=webpack:///./js/buildCard.js?");

/***/ }),

/***/ "./js/create-DOM-elements.js":
/*!***********************************!*\
  !*** ./js/create-DOM-elements.js ***!
  \***********************************/
/*! exports provided: createDOMElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDOMElements\", function() { return createDOMElements; });\nlet createDOMElements = () => {\n    const form = document.createElement('form');\n    form.id = 'form';\n\n    const button = document.createElement('button');\n    button.innerHTML = 'click';\n    button.id = 'button';\n    button.type = 'button';\n\n    const input = document.createElement('input');\n    input.placeholder = ' what are you looking for?';\n    input.type = 'search';\n    // input.value = 'popular';\n    input.id = 'inp';\n\n    document.body.appendChild(form);\n    form.appendChild(input);\n    form.appendChild(button);\n\n\n    const slider = document.createElement('div');\n    slider.id = 'slider';\n    slider.className = 'slider';\n    document.body.appendChild(slider);\n\n    const cardWrap = document.createElement('div');\n    cardWrap.id = 'cardWrap';\n    cardWrap.className = 'cardWrap';\n    slider.appendChild(cardWrap);\n\n    const dots = document.createElement('div');\n    dots.className = 'dots';\n    dots.id = 'dots';\n    slider.appendChild(dots);\n\n    let pageToken = document.createElement('div');\n    pageToken.id = 'pageToken';\n    document.body.appendChild(pageToken);\n};\n\n\n//# sourceURL=webpack:///./js/create-DOM-elements.js?");

/***/ }),

/***/ "./js/swipe.js":
/*!*********************!*\
  !*** ./js/swipe.js ***!
  \*********************/
/*! exports provided: swipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"swipe\", function() { return swipe; });\n/* harmony import */ var _buildCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buildCard */ \"./js/buildCard.js\");\n\n\nlet swipe = (el) => {\n  const target = el.target;\n  const dot = document.getElementsByClassName('dot');\n  for(let i = 0; i < dot.length; i++) {\n    if(target === dot[i]) {\n      dots.getElementsByClassName('active')[0].classList.remove('active');\n      if (!target.classList.contains('active')) {\n        target.classList.add('active');\n        let dotNumber = parseInt(el.target.id, 10) - 1;\n        cardWrap.style.transform = 'translateX(-' + parseInt(slider.style.width) * dotNumber + 'px)';\n      }\n    }\n  }\n  let nextPageToken = () => {\n    let inputV = document.getElementById('inp').value.replace(/\\s/g, '+');\n    let lastDot = dots.lastChild;\n    let countCards = cardWrap.childNodes.length;\n    if (lastDot.classList.contains('active')) {\n      fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyDlWlilu0UTE_GossNNbXtqrBL7fTaupFA&type=video&part=snippet&maxResults=15&pageToken=' + pageToken.className + '&q=' + inputV)\n        .then((response) => {\n            response.json().then((data) => {\n              pageToken.className = data.nextPageToken;\n              for (let i = 0; i < data.items.length; i++) {\n                Object(_buildCard__WEBPACK_IMPORTED_MODULE_0__[\"buildCard\"])(data.items[i]);\n                countCards++;\n                if (countCards % 4 === 1) {\n                  const dot = document.createElement('div');\n                  dot.className = 'dot';\n                  dots.appendChild(dot);\n                  dot.innerText = '' + (Math.floor(countCards / 4) + 1);\n                  dot.id = (Math.floor(countCards / 4) + 1) + 'dot';\n                }\n              }\n            });\n          }\n        )\n        .catch((err) => {\n          console.log('Fetch Error :', err);\n        });\n    }\n  };\n  nextPageToken();\n};\n\n\n//# sourceURL=webpack:///./js/swipe.js?");

/***/ })

/******/ });