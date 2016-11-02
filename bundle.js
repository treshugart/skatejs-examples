/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	var _skatejs = __webpack_require__(2);
	
	// <Style /> helper
	var cache = {};
	var Style = function Style(props, chren) {
	  if (!cache[props.css]) {
	    var tmp = cache[props.css] = document.createElement('template');
	    tmp.innerHTML = '<style>' + props.css + '</style>';
	    ShadyCSS.prepareTemplate(tmp, props.for.tagName.toLowerCase());
	  }
	  ShadyCSS.applyStyle(props.for);
	  return (0, _skatejs.h)(
	    'style',
	    null,
	    props.css
	  );
	};
	
	var App = (0, _skatejs.define)('x-app', {
	  props: {
	    count: _skatejs.prop.number()
	  },
	  render: function render(elem) {
	    return [(0, _skatejs.h)(Style, { 'for': elem, css: '\n        x-btn.on {\n          --font-weight: bold;\n        }\n      ' }), (0, _skatejs.h)(
	      Btn,
	      { 'class': elem.count % 2 ? 'on' : '', onClick: function onClick() {
	          return ++elem.count;
	        } },
	      'Click me!'
	    )];
	  }
	});
	
	var Btn = (0, _skatejs.define)('x-btn', {
	  render: function render(elem) {
	    return [(0, _skatejs.h)(Style, { 'for': elem, css: '\n        button {\n          font-style: var(--font-style);\n          font-weight: var(--font-weight);\n        }\n      ' }), (0, _skatejs.h)(
	      'button',
	      null,
	      (0, _skatejs.h)('slot', null)
	    )];
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["skatejsWebComponents"] = factory();
		else
			root["skatejsWebComponents"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
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
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		__webpack_require__(1);
		
		__webpack_require__(2);
		
		__webpack_require__(3);
		
		__webpack_require__(4);
	
	/***/ },
	/* 1 */
	/***/ function(module, exports) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		var _window = window;
		var HTMLElement = _window.HTMLElement;
		var MutationObserver = _window.MutationObserver;
		var navigator = _window.navigator;
		var userAgent = navigator.userAgent;
		
		var safari = userAgent.indexOf('Safari/60') !== -1;
		var safariVersion = safari && userAgent.match(/Version\/([^\s]+)/)[1];
		var safariVersions = [0, 1].map(function (v) {
		  return '10.0.' + v;
		}).concat(['10.0']);
		var patch = safari && safariVersions.indexOf(safariVersion) > -1;
		
		// Workaround for https://bugs.webkit.org/show_bug.cgi?id=160331
		function fixSafari() {
		  var oldAttachShadow = HTMLElement.prototype.attachShadow;
		
		  // We observe a shadow root, but only need to know if the target that was mutated is a <style>
		  // element as this is the only scenario where styles aren't recalculated.
		  var moOpts = { childList: true, subtree: true };
		  var mo = new MutationObserver(function (muts) {
		    muts.forEach(function (mut) {
		      var target = mut.target;
		
		      if (target.tagName === 'STYLE') {
		        var nextSibling = target.nextSibling;
		        var parentNode = target.parentNode;
		
		        // We actually have to remove and subsequently re-insert rather than doing insertBefore()
		        // as it seems that doesn't trigger a recalc.
		
		        parentNode.removeChild(target);
		        parentNode.insertBefore(target, nextSibling);
		      }
		    });
		  });
		
		  // Our override simply calls the native (or overridden) attachShadow but it ensures that changes
		  // to it are observed so that we can take any <style> elements and re-insert them.
		  function newAttachShadow(opts) {
		    var sr = oldAttachShadow.call(this, opts);
		    mo.observe(sr, moOpts);
		    return sr;
		  }
		
		  // We have to define a property because Safari won't take the override if it is set directly.
		  Object.defineProperty(HTMLElement.prototype, 'attachShadow', {
		    // Ensure polyfills can override it (hoping they call it back).
		    configurable: true,
		    enumerable: true,
		    value: newAttachShadow,
		    writable: true
		  });
		}
		
		// We target a specific version of Safari instead of trying to but detect as it seems to involve
		// contriving a breaking case and detecting computed styles. We can remove this code when Safari
		// fixes the bug.
		if (patch) {
		  fixSafari();
		}
		
		exports.default = patch;
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		/* WEBPACK VAR INJECTION */(function(global) {/*!
		
		Copyright (C) 2014-2016 by Andrea Giammarchi - @WebReflection
		
		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:
		
		The above copyright notice and this permission notice shall be included in
		all copies or substantial portions of the Software.
		
		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
		THE SOFTWARE.
		
		*/
		function installCustomElements(window) {'use strict';
		
		  // DO NOT USE THIS FILE DIRECTLY, IT WON'T WORK
		  // THIS IS A PROJECT BASED ON A BUILD SYSTEM
		  // THIS FILE IS JUST WRAPPED UP RESULTING IN
		  // build/document-register-element.node.js
		
		  var
		    document = window.document,
		    Object = window.Object
		  ;
		
		  var htmlClass = (function (info) {
		    // (C) Andrea Giammarchi - @WebReflection - MIT Style
		    var
		      catchClass = /^[A-Z]+[a-z]/,
		      filterBy = function (re) {
		        var arr = [], tag;
		        for (tag in register) {
		          if (re.test(tag)) arr.push(tag);
		        }
		        return arr;
		      },
		      add = function (Class, tag) {
		        tag = tag.toLowerCase();
		        if (!(tag in register)) {
		          register[Class] = (register[Class] || []).concat(tag);
		          register[tag] = (register[tag.toUpperCase()] = Class);
		        }
		      },
		      register = (Object.create || Object)(null),
		      htmlClass = {},
		      i, section, tags, Class
		    ;
		    for (section in info) {
		      for (Class in info[section]) {
		        tags = info[section][Class];
		        register[Class] = tags;
		        for (i = 0; i < tags.length; i++) {
		          register[tags[i].toLowerCase()] =
		          register[tags[i].toUpperCase()] = Class;
		        }
		      }
		    }
		    htmlClass.get = function get(tagOrClass) {
		      return typeof tagOrClass === 'string' ?
		        (register[tagOrClass] || (catchClass.test(tagOrClass) ? [] : '')) :
		        filterBy(tagOrClass);
		    };
		    htmlClass.set = function set(tag, Class) {
		      return (catchClass.test(tag) ?
		        add(tag, Class) :
		        add(Class, tag)
		      ), htmlClass;
		    };
		    return htmlClass;
		  }({
		    "collections": {
		      "HTMLAllCollection": [
		        "all"
		      ],
		      "HTMLCollection": [
		        "forms"
		      ],
		      "HTMLFormControlsCollection": [
		        "elements"
		      ],
		      "HTMLOptionsCollection": [
		        "options"
		      ]
		    },
		    "elements": {
		      "Element": [
		        "element"
		      ],
		      "HTMLAnchorElement": [
		        "a"
		      ],
		      "HTMLAppletElement": [
		        "applet"
		      ],
		      "HTMLAreaElement": [
		        "area"
		      ],
		      "HTMLAttachmentElement": [
		        "attachment"
		      ],
		      "HTMLAudioElement": [
		        "audio"
		      ],
		      "HTMLBRElement": [
		        "br"
		      ],
		      "HTMLBaseElement": [
		        "base"
		      ],
		      "HTMLBodyElement": [
		        "body"
		      ],
		      "HTMLButtonElement": [
		        "button"
		      ],
		      "HTMLCanvasElement": [
		        "canvas"
		      ],
		      "HTMLContentElement": [
		        "content"
		      ],
		      "HTMLDListElement": [
		        "dl"
		      ],
		      "HTMLDataElement": [
		        "data"
		      ],
		      "HTMLDataListElement": [
		        "datalist"
		      ],
		      "HTMLDetailsElement": [
		        "details"
		      ],
		      "HTMLDialogElement": [
		        "dialog"
		      ],
		      "HTMLDirectoryElement": [
		        "dir"
		      ],
		      "HTMLDivElement": [
		        "div"
		      ],
		      "HTMLDocument": [
		        "document"
		      ],
		      "HTMLElement": [
		        "element",
		        "abbr",
		        "address",
		        "article",
		        "aside",
		        "b",
		        "bdi",
		        "bdo",
		        "cite",
		        "code",
		        "command",
		        "dd",
		        "dfn",
		        "dt",
		        "em",
		        "figcaption",
		        "figure",
		        "footer",
		        "header",
		        "i",
		        "kbd",
		        "mark",
		        "nav",
		        "noscript",
		        "rp",
		        "rt",
		        "ruby",
		        "s",
		        "samp",
		        "section",
		        "small",
		        "strong",
		        "sub",
		        "summary",
		        "sup",
		        "u",
		        "var",
		        "wbr"
		      ],
		      "HTMLEmbedElement": [
		        "embed"
		      ],
		      "HTMLFieldSetElement": [
		        "fieldset"
		      ],
		      "HTMLFontElement": [
		        "font"
		      ],
		      "HTMLFormElement": [
		        "form"
		      ],
		      "HTMLFrameElement": [
		        "frame"
		      ],
		      "HTMLFrameSetElement": [
		        "frameset"
		      ],
		      "HTMLHRElement": [
		        "hr"
		      ],
		      "HTMLHeadElement": [
		        "head"
		      ],
		      "HTMLHeadingElement": [
		        "h1",
		        "h2",
		        "h3",
		        "h4",
		        "h5",
		        "h6"
		      ],
		      "HTMLHtmlElement": [
		        "html"
		      ],
		      "HTMLIFrameElement": [
		        "iframe"
		      ],
		      "HTMLImageElement": [
		        "img"
		      ],
		      "HTMLInputElement": [
		        "input"
		      ],
		      "HTMLKeygenElement": [
		        "keygen"
		      ],
		      "HTMLLIElement": [
		        "li"
		      ],
		      "HTMLLabelElement": [
		        "label"
		      ],
		      "HTMLLegendElement": [
		        "legend"
		      ],
		      "HTMLLinkElement": [
		        "link"
		      ],
		      "HTMLMapElement": [
		        "map"
		      ],
		      "HTMLMarqueeElement": [
		        "marquee"
		      ],
		      "HTMLMediaElement": [
		        "media"
		      ],
		      "HTMLMenuElement": [
		        "menu"
		      ],
		      "HTMLMenuItemElement": [
		        "menuitem"
		      ],
		      "HTMLMetaElement": [
		        "meta"
		      ],
		      "HTMLMeterElement": [
		        "meter"
		      ],
		      "HTMLModElement": [
		        "del",
		        "ins"
		      ],
		      "HTMLOListElement": [
		        "ol"
		      ],
		      "HTMLObjectElement": [
		        "object"
		      ],
		      "HTMLOptGroupElement": [
		        "optgroup"
		      ],
		      "HTMLOptionElement": [
		        "option"
		      ],
		      "HTMLOutputElement": [
		        "output"
		      ],
		      "HTMLParagraphElement": [
		        "p"
		      ],
		      "HTMLParamElement": [
		        "param"
		      ],
		      "HTMLPictureElement": [
		        "picture"
		      ],
		      "HTMLPreElement": [
		        "pre"
		      ],
		      "HTMLProgressElement": [
		        "progress"
		      ],
		      "HTMLQuoteElement": [
		        "blockquote",
		        "q",
		        "quote"
		      ],
		      "HTMLScriptElement": [
		        "script"
		      ],
		      "HTMLSelectElement": [
		        "select"
		      ],
		      "HTMLShadowElement": [
		        "shadow"
		      ],
		      "HTMLSlotElement": [
		        "slot"
		      ],
		      "HTMLSourceElement": [
		        "source"
		      ],
		      "HTMLSpanElement": [
		        "span"
		      ],
		      "HTMLStyleElement": [
		        "style"
		      ],
		      "HTMLTableCaptionElement": [
		        "caption"
		      ],
		      "HTMLTableCellElement": [
		        "td",
		        "th"
		      ],
		      "HTMLTableColElement": [
		        "col",
		        "colgroup"
		      ],
		      "HTMLTableElement": [
		        "table"
		      ],
		      "HTMLTableRowElement": [
		        "tr"
		      ],
		      "HTMLTableSectionElement": [
		        "thead",
		        "tbody",
		        "tfoot"
		      ],
		      "HTMLTemplateElement": [
		        "template"
		      ],
		      "HTMLTextAreaElement": [
		        "textarea"
		      ],
		      "HTMLTimeElement": [
		        "time"
		      ],
		      "HTMLTitleElement": [
		        "title"
		      ],
		      "HTMLTrackElement": [
		        "track"
		      ],
		      "HTMLUListElement": [
		        "ul"
		      ],
		      "HTMLUnknownElement": [
		        "unknown",
		        "vhgroupv",
		        "vkeygen"
		      ],
		      "HTMLVideoElement": [
		        "video"
		      ]
		    },
		    "nodes": {
		      "Attr": [
		        "node"
		      ],
		      "Audio": [
		        "audio"
		      ],
		      "CDATASection": [
		        "node"
		      ],
		      "CharacterData": [
		        "node"
		      ],
		      "Comment": [
		        "#comment"
		      ],
		      "Document": [
		        "#document"
		      ],
		      "DocumentFragment": [
		        "#document-fragment"
		      ],
		      "DocumentType": [
		        "node"
		      ],
		      "HTMLDocument": [
		        "#document"
		      ],
		      "Image": [
		        "img"
		      ],
		      "Option": [
		        "option"
		      ],
		      "ProcessingInstruction": [
		        "node"
		      ],
		      "ShadowRoot": [
		        "#shadow-root"
		      ],
		      "Text": [
		        "#text"
		      ],
		      "XMLDocument": [
		        "xml"
		      ]
		    }
		  }));
		  
		  
		    var
		    // V0 polyfill entry
		    REGISTER_ELEMENT = 'registerElement',
		  
		    // IE < 11 only + old WebKit for attributes + feature detection
		    EXPANDO_UID = '__' + REGISTER_ELEMENT + (window.Math.random() * 10e4 >> 0),
		  
		    // shortcuts and costants
		    ADD_EVENT_LISTENER = 'addEventListener',
		    ATTACHED = 'attached',
		    CALLBACK = 'Callback',
		    DETACHED = 'detached',
		    EXTENDS = 'extends',
		  
		    ATTRIBUTE_CHANGED_CALLBACK = 'attributeChanged' + CALLBACK,
		    ATTACHED_CALLBACK = ATTACHED + CALLBACK,
		    CONNECTED_CALLBACK = 'connected' + CALLBACK,
		    DISCONNECTED_CALLBACK = 'disconnected' + CALLBACK,
		    CREATED_CALLBACK = 'created' + CALLBACK,
		    DETACHED_CALLBACK = DETACHED + CALLBACK,
		  
		    ADDITION = 'ADDITION',
		    MODIFICATION = 'MODIFICATION',
		    REMOVAL = 'REMOVAL',
		  
		    DOM_ATTR_MODIFIED = 'DOMAttrModified',
		    DOM_CONTENT_LOADED = 'DOMContentLoaded',
		    DOM_SUBTREE_MODIFIED = 'DOMSubtreeModified',
		  
		    PREFIX_TAG = '<',
		    PREFIX_IS = '=',
		  
		    // valid and invalid node names
		    validName = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
		    invalidNames = [
		      'ANNOTATION-XML',
		      'COLOR-PROFILE',
		      'FONT-FACE',
		      'FONT-FACE-SRC',
		      'FONT-FACE-URI',
		      'FONT-FACE-FORMAT',
		      'FONT-FACE-NAME',
		      'MISSING-GLYPH'
		    ],
		  
		    // registered types and their prototypes
		    types = [],
		    protos = [],
		  
		    // to query subnodes
		    query = '',
		  
		    // html shortcut used to feature detect
		    documentElement = document.documentElement,
		  
		    // ES5 inline helpers || basic patches
		    indexOf = types.indexOf || function (v) {
		      for(var i = this.length; i-- && this[i] !== v;){}
		      return i;
		    },
		  
		    // other helpers / shortcuts
		    OP = Object.prototype,
		    hOP = OP.hasOwnProperty,
		    iPO = OP.isPrototypeOf,
		  
		    defineProperty = Object.defineProperty,
		    empty = [],
		    gOPD = Object.getOwnPropertyDescriptor,
		    gOPN = Object.getOwnPropertyNames,
		    gPO = Object.getPrototypeOf,
		    sPO = Object.setPrototypeOf,
		  
		    // jshint proto: true
		    hasProto = !!Object.__proto__,
		  
		    // V1 helpers
		    fixGetClass = false,
		    DRECEV1 = '__dreCEv1',
		    customElements = window.customElements,
		    usableCustomElements = !!(
		      customElements &&
		      customElements.define &&
		      customElements.get &&
		      customElements.whenDefined
		    ),
		    Dict = Object.create || Object,
		    Map = window.Map || function Map() {
		      var K = [], V = [], i;
		      return {
		        get: function (k) {
		          return V[indexOf.call(K, k)];
		        },
		        set: function (k, v) {
		          i = indexOf.call(K, k);
		          if (i < 0) V[K.push(k) - 1] = v;
		          else V[i] = v;
		        }
		      };
		    },
		    Promise = window.Promise || function (fn) {
		      var
		        notify = [],
		        done = false,
		        p = {
		          'catch': function () {
		            return p;
		          },
		          'then': function (cb) {
		            notify.push(cb);
		            if (done) setTimeout(resolve, 1);
		            return p;
		          }
		        }
		      ;
		      function resolve(value) {
		        done = true;
		        while (notify.length) notify.shift()(value);
		      }
		      fn(resolve);
		      return p;
		    },
		    justCreated = false,
		    constructors = Dict(null),
		    waitingList = Dict(null),
		    nodeNames = new Map(),
		    secondArgument = String,
		  
		    // used to create unique instances
		    create = Object.create || function Bridge(proto) {
		      // silly broken polyfill probably ever used but short enough to work
		      return proto ? ((Bridge.prototype = proto), new Bridge()) : this;
		    },
		  
		    // will set the prototype if possible
		    // or copy over all properties
		    setPrototype = sPO || (
		      hasProto ?
		        function (o, p) {
		          o.__proto__ = p;
		          return o;
		        } : (
		      (gOPN && gOPD) ?
		        (function(){
		          function setProperties(o, p) {
		            for (var
		              key,
		              names = gOPN(p),
		              i = 0, length = names.length;
		              i < length; i++
		            ) {
		              key = names[i];
		              if (!hOP.call(o, key)) {
		                defineProperty(o, key, gOPD(p, key));
		              }
		            }
		          }
		          return function (o, p) {
		            do {
		              setProperties(o, p);
		            } while ((p = gPO(p)) && !iPO.call(p, o));
		            return o;
		          };
		        }()) :
		        function (o, p) {
		          for (var key in p) {
		            o[key] = p[key];
		          }
		          return o;
		        }
		    )),
		  
		    // DOM shortcuts and helpers, if any
		  
		    MutationObserver = window.MutationObserver ||
		                       window.WebKitMutationObserver,
		  
		    HTMLElementPrototype = (
		      window.HTMLElement ||
		      window.Element ||
		      window.Node
		    ).prototype,
		  
		    IE8 = !iPO.call(HTMLElementPrototype, documentElement),
		  
		    safeProperty = IE8 ? function (o, k, d) {
		      o[k] = d.value;
		      return o;
		    } : defineProperty,
		  
		    isValidNode = IE8 ?
		      function (node) {
		        return node.nodeType === 1;
		      } :
		      function (node) {
		        return iPO.call(HTMLElementPrototype, node);
		      },
		  
		    targets = IE8 && [],
		  
		    attachShadow = HTMLElementPrototype.attachShadow,
		    cloneNode = HTMLElementPrototype.cloneNode,
		    dispatchEvent = HTMLElementPrototype.dispatchEvent,
		    getAttribute = HTMLElementPrototype.getAttribute,
		    hasAttribute = HTMLElementPrototype.hasAttribute,
		    removeAttribute = HTMLElementPrototype.removeAttribute,
		    setAttribute = HTMLElementPrototype.setAttribute,
		  
		    // replaced later on
		    createElement = document.createElement,
		    patchedCreateElement = createElement,
		  
		    // shared observer for all attributes
		    attributesObserver = MutationObserver && {
		      attributes: true,
		      characterData: true,
		      attributeOldValue: true
		    },
		  
		    // useful to detect only if there's no MutationObserver
		    DOMAttrModified = MutationObserver || function(e) {
		      doesNotSupportDOMAttrModified = false;
		      documentElement.removeEventListener(
		        DOM_ATTR_MODIFIED,
		        DOMAttrModified
		      );
		    },
		  
		    // will both be used to make DOMNodeInserted asynchronous
		    asapQueue,
		    asapTimer = 0,
		  
		    // internal flags
		    setListener = false,
		    doesNotSupportDOMAttrModified = true,
		    dropDomContentLoaded = true,
		  
		    // needed for the innerHTML helper
		    notFromInnerHTMLHelper = true,
		  
		    // optionally defined later on
		    onSubtreeModified,
		    callDOMAttrModified,
		    getAttributesMirror,
		    observer,
		    observe,
		  
		    // based on setting prototype capability
		    // will check proto or the expando attribute
		    // in order to setup the node once
		    patchIfNotAlready,
		    patch
		  ;
		  
		  // only if needed
		  if (!(REGISTER_ELEMENT in document)) {
		  
		    if (sPO || hasProto) {
		        patchIfNotAlready = function (node, proto) {
		          if (!iPO.call(proto, node)) {
		            setupNode(node, proto);
		          }
		        };
		        patch = setupNode;
		    } else {
		        patchIfNotAlready = function (node, proto) {
		          if (!node[EXPANDO_UID]) {
		            node[EXPANDO_UID] = Object(true);
		            setupNode(node, proto);
		          }
		        };
		        patch = patchIfNotAlready;
		    }
		  
		    if (IE8) {
		      doesNotSupportDOMAttrModified = false;
		      (function (){
		        var
		          descriptor = gOPD(HTMLElementPrototype, ADD_EVENT_LISTENER),
		          addEventListener = descriptor.value,
		          patchedRemoveAttribute = function (name) {
		            var e = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true});
		            e.attrName = name;
		            e.prevValue = getAttribute.call(this, name);
		            e.newValue = null;
		            e[REMOVAL] = e.attrChange = 2;
		            removeAttribute.call(this, name);
		            dispatchEvent.call(this, e);
		          },
		          patchedSetAttribute = function (name, value) {
		            var
		              had = hasAttribute.call(this, name),
		              old = had && getAttribute.call(this, name),
		              e = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true})
		            ;
		            setAttribute.call(this, name, value);
		            e.attrName = name;
		            e.prevValue = had ? old : null;
		            e.newValue = value;
		            if (had) {
		              e[MODIFICATION] = e.attrChange = 1;
		            } else {
		              e[ADDITION] = e.attrChange = 0;
		            }
		            dispatchEvent.call(this, e);
		          },
		          onPropertyChange = function (e) {
		            // jshint eqnull:true
		            var
		              node = e.currentTarget,
		              superSecret = node[EXPANDO_UID],
		              propertyName = e.propertyName,
		              event
		            ;
		            if (superSecret.hasOwnProperty(propertyName)) {
		              superSecret = superSecret[propertyName];
		              event = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true});
		              event.attrName = superSecret.name;
		              event.prevValue = superSecret.value || null;
		              event.newValue = (superSecret.value = node[propertyName] || null);
		              if (event.prevValue == null) {
		                event[ADDITION] = event.attrChange = 0;
		              } else {
		                event[MODIFICATION] = event.attrChange = 1;
		              }
		              dispatchEvent.call(node, event);
		            }
		          }
		        ;
		        descriptor.value = function (type, handler, capture) {
		          if (
		            type === DOM_ATTR_MODIFIED &&
		            this[ATTRIBUTE_CHANGED_CALLBACK] &&
		            this.setAttribute !== patchedSetAttribute
		          ) {
		            this[EXPANDO_UID] = {
		              className: {
		                name: 'class',
		                value: this.className
		              }
		            };
		            this.setAttribute = patchedSetAttribute;
		            this.removeAttribute = patchedRemoveAttribute;
		            addEventListener.call(this, 'propertychange', onPropertyChange);
		          }
		          addEventListener.call(this, type, handler, capture);
		        };
		        defineProperty(HTMLElementPrototype, ADD_EVENT_LISTENER, descriptor);
		      }());
		    } else if (!MutationObserver) {
		      documentElement[ADD_EVENT_LISTENER](DOM_ATTR_MODIFIED, DOMAttrModified);
		      documentElement.setAttribute(EXPANDO_UID, 1);
		      documentElement.removeAttribute(EXPANDO_UID);
		      if (doesNotSupportDOMAttrModified) {
		        onSubtreeModified = function (e) {
		          var
		            node = this,
		            oldAttributes,
		            newAttributes,
		            key
		          ;
		          if (node === e.target) {
		            oldAttributes = node[EXPANDO_UID];
		            node[EXPANDO_UID] = (newAttributes = getAttributesMirror(node));
		            for (key in newAttributes) {
		              if (!(key in oldAttributes)) {
		                // attribute was added
		                return callDOMAttrModified(
		                  0,
		                  node,
		                  key,
		                  oldAttributes[key],
		                  newAttributes[key],
		                  ADDITION
		                );
		              } else if (newAttributes[key] !== oldAttributes[key]) {
		                // attribute was changed
		                return callDOMAttrModified(
		                  1,
		                  node,
		                  key,
		                  oldAttributes[key],
		                  newAttributes[key],
		                  MODIFICATION
		                );
		              }
		            }
		            // checking if it has been removed
		            for (key in oldAttributes) {
		              if (!(key in newAttributes)) {
		                // attribute removed
		                return callDOMAttrModified(
		                  2,
		                  node,
		                  key,
		                  oldAttributes[key],
		                  newAttributes[key],
		                  REMOVAL
		                );
		              }
		            }
		          }
		        };
		        callDOMAttrModified = function (
		          attrChange,
		          currentTarget,
		          attrName,
		          prevValue,
		          newValue,
		          action
		        ) {
		          var e = {
		            attrChange: attrChange,
		            currentTarget: currentTarget,
		            attrName: attrName,
		            prevValue: prevValue,
		            newValue: newValue
		          };
		          e[action] = attrChange;
		          onDOMAttrModified(e);
		        };
		        getAttributesMirror = function (node) {
		          for (var
		            attr, name,
		            result = {},
		            attributes = node.attributes,
		            i = 0, length = attributes.length;
		            i < length; i++
		          ) {
		            attr = attributes[i];
		            name = attr.name;
		            if (name !== 'setAttribute') {
		              result[name] = attr.value;
		            }
		          }
		          return result;
		        };
		      }
		    }
		  
		    // set as enumerable, writable and configurable
		    document[REGISTER_ELEMENT] = function registerElement(type, options) {
		      upperType = type.toUpperCase();
		      if (!setListener) {
		        // only first time document.registerElement is used
		        // we need to set this listener
		        // setting it by default might slow down for no reason
		        setListener = true;
		        if (MutationObserver) {
		          observer = (function(attached, detached){
		            function checkEmAll(list, callback) {
		              for (var i = 0, length = list.length; i < length; callback(list[i++])){}
		            }
		            return new MutationObserver(function (records) {
		              for (var
		                current, node, newValue,
		                i = 0, length = records.length; i < length; i++
		              ) {
		                current = records[i];
		                if (current.type === 'childList') {
		                  checkEmAll(current.addedNodes, attached);
		                  checkEmAll(current.removedNodes, detached);
		                } else {
		                  node = current.target;
		                  if (notFromInnerHTMLHelper &&
		                      node[ATTRIBUTE_CHANGED_CALLBACK] &&
		                      current.attributeName !== 'style') {
		                    newValue = getAttribute.call(node, current.attributeName);
		                    if (newValue !== current.oldValue) {
		                      node[ATTRIBUTE_CHANGED_CALLBACK](
		                        current.attributeName,
		                        current.oldValue,
		                        newValue
		                      );
		                    }
		                  }
		                }
		              }
		            });
		          }(executeAction(ATTACHED), executeAction(DETACHED)));
		          observe = function (node) {
		            observer.observe(
		              node,
		              {
		                childList: true,
		                subtree: true
		              }
		            );
		            return node;
		          };
		          observe(document);
		          if (attachShadow) {
		            HTMLElementPrototype.attachShadow = function () {
		              return observe(attachShadow.apply(this, arguments));
		            };
		          }
		        } else {
		          asapQueue = [];
		          document[ADD_EVENT_LISTENER]('DOMNodeInserted', onDOMNode(ATTACHED));
		          document[ADD_EVENT_LISTENER]('DOMNodeRemoved', onDOMNode(DETACHED));
		        }
		  
		        document[ADD_EVENT_LISTENER](DOM_CONTENT_LOADED, onReadyStateChange);
		        document[ADD_EVENT_LISTENER]('readystatechange', onReadyStateChange);
		  
		        HTMLElementPrototype.cloneNode = function (deep) {
		          var
		            node = cloneNode.call(this, !!deep),
		            i = getTypeIndex(node)
		          ;
		          if (-1 < i) patch(node, protos[i]);
		          if (deep) loopAndSetup(node.querySelectorAll(query));
		          return node;
		        };
		      }
		  
		      if (-2 < (
		        indexOf.call(types, PREFIX_IS + upperType) +
		        indexOf.call(types, PREFIX_TAG + upperType)
		      )) {
		        throwTypeError(type);
		      }
		  
		      if (!validName.test(upperType) || -1 < indexOf.call(invalidNames, upperType)) {
		        throw new Error('The type ' + type + ' is invalid');
		      }
		  
		      var
		        constructor = function () {
		          return extending ?
		            document.createElement(nodeName, upperType) :
		            document.createElement(nodeName);
		        },
		        opt = options || OP,
		        extending = hOP.call(opt, EXTENDS),
		        nodeName = extending ? options[EXTENDS].toUpperCase() : upperType,
		        upperType,
		        i
		      ;
		  
		      if (extending && -1 < (
		        indexOf.call(types, PREFIX_TAG + nodeName)
		      )) {
		        throwTypeError(nodeName);
		      }
		  
		      i = types.push((extending ? PREFIX_IS : PREFIX_TAG) + upperType) - 1;
		  
		      query = query.concat(
		        query.length ? ',' : '',
		        extending ? nodeName + '[is="' + type.toLowerCase() + '"]' : nodeName
		      );
		  
		      constructor.prototype = (
		        protos[i] = hOP.call(opt, 'prototype') ?
		          opt.prototype :
		          create(HTMLElementPrototype)
		      );
		  
		      loopAndVerify(
		        document.querySelectorAll(query),
		        ATTACHED
		      );
		  
		      return constructor;
		    };
		  
		    document.createElement = (patchedCreateElement = function (localName, typeExtension) {
		      var
		        is = getIs(typeExtension),
		        node = is ?
		          createElement.call(document, localName, secondArgument(is)) :
		          createElement.call(document, localName),
		        name = '' + localName,
		        i = indexOf.call(
		          types,
		          (is ? PREFIX_IS : PREFIX_TAG) +
		          (is || name).toUpperCase()
		        ),
		        setup = -1 < i
		      ;
		      if (is) {
		        node.setAttribute('is', is = is.toLowerCase());
		        if (setup) {
		          setup = isInQSA(name.toUpperCase(), is);
		        }
		      }
		      notFromInnerHTMLHelper = !document.createElement.innerHTMLHelper;
		      if (setup) patch(node, protos[i]);
		      return node;
		    });
		  
		  }
		  
		  function ASAP() {
		    var queue = asapQueue.splice(0, asapQueue.length);
		    asapTimer = 0;
		    while (queue.length) {
		      queue.shift().call(
		        null, queue.shift()
		      );
		    }
		  }
		  
		  function loopAndVerify(list, action) {
		    for (var i = 0, length = list.length; i < length; i++) {
		      verifyAndSetupAndAction(list[i], action);
		    }
		  }
		  
		  function loopAndSetup(list) {
		    for (var i = 0, length = list.length, node; i < length; i++) {
		      node = list[i];
		      patch(node, protos[getTypeIndex(node)]);
		    }
		  }
		  
		  function executeAction(action) {
		    return function (node) {
		      if (isValidNode(node)) {
		        verifyAndSetupAndAction(node, action);
		        loopAndVerify(
		          node.querySelectorAll(query),
		          action
		        );
		      }
		    };
		  }
		  
		  function getTypeIndex(target) {
		    var
		      is = getAttribute.call(target, 'is'),
		      nodeName = target.nodeName.toUpperCase(),
		      i = indexOf.call(
		        types,
		        is ?
		            PREFIX_IS + is.toUpperCase() :
		            PREFIX_TAG + nodeName
		      )
		    ;
		    return is && -1 < i && !isInQSA(nodeName, is) ? -1 : i;
		  }
		  
		  function isInQSA(name, type) {
		    return -1 < query.indexOf(name + '[is="' + type + '"]');
		  }
		  
		  function onDOMAttrModified(e) {
		    var
		      node = e.currentTarget,
		      attrChange = e.attrChange,
		      attrName = e.attrName,
		      target = e.target,
		      addition = e[ADDITION] || 2,
		      removal = e[REMOVAL] || 3
		    ;
		    if (notFromInnerHTMLHelper &&
		        (!target || target === node) &&
		        node[ATTRIBUTE_CHANGED_CALLBACK] &&
		        attrName !== 'style' && (
		          e.prevValue !== e.newValue ||
		          // IE9, IE10, and Opera 12 gotcha
		          e.newValue === '' && (
		            attrChange === addition ||
		            attrChange === removal
		          )
		    )) {
		      node[ATTRIBUTE_CHANGED_CALLBACK](
		        attrName,
		        attrChange === addition ? null : e.prevValue,
		        attrChange === removal ? null : e.newValue
		      );
		    }
		  }
		  
		  function onDOMNode(action) {
		    var executor = executeAction(action);
		    return function (e) {
		      asapQueue.push(executor, e.target);
		      if (asapTimer) clearTimeout(asapTimer);
		      asapTimer = setTimeout(ASAP, 1);
		    };
		  }
		  
		  function onReadyStateChange(e) {
		    if (dropDomContentLoaded) {
		      dropDomContentLoaded = false;
		      e.currentTarget.removeEventListener(DOM_CONTENT_LOADED, onReadyStateChange);
		    }
		    loopAndVerify(
		      (e.target || document).querySelectorAll(query),
		      e.detail === DETACHED ? DETACHED : ATTACHED
		    );
		    if (IE8) purge();
		  }
		  
		  function patchedSetAttribute(name, value) {
		    // jshint validthis:true
		    var self = this;
		    setAttribute.call(self, name, value);
		    onSubtreeModified.call(self, {target: self});
		  }
		  
		  function setupNode(node, proto) {
		    setPrototype(node, proto);
		    if (observer) {
		      observer.observe(node, attributesObserver);
		    } else {
		      if (doesNotSupportDOMAttrModified) {
		        node.setAttribute = patchedSetAttribute;
		        node[EXPANDO_UID] = getAttributesMirror(node);
		        node[ADD_EVENT_LISTENER](DOM_SUBTREE_MODIFIED, onSubtreeModified);
		      }
		      node[ADD_EVENT_LISTENER](DOM_ATTR_MODIFIED, onDOMAttrModified);
		    }
		    if (node[CREATED_CALLBACK] && notFromInnerHTMLHelper) {
		      node.created = true;
		      node[CREATED_CALLBACK]();
		      node.created = false;
		    }
		  }
		  
		  function purge() {
		    for (var
		      node,
		      i = 0,
		      length = targets.length;
		      i < length; i++
		    ) {
		      node = targets[i];
		      if (!documentElement.contains(node)) {
		        length--;
		        targets.splice(i--, 1);
		        verifyAndSetupAndAction(node, DETACHED);
		      }
		    }
		  }
		  
		  function throwTypeError(type) {
		    throw new Error('A ' + type + ' type is already registered');
		  }
		  
		  function verifyAndSetupAndAction(node, action) {
		    var
		      fn,
		      i = getTypeIndex(node)
		    ;
		    if (-1 < i) {
		      patchIfNotAlready(node, protos[i]);
		      i = 0;
		      if (action === ATTACHED && !node[ATTACHED]) {
		        node[DETACHED] = false;
		        node[ATTACHED] = true;
		        i = 1;
		        if (IE8 && indexOf.call(targets, node) < 0) {
		          targets.push(node);
		        }
		      } else if (action === DETACHED && !node[DETACHED]) {
		        node[ATTACHED] = false;
		        node[DETACHED] = true;
		        i = 1;
		      }
		      if (i && (fn = node[action + CALLBACK])) fn.call(node);
		    }
		  }
		  
		  
		  
		  // V1 in da House!
		  function CustomElementRegistry() {}
		  
		  CustomElementRegistry.prototype = {
		    constructor: CustomElementRegistry,
		    // a workaround for the stubborn WebKit
		    define: usableCustomElements ?
		      function (name, Class, options) {
		        if (options) {
		          CERDefine(name, Class, options);
		        } else {
		          var NAME = name.toUpperCase();
		          constructors[NAME] = {
		            constructor: Class,
		            create: [NAME]
		          };
		          nodeNames.set(Class, NAME);
		          customElements.define(name, Class);
		        }
		      } :
		      CERDefine,
		    get: usableCustomElements ?
		      function (name) {
		        return customElements.get(name) || get(name);
		      } :
		      get,
		    whenDefined: usableCustomElements ?
		      function (name) {
		        return Promise.race([
		          customElements.whenDefined(name),
		          whenDefined(name)
		        ]);
		      } :
		      whenDefined
		  };
		  
		  function CERDefine(name, Class, options) {
		    var
		      is = options && options[EXTENDS] || '',
		      CProto = Class.prototype,
		      proto = create(CProto),
		      attributes = Class.observedAttributes || empty,
		      definition = {prototype: proto}
		    ;
		    // TODO: is this needed at all since it's inherited?
		    // defineProperty(proto, 'constructor', {value: Class});
		    safeProperty(proto, CREATED_CALLBACK, {
		        value: function () {
		          if (justCreated) justCreated = false;
		          else if (!this[DRECEV1]) {
		            this[DRECEV1] = true;
		            new Class(this);
		            if (CProto[CREATED_CALLBACK])
		              CProto[CREATED_CALLBACK].call(this);
		            var info = constructors[nodeNames.get(Class)];
		            if (!usableCustomElements || info.create.length > 1) {
		              notifyAttributes(this);
		            }
		          }
		      }
		    });
		    safeProperty(proto, ATTRIBUTE_CHANGED_CALLBACK, {
		      value: function (name) {
		        if (-1 < indexOf.call(attributes, name))
		          CProto[ATTRIBUTE_CHANGED_CALLBACK].apply(this, arguments);
		      }
		    });
		    if (CProto[CONNECTED_CALLBACK]) {
		      safeProperty(proto, ATTACHED_CALLBACK, {
		        value: CProto[CONNECTED_CALLBACK]
		      });
		    }
		    if (CProto[DISCONNECTED_CALLBACK]) {
		      safeProperty(proto, DETACHED_CALLBACK, {
		        value: CProto[DISCONNECTED_CALLBACK]
		      });
		    }
		    if (is) definition[EXTENDS] = is;
		    name = name.toUpperCase();
		    constructors[name] = {
		      constructor: Class,
		      create: is ? [is, secondArgument(name)] : [name]
		    };
		    nodeNames.set(Class, name);
		    document[REGISTER_ELEMENT](name.toLowerCase(), definition);
		    whenDefined(name);
		    waitingList[name].r();
		  }
		  
		  function get(name) {
		    var info = constructors[name.toUpperCase()];
		    return info && info.constructor;
		  }
		  
		  function getIs(options) {
		    return typeof options === 'string' ?
		        options : (options && options.is || '');
		  }
		  
		  function notifyAttributes(self) {
		    var
		      callback = self[ATTRIBUTE_CHANGED_CALLBACK],
		      attributes = callback ? self.attributes : empty,
		      i = attributes.length,
		      attribute
		    ;
		    while (i--) {
		      attribute =  attributes[i]; // || attributes.item(i);
		      callback.call(
		        self,
		        attribute.name || attribute.nodeName,
		        null,
		        attribute.value || attribute.nodeValue
		      );
		    }
		  }
		  
		  function whenDefined(name) {
		    name = name.toUpperCase();
		    if (!(name in waitingList)) {
		      waitingList[name] = {};
		      waitingList[name].p = new Promise(function (resolve) {
		        waitingList[name].r = resolve;
		      });
		    }
		    return waitingList[name].p;
		  }
		  
		  function polyfillV1() {
		    if (customElements) delete window.customElements;
		    defineProperty(window, 'customElements', {
		      configurable: true,
		      value: new CustomElementRegistry()
		    });
		    defineProperty(window, 'CustomElementRegistry', {
		      configurable: true,
		      value: CustomElementRegistry
		    });
		    for (var
		      patchClass = function (name) {
		        var Class = window[name];
		        if (Class) {
		          window[name] = function CustomElementsV1(self) {
		            var info, isNative;
		            if (!self) self = this;
		            if (!self[DRECEV1]) {
		              justCreated = true;
		              info = constructors[nodeNames.get(self.constructor)];
		              isNative = usableCustomElements && info.create.length === 1;
		              self = isNative ?
		                Reflect.construct(Class, empty, info.constructor) :
		                document.createElement.apply(document, info.create);
		              self[DRECEV1] = true;
		              justCreated = false;
		              if (!isNative) notifyAttributes(self);
		            }
		            return self;
		          };
		          window[name].prototype = Class.prototype;
		          try {
		            Class.prototype.constructor = window[name];
		          } catch(WebKit) {
		            fixGetClass = true;
		            defineProperty(Class, DRECEV1, {value: window[name]});
		          }
		        }
		      },
		      Classes = htmlClass.get(/^HTML[A-Z]*[a-z]/),
		      i = Classes.length;
		      i--;
		      patchClass(Classes[i])
		    ) {}
		    (document.createElement = function (name, options) {
		      var is = getIs(options);
		      return is ?
		        patchedCreateElement.call(this, name, secondArgument(is)) :
		        patchedCreateElement.call(this, name);
		    });
		  }
		  
		  // if customElements is not there at all
		  if (!customElements) polyfillV1();
		  else {
		    // if available test extends work as expected
		    try {
		      (function (DRE, options, name) {
		        options[EXTENDS] = 'a';
		        DRE.prototype = create(HTMLAnchorElement.prototype);
		        DRE.prototype.constructor = DRE;
		        window.customElements.define(name, DRE, options);
		        if (
		          getAttribute.call(document.createElement('a', {is: name}), 'is') !== name ||
		          (usableCustomElements && getAttribute.call(new DRE(), 'is') !== name)
		        ) {
		          throw options;
		        }
		      }(
		        function DRE() {
		          return Reflect.construct(HTMLAnchorElement, [], DRE);
		        },
		        {},
		        'document-register-element-a'
		      ));
		    } catch(o_O) {
		      // or force the polyfill if not
		      // and keep internal original reference
		      polyfillV1();
		    }
		  }
		  
		  try {
		    createElement.call(document, 'a', 'a');
		  } catch(FireFox) {
		    secondArgument = function (is) {
		      return {is: is};
		    };
		  }
		  
		}
		
		installCustomElements(global);
		
		module.exports = installCustomElements;
		
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		/*
		@license
		Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
		This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
		The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
		The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
		Code distributed by Google as part of the polymer project is also
		subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
		*/
		!function(){"use strict";function e(e){return Boolean("ShadyRoot"===e.__localName)}function t(e,t){return $.call(e,t)}function o(e,t,o){var i=Object.getOwnPropertyDescriptor(t,e);i&&Object.defineProperty(o,e,i)}function i(e,t){if(e&&t)for(var i,n=Object.getOwnPropertyNames(t),r=0;r<n.length&&(i=n[r]);r++)o(i,t,e);return e||t}function n(e){for(var t=[],o=arguments.length-1;o-- >0;)t[o]=arguments[o+1];for(var n=0;n<t.length;n++)i(e,t[n]);return e}function r(e,t){for(var o in t)e[o]=t[o];return e}function d(e,t){var o=Object.getPrototypeOf(e);if(!o.hasOwnProperty("__patchProto")){var n=Object.create(o);n.__sourceProto=o,i(n,t),o.__patchProto=n}Object.setPrototypeOf(e,o.__patchProto)}function s(e,t,o){return{index:e,removed:t,addedCount:o}}function a(e,t){return W[t]||(W[t]=Object.getOwnPropertyDescriptor(HTMLElement.prototype,t)||Object.getOwnPropertyDescriptor(Element.prototype,t)||Object.getOwnPropertyDescriptor(Node.prototype,t)),W[t].get.call(e)}function l(e){V||(V=!0,x.then(h)),Z.push(e)}function h(){for(V=!1,ee++;Z.length;)Z.shift()();Y&&Y.flush&&Y.flush();var e=ee>te;if(Z.length&&!e&&h(),ee=0,e)throw new Error("Loop detected in ShadyDOM distribution, aborting.")}function u(e){switch(e){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";case'"':return"&quot;";case" ":return"&nbsp;"}}function _(e){return e.replace(oe,u)}function c(e){return e.replace(ie,u)}function f(e){for(var t={},o=0;o<e.length;o++)t[e[o]]=!0;return t}function m(e,t,o){switch(e.nodeType){case Node.ELEMENT_NODE:for(var i,n=e.localName,r="<"+n,d=e.attributes,s=0;i=d[s];s++)r+=" "+i.name+'="'+_(i.value)+'"';return r+=">",ne[n]?r:r+g(e,o)+"</"+n+">";case Node.TEXT_NODE:var a=e.data;return t&&re[t.localName]?a:c(a);case Node.COMMENT_NODE:return"<!--"+e.data+"-->";default:throw window.console.error(e),new Error("not implemented")}}function g(e,t){"template"===e.localName&&(e=e.content);for(var o,i="",n=t?t(e):e.childNodes,r=0,d=n.length;r<d&&(o=n[r]);r++)i+=m(o,e,t);return i}function p(e,t){var o=ve(t);return e.filter(function(e){var t=o===ve(e.target);if(t&&e.addedNodes){var i=Array.from(e.addedNodes).filter(function(e){return o===ve(e)});Object.defineProperty(e,"addedNodes",{value:i,configurable:!0})}return t&&(!e.addedNodes||e.addedNodes.length)})}function v(e){L.inUse&&!b(e)&&Se.canPatchNode(e)&&(H.saveChildNodes(e),Se.patch(e))}function N(e){Se.unpatch(e)}function b(e){return Boolean(e.__patched)}function C(e,t){for(var o=[],i=e,n=e===window?window:e.getRootNode();i;)o.push(i),i=i.assignedSlot?i.assignedSlot:i.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&i.host&&(t||i!==n)?i.host:i.parentNode;return o[o.length-1]===document&&o.push(window),o}function E(t,o){if(!e)return t;for(var i,n,r,d,s=C(t,!0),a=o,l=0;l<a.length;l++)if(i=a[l],r=i===window?window:i.getRootNode(),r!==n&&(d=s.indexOf(r),n=r),!e(r)||d>-1)return i}function y(e){var t=function(t,o){var i=new e(t,o);return i.__composed=o&&Boolean(o.composed),i};return r(t,e),t.prototype=e.prototype,t}function S(e,t,o){var i=t.__handlers&&t.__handlers[e.type]&&t.__handlers[e.type][o];if(i)for(var n,r=0;n=i[r];r++)if(n.call(t,e),e.__immediatePropagationStopped)return}function P(e){var t,o=e.composedPath();Object.defineProperty(e,"currentTarget",{get:function(){return t},configurable:!0});for(var i=o.length-1;i>=0;i--)if(t=o[i],S(e,t,"capture"),e.__propagationStopped)return;Object.defineProperty(e,"eventPhase",{value:Event.BUBBLING_PHASE});for(var n=0;n<o.length;n++)if(t=o[n],S(e,t,"bubble"),e.__propagationStopped)return}function O(e){return Boolean("object"==typeof e?e.capture:e)}function D(e,t,o){if(t){this.__eventListenerCount||(this.__eventListenerCount=0),this.__eventListenerCount++;var i=function(e){if(e.__target||(e.__target=e.target,e.__relatedTarget=e.relatedTarget,d(e,Te)),e.composed||e.composedPath().indexOf(this)>-1)return e.eventPhase===Event.BUBBLING_PHASE&&e.target===e.relatedTarget?void e.stopImmediatePropagation():t(e)};t.__eventWrapper=i,we[e]?(this.__handlers=this.__handlers||{},this.__handlers[e]=this.__handlers[e]||{capture:[],bubble:[]},O(o)?this.__handlers[e].capture.push(i):this.__handlers[e].bubble.push(i)):Pe.call(this,e,i,o)}}function T(e,t,o){if(t){var i=t.__eventWrapper;if(Oe.call(this,e,i||t,o),i&&(t.__eventWrapper=null,this.__eventListenerCount--,we[e]&&this.__handlers&&this.__handlers[e])){var n;O(o)?(n=this.__handlers[e].capture.indexOf(i),n>-1&&this.__handlers[e].capture.splice(n,1)):(n=this.__handlers[e].bubble.indexOf(i),n>-1&&this.__handlers[e].bubble.splice(n,1))}}}function w(){for(var e in we)window.addEventListener(e,function(e){e.__target||(e.__target=e.target,e.__relatedTarget=e.relatedTarget,d(e,Te),P(e),e.stopImmediatePropagation())},!0)}var L=window.ShadyDOM||{};L.hasNativeShadowDOM=Boolean(Element.prototype.attachShadow&&Node.prototype.getRootNode),L.inUse=L.force||!L.hasNativeShadowDOM;var x,R=Element.prototype,$=R.matches||R.matchesSelector||R.mozMatchesSelector||R.msMatchesSelector||R.oMatchesSelector||R.webkitMatchesSelector,M={};x=window.Promise?Promise.resolve():{then:function(e){var t=document.createTextNode(""),o=new MutationObserver(function(){o.disconnect(),e()});o.observe(t,{characterData:!0})}};var I=0,F=1,A=2,j=3,k={calcEditDistances:function(e,t,o,i,n,r){for(var d=this,s=r-n+1,a=o-t+1,l=new Array(s),h=0;h<s;h++)l[h]=new Array(a),l[h][0]=h;for(var u=0;u<a;u++)l[0][u]=u;for(var _=1;_<s;_++)for(var c=1;c<a;c++)if(d.equals(e[t+c-1],i[n+_-1]))l[_][c]=l[_-1][c-1];else{var f=l[_-1][c]+1,m=l[_][c-1]+1;l[_][c]=f<m?f:m}return l},spliceOperationsFromEditDistances:function(e){for(var t=e.length-1,o=e[0].length-1,i=e[t][o],n=[];t>0||o>0;)if(0!=t)if(0!=o){var r,d=e[t-1][o-1],s=e[t-1][o],a=e[t][o-1];r=s<a?s<d?s:d:a<d?a:d,r==d?(d==i?n.push(I):(n.push(F),i=d),t--,o--):r==s?(n.push(j),t--,i=s):(n.push(A),o--,i=a)}else n.push(j),t--;else n.push(A),o--;return n.reverse(),n},calcSplices:function(e,t,o,i,n,r){var d,a=0,l=0,h=Math.min(o-t,r-n);if(0==t&&0==n&&(a=this.sharedPrefix(e,i,h)),o==e.length&&r==i.length&&(l=this.sharedSuffix(e,i,h-a)),t+=a,n+=a,o-=l,r-=l,o-t==0&&r-n==0)return[];if(t==o){for(d=s(t,[],0);n<r;)d.removed.push(i[n++]);return[d]}if(n==r)return[s(t,[],o-t)];var u=this.spliceOperationsFromEditDistances(this.calcEditDistances(e,t,o,i,n,r));d=void 0;for(var _=[],c=t,f=n,m=0;m<u.length;m++)switch(u[m]){case I:d&&(_.push(d),d=void 0),c++,f++;break;case F:d||(d=s(c,[],0)),d.addedCount++,c++,d.removed.push(i[f]),f++;break;case A:d||(d=s(c,[],0)),d.addedCount++,c++;break;case j:d||(d=s(c,[],0)),d.removed.push(i[f]),f++}return d&&_.push(d),_},sharedPrefix:function(e,t,o){for(var i=this,n=0;n<o;n++)if(!i.equals(e[n],t[n]))return n;return o},sharedSuffix:function(e,t,o){for(var i=e.length,n=t.length,r=0;r<o&&this.equals(e[--i],t[--n]);)r++;return r},calculateSplices:function(e,t){return this.calcSplices(e,0,e.length,t,0,t.length)},equals:function(e,t){return e===t}},B=function(e,t){return k.calculateSplices(e,t)},U=Element.prototype.insertBefore,q=Element.prototype.appendChild,G=Element.prototype.removeChild,H={arrayCopyChildNodes:function(e){for(var t=[],o=0,i=e.firstChild;i;i=i.nextSibling)t[o++]=i;return t},arrayCopyChildren:function(e){for(var t=[],o=0,i=e.firstElementChild;i;i=i.nextElementSibling)t[o++]=i;return t},arrayCopy:function(e){for(var t=e.length,o=new Array(t),i=0;i<t;i++)o[i]=e[i];return o},saveChildNodes:function(e){H.Logical.saveChildNodes(e),H.Composed.hasParentNode(e)||H.Composed.saveComposedData(e),H.Composed.saveChildNodes(e)}};H.Logical={hasParentNode:function(e){return Boolean(e.__dom&&e.__dom.parentNode)},hasChildNodes:function(e){return Boolean(e.__dom&&void 0!==e.__dom.childNodes)},getChildNodes:function(e){return this.hasChildNodes(e)?this._getChildNodes(e):H.Composed.getChildNodes(e)},_getChildNodes:function(e){if(!e.__dom.childNodes){e.__dom.childNodes=[];for(var t=this.getFirstChild(e);t;t=this.getNextSibling(t))e.__dom.childNodes.push(t)}return e.__dom.childNodes},getParentNode:function(e){return e.__dom&&void 0!==e.__dom.parentNode?e.__dom.parentNode:H.Composed.getParentNode(e)},getFirstChild:function(e){return e.__dom&&void 0!==e.__dom.firstChild?e.__dom.firstChild:H.Composed.getFirstChild(e)},getLastChild:function(e){return e.__dom&&void 0!==e.__dom.lastChild?e.__dom.lastChild:H.Composed.getLastChild(e)},getNextSibling:function(e){return e.__dom&&void 0!==e.__dom.nextSibling?e.__dom.nextSibling:H.Composed.getNextSibling(e)},getPreviousSibling:function(e){return e.__dom&&void 0!==e.__dom.previousSibling?e.__dom.previousSibling:H.Composed.getPreviousSibling(e)},getFirstElementChild:function(e){return e.__dom&&void 0!==e.__dom.firstChild?this._getFirstElementChild(e):H.Composed.getFirstElementChild(e)},_getFirstElementChild:function(e){for(var t=e.__dom.firstChild;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.__dom.nextSibling;return t},getLastElementChild:function(e){return e.__dom&&void 0!==e.__dom.lastChild?this._getLastElementChild(e):H.Composed.getLastElementChild(e)},_getLastElementChild:function(e){for(var t=e.__dom.lastChild;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.__dom.previousSibling;return t},getNextElementSibling:function(e){return e.__dom&&void 0!==e.__dom.nextSibling?this._getNextElementSibling(e):H.Composed.getNextElementSibling(e)},_getNextElementSibling:function(e){for(var t=this,o=e.__dom.nextSibling;o&&o.nodeType!==Node.ELEMENT_NODE;)o=t.getNextSibling(o);return o},getPreviousElementSibling:function(e){return e.__dom&&void 0!==e.__dom.previousSibling?this._getPreviousElementSibling(e):H.Composed.getPreviousElementSibling(e)},_getPreviousElementSibling:function(e){for(var t=this,o=e.__dom.previousSibling;o&&o.nodeType!==Node.ELEMENT_NODE;)o=t.getPreviousSibling(o);return o},saveChildNodes:function(e){if(!this.hasChildNodes(e)){e.__dom=e.__dom||{},e.__dom.firstChild=e.firstChild,e.__dom.lastChild=e.lastChild;for(var t,o=e.__dom.childNodes=H.arrayCopyChildNodes(e),i=0;i<o.length&&(t=o[i]);i++)t.__dom=t.__dom||{},t.__dom.parentNode=e,t.__dom.nextSibling=o[i+1]||null,t.__dom.previousSibling=o[i-1]||null,M.patchNode(t)}},recordInsertBefore:function(e,t,o){var i=this;if(t.__dom.childNodes=null,e.nodeType===Node.DOCUMENT_FRAGMENT_NODE){for(var n=H.arrayCopyChildNodes(e),r=0;r<n.length;r++)i._linkNode(n[r],t,o);e.__dom=e.__dom||{},e.__dom.firstChild=e.__dom.lastChild=null,e.__dom.childNodes=null}else this._linkNode(e,t,o)},_linkNode:function(e,t,o){M.patchNode(e),o=o||null,e.__dom=e.__dom||{},t.__dom=t.__dom||{},o&&(o.__dom=o.__dom||{}),e.__dom.previousSibling=o?o.__dom.previousSibling:t.__dom.lastChild,e.__dom.previousSibling&&(e.__dom.previousSibling.__dom.nextSibling=e),e.__dom.nextSibling=o,e.__dom.nextSibling&&(e.__dom.nextSibling.__dom.previousSibling=e),e.__dom.parentNode=t,o?o===t.__dom.firstChild&&(t.__dom.firstChild=e):(t.__dom.lastChild=e,t.__dom.firstChild||(t.__dom.firstChild=e)),t.__dom.childNodes=null},recordRemoveChild:function(e,t){e.__dom=e.__dom||{},t.__dom=t.__dom||{},e===t.__dom.firstChild&&(t.__dom.firstChild=e.__dom.nextSibling),e===t.__dom.lastChild&&(t.__dom.lastChild=e.__dom.previousSibling);var o=e.__dom.previousSibling,i=e.__dom.nextSibling;o&&(o.__dom=o.__dom||{},o.__dom.nextSibling=i),i&&(i.__dom=i.__dom||{},i.__dom.previousSibling=o),e.__dom.parentNode=e.__dom.previousSibling=e.__dom.nextSibling=null,t.__dom.childNodes=null}},H.Composed={hasParentNode:function(e){return Boolean(e.__dom&&void 0!==e.__dom.$parentNode)},hasChildNodes:function(e){return Boolean(e.__dom&&void 0!==e.__dom.$childNodes)},getChildNodes:function(e){return this.hasChildNodes(e)?this._getChildNodes(e):!e.__patched&&H.arrayCopy(e.childNodes)},_getChildNodes:function(e){if(!e.__dom.$childNodes){e.__dom.$childNodes=[];for(var t=e.__dom.$firstChild;t;t=t.__dom.$nextSibling)e.__dom.$childNodes.push(t)}return e.__dom.$childNodes},getComposedChildNodes:function(e){return e.__dom.$childNodes},getParentNode:function(e){return this.hasParentNode(e)?e.__dom.$parentNode:!e.__patched&&e.parentNode},getFirstChild:function(e){return e.__patched?e.__dom.$firstChild:e.firstChild},getLastChild:function(e){return e.__patched?e.__dom.$lastChild:e.lastChild},getNextSibling:function(e){return e.__patched?e.__dom.$nextSibling:e.nextSibling},getPreviousSibling:function(e){return e.__patched?e.__dom.$previousSibling:e.previousSibling},getFirstElementChild:function(e){return e.__patched?this._getFirstElementChild(e):e.firstElementChild},_getFirstElementChild:function(e){for(var t=e.__dom.$firstChild;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.__dom.$nextSibling;return t},getLastElementChild:function(e){return e.__patched?this._getLastElementChild(e):e.lastElementChild},_getLastElementChild:function(e){for(var t=e.__dom.$lastChild;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.__dom.$previousSibling;return t},getNextElementSibling:function(e){return e.__patched?this._getNextElementSibling(e):e.nextElementSibling},_getNextElementSibling:function(e){for(var t=this,o=e.__dom.$nextSibling;o&&o.nodeType!==Node.ELEMENT_NODE;)o=t.getNextSibling(o);return o},getPreviousElementSibling:function(e){return e.__patched?this._getPreviousElementSibling(e):e.previousElementSibling},_getPreviousElementSibling:function(e){for(var t=this,o=e.__dom.$previousSibling;o&&o.nodeType!==Node.ELEMENT_NODE;)o=t.getPreviousSibling(o);return o},saveChildNodes:function(e){var t=this;if(!this.hasChildNodes(e)){e.__dom=e.__dom||{},e.__dom.$firstChild=e.firstChild,e.__dom.$lastChild=e.lastChild;for(var o,i=e.__dom.$childNodes=H.arrayCopyChildNodes(e),n=0;n<i.length&&(o=i[n]);n++)t.saveComposedData(o)}},saveComposedData:function(e){e.__dom=e.__dom||{},void 0===e.__dom.$parentNode&&(e.__dom.$parentNode=e.parentNode),void 0===e.__dom.$nextSibling&&(e.__dom.$nextSibling=e.nextSibling),void 0===e.__dom.$previousSibling&&(e.__dom.$previousSibling=e.previousSibling)},recordInsertBefore:function(e,t,o){var i=this;if(t.__dom.$childNodes=null,e.nodeType===Node.DOCUMENT_FRAGMENT_NODE)for(var n=this.getFirstChild(e);n;n=this.getNextSibling(n))i._linkNode(n,t,o);else this._linkNode(e,t,o)},_linkNode:function(e,t,o){e.__dom=e.__dom||{},t.__dom=t.__dom||{},o&&(o.__dom=o.__dom||{}),e.__dom.$previousSibling=o?o.__dom.$previousSibling:t.__dom.$lastChild,e.__dom.$previousSibling&&(e.__dom.$previousSibling.__dom.$nextSibling=e),e.__dom.$nextSibling=o,e.__dom.$nextSibling&&(e.__dom.$nextSibling.__dom.$previousSibling=e),e.__dom.$parentNode=t,o?o===t.__dom.$firstChild&&(t.__dom.$firstChild=e):(t.__dom.$lastChild=e,t.__dom.$firstChild||(t.__dom.$firstChild=e)),t.__dom.$childNodes=null},recordRemoveChild:function(e,t){e.__dom=e.__dom||{},t.__dom=t.__dom||{},e===t.__dom.$firstChild&&(t.__dom.$firstChild=e.__dom.$nextSibling),e===t.__dom.$lastChild&&(t.__dom.$lastChild=e.__dom.$previousSibling);var o=e.__dom.$previousSibling,i=e.__dom.$nextSibling;o&&(o.__dom=o.__dom||{},o.__dom.$nextSibling=i),i&&(i.__dom=i.__dom||{},i.__dom.$previousSibling=o),e.__dom.$parentNode=e.__dom.$previousSibling=e.__dom.$nextSibling=null,t.__dom.$childNodes=null},clearChildNodes:function(e){for(var t,o=this,i=this.getChildNodes(e),n=0;n<i.length;n++)t=i[n],o.recordRemoveChild(t,e),G.call(e,t)},saveParentNode:function(e){e.__dom=e.__dom||{},e.__dom.$parentNode=e.parentNode},insertBefore:function(e,t,o){return this.saveChildNodes(e),this._addChild(e,t,o),U.call(e,t,o||null)},appendChild:function(e,t){return this.saveChildNodes(e),this._addChild(e,t),q.call(e,t)},removeChild:function(e,t){var o=this.getParentNode(t);if(this.saveChildNodes(e),this._removeChild(e,t),o===e)return G.call(e,t)},_addChild:function(e,t,o){var i=this,n=t.nodeType===Node.DOCUMENT_FRAGMENT_NODE,r=this.getParentNode(t);if(r&&this._removeChild(r,t),n)for(var d=this.getChildNodes(t),s=0;s<d.length;s++){var a=d[s];i._removeChild(t,a),i.recordInsertBefore(a,e,o)}else this.recordInsertBefore(t,e,o)},_removeChild:function(e,t){this.recordRemoveChild(t,e)}};var W={},z="function"==typeof Event?Event:function(e,t){t=t||{};var o=document.createEvent("Event");return o.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),o},X=function(){function e(e){this.root=e,this.insertionPointTag="slot"}return e.prototype.getInsertionPoints=function(){return this.root.querySelectorAll(this.insertionPointTag)},e.prototype.hasInsertionPoint=function(){return Boolean(this.root._insertionPoints&&this.root._insertionPoints.length)},e.prototype.isInsertionPoint=function(e){return e.localName&&e.localName==this.insertionPointTag},e.prototype.distribute=function(){return this.hasInsertionPoint()?this.distributePool(this.root,this.collectPool()):[]},e.prototype.collectPool=function(){return H.arrayCopy(H.Logical.getChildNodes(this.root.host))},e.prototype.distributePool=function(e,t){for(var o,i=this,n=[],r=this.root._insertionPoints,d=0,s=r.length;d<s&&(o=r[d]);d++){i.distributeInsertionPoint(o,t);var a=H.Logical.getParentNode(o);a&&a.shadyRoot&&i.hasInsertionPoint(a.shadyRoot)&&n.push(a.shadyRoot)}for(var l=0;l<t.length;l++){var h=t[l];if(h){h._assignedSlot=void 0;var u=H.Composed.getParentNode(h);u&&H.Composed.removeChild(u,h)}}return n},e.prototype.distributeInsertionPoint=function(e,t){var o=this,i=e._assignedNodes;i&&this.clearAssignedSlots(e,!0),e._assignedNodes=[];for(var n,r=!1,d=!1,s=0,a=t.length;s<a;s++)n=t[s],n&&o.matchesInsertionPoint(n,e)&&(n.__prevAssignedSlot!=e&&(r=!0),o.distributeNodeInto(n,e),t[s]=void 0,d=!0);if(!d)for(var l,h=H.Logical.getChildNodes(e),u=0;u<h.length;u++)l=h[u],l.__prevAssignedSlot!=e&&(r=!0),o.distributeNodeInto(l,e);if(i){for(var _=0;_<i.length;_++)i[_].__prevAssignedSlot=null;e._assignedNodes.length<i.length&&(r=!0)}this.setDistributedNodesOnInsertionPoint(e),r&&this._fireSlotChange(e)},e.prototype.clearAssignedSlots=function(e,t){var o=e._assignedNodes;if(o)for(var i=0;i<o.length;i++){var n=o[i];t&&(n.__prevAssignedSlot=n._assignedSlot),n._assignedSlot===e&&(n._assignedSlot=null)}},e.prototype.matchesInsertionPoint=function(e,t){var o=t.getAttribute("name");o=o?o.trim():"";var i=e.getAttribute&&e.getAttribute("slot");return i=i?i.trim():"",i==o},e.prototype.distributeNodeInto=function(e,t){t._assignedNodes.push(e),e._assignedSlot=t},e.prototype.setDistributedNodesOnInsertionPoint=function(e){var t=this,o=e._assignedNodes;e._distributedNodes=[];for(var i,n=0;n<o.length&&(i=o[n]);n++)if(t.isInsertionPoint(i)){var r=i._distributedNodes;if(r)for(var d=0;d<r.length;d++)e._distributedNodes.push(r[d])}else e._distributedNodes.push(o[n])},e.prototype._fireSlotChange=function(e){e.dispatchEvent(new z("slotchange")),e._assignedSlot&&this._fireSlotChange(e._assignedSlot)},e.prototype.isFinalDestination=function(e){return!e._assignedSlot},e}(),J=function(e){if(!e)throw"Must provide a host";var t=document.createDocumentFragment();return t.__proto__=Q,t._init(e),t},K={_init:function(e){this.__localName="ShadyRoot",e.shadyRoot=this,this.host=e,H.Logical.saveChildNodes(e),H.Logical.saveChildNodes(this),this._clean=!0,this._hasRendered=!1,this._distributor=new X(this),this.update()},update:function(){var e=this._findDistributionRoot(this.host);e._clean&&(e._clean=!1,l(function(){e.render()}))},_findDistributionRoot:function(e){for(var t=e.shadyRoot;e&&this._elementNeedsDistribution(e);)t=e.getRootNode(),e=t&&t.host;return t},_elementNeedsDistribution:function(e){for(var t,o=this,i=H.Logical.getChildNodes(e),n=0;n<i.length;n++)if(t=i[n],o._distributor.isInsertionPoint(t))return e.getRootNode()},render:function(){this._clean||(this._clean=!0,this._skipUpdateInsertionPoints?this._hasRendered||(this._insertionPoints=[]):this.updateInsertionPoints(),this._skipUpdateInsertionPoints=!1,this.distribute(),this.compose(),this._hasRendered=!0)},forceRender:function(){this._clean=!1,this.render()},distribute:function(){for(var e=this._distributor.distribute(),t=0;t<e.length;t++)e[t].forceRender()},updateInsertionPoints:function(){var e=this,t=this.__insertionPoints;if(t)for(var o,i=0;i<t.length;i++)o=t[i],o.getRootNode()!==e&&e._distributor.clearAssignedSlots(o);t=this._insertionPoints=this._distributor.getInsertionPoints();for(var n,r=0;r<t.length;r++)n=t[r],H.Logical.saveChildNodes(n),H.Logical.saveChildNodes(H.Logical.getParentNode(n))},get _insertionPoints(){return this.__insertionPoints||this.updateInsertionPoints(),this.__insertionPoints||(this.__insertionPoints=[])},set _insertionPoints(e){this.__insertionPoints=e},hasInsertionPoint:function(){return this._distributor.hasInsertionPoint()},compose:function(){this._composeTree()},_composeTree:function(){var e=this;this._updateChildNodes(this.host,this._composeNode(this.host));for(var t,o,i=this._insertionPoints||[],n=0,r=i.length;n<r&&(t=i[n]);n++)o=H.Logical.getParentNode(t),o!==e.host&&o!==e&&e._updateChildNodes(o,e._composeNode(o))},_composeNode:function(e){for(var t=this,o=[],i=H.Logical.getChildNodes(e.shadyRoot||e),n=0;n<i.length;n++){var r=i[n];if(t._distributor.isInsertionPoint(r))for(var d=r._distributedNodes||(r._distributedNodes=[]),s=0;s<d.length;s++){var a=d[s];t.isFinalDestination(r,a)&&o.push(a)}else o.push(r)}return o},isFinalDestination:function(e,t){return this._distributor.isFinalDestination(e,t)},_updateChildNodes:function(e,t){for(var o,i=H.Composed.getChildNodes(e),n=B(t,i),r=0,d=0;r<n.length&&(o=n[r]);r++){for(var s,a=0;a<o.removed.length&&(s=o.removed[a]);a++)H.Composed.getParentNode(s)===e&&H.Composed.removeChild(e,s),i.splice(o.index+d,1);d-=o.addedCount}for(var l,h,u=0;u<n.length&&(l=n[u]);u++){h=i[l.index];for(var _,c=l.index;c<l.index+l.addedCount;c++)_=t[c],H.Composed.insertBefore(e,_,h),i.splice(c,0,_)}},getInsertionPointTag:function(){return this._distributor.insertionPointTag}},Q=Object.create(DocumentFragment.prototype);i(Q,K);var V,Y=window.customElements,Z=[],ee=0,te=100;h.list=Z;var oe=/[&\u00A0"]/g,ie=/[&\u00A0<>]/g,ne=f(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]),re=f(["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"]),de={addNode:function(e,t,o){var i=this.ownerShadyRootForNode(e);if(i){t.__noInsertionPoint&&(i._skipUpdateInsertionPoints=!0);var n=this._maybeAddInsertionPoint(t,e,i);n&&(i._skipUpdateInsertionPoints=!1),this._addedNode(t,i)}H.Logical.hasChildNodes(e)&&H.Logical.recordInsertBefore(t,e,o);var r=this._maybeDistribute(t,e,i)||e.shadyRoot;return r},removeNode:function(e){var t,o=H.Logical.hasParentNode(e)&&H.Logical.getParentNode(e),i=this.ownerShadyRootForNode(e);return o&&(t=this.maybeDistributeParent(e),H.Logical.recordRemoveChild(e,o),i&&(this._removeDistributedChildren(i,e)||o.localName===i.getInsertionPointTag())&&(i._skipUpdateInsertionPoints=!1,i.update())),this._removeOwnerShadyRoot(e),i&&this._removedNode(e,i),t},_scheduleObserver:function(e,t,o){var i=e.__dom&&e.__dom.observer;i&&(t&&i.addedNodes.push(t),o&&i.removedNodes.push(o),i.schedule())},removeNodeFromParent:function(e,t){t?(this._scheduleObserver(t,null,e),this.removeNode(e)):this._removeOwnerShadyRoot(e)},_hasCachedOwnerRoot:function(e){return Boolean(void 0!==e.__ownerShadyRoot)},getRootNode:function(t){if(t&&t.nodeType){var o=t.__ownerShadyRoot;if(void 0===o){if(e(t))o=t;else{var i=H.Logical.getParentNode(t);o=i?this.getRootNode(i):t}document.documentElement.contains(t)&&(t.__ownerShadyRoot=o)}return o}},ownerShadyRootForNode:function(t){var o=this.getRootNode(t);if(e(o))return o},_maybeDistribute:function(e,t,o){var i=o&&o.getInsertionPointTag()||"",n=e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&!e.__noInsertionPoint&&i&&e.querySelector(i),r=n&&H.Logical.getParentNode(n).nodeType!==Node.DOCUMENT_FRAGMENT_NODE,d=n||e.localName===i;(d||t.localName===i)&&o&&o.update();var s=this._nodeNeedsDistribution(t);return s&&t.shadyRoot.update(),s||d&&!r},_maybeAddInsertionPoint:function(e,t,o){var i,n=this,r=o.getInsertionPointTag();if(e.nodeType!==Node.DOCUMENT_FRAGMENT_NODE||e.__noInsertionPoint)e.localName===r&&(H.Logical.saveChildNodes(t),H.Logical.saveChildNodes(e),i=!0);else for(var d,s,a,l=e.querySelectorAll(r),h=0;h<l.length&&(d=l[h]);h++)s=H.Logical.getParentNode(d),s===e&&(s=t),a=n._maybeAddInsertionPoint(d,s,o),i=i||a;return i},_nodeNeedsDistribution:function(e){return e&&e.shadyRoot&&e.shadyRoot.hasInsertionPoint()},_addedNode:function(){},_removedNode:function(){},_removeDistributedChildren:function(e,t){for(var o,i=this,n=e._insertionPoints,r=0;r<n.length;r++){var d=n[r];if(i._contains(t,d))for(var s=d.assignedNodes({flatten:!0}),a=0;a<s.length;a++){o=!0;var l=s[a],h=H.Composed.getParentNode(l);h&&H.Composed.removeChild(h,l)}}return o},_contains:function(e,t){for(;t;){if(t==e)return!0;t=H.Logical.getParentNode(t)}},_removeOwnerShadyRoot:function(e){var t=this;if(this._hasCachedOwnerRoot(e))for(var o,i=H.Logical.getChildNodes(e),n=0,r=i.length;n<r&&(o=i[n]);n++)t._removeOwnerShadyRoot(o);e.__ownerShadyRoot=void 0},firstComposedNode:function(e){for(var t,o=e.assignedNodes({flatten:!0}),i=this.getRootNode(e),n=0,r=o.length;n<r&&(t=o[n]);n++)if(i.isFinalDestination(e,t))return t},clearNode:function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},maybeDistributeParent:function(e){var t=H.Logical.getParentNode(e);if(this._nodeNeedsDistribution(t))return t.shadyRoot.update(),!0},maybeDistributeAttributeChange:function(e,t){var o="slot"===e.localName&&"name"===t;if(o){var i=this.getRootNode(e);i.update&&i.update()}},query:function(e,t,o){var i=[];return this._queryElements(H.Logical.getChildNodes(e),t,o,i),i},_queryElements:function(e,t,o,i){for(var n,r=this,d=0,s=e.length;d<s&&(n=e[d]);d++)if(n.nodeType===Node.ELEMENT_NODE&&r._queryElement(n,t,o,i))return!0},_queryElement:function(e,t,o,i){var n=t(e);return n&&i.push(e),o&&o(n)?n:void this._queryElements(H.Logical.getChildNodes(e),t,o,i)},activeElementForNode:function(t){var o=this,i=document.activeElement;if(!i)return null;var n=!!e(t);if(t!==document){if(!n)return null;if(t.host===i||!t.host.contains(i))return null}for(var r=this.ownerShadyRootForNode(i);r&&r!==t;)i=r.host,r=o.ownerShadyRootForNode(i);return t===document?r?null:i:r===t?i:null}},se=Element.prototype.cloneNode,ae=Document.prototype.importNode,le=Element.prototype.setAttribute,he=Element.prototype.removeAttribute,ue={};Object.defineProperties(ue,{parentElement:{get:function(){return H.Logical.getParentNode(this)},configurable:!0},parentNode:{get:function(){return H.Logical.getParentNode(this)},configurable:!0},nextSibling:{get:function(){return H.Logical.getNextSibling(this)},configurable:!0},previousSibling:{get:function(){return H.Logical.getPreviousSibling(this)},configurable:!0},nextElementSibling:{get:function(){return H.Logical.getNextElementSibling(this)},configurable:!0},previousElementSibling:{get:function(){return H.Logical.getPreviousElementSibling(this)},configurable:!0},assignedSlot:{get:function(){return this._assignedSlot},configurable:!0}});var _e={appendChild:function(e){return this.insertBefore(e)},insertBefore:function(t,o){if(o&&H.Logical.getParentNode(o)!==this)throw Error("The ref_node to be inserted before is not a child of this node");if(t.nodeType!==Node.DOCUMENT_FRAGMENT_NODE){var i=H.Logical.getParentNode(t);de.removeNodeFromParent(t,i)}if(!de.addNode(this,t,o)){if(o){var n=de.ownerShadyRootForNode(o);n&&(o=o.localName===n.getInsertionPointTag()?de.firstComposedNode(o):o)}var r=e(this)?this.host:this;o?H.Composed.insertBefore(r,t,o):H.Composed.appendChild(r,t)}return de._scheduleObserver(this,t),t},removeChild:function(t){if(H.Logical.getParentNode(t)!==this)throw Error("The node to be removed is not a child of this node: "+t);if(!de.removeNode(t)){var o=e(this)?this.host:this,i=H.Composed.getParentNode(t);o===i&&H.Composed.removeChild(o,t)}return de._scheduleObserver(this,null,t),t},replaceChild:function(e,t){return this.insertBefore(e,t),this.removeChild(t),e},querySelector:function(e){var o=de.query(this,function(o){return t(o,e)},function(e){return Boolean(e)})[0];return o||null},querySelectorAll:function(e){return de.query(this,function(o){return t(o,e)})},cloneNode:function(e){if("template"==this.localName)return se.call(this,e);var t=se.call(this,!1);if(e)for(var o,i=this.childNodes,n=0;n<i.length;n++)o=i[n].cloneNode(!0),t.appendChild(o);return t},importNode:function(e,t){var o=this instanceof Document?this:this.ownerDocument,i=ae.call(o,e,!1);if(t){var n=H.Logical.getChildNodes(e);M.patchNode(i);for(var r,d=0;d<n.length;d++)r=o.importNode(n[d],!0),i.appendChild(r)}return i}};Object.defineProperties(_e,{childNodes:{get:function(){var e=H.Logical.getChildNodes(this);return Array.isArray(e)?e:H.arrayCopyChildNodes(this)},configurable:!0},children:{get:function(){return H.Logical.hasChildNodes(this)?Array.prototype.filter.call(this.childNodes,function(e){return e.nodeType===Node.ELEMENT_NODE}):H.arrayCopyChildren(this)},configurable:!0},firstChild:{get:function(){return H.Logical.getFirstChild(this)},configurable:!0},lastChild:{get:function(){return H.Logical.getLastChild(this)},configurable:!0},firstElementChild:{get:function(){return H.Logical.getFirstElementChild(this)},configurable:!0},lastElementChild:{get:function(){return H.Logical.getLastElementChild(this)},configurable:!0},textContent:{get:function(){if(this.childNodes){for(var e,t=[],o=0,i=this.childNodes;e=i[o];o++)e.nodeType!==Node.COMMENT_NODE&&t.push(e.textContent);return t.join("")}return""},set:function(e){de.clearNode(this),e&&this.appendChild(document.createTextNode(e))},configurable:!0},innerHTML:{get:function(){return g(this)},set:function(e){var t=this;de.clearNode(this);var o=document.createElement("div");o.innerHTML=e;for(var i=H.arrayCopyChildNodes(o),n=0;n<i.length;n++)t.appendChild(i[n])},configurable:!0}});var ce={assignedNodes:function(e){return(e&&e.flatten?this._distributedNodes:this._assignedNodes)||[]},setAttribute:function(e,t){le.call(this,e,t),de.maybeDistributeParent(this)||de.maybeDistributeAttributeChange(this,e)},removeAttribute:function(e){he.call(this,e),de.maybeDistributeParent(this)||de.maybeDistributeAttributeChange(this,e)}};Object.defineProperties(ce,{shadowRoot:{get:function(){return this.shadyRoot}},slot:{get:function(){return this.getAttribute("slot")},set:function(e){this.setAttribute("slot",e)}}});var fe={get:function(){return de.activeElementForNode(this)}},me={};Object.defineProperties(me,{activeElement:fe});var ge={};Object.defineProperties(ge,{_activeElement:fe});var pe={Node:n({__patched:"Node"},ue),Fragment:n({__patched:"Fragment"},ue,_e,me),Element:n({__patched:"Element"},ue,_e,ce,me),Document:n({__patched:"Document"},ue,_e,ce,ge)},ve=function(e){return de.getRootNode(e)},Ne=function(){this._scheduled=!1,this.addedNodes=[],this.removedNodes=[],this.callbacks=new Set};Ne.prototype.schedule=function(){var e=this;this._scheduled||(this._scheduled=!0,x.then(function(){e.flush()}))},Ne.prototype.flush=function(){if(this._scheduled){this._scheduled=!1;var e=this.takeRecords();e.length&&this.callbacks.forEach(function(t){t(e)})}},Ne.prototype.takeRecords=function(){if(this.addedNodes.length||this.removedNodes.length){var e=[{addedNodes:this.addedNodes,removedNodes:this.removedNodes}];return this.addedNodes=[],this.removedNodes=[],e}return[]};var be=function(e,t){M.patchNode(e),e.__dom.observer||(e.__dom.observer=new Ne),e.__dom.observer.callbacks.add(t);var o=e.__dom.observer;return{_callback:t,_observer:o,_node:e,takeRecords:function(){return o.takeRecords()}}},Ce=function(e){var t=e&&e._observer;t&&(t.callbacks.delete(e._callback),t.callbacks.size||(e._node.__dom.observer=null))},Ee=0,ye=!1,Se={canPatchNode:function(e){switch(e){case document.head:case document.documentElement:return!1;default:return!0}},hasPrototypeDescriptors:Boolean(Object.getOwnPropertyDescriptor(window.Node.prototype,"textContent")),patch:function(e){Ee++,ye&&window.console.warn("patch node",e),this.hasPrototypeDescriptors?d(e,this.mixinForObject(e)):(window.console.warn("Patching instance rather than prototype",e),i(e,this.mixinForNode(e)))},mixinForObject:function(e){switch(e.nodeType){case Node.ELEMENT_NODE:return pe.Element;case Node.DOCUMENT_FRAGMENT_NODE:return pe.Fragment;case Node.DOCUMENT_NODE:return pe.Document;case Node.TEXT_NODE:case Node.COMMENT_NODE:
		return pe.Node}},unpatch:function(e){e.__sourceProto&&(e.__proto__=e.__sourceProto)}};M.patchNode=v,M.isNodePatched=b;var Pe=Element.prototype.addEventListener,Oe=Element.prototype.removeEventListener,De={blur:!0,focus:!0,focusin:!0,focusout:!0,click:!0,dblclick:!0,mousedown:!0,mouseenter:!0,mouseleave:!0,mousemove:!0,mouseout:!0,mouseover:!0,mouseup:!0,wheel:!0,beforeinput:!0,input:!0,keydown:!0,keyup:!0,compositionstart:!0,compositionupdate:!0,compositionend:!0,touchstart:!0,touchend:!0,touchmove:!0,touchcancel:!0,pointerover:!0,pointerenter:!0,pointerdown:!0,pointermove:!0,pointerup:!0,pointercancel:!0,pointerout:!0,pointerleave:!0,gotpointercapture:!0,lostpointercapture:!0,dragstart:!0,drag:!0,dragenter:!0,dragleave:!0,dragover:!0,drop:!0,dragend:!0,DOMActivate:!0,DOMFocusIn:!0,DOMFocusOut:!0,keypress:!0},Te={__patched:"Event",get composed(){return this.isTrusted&&void 0===this.__composed&&(this.__composed=De[this.type]),this.__composed||!1},composedPath:function(){return this.__composedPath||(this.__composedPath=C(this.__target,this.composed)),this.__composedPath},get target(){return E(this.currentTarget,this.composedPath())},get relatedTarget(){return this.__relatedTarget?(this.__relatedTargetComposedPath||(this.__relatedTargetComposedPath=C(this.__relatedTarget,!0)),E(this.currentTarget,this.__relatedTargetComposedPath)):null},stopPropagation:function(){Event.prototype.stopPropagation.call(this),this.__propagationStopped=!0},stopImmediatePropagation:function(){Event.prototype.stopImmediatePropagation.call(this),this.__immediatePropagationStopped=!0,this.__propagationStopped=!0}},we={focus:!0,blur:!0},Le=y(Event),xe=y(CustomEvent),Re=y(MouseEvent);if(L.inUse){window.ShadyDOM={tree:H,getNativeProperty:a,patch:v,isPatched:b,unpatch:N,isShadyRoot:e,enqueue:l,flush:h,inUse:L.inUse,filterMutations:p,observeChildren:be,unobserveChildren:Ce};var $e=function(e){v(e);var t=new J(e);return v(t),t};Element.prototype.attachShadow=function(){return $e(this)},Node.prototype.addEventListener=D,Node.prototype.removeEventListener=T,Event=Le,CustomEvent=xe,MouseEvent=Re,w(),Object.defineProperty(Node.prototype,"isConnected",{get:function(){return document.documentElement.contains(this)},configurable:!0}),Node.prototype.getRootNode=function(e){return ve(this,e)},Object.defineProperty(Element.prototype,"slot",{get:function(){return this.getAttribute("slot")},set:function(e){this.setAttribute("slot",e)},configurable:!0}),Object.defineProperty(Node.prototype,"assignedSlot",{get:function(){return this._assignedSlot||null},configurable:!0})}}();
		//# sourceMappingURL=shadydom.min.js.map
	
	
	/***/ },
	/* 4 */
	/***/ function(module, exports) {
	
		(function () {
		'use strict';
		
		/**
		@license
		Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
		This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
		The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
		The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
		Code distributed by Google as part of the polymer project is also
		subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
		*/
		
		/*
		Extremely simple css parser. Intended to be not more than what we need
		and definitely not necessarily correct =).
		*/
		
		// given a string of css, return a simple rule tree
		
		function parse(text) {
		  text = clean(text);
		  return parseCss(lex(text), text);
		}
		
		// remove stuff we don't care about that may hinder parsing
		function clean(cssText) {
		  return cssText.replace(RX.comments, '').replace(RX.port, '');
		}
		
		// super simple {...} lexer that returns a node tree
		function lex(text) {
		  var root = {
		    start: 0,
		    end: text.length
		  };
		  var n = root;
		  for (var i = 0, l = text.length; i < l; i++) {
		    if (text[i] === OPEN_BRACE) {
		      if (!n.rules) {
		        n.rules = [];
		      }
		      var p = n;
		      var previous = p.rules[p.rules.length - 1];
		      n = {
		        start: i + 1,
		        parent: p,
		        previous: previous
		      };
		      p.rules.push(n);
		    } else if (text[i] === CLOSE_BRACE) {
		      n.end = i + 1;
		      n = n.parent || root;
		    }
		  }
		  return root;
		}
		
		// add selectors/cssText to node tree
		function parseCss(node, text) {
		  var t = text.substring(node.start, node.end - 1);
		  node.parsedCssText = node.cssText = t.trim();
		  if (node.parent) {
		    var ss = node.previous ? node.previous.end : node.parent.start;
		    t = text.substring(ss, node.start - 1);
		    t = _expandUnicodeEscapes(t);
		    t = t.replace(RX.multipleSpaces, ' ');
		    // TODO(sorvell): ad hoc; make selector include only after last ;
		    // helps with mixin syntax
		    t = t.substring(t.lastIndexOf(';') + 1);
		    var s = node.parsedSelector = node.selector = t.trim();
		    node.atRule = s.indexOf(AT_START) === 0;
		    // note, support a subset of rule types...
		    if (node.atRule) {
		      if (s.indexOf(MEDIA_START) === 0) {
		        node.type = types.MEDIA_RULE;
		      } else if (s.match(RX.keyframesRule)) {
		        node.type = types.KEYFRAMES_RULE;
		        node.keyframesName = node.selector.split(RX.multipleSpaces).pop();
		      }
		    } else {
		      if (s.indexOf(VAR_START) === 0) {
		        node.type = types.MIXIN_RULE;
		      } else {
		        node.type = types.STYLE_RULE;
		      }
		    }
		  }
		  var r$ = node.rules;
		  if (r$) {
		    for (var i = 0, l = r$.length, r; i < l && (r = r$[i]); i++) {
		      parseCss(r, text);
		    }
		  }
		  return node;
		}
		
		// conversion of sort unicode escapes with spaces like `\33 ` (and longer) into
		// expanded form that doesn't require trailing space `\000033`
		function _expandUnicodeEscapes(s) {
		  return s.replace(/\\([0-9a-f]{1,6})\s/gi, function () {
		    var code = arguments[1],
		        repeat = 6 - code.length;
		    while (repeat--) {
		      code = '0' + code;
		    }
		    return '\\' + code;
		  });
		}
		
		// stringify parsed css.
		function stringify(node, preserveProperties, text) {
		  text = text || '';
		  // calc rule cssText
		  var cssText = '';
		  if (node.cssText || node.rules) {
		    var r$ = node.rules;
		    if (r$ && !_hasMixinRules(r$)) {
		      for (var i = 0, l = r$.length, r; i < l && (r = r$[i]); i++) {
		        cssText = stringify(r, preserveProperties, cssText);
		      }
		    } else {
		      cssText = preserveProperties ? node.cssText : removeCustomProps(node.cssText);
		      cssText = cssText.trim();
		      if (cssText) {
		        cssText = '  ' + cssText + '\n';
		      }
		    }
		  }
		  // emit rule if there is cssText
		  if (cssText) {
		    if (node.selector) {
		      text += node.selector + ' ' + OPEN_BRACE + '\n';
		    }
		    text += cssText;
		    if (node.selector) {
		      text += CLOSE_BRACE + '\n\n';
		    }
		  }
		  return text;
		}
		
		function _hasMixinRules(rules) {
		  return rules[0].selector.indexOf(VAR_START) === 0;
		}
		
		function removeCustomProps(cssText) {
		  cssText = removeCustomPropAssignment(cssText);
		  return removeCustomPropApply(cssText);
		}
		
		function removeCustomPropAssignment(cssText) {
		  return cssText.replace(RX.customProp, '').replace(RX.mixinProp, '');
		}
		
		function removeCustomPropApply(cssText) {
		  return cssText.replace(RX.mixinApply, '').replace(RX.varApply, '');
		}
		
		var types = {
		  STYLE_RULE: 1,
		  KEYFRAMES_RULE: 7,
		  MEDIA_RULE: 4,
		  MIXIN_RULE: 1000
		};
		
		var OPEN_BRACE = '{';
		var CLOSE_BRACE = '}';
		
		// helper regexp's
		var RX = {
		  comments: /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
		  port: /@import[^;]*;/gim,
		  customProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
		  mixinProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
		  mixinApply: /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
		  varApply: /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
		  keyframesRule: /^@[^\s]*keyframes/,
		  multipleSpaces: /\s+/g
		};
		
		var VAR_START = '--';
		var MEDIA_START = '@media';
		var AT_START = '@';
		
		/**
		@license
		Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
		This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
		The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
		The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
		Code distributed by Google as part of the polymer project is also
		subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
		*/
		
		var nativeShadow = !(window.ShadyDOM && window.ShadyDOM.inUse);
		// chrome 49 has semi-working css vars, check if box-shadow works
		// safari 9.1 has a recalc bug: https://bugs.webkit.org/show_bug.cgi?id=155782
		var nativeCssVariables = !navigator.userAgent.match('AppleWebKit/601') && window.CSS && CSS.supports && CSS.supports('box-shadow', '0 0 0 var(--foo)');
		
		// experimental support for native @apply
		function detectNativeApply() {
		  var style = document.createElement('style');
		  style.textContent = '.foo { @apply --foo }';
		  document.head.appendChild(style);
		  var nativeCssApply = style.sheet.cssRules[0].cssText.indexOf('apply') >= 0;
		  document.head.removeChild(style);
		  return nativeCssApply;
		}
		
		var nativeCssApply = false && detectNativeApply();
		
		function parseSettings(settings) {
		  if (settings) {
		    nativeCssVariables = nativeCssVariables && !settings.shimcssproperties;
		    nativeShadow = nativeShadow && !settings.shimshadow;
		  }
		}
		
		if (window.ShadyCSS) {
		  parseSettings(window.ShadyCSS);
		} else if (window.WebComponents) {
		  parseSettings(window.WebComponents.flags);
		}
		
		/**
		@license
		Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
		This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
		The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
		The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
		Code distributed by Google as part of the polymer project is also
		subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
		*/
		
		function toCssText(rules, callback) {
		  if (typeof rules === 'string') {
		    rules = parse(rules);
		  }
		  if (callback) {
		    forEachRule(rules, callback);
		  }
		  return stringify(rules, nativeCssVariables);
		}
		
		function rulesForStyle(style) {
		  if (!style.__cssRules && style.textContent) {
		    style.__cssRules = parse(style.textContent);
		  }
		  return style.__cssRules;
		}
		
		// Tests if a rule is a keyframes selector, which looks almost exactly
		// like a normal selector but is not (it has nothing to do with scoping
		// for example).
		function isKeyframesSelector(rule) {
		  return rule.parent && rule.parent.type === types.KEYFRAMES_RULE;
		}
		
		function forEachRule(node, styleRuleCallback, keyframesRuleCallback, onlyActiveRules) {
		  if (!node) {
		    return;
		  }
		  var skipRules = false;
		  if (onlyActiveRules) {
		    if (node.type === types.MEDIA_RULE) {
		      var matchMedia = node.selector.match(rx.MEDIA_MATCH);
		      if (matchMedia) {
		        // if rule is a non matching @media rule, skip subrules
		        if (!window.matchMedia(matchMedia[1]).matches) {
		          skipRules = true;
		        }
		      }
		    }
		  }
		  if (node.type === types.STYLE_RULE) {
		    styleRuleCallback(node);
		  } else if (keyframesRuleCallback && node.type === types.KEYFRAMES_RULE) {
		    keyframesRuleCallback(node);
		  } else if (node.type === types.MIXIN_RULE) {
		    skipRules = true;
		  }
		  var r$ = node.rules;
		  if (r$ && !skipRules) {
		    for (var i = 0, l = r$.length, r; i < l && (r = r$[i]); i++) {
		      forEachRule(r, styleRuleCallback, keyframesRuleCallback, onlyActiveRules);
		    }
		  }
		}
		
		// add a string of cssText to the document.
		function applyCss(cssText, moniker, target, contextNode) {
		  var style = createScopeStyle(cssText, moniker);
		  return applyStyle$1(style, target, contextNode);
		}
		
		function applyStyle$1(style, target, contextNode) {
		  target = target || document.head;
		  var after = contextNode && contextNode.nextSibling || target.firstChild;
		  lastHeadApplyNode = style;
		  return target.insertBefore(style, after);
		}
		
		function createScopeStyle(cssText, moniker) {
		  var style = document.createElement('style');
		  if (moniker) {
		    style.setAttribute('scope', moniker);
		  }
		  style.textContent = cssText;
		  return style;
		}
		
		var lastHeadApplyNode = null;
		
		// insert a comment node as a styling position placeholder.
		function applyStylePlaceHolder(moniker) {
		  var placeHolder = document.createComment(' Shady DOM styles for ' + moniker + ' ');
		  var after = lastHeadApplyNode ? lastHeadApplyNode.nextSibling : null;
		  var scope = document.head;
		  scope.insertBefore(placeHolder, after || scope.firstChild);
		  lastHeadApplyNode = placeHolder;
		  return placeHolder;
		}
		
		
		
		// cssBuildTypeForModule: function (module) {
		//   let dm = Polymer.DomModule.import(module);
		//   if (dm) {
		//     return getCssBuildType(dm);
		//   }
		// },
		//
		
		
		// Walk from text[start] matching parens
		// returns position of the outer end paren
		function findMatchingParen(text, start) {
		  var level = 0;
		  for (var i = start, l = text.length; i < l; i++) {
		    if (text[i] === '(') {
		      level++;
		    } else if (text[i] === ')') {
		      if (--level === 0) {
		        return i;
		      }
		    }
		  }
		  return -1;
		}
		
		function processVariableAndFallback(str, callback) {
		  // find 'var('
		  var start = str.indexOf('var(');
		  if (start === -1) {
		    // no var?, everything is prefix
		    return callback(str, '', '', '');
		  }
		  //${prefix}var(${inner})${suffix}
		  var end = findMatchingParen(str, start + 3);
		  var inner = str.substring(start + 4, end);
		  var prefix = str.substring(0, start);
		  // suffix may have other variables
		  var suffix = processVariableAndFallback(str.substring(end + 1), callback);
		  var comma = inner.indexOf(',');
		  // value and fallback args should be trimmed to match in property lookup
		  if (comma === -1) {
		    // variable, no fallback
		    return callback(prefix, inner.trim(), '', suffix);
		  }
		  // var(${value},${fallback})
		  var value = inner.substring(0, comma).trim();
		  var fallback = inner.substring(comma + 1).trim();
		  return callback(prefix, value, fallback, suffix);
		}
		
		var rx = {
		  VAR_ASSIGN: /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:([^;{]*)|{([^}]*)})(?:(?=[;\s}])|$)/gi,
		  MIXIN_MATCH: /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
		  VAR_CONSUMED: /(--[\w-]+)\s*([:,;)]|$)/gi,
		  ANIMATION_MATCH: /(animation\s*:)|(animation-name\s*:)/,
		  MEDIA_MATCH: /@media[^(]*(\([^)]*\))/,
		  IS_VAR: /^--/,
		  BRACKETED: /\{[^}]*\}/g,
		  HOST_PREFIX: '(?:^|[^.#[:])',
		  HOST_SUFFIX: '($|[.:[\\s>+~])'
		};
		
		/**
		@license
		Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
		This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
		The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
		The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
		Code distributed by Google as part of the polymer project is also
		subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
		*/
		
		/* Transforms ShadowDOM styling into ShadyDOM styling
		
		* scoping:
		
		  * elements in scope get scoping selector class="x-foo-scope"
		  * selectors re-written as follows:
		
		    div button -> div.x-foo-scope button.x-foo-scope
		
		* :host -> scopeName
		
		* :host(...) -> scopeName...
		
		* ::slotted(...) -> scopeName > ...
		
		* ...:dir(ltr|rtl) -> [dir="ltr|rtl"] ..., ...[dir="ltr|rtl"]
		
		* :host(:dir[rtl]) -> scopeName:dir(rtl) -> [dir="rtl"] scopeName, scopeName[dir="rtl"]
		
		*/
		var StyleTransformer = {
		
		  // Given a node and scope name, add a scoping class to each node
		  // in the tree. This facilitates transforming css into scoped rules.
		  dom: function dom(node, scope, shouldRemoveScope) {
		    // one time optimization to skip scoping...
		    if (node.__styleScoped) {
		      node.__styleScoped = null;
		    } else {
		      this._transformDom(node, scope || '', shouldRemoveScope);
		    }
		  },
		
		  _transformDom: function _transformDom(node, selector, shouldRemoveScope) {
		    if (node.classList) {
		      this.element(node, selector, shouldRemoveScope);
		    }
		    var c$ = node.localName === 'template' ? (node.content || node._content).childNodes : node.children || node.childNodes;
		    if (c$) {
		      for (var i = 0; i < c$.length; i++) {
		        this._transformDom(c$[i], selector, shouldRemoveScope);
		      }
		    }
		  },
		
		  element: function element(_element, scope, shouldRemoveScope) {
		    // note: if using classes, we add both the general 'style-scope' class
		    // as well as the specific scope. This enables easy filtering of all
		    // `style-scope` elements
		    if (scope) {
		      // note: svg on IE does not have classList so fallback to class
		      if (_element.classList) {
		        if (shouldRemoveScope) {
		          _element.classList.remove(SCOPE_NAME);
		          _element.classList.remove(scope);
		        } else {
		          _element.classList.add(SCOPE_NAME);
		          _element.classList.add(scope);
		        }
		      } else if (_element.getAttribute) {
		        var c = _element.getAttribute(CLASS);
		        if (shouldRemoveScope) {
		          if (c) {
		            _element.setAttribute(CLASS, c.replace(SCOPE_NAME, '').replace(scope, ''));
		          }
		        } else {
		          _element.setAttribute(CLASS, (c ? c + ' ' : '') + SCOPE_NAME + ' ' + scope);
		        }
		      }
		    }
		  },
		
		  elementStyles: function elementStyles(element, styleRules, callback) {
		    var cssBuildType = element.__cssBuild;
		    // no need to shim selectors if settings.useNativeShadow, also
		    // a shady css build will already have transformed selectors
		    // NOTE: This method may be called as part of static or property shimming.
		    // When there is a targeted build it will not be called for static shimming,
		    // but when the property shim is used it is called and should opt out of
		    // static shimming work when a proper build exists.
		    var cssText = nativeShadow || cssBuildType === 'shady' ? toCssText(styleRules, callback) : this.css(styleRules, element.is, element.extends, callback) + '\n\n';
		    return cssText.trim();
		  },
		
		  // Given a string of cssText and a scoping string (scope), returns
		  // a string of scoped css where each selector is transformed to include
		  // a class created from the scope. ShadowDOM selectors are also transformed
		  // (e.g. :host) to use the scoping selector.
		  css: function css(rules, scope, ext, callback) {
		    var hostScope = this._calcHostScope(scope, ext);
		    scope = this._calcElementScope(scope);
		    var self = this;
		    return toCssText(rules, function (rule) {
		      if (!rule.isScoped) {
		        self.rule(rule, scope, hostScope);
		        rule.isScoped = true;
		      }
		      if (callback) {
		        callback(rule, scope, hostScope);
		      }
		    });
		  },
		
		  _calcElementScope: function _calcElementScope(scope) {
		    if (scope) {
		      return CSS_CLASS_PREFIX + scope;
		    } else {
		      return '';
		    }
		  },
		
		  _calcHostScope: function _calcHostScope(scope, ext) {
		    return ext ? '[is=' + scope + ']' : scope;
		  },
		
		  rule: function rule(_rule, scope, hostScope) {
		    this._transformRule(_rule, this._transformComplexSelector, scope, hostScope);
		  },
		
		  // transforms a css rule to a scoped rule.
		  _transformRule: function _transformRule(rule, transformer, scope, hostScope) {
		    // NOTE: save transformedSelector for subsequent matching of elements
		    // against selectors (e.g. when calculating style properties)
		    rule.selector = rule.transformedSelector = this._transformRuleCss(rule, transformer, scope, hostScope);
		  },
		
		  _transformRuleCss: function _transformRuleCss(rule, transformer, scope, hostScope) {
		    var p$ = rule.selector.split(COMPLEX_SELECTOR_SEP);
		    // we want to skip transformation of rules that appear in keyframes,
		    // because they are keyframe selectors, not element selectors.
		    if (!isKeyframesSelector(rule)) {
		      for (var i = 0, l = p$.length, p; i < l && (p = p$[i]); i++) {
		        p$[i] = transformer.call(this, p, scope, hostScope);
		      }
		    }
		    return p$.join(COMPLEX_SELECTOR_SEP);
		  },
		
		  _transformComplexSelector: function _transformComplexSelector(selector, scope, hostScope) {
		    var _this = this;
		
		    var stop = false;
		    selector = selector.trim();
		    selector = selector.replace(SLOTTED_START, HOST + ' $1');
		    selector = selector.replace(SIMPLE_SELECTOR_SEP, function (m, c, s) {
		      if (!stop) {
		        var info = _this._transformCompoundSelector(s, c, scope, hostScope);
		        stop = stop || info.stop;
		        c = info.combinator;
		        s = info.value;
		      }
		      return c + s;
		    });
		    return selector;
		  },
		
		  _transformCompoundSelector: function _transformCompoundSelector(selector, combinator, scope, hostScope) {
		    // replace :host with host scoping class
		    var slottedIndex = selector.indexOf(SLOTTED);
		    if (selector.indexOf(HOST) >= 0) {
		      selector = this._transformHostSelector(selector, hostScope);
		      // replace other selectors with scoping class
		    } else if (slottedIndex !== 0) {
		      selector = scope ? this._transformSimpleSelector(selector, scope) : selector;
		    }
		    // mark ::slotted() scope jump to replace with descendant selector + arg
		    // also ignore left-side combinator
		    var slotted = false;
		    if (slottedIndex >= 0) {
		      combinator = '';
		      slotted = true;
		    }
		    // process scope jumping selectors up to the scope jump and then stop
		    var stop = void 0;
		    if (slotted) {
		      stop = true;
		      if (slotted) {
		        // .zonk ::slotted(.foo) -> .zonk.scope > .foo
		        selector = selector.replace(SLOTTED_PAREN, function (m, paren) {
		          return ' > ' + paren;
		        });
		      }
		    }
		    selector = selector.replace(DIR_PAREN, function (m, before, dir) {
		      return '[dir="' + dir + '"] ' + before + ', ' + before + '[dir="' + dir + '"]';
		    });
		    return { value: selector, combinator: combinator, stop: stop };
		  },
		
		  _transformSimpleSelector: function _transformSimpleSelector(selector, scope) {
		    var p$ = selector.split(PSEUDO_PREFIX);
		    p$[0] += scope;
		    return p$.join(PSEUDO_PREFIX);
		  },
		
		  // :host(...) -> scopeName...
		  _transformHostSelector: function _transformHostSelector(selector, hostScope) {
		    var m = selector.match(HOST_PAREN);
		    var paren = m && m[2].trim() || '';
		    if (paren) {
		      if (!paren[0].match(SIMPLE_SELECTOR_PREFIX)) {
		        // paren starts with a type selector
		        var typeSelector = paren.split(SIMPLE_SELECTOR_PREFIX)[0];
		        // if the type selector is our hostScope then avoid pre-pending it
		        if (typeSelector === hostScope) {
		          return paren;
		          // otherwise, this selector should not match in this scope so
		          // output a bogus selector.
		        } else {
		          return SELECTOR_NO_MATCH;
		        }
		      } else {
		        // make sure to do a replace here to catch selectors like:
		        // `:host(.foo)::before`
		        return selector.replace(HOST_PAREN, function (m, host, paren) {
		          return hostScope + paren;
		        });
		      }
		      // if no paren, do a straight :host replacement.
		      // TODO(sorvell): this should not strictly be necessary but
		      // it's needed to maintain support for `:host[foo]` type selectors
		      // which have been improperly used under Shady DOM. This should be
		      // deprecated.
		    } else {
		      return selector.replace(HOST, hostScope);
		    }
		  },
		
		  documentRule: function documentRule(rule) {
		    // reset selector in case this is redone.
		    rule.selector = rule.parsedSelector;
		    this.normalizeRootSelector(rule);
		    this._transformRule(rule, this._transformDocumentSelector);
		  },
		
		  normalizeRootSelector: function normalizeRootSelector(rule) {
		    if (rule.selector === ROOT) {
		      rule.selector = 'html';
		    }
		  },
		
		  _transformDocumentSelector: function _transformDocumentSelector(selector) {
		    return selector.match(SLOTTED) ? this._transformComplexSelector(selector, SCOPE_DOC_SELECTOR) : this._transformSimpleSelector(selector.trim(), SCOPE_DOC_SELECTOR);
		  }
		};
		
		var SCOPE_NAME = 'style-scope';
		var SCOPE_DOC_SELECTOR = ':not(.' + SCOPE_NAME + ')';
		var COMPLEX_SELECTOR_SEP = ',';
		var SIMPLE_SELECTOR_SEP = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=\[])+)/g;
		var SIMPLE_SELECTOR_PREFIX = /[[.:#*]/;
		var HOST = ':host';
		var ROOT = ':root';
		var SLOTTED = '::slotted';
		var SLOTTED_START = new RegExp('^(' + SLOTTED + ')');
		// NOTE: this supports 1 nested () pair for things like
		// :host(:not([selected]), more general support requires
		// parsing which seems like overkill
		var HOST_PAREN = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/;
		// similar to HOST_PAREN
		var SLOTTED_PAREN = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/;
		var DIR_PAREN = /(.*):dir\((?:(ltr|rtl))\)/;
		var CSS_CLASS_PREFIX = '.';
		var PSEUDO_PREFIX = ':';
		var CLASS = 'class';
		var SELECTOR_NO_MATCH = 'should_not_match';
		
		var asyncGenerator = function () {
		  function AwaitValue(value) {
		    this.value = value;
		  }
		
		  function AsyncGenerator(gen) {
		    var front, back;
		
		    function send(key, arg) {
		      return new Promise(function (resolve, reject) {
		        var request = {
		          key: key,
		          arg: arg,
		          resolve: resolve,
		          reject: reject,
		          next: null
		        };
		
		        if (back) {
		          back = back.next = request;
		        } else {
		          front = back = request;
		          resume(key, arg);
		        }
		      });
		    }
		
		    function resume(key, arg) {
		      try {
		        var result = gen[key](arg);
		        var value = result.value;
		
		        if (value instanceof AwaitValue) {
		          Promise.resolve(value.value).then(function (arg) {
		            resume("next", arg);
		          }, function (arg) {
		            resume("throw", arg);
		          });
		        } else {
		          settle(result.done ? "return" : "normal", result.value);
		        }
		      } catch (err) {
		        settle("throw", err);
		      }
		    }
		
		    function settle(type, value) {
		      switch (type) {
		        case "return":
		          front.resolve({
		            value: value,
		            done: true
		          });
		          break;
		
		        case "throw":
		          front.reject(value);
		          break;
		
		        default:
		          front.resolve({
		            value: value,
		            done: false
		          });
		          break;
		      }
		
		      front = front.next;
		
		      if (front) {
		        resume(front.key, front.arg);
		      } else {
		        back = null;
		      }
		    }
		
		    this._invoke = send;
		
		    if (typeof gen.return !== "function") {
		      this.return = undefined;
		    }
		  }
		
		  if (typeof Symbol === "function" && Symbol.asyncIterator) {
		    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
		      return this;
		    };
		  }
		
		  AsyncGenerator.prototype.next = function (arg) {
		    return this._invoke("next", arg);
		  };
		
		  AsyncGenerator.prototype.throw = function (arg) {
		    return this._invoke("throw", arg);
		  };
		
		  AsyncGenerator.prototype.return = function (arg) {
		    return this._invoke("return", arg);
		  };
		
		  return {
		    wrap: function (fn) {
		      return function () {
		        return new AsyncGenerator(fn.apply(this, arguments));
		      };
		    },
		    await: function (value) {
		      return new AwaitValue(value);
		    }
		  };
		}();
		
		
		
		
		
		var classCallCheck = function (instance, Constructor) {
		  if (!(instance instanceof Constructor)) {
		    throw new TypeError("Cannot call a class as a function");
		  }
		};
		
		var createClass = function () {
		  function defineProperties(target, props) {
		    for (var i = 0; i < props.length; i++) {
		      var descriptor = props[i];
		      descriptor.enumerable = descriptor.enumerable || false;
		      descriptor.configurable = true;
		      if ("value" in descriptor) descriptor.writable = true;
		      Object.defineProperty(target, descriptor.key, descriptor);
		    }
		  }
		
		  return function (Constructor, protoProps, staticProps) {
		    if (protoProps) defineProperties(Constructor.prototype, protoProps);
		    if (staticProps) defineProperties(Constructor, staticProps);
		    return Constructor;
		  };
		}();
		
		
		
		
		
		
		
		var get$1 = function get$1(object, property, receiver) {
		  if (object === null) object = Function.prototype;
		  var desc = Object.getOwnPropertyDescriptor(object, property);
		
		  if (desc === undefined) {
		    var parent = Object.getPrototypeOf(object);
		
		    if (parent === null) {
		      return undefined;
		    } else {
		      return get$1(parent, property, receiver);
		    }
		  } else if ("value" in desc) {
		    return desc.value;
		  } else {
		    var getter = desc.get;
		
		    if (getter === undefined) {
		      return undefined;
		    }
		
		    return getter.call(receiver);
		  }
		};
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		var set$1 = function set$1(object, property, value, receiver) {
		  var desc = Object.getOwnPropertyDescriptor(object, property);
		
		  if (desc === undefined) {
		    var parent = Object.getPrototypeOf(object);
		
		    if (parent !== null) {
		      set$1(parent, property, value, receiver);
		    }
		  } else if ("value" in desc && desc.writable) {
		    desc.value = value;
		  } else {
		    var setter = desc.set;
		
		    if (setter !== undefined) {
		      setter.call(receiver, value);
		    }
		  }
		
		  return value;
		};
		
		/**
		@license
		Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
		This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
		The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
		The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
		Code distributed by Google as part of the polymer project is also
		subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
		*/
		
		var StyleInfo = function () {
		  createClass(StyleInfo, null, [{
		    key: 'get',
		    value: function get(node) {
		      return node.__styleInfo;
		    }
		  }, {
		    key: 'set',
		    value: function set(node, styleInfo) {
		      node.__styleInfo = styleInfo;
		      return styleInfo;
		    }
		  }]);
		
		  function StyleInfo(ast, placeholder, ownStylePropertyNames, elementName, typeExtension, cssBuild) {
		    classCallCheck(this, StyleInfo);
		
		    this.styleRules = ast || null;
		    this.placeholder = placeholder || null;
		    this.ownStylePropertyNames = ownStylePropertyNames || [];
		    this.overrideStyleProperties = {};
		    this.elementName = elementName || '';
		    this.cssBuild = cssBuild || '';
		    this.typeExtension = typeExtension || '';
		    this.styleProperties = null;
		    this.scopeSelector = null;
		    this.customStyle = null;
		  }
		
		  return StyleInfo;
		}();
		
		/**
		@license
		Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
		This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
		The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
		The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
		Code distributed by Google as part of the polymer project is also
		subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
		*/
		
		// TODO: dedupe with shady
		var p = window.Element.prototype;
		var matchesSelector = p.matches || p.matchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector || p.webkitMatchesSelector;
		
		var IS_IE = navigator.userAgent.match('Trident');
		
		var StyleProperties = {
		
		  // decorates styles with rule info and returns an array of used style
		  // property names
		  decorateStyles: function decorateStyles(rules) {
		    var self = this,
		        props = {},
		        keyframes = [],
		        ruleIndex = 0;
		    forEachRule(rules, function (rule) {
		      self.decorateRule(rule);
		      // mark in-order position of ast rule in styles block, used for cache key
		      rule.index = ruleIndex++;
		      self.collectPropertiesInCssText(rule.propertyInfo.cssText, props);
		    }, function onKeyframesRule(rule) {
		      keyframes.push(rule);
		    });
		    // Cache all found keyframes rules for later reference:
		    rules._keyframes = keyframes;
		    // return this list of property names *consumes* in these styles.
		    var names = [];
		    for (var i in props) {
		      names.push(i);
		    }
		    return names;
		  },
		
		  // decorate a single rule with property info
		  decorateRule: function decorateRule(rule) {
		    if (rule.propertyInfo) {
		      return rule.propertyInfo;
		    }
		    var info = {},
		        properties = {};
		    var hasProperties = this.collectProperties(rule, properties);
		    if (hasProperties) {
		      info.properties = properties;
		      // TODO(sorvell): workaround parser seeing mixins as additional rules
		      rule.rules = null;
		    }
		    info.cssText = this.collectCssText(rule);
		    rule.propertyInfo = info;
		    return info;
		  },
		
		  // collects the custom properties from a rule's cssText
		  collectProperties: function collectProperties(rule, properties) {
		    var info = rule.propertyInfo;
		    if (info) {
		      if (info.properties) {
		        Object.assign(properties, info.properties);
		        return true;
		      }
		    } else {
		      var m = void 0,
		          rx$$1 = this.rx.VAR_ASSIGN;
		      var cssText = rule.parsedCssText;
		      var value = void 0;
		      var any = void 0;
		      while (m = rx$$1.exec(cssText)) {
		        // note: group 2 is var, 3 is mixin
		        value = (m[2] || m[3]).trim();
		        // value of 'inherit' or 'unset' is equivalent to not setting the property here
		        if (value !== 'inherit' || value !== 'unset') {
		          properties[m[1].trim()] = value;
		        }
		        any = true;
		      }
		      return any;
		    }
		  },
		
		  // returns cssText of properties that consume variables/mixins
		  collectCssText: function collectCssText(rule) {
		    return this.collectConsumingCssText(rule.parsedCssText);
		  },
		
		  // NOTE: we support consumption inside mixin assignment
		  // but not production, so strip out {...}
		  collectConsumingCssText: function collectConsumingCssText(cssText) {
		    return cssText.replace(this.rx.BRACKETED, '').replace(this.rx.VAR_ASSIGN, '');
		  },
		
		  collectPropertiesInCssText: function collectPropertiesInCssText(cssText, props) {
		    var m = void 0;
		    while (m = this.rx.VAR_CONSUMED.exec(cssText)) {
		      var name = m[1];
		      // This regex catches all variable names, and following non-whitespace char
		      // If next char is not ':', then variable is a consumer
		      if (m[2] !== ':') {
		        props[name] = true;
		      }
		    }
		  },
		
		  // turns custom properties into realized values.
		  reify: function reify(props) {
		    // big perf optimization here: reify only *own* properties
		    // since this object has __proto__ of the element's scope properties
		    var names = Object.getOwnPropertyNames(props);
		    for (var i = 0, n; i < names.length; i++) {
		      n = names[i];
		      props[n] = this.valueForProperty(props[n], props);
		    }
		  },
		
		  // given a property value, returns the reified value
		  // a property value may be:
		  // (1) a literal value like: red or 5px;
		  // (2) a variable value like: var(--a), var(--a, red), or var(--a, --b) or
		  // var(--a, var(--b));
		  // (3) a literal mixin value like { properties }. Each of these properties
		  // can have values that are: (a) literal, (b) variables, (c) @apply mixins.
		  valueForProperty: function valueForProperty(property, props) {
		    var _this = this;
		
		    // case (1) default
		    // case (3) defines a mixin and we have to reify the internals
		    if (property) {
		      if (property.indexOf(';') >= 0) {
		        property = this.valueForProperties(property, props);
		      } else {
		        (function () {
		          // case (2) variable
		          var self = _this;
		          var fn = function fn(prefix, value, fallback, suffix) {
		            if (!value) {
		              return prefix + suffix;
		            }
		            var propertyValue = self.valueForProperty(props[value], props);
		            // if value is "initial", then the variable should be treated as unset
		            if (!propertyValue || propertyValue === 'initial') {
		              // fallback may be --a or var(--a) or literal
		              propertyValue = self.valueForProperty(props[fallback] || fallback, props) || fallback;
		            } else if (propertyValue === 'apply-shim-inherit') {
		              // CSS build will replace `inherit` with `apply-shim-inherit`
		              // for use with native css variables.
		              // Since we have full control, we can use `inherit` directly.
		              propertyValue = 'inherit';
		            }
		            return prefix + (propertyValue || '') + suffix;
		          };
		          property = processVariableAndFallback(property, fn);
		        })();
		      }
		    }
		    return property && property.trim() || '';
		  },
		
		  // note: we do not yet support mixin within mixin
		  valueForProperties: function valueForProperties(property, props) {
		    var parts = property.split(';');
		    for (var i = 0, _p, m; i < parts.length; i++) {
		      if (_p = parts[i]) {
		        this.rx.MIXIN_MATCH.lastIndex = 0;
		        m = this.rx.MIXIN_MATCH.exec(_p);
		        if (m) {
		          _p = this.valueForProperty(props[m[1]], props);
		        } else {
		          var colon = _p.indexOf(':');
		          if (colon !== -1) {
		            var pp = _p.substring(colon);
		            pp = pp.trim();
		            pp = this.valueForProperty(pp, props) || pp;
		            _p = _p.substring(0, colon) + pp;
		          }
		        }
		        parts[i] = _p && _p.lastIndexOf(';') === _p.length - 1 ?
		        // strip trailing ;
		        _p.slice(0, -1) : _p || '';
		      }
		    }
		    return parts.join(';');
		  },
		
		  applyProperties: function applyProperties(rule, props) {
		    var output = '';
		    // dynamically added sheets may not be decorated so ensure they are.
		    if (!rule.propertyInfo) {
		      this.decorateRule(rule);
		    }
		    if (rule.propertyInfo.cssText) {
		      output = this.valueForProperties(rule.propertyInfo.cssText, props);
		    }
		    rule.cssText = output;
		  },
		
		  // Apply keyframe transformations to the cssText of a given rule. The
		  // keyframeTransforms object is a map of keyframe names to transformer
		  // functions which take in cssText and spit out transformed cssText.
		  applyKeyframeTransforms: function applyKeyframeTransforms(rule, keyframeTransforms) {
		    var input = rule.cssText;
		    var output = rule.cssText;
		    if (rule.hasAnimations == null) {
		      // Cache whether or not the rule has any animations to begin with:
		      rule.hasAnimations = this.rx.ANIMATION_MATCH.test(input);
		    }
		    // If there are no animations referenced, we can skip transforms:
		    if (rule.hasAnimations) {
		      var transform = void 0;
		      // If we haven't transformed this rule before, we iterate over all
		      // transforms:
		      if (rule.keyframeNamesToTransform == null) {
		        rule.keyframeNamesToTransform = [];
		        for (var keyframe in keyframeTransforms) {
		          transform = keyframeTransforms[keyframe];
		          output = transform(input);
		          // If the transform actually changed the CSS text, we cache the
		          // transform name for future use:
		          if (input !== output) {
		            input = output;
		            rule.keyframeNamesToTransform.push(keyframe);
		          }
		        }
		      } else {
		        // If we already have a list of keyframe names that apply to this
		        // rule, we apply only those keyframe name transforms:
		        for (var i = 0; i < rule.keyframeNamesToTransform.length; ++i) {
		          transform = keyframeTransforms[rule.keyframeNamesToTransform[i]];
		          input = transform(input);
		        }
		        output = input;
		      }
		    }
		    rule.cssText = output;
		  },
		
		  // Test if the rules in these styles matches the given `element` and if so,
		  // collect any custom properties into `props`.
		  propertyDataFromStyles: function propertyDataFromStyles(rules, element) {
		    var props = {},
		        self = this;
		    // generates a unique key for these matches
		    var o = [];
		    // note: active rules excludes non-matching @media rules
		    forEachRule(rules, function (rule) {
		      // TODO(sorvell): we could trim the set of rules at declaration
		      // time to only include ones that have properties
		      if (!rule.propertyInfo) {
		        self.decorateRule(rule);
		      }
		      // match element against transformedSelector: selector may contain
		      // unwanted uniquification and parsedSelector does not directly match
		      // for :host selectors.
		      var selectorToMatch = rule.transformedSelector || rule.parsedSelector;
		      if (element && rule.propertyInfo.properties && selectorToMatch) {
		        if (matchesSelector.call(element, selectorToMatch)) {
		          self.collectProperties(rule, props);
		          // produce numeric key for these matches for lookup
		          addToBitMask(rule.index, o);
		        }
		      }
		    }, null, true);
		    return { properties: props, key: o };
		  },
		
		  whenHostOrRootRule: function whenHostOrRootRule(scope, rule, cssBuild, callback) {
		    if (!rule.propertyInfo) {
		      this.decorateRule(rule);
		    }
		    if (!rule.propertyInfo.properties) {
		      return;
		    }
		    var hostScope = scope.is ? StyleTransformer._calcHostScope(scope.is, scope.extends) : 'html';
		    var parsedSelector = rule.parsedSelector;
		    var isRoot = parsedSelector === ':host > *' || parsedSelector === 'html';
		    var isHost = parsedSelector.indexOf(':host') === 0 && !isRoot;
		    // build info is either in scope (when scope is an element) or in the style
		    // when scope is the default scope; note: this allows default scope to have
		    // mixed mode built and unbuilt styles.
		    if (cssBuild === 'shady') {
		      // :root -> x-foo > *.x-foo for elements and html for custom-style
		      isRoot = parsedSelector === hostScope + ' > *.' + hostScope || parsedSelector.indexOf('html') !== -1;
		      // :host -> x-foo for elements, but sub-rules have .x-foo in them
		      isHost = !isRoot && parsedSelector.indexOf(hostScope) === 0;
		    }
		    if (cssBuild === 'shadow') {
		      isRoot = parsedSelector === ':host > *' || parsedSelector === 'html';
		      isHost = isHost && !isRoot;
		    }
		    if (!isRoot && !isHost) {
		      return;
		    }
		    var selectorToMatch = hostScope;
		    if (isHost) {
		      // need to transform :host under ShadowDOM because `:host` does not work with `matches`
		      if (nativeShadow && !rule.transformedSelector) {
		        // transform :host into a matchable selector
		        rule.transformedSelector = StyleTransformer._transformRuleCss(rule, StyleTransformer._transformComplexSelector, StyleTransformer._calcElementScope(scope.is), hostScope);
		      }
		      selectorToMatch = rule.transformedSelector || hostScope;
		    }
		    callback({
		      selector: selectorToMatch,
		      isHost: isHost,
		      isRoot: isRoot
		    });
		  },
		
		  hostAndRootPropertiesForScope: function hostAndRootPropertiesForScope(scope, rules) {
		    var hostProps = {},
		        rootProps = {},
		        self = this;
		    // note: active rules excludes non-matching @media rules
		    var cssBuild = rules && rules.__cssBuild;
		    forEachRule(rules, function (rule) {
		      // if scope is StyleDefaults, use _element for matchesSelector
		      self.whenHostOrRootRule(scope, rule, cssBuild, function (info) {
		        var element = scope._element || scope;
		        if (matchesSelector.call(element, info.selector)) {
		          if (info.isHost) {
		            self.collectProperties(rule, hostProps);
		          } else {
		            self.collectProperties(rule, rootProps);
		          }
		        }
		      });
		    }, null, true);
		    return { rootProps: rootProps, hostProps: hostProps };
		  },
		
		  transformStyles: function transformStyles(element, properties, scopeSelector) {
		    var self = this;
		    var hostSelector = StyleTransformer._calcHostScope(element.is, element.extends);
		    var rxHostSelector = element.extends ? '\\' + hostSelector.slice(0, -1) + '\\]' : hostSelector;
		    var hostRx = new RegExp(this.rx.HOST_PREFIX + rxHostSelector + this.rx.HOST_SUFFIX);
		    var rules = StyleInfo.get(element).styleRules;
		    var keyframeTransforms = this._elementKeyframeTransforms(element, rules, scopeSelector);
		    return StyleTransformer.elementStyles(element, rules, function (rule) {
		      self.applyProperties(rule, properties);
		      if (!nativeShadow && !isKeyframesSelector(rule) && rule.cssText) {
		        // NOTE: keyframe transforms only scope munge animation names, so it
		        // is not necessary to apply them in ShadowDOM.
		        self.applyKeyframeTransforms(rule, keyframeTransforms);
		        self._scopeSelector(rule, hostRx, hostSelector, scopeSelector);
		      }
		    });
		  },
		
		  _elementKeyframeTransforms: function _elementKeyframeTransforms(element, rules, scopeSelector) {
		    var keyframesRules = rules._keyframes;
		    var keyframeTransforms = {};
		    if (!nativeShadow && keyframesRules) {
		      // For non-ShadowDOM, we transform all known keyframes rules in
		      // advance for the current scope. This allows us to catch keyframes
		      // rules that appear anywhere in the stylesheet:
		      for (var i = 0, keyframesRule = keyframesRules[i]; i < keyframesRules.length; keyframesRule = keyframesRules[++i]) {
		        this._scopeKeyframes(keyframesRule, scopeSelector);
		        keyframeTransforms[keyframesRule.keyframesName] = this._keyframesRuleTransformer(keyframesRule);
		      }
		    }
		    return keyframeTransforms;
		  },
		
		  // Generate a factory for transforming a chunk of CSS text to handle a
		  // particular scoped keyframes rule.
		  _keyframesRuleTransformer: function _keyframesRuleTransformer(keyframesRule) {
		    return function (cssText) {
		      return cssText.replace(keyframesRule.keyframesNameRx, keyframesRule.transformedKeyframesName);
		    };
		  },
		
		  // Transforms `@keyframes` names to be unique for the current host.
		  // Example: @keyframes foo-anim -> @keyframes foo-anim-x-foo-0
		  _scopeKeyframes: function _scopeKeyframes(rule, scopeId) {
		    rule.keyframesNameRx = new RegExp(rule.keyframesName, 'g');
		    rule.transformedKeyframesName = rule.keyframesName + '-' + scopeId;
		    rule.transformedSelector = rule.transformedSelector || rule.selector;
		    rule.selector = rule.transformedSelector.replace(rule.keyframesName, rule.transformedKeyframesName);
		  },
		
		  // Strategy: x scope shim a selector e.g. to scope `.x-foo-42` (via classes):
		  // non-host selector: .a.x-foo -> .x-foo-42 .a.x-foo
		  // host selector: x-foo.wide -> .x-foo-42.wide
		  // note: we use only the scope class (.x-foo-42) and not the hostSelector
		  // (x-foo) to scope :host rules; this helps make property host rules
		  // have low specificity. They are overrideable by class selectors but,
		  // unfortunately, not by type selectors (e.g. overriding via
		  // `.special` is ok, but not by `x-foo`).
		  _scopeSelector: function _scopeSelector(rule, hostRx, hostSelector, scopeId) {
		    rule.transformedSelector = rule.transformedSelector || rule.selector;
		    var selector = rule.transformedSelector;
		    var scope = '.' + scopeId;
		    var parts = selector.split(',');
		    for (var i = 0, l = parts.length, _p2; i < l && (_p2 = parts[i]); i++) {
		      parts[i] = _p2.match(hostRx) ? _p2.replace(hostSelector, scope) : scope + ' ' + _p2;
		    }
		    rule.selector = parts.join(',');
		  },
		
		  applyElementScopeSelector: function applyElementScopeSelector(element, selector, old) {
		    var c = element.getAttribute('class') || '';
		    var v = old ? c.replace(old, selector) : (c ? c + ' ' : '') + this.XSCOPE_NAME + ' ' + selector;
		    if (c !== v) {
		      element.setAttribute('class', v);
		    }
		  },
		
		  applyElementStyle: function applyElementStyle(element, properties, selector, style) {
		    // calculate cssText to apply
		    var cssText = style ? style.textContent || '' : this.transformStyles(element, properties, selector);
		    // if shady and we have a cached style that is not style, decrement
		    var styleInfo = StyleInfo.get(element);
		    var s = styleInfo.customStyle;
		    if (s && !nativeShadow && s !== style) {
		      s._useCount--;
		      if (s._useCount <= 0 && s.parentNode) {
		        s.parentNode.removeChild(s);
		      }
		    }
		    // apply styling always under native or if we generated style
		    // or the cached style is not in document(!)
		    if (nativeShadow) {
		      // update existing style only under native
		      if (styleInfo.customStyle) {
		        styleInfo.customStyle.textContent = cssText;
		        style = styleInfo.customStyle;
		        // otherwise, if we have css to apply, do so
		      } else if (cssText) {
		        // apply css after the scope style of the element to help with
		        // style precedence rules.
		        style = applyCss(cssText, selector, element.shadowRoot, styleInfo.placeholder);
		      }
		    } else {
		      // shady and no cache hit
		      if (!style) {
		        // apply css after the scope style of the element to help with
		        // style precedence rules.
		        if (cssText) {
		          style = applyCss(cssText, selector, null, styleInfo.placeholder);
		        }
		        // shady and cache hit but not in document
		      } else if (!style.parentNode) {
		        applyStyle$1(style, null, styleInfo.placeholder);
		      }
		    }
		    // ensure this style is our custom style and increment its use count.
		    if (style) {
		      style._useCount = style._useCount || 0;
		      // increment use count if we changed styles
		      if (styleInfo.customStyle != style) {
		        style._useCount++;
		      }
		      styleInfo.customStyle = style;
		    }
		    // @media rules may be stale in IE 10 and 11
		    if (IS_IE) {
		      style.textContent = style.textContent;
		    }
		    return style;
		  },
		
		  applyCustomStyle: function applyCustomStyle(style, properties) {
		    var rules = rulesForStyle(style);
		    var self = this;
		    style.textContent = toCssText(rules, function (rule) {
		      var css = rule.cssText = rule.parsedCssText;
		      if (rule.propertyInfo && rule.propertyInfo.cssText) {
		        // remove property assignments
		        // so next function isn't confused
		        // NOTE: we have 3 categories of css:
		        // (1) normal properties,
		        // (2) custom property assignments (--foo: red;),
		        // (3) custom property usage: border: var(--foo); @apply(--foo);
		        // In elements, 1 and 3 are separated for efficiency; here they
		        // are not and this makes this case unique.
		        css = removeCustomPropAssignment(css);
		        // replace with reified properties, scenario is same as mixin
		        rule.cssText = self.valueForProperties(css, properties);
		      }
		    });
		  },
		
		  rx: rx,
		  XSCOPE_NAME: 'x-scope'
		};
		
		function addToBitMask(n, bits) {
		  var o = parseInt(n / 32);
		  var v = 1 << n % 32;
		  bits[o] = (bits[o] || 0) | v;
		}
		
		/**
		@license
		Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
		This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
		The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
		The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
		Code distributed by Google as part of the polymer project is also
		subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
		*/
		
		var templateMap = {};
		
		/**
		@license
		Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
		This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
		The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
		The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
		Code distributed by Google as part of the polymer project is also
		subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
		*/
		
		var placeholderMap = {};
		
		var ce = window.customElements;
		if (ce && !nativeShadow) {
		  (function () {
		    var origDefine = ce.define;
		    ce.define = function (name, clazz, options) {
		      placeholderMap[name] = applyStylePlaceHolder(name);
		      return origDefine.call(ce, name, clazz, options);
		    };
		  })();
		}
		
		/**
		@license
		Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
		This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
		The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
		The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
		Code distributed by Google as part of the polymer project is also
		subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
		*/
		var StyleCache = function () {
		  function StyleCache() {
		    var typeMax = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
		    classCallCheck(this, StyleCache);
		
		    // map element name -> [{properties, styleElement, scopeSelector}]
		    this.cache = {};
		    this.typeMax = typeMax;
		  }
		
		  createClass(StyleCache, [{
		    key: '_validate',
		    value: function _validate(cacheEntry, properties, ownPropertyNames) {
		      for (var idx = 0; idx < ownPropertyNames.length; idx++) {
		        var pn = ownPropertyNames[idx];
		        if (cacheEntry.properties[pn] !== properties[pn]) {
		          return false;
		        }
		      }
		      return true;
		    }
		  }, {
		    key: 'store',
		    value: function store(tagname, properties, styleElement, scopeSelector) {
		      var list = this.cache[tagname] || [];
		      list.push({ properties: properties, styleElement: styleElement, scopeSelector: scopeSelector });
		      if (list.length > this.typeMax) {
		        list.shift();
		      }
		      this.cache[tagname] = list;
		    }
		  }, {
		    key: 'fetch',
		    value: function fetch(tagname, properties, ownPropertyNames) {
		      var list = this.cache[tagname];
		      if (!list) {
		        return;
		      }
		      // reverse list for most-recent lookups
		      for (var idx = list.length - 1; idx >= 0; idx--) {
		        var entry = list[idx];
		        if (this._validate(entry, properties, ownPropertyNames)) {
		          return entry;
		        }
		      }
		    }
		  }]);
		  return StyleCache;
		}();
		
		/**
		@license
		Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
		This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
		The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
		The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
		Code distributed by Google as part of the polymer project is also
		subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
		*/
		/**
		 * The apply shim simulates the behavior of `@apply` proposed at
		 * https://tabatkins.github.io/specs/css-apply-rule/.
		 * The approach is to convert a property like this:
		 *
		 *    --foo: {color: red; background: blue;}
		 *
		 * to this:
		 *
		 *    --foo_-_color: red;
		 *    --foo_-_background: blue;
		 *
		 * Then where `@apply --foo` is used, that is converted to:
		 *
		 *    color: var(--foo_-_color);
		 *    background: var(--foo_-_background);
		 *
		 * This approach generally works but there are some issues and limitations.
		 * Consider, for example, that somewhere *between* where `--foo` is set and used,
		 * another element sets it to:
		 *
		 *    --foo: { border: 2px solid red; }
		 *
		 * We must now ensure that the color and background from the previous setting
		 * do not apply. This is accomplished by changing the property set to this:
		 *
		 *    --foo_-_border: 2px solid red;
		 *    --foo_-_color: initial;
		 *    --foo_-_background: initial;
		 *
		 * This works but introduces one new issue.
		 * Consider this setup at the point where the `@apply` is used:
		 *
		 *    background: orange;
		 *    @apply --foo;
		 *
		 * In this case the background will be unset (initial) rather than the desired
		 * `orange`. We address this by altering the property set to use a fallback
		 * value like this:
		 *
		 *    color: var(--foo_-_color);
		 *    background: var(--foo_-_background, orange);
		 *    border: var(--foo_-_border);
		 *
		 * Note that the default is retained in the property set and the `background` is
		 * the desired `orange`. This leads us to a limitation.
		 *
		 * Limitation 1:
		
		 * Only properties in the rule where the `@apply`
		 * is used are considered as default values.
		 * If another rule matches the element and sets `background` with
		 * less specificity than the rule in which `@apply` appears,
		 * the `background` will not be set.
		 *
		 * Limitation 2:
		 *
		 * When using Polymer's `updateStyles` api, new properties may not be set for
		 * `@apply` properties.
		
		*/
		
		var MIXIN_MATCH = rx.MIXIN_MATCH;
		var VAR_ASSIGN = rx.VAR_ASSIGN;
		
		var APPLY_NAME_CLEAN = /;\s*/m;
		var INITIAL_INHERIT = /^\s*(initial)|(inherit)\s*$/;
		
		// separator used between mixin-name and mixin-property-name when producing properties
		// NOTE: plain '-' may cause collisions in user styles
		var MIXIN_VAR_SEP = '_-_';
		
		// map of mixin to property names
		// --foo: {border: 2px} -> {properties: {(--foo, ['border'])}, dependants: {'element-name': proto}}
		
		var MixinMap = function () {
		  function MixinMap() {
		    classCallCheck(this, MixinMap);
		
		    this._map = {};
		  }
		
		  createClass(MixinMap, [{
		    key: 'set',
		    value: function set(name, props) {
		      name = name.trim();
		      this._map[name] = {
		        properties: props,
		        dependants: {}
		      };
		    }
		  }, {
		    key: 'get',
		    value: function get(name) {
		      name = name.trim();
		      return this._map[name];
		    }
		  }]);
		  return MixinMap;
		}();
		
		var ApplyShim = function () {
		  function ApplyShim() {
		    var _this = this;
		
		    classCallCheck(this, ApplyShim);
		
		    this._currentTemplate = null;
		    this._measureElement = null;
		    this._map = new MixinMap();
		    this._separator = MIXIN_VAR_SEP;
		    this._boundProduceCssProperties = function (matchText, propertyName, valueProperty, valueMixin) {
		      return _this._produceCssProperties(matchText, propertyName, valueProperty, valueMixin);
		    };
		  }
		
		  createClass(ApplyShim, [{
		    key: 'transformStyle',
		    value: function transformStyle(style, elementName) {
		      var ast = rulesForStyle(style);
		      this.transformRules(ast, elementName);
		      return ast;
		    }
		  }, {
		    key: 'transformRules',
		    value: function transformRules(rules, elementName) {
		      var _this2 = this;
		
		      this._currentTemplate = templateMap[elementName];
		      forEachRule(rules, function (r) {
		        _this2.transformRule(r);
		      });
		      if (this._currentTemplate) {
		        this._currentTemplate.__applyShimInvalid = false;
		      }
		      this._currentTemplate = null;
		    }
		  }, {
		    key: 'transformRule',
		    value: function transformRule(rule) {
		      rule.cssText = this.transformCssText(rule.parsedCssText);
		      // :root was only used for variable assignment in property shim,
		      // but generates invalid selectors with real properties.
		      // replace with `:host > *`, which serves the same effect
		      if (rule.selector === ':root') {
		        rule.selector = ':host > *';
		      }
		    }
		  }, {
		    key: 'transformCssText',
		    value: function transformCssText(cssText) {
		      // produce variables
		      cssText = cssText.replace(VAR_ASSIGN, this._boundProduceCssProperties);
		      // consume mixins
		      return this._consumeCssProperties(cssText);
		    }
		  }, {
		    key: '_getInitialValueForProperty',
		    value: function _getInitialValueForProperty(property) {
		      if (!this._measureElement) {
		        this._measureElement = document.createElement('meta');
		        this._measureElement.style.all = 'initial';
		        document.head.appendChild(this._measureElement);
		      }
		      return window.getComputedStyle(this._measureElement).getPropertyValue(property);
		    }
		    // replace mixin consumption with variable consumption
		
		  }, {
		    key: '_consumeCssProperties',
		    value: function _consumeCssProperties(text) {
		      var m = void 0;
		      // loop over text until all mixins with defintions have been applied
		      while (m = MIXIN_MATCH.exec(text)) {
		        var matchText = m[0];
		        var mixinName = m[1];
		        var idx = m.index;
		        // collect properties before apply to be "defaults" if mixin might override them
		        // match includes a "prefix", so find the start and end positions of @apply
		        var applyPos = idx + matchText.indexOf('@apply');
		        var afterApplyPos = idx + matchText.length;
		        // find props defined before this @apply
		        var textBeforeApply = text.slice(0, applyPos);
		        var textAfterApply = text.slice(afterApplyPos);
		        var defaults$$1 = this._cssTextToMap(textBeforeApply);
		        var replacement = this._atApplyToCssProperties(mixinName, defaults$$1);
		        // use regex match position to replace mixin, keep linear processing time
		        text = [textBeforeApply, replacement, textAfterApply].join('');
		        // move regex search to _after_ replacement
		        MIXIN_MATCH.lastIndex = idx + replacement.length;
		      }
		      return text;
		    }
		    // produce variable consumption at the site of mixin consumption
		    // @apply --foo; -> for all props (${propname}: var(--foo_-_${propname}, ${fallback[propname]}}))
		    // Example:
		    // border: var(--foo_-_border); padding: var(--foo_-_padding, 2px)
		
		  }, {
		    key: '_atApplyToCssProperties',
		    value: function _atApplyToCssProperties(mixinName, fallbacks) {
		      mixinName = mixinName.replace(APPLY_NAME_CLEAN, '');
		      var vars = [];
		      var mixinEntry = this._map.get(mixinName);
		      // if we depend on a mixin before it is created
		      // make a sentinel entry in the map to add this element as a dependency for when it is defined.
		      if (!mixinEntry) {
		        this._map.set(mixinName, {});
		        mixinEntry = this._map.get(mixinName);
		      }
		      if (mixinEntry) {
		        if (this._currentTemplate) {
		          mixinEntry.dependants[this._currentTemplate.name] = this._currentTemplate;
		        }
		        var p = void 0,
		            parts = void 0,
		            f = void 0;
		        for (p in mixinEntry.properties) {
		          f = fallbacks && fallbacks[p];
		          parts = [p, ': var(', mixinName, MIXIN_VAR_SEP, p];
		          if (f) {
		            parts.push(',', f);
		          }
		          parts.push(')');
		          vars.push(parts.join(''));
		        }
		      }
		      return vars.join('; ');
		    }
		  }, {
		    key: '_replaceInitialOrInherit',
		    value: function _replaceInitialOrInherit(property, value) {
		      var match = INITIAL_INHERIT.exec(value);
		      if (match) {
		        if (match[1]) {
		          // initial
		          // replace `initial` with the concrete initial value for this property
		          value = ApplyShim._getInitialValueForProperty(property);
		        } else {
		          // inherit
		          // with this purposfully illegal value, the variable will be invalid at
		          // compute time (https://www.w3.org/TR/css-variables/#invalid-at-computed-value-time)
		          // and for inheriting values, will behave similarly
		          // we cannot support the same behavior for non inheriting values like 'border'
		          value = 'apply-shim-inherit';
		        }
		      }
		      return value;
		    }
		
		    // "parse" a mixin definition into a map of properties and values
		    // cssTextToMap('border: 2px solid black') -> ('border', '2px solid black')
		
		  }, {
		    key: '_cssTextToMap',
		    value: function _cssTextToMap(text) {
		      var props = text.split(';');
		      var property = void 0,
		          value = void 0;
		      var out = {};
		      for (var i = 0, p, sp; i < props.length; i++) {
		        p = props[i];
		        if (p) {
		          sp = p.split(':');
		          // ignore lines that aren't definitions like @media
		          if (sp.length > 1) {
		            property = sp[0].trim();
		            // some properties may have ':' in the value, like data urls
		            value = this._replaceInitialOrInherit(property, sp.slice(1).join(':'));
		            out[property] = value;
		          }
		        }
		      }
		      return out;
		    }
		  }, {
		    key: '_invalidateMixinEntry',
		    value: function _invalidateMixinEntry(mixinEntry) {
		      for (var elementName in mixinEntry.dependants) {
		        if (elementName !== this._currentTemplate) {
		          mixinEntry.dependants[elementName].__applyShimInvalid = true;
		        }
		      }
		    }
		  }, {
		    key: '_produceCssProperties',
		    value: function _produceCssProperties(matchText, propertyName, valueProperty, valueMixin) {
		      var _this3 = this;
		
		      // handle case where property value is a mixin
		      if (valueProperty) {
		        // form: --mixin2: var(--mixin1), where --mixin1 is in the map
		        processVariableAndFallback(valueProperty, function (prefix, value) {
		          if (value && _this3._map.get(value)) {
		            valueMixin = '@apply ' + value + ';';
		          }
		        });
		      }
		      if (!valueMixin) {
		        return matchText;
		      }
		      var mixinAsProperties = this._consumeCssProperties(valueMixin);
		      var prefix = matchText.slice(0, matchText.indexOf('--'));
		      var mixinValues = this._cssTextToMap(mixinAsProperties);
		      var combinedProps = mixinValues;
		      var mixinEntry = this._map.get(propertyName);
		      var oldProps = mixinEntry && mixinEntry.properties;
		      if (oldProps) {
		        // NOTE: since we use mixin, the map of properties is updated here
		        // and this is what we want.
		        combinedProps = Object.assign(Object.create(oldProps), mixinValues);
		      } else {
		        this._map.set(propertyName, combinedProps);
		      }
		      var out = [];
		      var p = void 0,
		          v = void 0;
		      // set variables defined by current mixin
		      var needToInvalidate = false;
		      for (p in combinedProps) {
		        v = mixinValues[p];
		        // if property not defined by current mixin, set initial
		        if (v === undefined) {
		          v = 'initial';
		        }
		        if (oldProps && !(p in oldProps)) {
		          needToInvalidate = true;
		        }
		        out.push(propertyName + MIXIN_VAR_SEP + p + ': ' + v);
		      }
		      if (needToInvalidate) {
		        this._invalidateMixinEntry(mixinEntry);
		      }
		      if (mixinEntry) {
		        mixinEntry.properties = combinedProps;
		      }
		      // because the mixinMap is global, the mixin might conflict with
		      // a different scope's simple variable definition:
		      // Example:
		      // some style somewhere:
		      // --mixin1:{ ... }
		      // --mixin2: var(--mixin1);
		      // some other element:
		      // --mixin1: 10px solid red;
		      // --foo: var(--mixin1);
		      // In this case, we leave the original variable definition in place.
		      if (valueProperty) {
		        prefix = matchText + ';' + prefix;
		      }
		      return prefix + out.join('; ') + ';';
		    }
		  }]);
		  return ApplyShim;
		}();
		
		var applyShim = new ApplyShim();
		window['ApplyShim'] = applyShim;
		
		/**
		@license
		Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
		This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
		The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
		The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
		Code distributed by Google as part of the polymer project is also
		subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
		*/
		
		// TODO(dfreedm): consider spliting into separate global
		var styleCache = new StyleCache();
		
		var ShadyCSS = {
		  scopeCounter: {},
		  nativeShadow: nativeShadow,
		  nativeCss: nativeCssVariables,
		  nativeCssApply: nativeCssApply,
		  _documentOwner: document.documentElement,
		  _documentOwnerStyleInfo: StyleInfo.set(document.documentElement, new StyleInfo({ rules: [] })),
		  _generateScopeSelector: function _generateScopeSelector(name) {
		    var id = this.scopeCounter[name] = (this.scopeCounter[name] || 0) + 1;
		    return name + '-' + id;
		  },
		  getStyleAst: function getStyleAst(style) {
		    return rulesForStyle(style);
		  },
		  styleAstToString: function styleAstToString(ast) {
		    return toCssText(ast);
		  },
		  _gatherStyles: function _gatherStyles(template) {
		    var styles = template.content.querySelectorAll('style');
		    var cssText = [];
		    for (var i = 0; i < styles.length; i++) {
		      var s = styles[i];
		      cssText.push(s.textContent);
		      s.parentNode.removeChild(s);
		    }
		    return cssText.join('').trim();
		  },
		  _getCssBuild: function _getCssBuild(template) {
		    var style = template.content.querySelector('style');
		    if (!style) {
		      return '';
		    }
		    return style.getAttribute('css-build') || '';
		  },
		  prepareTemplate: function prepareTemplate(template, elementName, typeExtension) {
		    if (template._prepared) {
		      return;
		    }
		    template._prepared = true;
		    template.name = elementName;
		    template.extends = typeExtension;
		    templateMap[elementName] = template;
		    var cssBuild = this._getCssBuild(template);
		    var cssText = this._gatherStyles(template);
		    var info = {
		      is: elementName,
		      extends: typeExtension,
		      __cssBuild: cssBuild
		    };
		    if (!this.nativeShadow) {
		      StyleTransformer.dom(template.content, elementName);
		    }
		    var ast = parse(cssText);
		    if (this.nativeCss && !this.nativeCssApply) {
		      applyShim.transformRules(ast, elementName);
		    }
		    template._styleAst = ast;
		
		    var ownPropertyNames = [];
		    if (!this.nativeCss) {
		      ownPropertyNames = StyleProperties.decorateStyles(template._styleAst, info);
		    }
		    if (!ownPropertyNames.length || this.nativeCss) {
		      var root = this.nativeShadow ? template.content : null;
		      var placeholder = placeholderMap[elementName];
		      var style = this._generateStaticStyle(info, template._styleAst, root, placeholder);
		      template._style = style;
		    }
		    template._ownPropertyNames = ownPropertyNames;
		  },
		  _generateStaticStyle: function _generateStaticStyle(info, rules, shadowroot, placeholder) {
		    var cssText = StyleTransformer.elementStyles(info, rules);
		    if (cssText.length) {
		      return applyCss(cssText, info.is, shadowroot, placeholder);
		    }
		  },
		  _prepareHost: function _prepareHost(host) {
		    var is = host.getAttribute('is') || host.localName;
		    var typeExtension = void 0;
		    if (is !== host.localName) {
		      typeExtension = host.localName;
		    }
		    var placeholder = placeholderMap[is];
		    var template = templateMap[is];
		    var ast = void 0;
		    var ownStylePropertyNames = void 0;
		    var cssBuild = void 0;
		    if (template) {
		      ast = template._styleAst;
		      ownStylePropertyNames = template._ownPropertyNames;
		      cssBuild = template._cssBuild;
		    }
		    return StyleInfo.set(host, new StyleInfo(ast, placeholder, ownStylePropertyNames, is, typeExtension, cssBuild));
		  },
		  applyStyle: function applyStyle(host, overrideProps) {
		    var is = host.getAttribute('is') || host.localName;
		    if (window.CustomStyle) {
		      var CS = window.CustomStyle;
		      if (CS._documentDirty) {
		        CS.findStyles();
		        if (!this.nativeCss) {
		          this._updateProperties(this._documentOwner, this._documentOwnerStyleInfo);
		        } else if (!this.nativeCssApply) {
		          CS._revalidateApplyShim();
		        }
		        CS.applyStyles();
		        CS._documentDirty = false;
		      }
		    }
		    var styleInfo = StyleInfo.get(host);
		    if (!styleInfo) {
		      styleInfo = this._prepareHost(host);
		    }
		    Object.assign(styleInfo.overrideStyleProperties, overrideProps);
		    if (this.nativeCss) {
		      var template = templateMap[is];
		      if (template && template.__applyShimInvalid && template._style) {
		        // update template
		        applyShim.transformRules(template._styleAst, is);
		        template._style.textContent = StyleTransformer.elementStyles(host, styleInfo.styleRules);
		        // update instance if native shadowdom
		        if (this.nativeShadow) {
		          var style = host.shadowRoot.querySelector('style');
		          style.textContent = StyleTransformer.elementStyles(host, styleInfo.styleRules);
		        }
		        styleInfo.styleRules = template._styleAst;
		      }
		      this._updateNativeProperties(host, styleInfo.overrideStyleProperties);
		    } else {
		      this._updateProperties(host, styleInfo);
		      if (styleInfo.ownStylePropertyNames && styleInfo.ownStylePropertyNames.length) {
		        // TODO: use caching
		        this._applyStyleProperties(host, styleInfo);
		      }
		    }
		    var root = this._isRootOwner(host) ? host : host.shadowRoot;
		    // note: some elements may not have a root!
		    if (root) {
		      this._applyToDescendants(root);
		    }
		  },
		  _applyToDescendants: function _applyToDescendants(root) {
		    var c$ = root.children;
		    for (var i = 0, c; i < c$.length; i++) {
		      c = c$[i];
		      if (c.shadowRoot) {
		        this.applyStyle(c);
		      }
		      this._applyToDescendants(c);
		    }
		  },
		  _styleOwnerForNode: function _styleOwnerForNode(node) {
		    var root = node.getRootNode();
		    var host = root.host;
		    if (host) {
		      if (StyleInfo.get(host)) {
		        return host;
		      } else {
		        return this._styleOwnerForNode(host);
		      }
		    }
		    return this._documentOwner;
		  },
		  _isRootOwner: function _isRootOwner(node) {
		    return node === this._documentOwner;
		  },
		  _applyStyleProperties: function _applyStyleProperties(host, styleInfo) {
		    var is = host.getAttribute('is') || host.localName;
		    var cacheEntry = styleCache.fetch(is, styleInfo.styleProperties, styleInfo.ownStylePropertyNames);
		    var cachedScopeSelector = cacheEntry && cacheEntry.scopeSelector;
		    var cachedStyle = cacheEntry ? cacheEntry.styleElement : null;
		    var oldScopeSelector = styleInfo.scopeSelector;
		    // only generate new scope if cached style is not found
		    styleInfo.scopeSelector = cachedScopeSelector || this._generateScopeSelector(is);
		    var style = StyleProperties.applyElementStyle(host, styleInfo.styleProperties, styleInfo.scopeSelector, cachedStyle);
		    if (!this.nativeShadow) {
		      StyleProperties.applyElementScopeSelector(host, styleInfo.scopeSelector, oldScopeSelector);
		    }
		    if (!cacheEntry) {
		      styleCache.store(is, styleInfo.styleProperties, style, styleInfo.scopeSelector);
		    }
		    return style;
		  },
		  _updateProperties: function _updateProperties(host, styleInfo) {
		    var owner = this._styleOwnerForNode(host);
		    var ownerStyleInfo = StyleInfo.get(owner);
		    var ownerProperties = ownerStyleInfo.styleProperties;
		    var props = Object.create(ownerProperties || null);
		    var hostAndRootProps = StyleProperties.hostAndRootPropertiesForScope(host, styleInfo.styleRules);
		    var propertyData = StyleProperties.propertyDataFromStyles(ownerStyleInfo.styleRules, host);
		    var propertiesMatchingHost = propertyData.properties;
		    Object.assign(props, hostAndRootProps.hostProps, propertiesMatchingHost, hostAndRootProps.rootProps);
		    this._mixinOverrideStyles(props, styleInfo.overrideStyleProperties);
		    StyleProperties.reify(props);
		    styleInfo.styleProperties = props;
		  },
		  _mixinOverrideStyles: function _mixinOverrideStyles(props, overrides) {
		    for (var p in overrides) {
		      var v = overrides[p];
		      // skip override props if they are not truthy or 0
		      // in order to fall back to inherited values
		      if (v || v === 0) {
		        props[p] = v;
		      }
		    }
		  },
		  _updateNativeProperties: function _updateNativeProperties(element, properties) {
		    // remove previous properties
		    for (var p in properties) {
		      // NOTE: for bc with shim, don't apply null values.
		      if (p === null) {
		        element.style.removeProperty(p);
		      } else {
		        element.style.setProperty(p, properties[p]);
		      }
		    }
		  },
		  updateStyles: function updateStyles(properties) {
		    if (window.CustomStyle) {
		      window.CustomStyle._documentDirty = true;
		    }
		    this.applyStyle(this._documentOwner, properties);
		  },
		
		  /* Custom Style operations */
		  _transformCustomStyleForDocument: function _transformCustomStyleForDocument(style) {
		    var _this = this;
		
		    var ast = rulesForStyle(style);
		    forEachRule(ast, function (rule) {
		      if (nativeShadow) {
		        StyleTransformer.normalizeRootSelector(rule);
		      } else {
		        StyleTransformer.documentRule(rule);
		      }
		      if (_this.nativeCss && !_this.nativeCssApply) {
		        applyShim.transformRule(rule);
		      }
		    });
		    if (this.nativeCss) {
		      style.textContent = toCssText(ast);
		    } else {
		      this._documentOwnerStyleInfo.styleRules.rules.push(ast);
		    }
		  },
		  _revalidateApplyShim: function _revalidateApplyShim(style) {
		    if (this.nativeCss && !this.nativeCssApply) {
		      var ast = rulesForStyle(style);
		      applyShim.transformRules(ast);
		      style.textContent = toCssText(ast);
		    }
		  },
		  _applyCustomStyleToDocument: function _applyCustomStyleToDocument(style) {
		    if (!this.nativeCss) {
		      StyleProperties.applyCustomStyle(style, this._documentOwnerStyleInfo.styleProperties);
		    }
		  },
		  getComputedStyleValue: function getComputedStyleValue(element, property) {
		    var value = void 0;
		    if (!this.nativeCss) {
		      // element is either a style host, or an ancestor of a style host
		      var styleInfo = StyleInfo.get(element) || StyleInfo.get(this._styleOwnerForNode(element));
		      value = styleInfo.styleProperties[property];
		    }
		    // fall back to the property value from the computed styling
		    value = value || window.getComputedStyle(element).getPropertyValue(property);
		    // trim whitespace that can come after the `:` in css
		    // example: padding: 2px -> " 2px"
		    return value.trim();
		  }
		};
		
		window['ShadyCSS'] = ShadyCSS;
		
		/**
		@license
		Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
		This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
		The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
		The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
		Code distributed by Google as part of the polymer project is also
		subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
		*/
		
		/*
		Wrapper over <style> elements to co-operate with ShadyCSS
		
		Example:
		<shady-style>
		  <style>
		  ...
		  </style>
		</shady-style>
		*/
		
		var ShadyCSS$1 = window.ShadyCSS;
		
		var enqueued = false;
		
		var customStyles = [];
		
		var hookFn = null;
		
		/*
		If a page only has <custom-style> elements, it will flash unstyled content,
		as all the instances will boot asynchronously after page load.
		
		Calling ShadyCSS.updateStyles() will force the work to happen synchronously
		*/
		function enqueueDocumentValidation() {
		  if (enqueued) {
		    return;
		  }
		  enqueued = true;
		  if (window.HTMLImports) {
		    window.HTMLImports.whenReady(validateDocument);
		  } else if (document.readyState === 'complete') {
		    requestAnimationFrame(validateDocument);
		  } else {
		    document.addEventListener('readystatechange', function () {
		      if (document.readyState === 'complete') {
		        validateDocument();
		      }
		    });
		  }
		}
		
		// NOTE: Make sure to enqueue eagerly. This is an optimization that
		// helps ensure that the first run of validateDocument will actually
		// have access to all the custom-style's created via loading imports.
		// If the first created custom-style calls enqueue and HTMLImports.ready
		// is true at that time (which is the case when HTMLImports are polyfilled),
		// then the enqueue immediately calls validateDocument and work that could be
		// batched is not.
		enqueueDocumentValidation();
		
		function validateDocument() {
		  if (enqueued) {
		    ShadyCSS$1.updateStyles();
		    enqueued = false;
		  }
		}
		
		function CustomStyle() {
		  /*
		  Use Reflect to invoke the HTMLElement constructor, or rely on the
		  CustomElement polyfill replacement that can be `.call`ed
		  */
		  var self = window.Reflect && Reflect.construct ? Reflect.construct(HTMLElement, [], this.constructor || CustomStyle) : HTMLElement.call(this);
		  customStyles.push(self);
		  enqueueDocumentValidation();
		  return self;
		}
		
		Object.defineProperties(CustomStyle, {
		  /*
		  CustomStyle.processHook is provided to customize the <style> element child of
		  a <custom-style> element before the <style> is processed by ShadyCSS
		   The function must take a <style> element as input, and return nothing.
		  */
		  processHook: {
		    get: function get() {
		      return hookFn;
		    },
		    set: function set(fn) {
		      hookFn = fn;
		      return fn;
		    }
		  },
		  _customStyles: {
		    get: function get() {
		      return customStyles;
		    }
		  },
		  _documentDirty: {
		    get: function get() {
		      return enqueued;
		    },
		    set: function set(value) {
		      enqueued = value;
		      return value;
		    }
		  }
		});
		
		CustomStyle.findStyles = function () {
		  for (var i = 0; i < customStyles.length; i++) {
		    customStyles[i]._findStyle();
		  }
		};
		
		CustomStyle._revalidateApplyShim = function () {
		  for (var i = 0; i < customStyles.length; i++) {
		    var s = customStyles[i];
		    if (s._style) {
		      ShadyCSS$1._revalidateApplyShim(s._style);
		    }
		  }
		};
		
		CustomStyle.applyStyles = function () {
		  for (var i = 0; i < customStyles.length; i++) {
		    customStyles[i]._applyStyle();
		  }
		};
		
		CustomStyle.prototype = Object.create(HTMLElement.prototype, {
		  'constructor': {
		    value: CustomStyle,
		    configurable: true,
		    writable: true
		  }
		});
		
		CustomStyle.prototype._findStyle = function () {
		  if (!this._style) {
		    var style = this.querySelector('style');
		    if (!style) {
		      return;
		    }
		    // HTMLImports polyfill may have cloned the style into the main document,
		    // which is referenced with __appliedElement.
		    // Also, we must copy over the attributes.
		    if (style.__appliedElement) {
		      for (var i = 0; i < style.attributes.length; i++) {
		        var attr = style.attributes[i];
		        style.__appliedElement.setAttribute(attr.name, attr.value);
		      }
		    }
		    this._style = style.__appliedElement || style;
		    if (hookFn) {
		      hookFn(this._style);
		    }
		    ShadyCSS$1._transformCustomStyleForDocument(this._style);
		  }
		};
		
		CustomStyle.prototype._applyStyle = function () {
		  if (this._style) {
		    ShadyCSS$1._applyCustomStyleToDocument(this._style);
		  }
		};
		
		window.customElements.define('custom-style', CustomStyle);
		window['CustomStyle'] = CustomStyle;
		
		/**
		@license
		Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
		This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
		The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
		The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
		Code distributed by Google as part of the polymer project is also
		subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
		*/
		/*
		Small module to load ShadyCSS and CustomStyle together
		*/
		
		}());
		
		//# sourceMappingURL=shadycss.min.js.map
	
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=index.js.map

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	   true ? factory(exports, __webpack_require__(3), __webpack_require__(4)) :
	  typeof define === 'function' && define.amd ? define(['exports', 'incremental-dom', 'window-or-global'], factory) :
	  (factory((global.skate = global.skate || {}),global.IncrementalDOM,global.windowOrGlobal));
	}(this, (function (exports,incrementalDom,root) {
	
	root = 'default' in root ? root['default'] : root;
	
	function keys() {
	  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      _ref$enumOnly = _ref.enumOnly,
	      enumOnly = _ref$enumOnly === undefined ? false : _ref$enumOnly;
	
	  var listOfKeys = Object[enumOnly ? 'keys' : 'getOwnPropertyNames'](obj);
	  return typeof Object.getOwnPropertySymbols === 'function' ? listOfKeys.concat(Object.getOwnPropertySymbols(obj)) : listOfKeys;
	}
	
	// We are not using Object.assign if it is defined since it will cause problems when Symbol is polyfilled.
	// Apparently Object.assign (or any polyfill for this method) does not copy non-native Symbols.
	var assign = (function (obj) {
	  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }
	
	  args.forEach(function (arg) {
	    return keys(arg).forEach(function (name) {
	      return obj[name] = arg[name];
	    });
	  }); // eslint-disable-line no-return-assign
	  return obj;
	});
	
	var empty = function (val) {
	  return typeof val === 'undefined' || val === null;
	};
	
	var alwaysUndefinedIfNotANumberOrNumber = function alwaysUndefinedIfNotANumberOrNumber(val) {
	  return isNaN(val) ? undefined : Number(val);
	};
	var alwaysUndefinedIfEmptyOrString = function alwaysUndefinedIfEmptyOrString(val) {
	  return empty(val) ? undefined : String(val);
	};
	
	function create(def) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    args.unshift({}, def);
	    return assign.apply(undefined, args);
	  };
	}
	
	var array = create({
	  coerce: function coerce(val) {
	    return Array.isArray(val) ? val : [val];
	  },
	  default: function _default() {
	    return [];
	  },
	  deserialize: JSON.parse,
	  serialize: JSON.stringify
	});
	
	var boolean = create({
	  coerce: function coerce(value) {
	    return !!value;
	  },
	  default: false,
	  deserialize: function deserialize(value) {
	    return !(value === null);
	  },
	  serialize: function serialize(value) {
	    return value ? '' : undefined;
	  }
	});
	
	var number = create({
	  default: 0,
	  coerce: alwaysUndefinedIfNotANumberOrNumber,
	  deserialize: alwaysUndefinedIfNotANumberOrNumber,
	  serialize: alwaysUndefinedIfNotANumberOrNumber
	});
	
	var string = create({
	  default: '',
	  coerce: alwaysUndefinedIfEmptyOrString,
	  deserialize: alwaysUndefinedIfEmptyOrString,
	  serialize: alwaysUndefinedIfEmptyOrString
	});
	
	var prop = Object.freeze({
		create: create,
		array: array,
		boolean: boolean,
		number: number,
		string: string
	});
	
	var connected = '____skate_connected';
	var created$1 = '____skate_created';
	var name = '____skate_name';
	var props = '____skate_props';
	var ref$1 = '____skate_ref';
	var renderer$1 = '____skate_renderer';
	var rendering = '____skate_rendering';
	var rendererDebounced = '____skate_rendererDebounced';
	var updated$1 = '____skate_updated';
	
	
	
	var symbols$1 = Object.freeze({
		name: name
	});
	
	function enter(object, props) {
	  var saved = {};
	  Object.keys(props).forEach(function (key) {
	    saved[key] = object[key];
	    object[key] = props[key];
	  });
	  return saved;
	}
	
	function exit(object, saved) {
	  assign(object, saved);
	}
	
	// Decorates a function with a side effect that changes the properties of an
	// object during its execution, and restores them after. There is no error
	// handling here, if the wrapped function throws an error, properties are not
	// restored and all bets are off.
	var propContext = function (object, props) {
	  return function (func) {
	    return function () {
	      var saved = enter(object, props);
	      var result = func.apply(undefined, arguments);
	      exit(object, saved);
	      return result;
	    };
	  };
	};
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};
	
	
	
	
	
	var asyncGenerator = function () {
	  function AwaitValue(value) {
	    this.value = value;
	  }
	
	  function AsyncGenerator(gen) {
	    var front, back;
	
	    function send(key, arg) {
	      return new Promise(function (resolve, reject) {
	        var request = {
	          key: key,
	          arg: arg,
	          resolve: resolve,
	          reject: reject,
	          next: null
	        };
	
	        if (back) {
	          back = back.next = request;
	        } else {
	          front = back = request;
	          resume(key, arg);
	        }
	      });
	    }
	
	    function resume(key, arg) {
	      try {
	        var result = gen[key](arg);
	        var value = result.value;
	
	        if (value instanceof AwaitValue) {
	          Promise.resolve(value.value).then(function (arg) {
	            resume("next", arg);
	          }, function (arg) {
	            resume("throw", arg);
	          });
	        } else {
	          settle(result.done ? "return" : "normal", result.value);
	        }
	      } catch (err) {
	        settle("throw", err);
	      }
	    }
	
	    function settle(type, value) {
	      switch (type) {
	        case "return":
	          front.resolve({
	            value: value,
	            done: true
	          });
	          break;
	
	        case "throw":
	          front.reject(value);
	          break;
	
	        default:
	          front.resolve({
	            value: value,
	            done: false
	          });
	          break;
	      }
	
	      front = front.next;
	
	      if (front) {
	        resume(front.key, front.arg);
	      } else {
	        back = null;
	      }
	    }
	
	    this._invoke = send;
	
	    if (typeof gen.return !== "function") {
	      this.return = undefined;
	    }
	  }
	
	  if (typeof Symbol === "function" && Symbol.asyncIterator) {
	    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
	      return this;
	    };
	  }
	
	  AsyncGenerator.prototype.next = function (arg) {
	    return this._invoke("next", arg);
	  };
	
	  AsyncGenerator.prototype.throw = function (arg) {
	    return this._invoke("throw", arg);
	  };
	
	  AsyncGenerator.prototype.return = function (arg) {
	    return this._invoke("return", arg);
	  };
	
	  return {
	    wrap: function (fn) {
	      return function () {
	        return new AsyncGenerator(fn.apply(this, arguments));
	      };
	    },
	    await: function (value) {
	      return new AwaitValue(value);
	    }
	  };
	}();
	
	
	
	
	
	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	
	
	
	
	
	
	var defineProperty = function (obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};
	
	var get$1 = function get$1(object, property, receiver) {
	  if (object === null) object = Function.prototype;
	  var desc = Object.getOwnPropertyDescriptor(object, property);
	
	  if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);
	
	    if (parent === null) {
	      return undefined;
	    } else {
	      return get$1(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;
	
	    if (getter === undefined) {
	      return undefined;
	    }
	
	    return getter.call(receiver);
	  }
	};
	
	var inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	
	
	
	
	
	
	
	
	
	
	
	var possibleConstructorReturn = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};
	
	
	
	var set$1 = function set$1(object, property, value, receiver) {
	  var desc = Object.getOwnPropertyDescriptor(object, property);
	
	  if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);
	
	    if (parent !== null) {
	      set$1(parent, property, value, receiver);
	    }
	  } else if ("value" in desc && desc.writable) {
	    desc.value = value;
	  } else {
	    var setter = desc.set;
	
	    if (setter !== undefined) {
	      setter.call(receiver, value);
	    }
	  }
	
	  return value;
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var toConsumableArray = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
	
	    return arr2;
	  } else {
	    return Array.from(arr);
	  }
	};
	
	/* eslint no-plusplus: 0 */
	
	var customElements = root.customElements;
	
	var applyDefault = incrementalDom.attributes[incrementalDom.symbols.default];
	
	// A stack of children that corresponds to the current function helper being
	// executed.
	var stackChren = [];
	
	var $skip = '__skip';
	var $currentEventHandlers = '__events';
	var $stackCurrentHelperProps = '__props';
	
	// The current function helper in the stack.
	var stackCurrentHelper = void 0;
	
	// This is used for the Incremental DOM overrides to keep track of what args
	// to pass the main elementOpen() function.
	var overrideArgs = void 0;
	
	// The number of levels deep after skipping a tree.
	var skips = 0;
	
	var noop = function noop() {};
	
	// Adds or removes an event listener for an element.
	function applyEvent(elem, ename, newFunc) {
	  var events = elem[$currentEventHandlers];
	
	  if (!events) {
	    events = elem[$currentEventHandlers] = {};
	  }
	
	  var oldFunc = events[ename];
	
	  // Remove old listener so they don't double up.
	  if (oldFunc) {
	    elem.removeEventListener(ename, oldFunc);
	  }
	
	  // Bind new listener.
	  if (newFunc) {
	    elem.addEventListener(ename, events[ename] = newFunc);
	  }
	}
	
	var attributesContext = propContext(incrementalDom.attributes, defineProperty({
	  // Attributes that shouldn't be applied to the DOM.
	  key: noop,
	  statics: noop,
	
	  // Attributes that *must* be set via a property on all elements.
	  checked: incrementalDom.applyProp,
	  className: incrementalDom.applyProp,
	  disabled: incrementalDom.applyProp,
	  value: incrementalDom.applyProp,
	
	  // Ref handler.
	  ref: function ref(elem, name$$1, value) {
	    elem[ref$1] = value;
	  },
	
	
	  // Skip handler.
	  skip: function skip(elem, name$$1, value) {
	    if (value) {
	      elem[$skip] = true;
	    } else {
	      delete elem[$skip];
	    }
	  }
	}, incrementalDom.symbols.default, function (elem, name$$1, value) {
	  var _ref = customElements.get(elem.tagName) || {
	    props: {},
	    prototype: {}
	  },
	      props$$1 = _ref.props,
	      prototype = _ref.prototype;
	
	  // TODO when refactoring properties to not have to workaround the old
	  // WebKit bug we can remove the "name in props" check below.
	  //
	  // NOTE: That the "name in elem" check won't work for polyfilled custom
	  // elements that set a property that isn't explicitly specified in "props"
	  // or "prototype" unless it is added to the element explicitly as a
	  // property prior to passing the prop to the vdom function. For example, if
	  // it were added in a lifecycle callback because it wouldn't have been
	  // upgraded yet.
	  //
	  // We prefer setting props, so we do this if there's a property matching
	  // name that was passed. However, certain props on SVG elements are
	  // readonly and error when you try to set them.
	
	
	  if ((name$$1 in props$$1 || name$$1 in elem || name$$1 in prototype) && !('ownerSVGElement' in elem)) {
	    incrementalDom.applyProp(elem, name$$1, value);
	    return;
	  }
	
	  // Explicit false removes the attribute.
	  if (value === false) {
	    applyDefault(elem, name$$1);
	    return;
	  }
	
	  // Handle built-in and custom events.
	  if (name$$1.indexOf('on') === 0) {
	    var firstChar = name$$1[2];
	    var eventName = void 0;
	
	    if (firstChar === '-') {
	      eventName = name$$1.substring(3);
	    } else if (firstChar === firstChar.toUpperCase()) {
	      eventName = firstChar.toLowerCase() + name$$1.substring(3);
	    }
	
	    if (eventName) {
	      applyEvent(elem, eventName, value);
	      return;
	    }
	  }
	
	  applyDefault(elem, name$$1, value);
	}));
	
	function resolveTagName(tname) {
	  // If the tag name is a function, a Skate constructor or a standard function
	  // is supported.
	  //
	  // - If a Skate constructor, the tag name is extracted from that.
	  // - If a standard function, it is used as a helper.
	  if (typeof tname === 'function') {
	    return tname[name] || tname;
	  }
	
	  // All other tag names are just passed through.
	  return tname;
	}
	
	// Incremental DOM's elementOpen is where the hooks in `attributes` are applied,
	// so it's the only function we need to execute in the context of our attributes.
	var elementOpen$1 = attributesContext(incrementalDom.elementOpen);
	
	function elementOpenStart(tag) {
	  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	  var statics = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	
	  overrideArgs = [tag, key, statics];
	}
	
	function elementOpenEnd() {
	  var node = newElementOpen.apply(undefined, toConsumableArray(overrideArgs)); // eslint-disable-line no-use-before-define
	  overrideArgs = null;
	  return node;
	}
	
	function wrapIdomFunc(func) {
	  var tnameFuncHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
	
	  return function wrap() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    args[0] = resolveTagName(args[0]);
	    stackCurrentHelper = null;
	    if (typeof args[0] === 'function') {
	      // If we've encountered a function, handle it according to the type of
	      // function that is being wrapped.
	      stackCurrentHelper = args[0];
	      return tnameFuncHandler.apply(undefined, args);
	    } else if (stackChren.length) {
	      // We pass the wrap() function in here so that when it's called as
	      // children, it will queue up for the next stack, if there is one.
	      stackChren[stackChren.length - 1].push([wrap, args]);
	    } else {
	      if (func === elementOpen$1) {
	        if (skips) {
	          return ++skips;
	        }
	
	        var elem = func.apply(undefined, args);
	
	        if (elem[$skip]) {
	          ++skips;
	        }
	
	        return elem;
	      }
	
	      if (func === incrementalDom.elementClose) {
	        if (skips === 1) {
	          incrementalDom.skip();
	        }
	
	        // We only want to skip closing if it's not the last closing tag in the
	        // skipped tree because we keep the element that initiated the skpping.
	        if (skips && --skips) {
	          return;
	        }
	
	        var _elem = func.apply(undefined, args);
	        var ref$$1 = _elem[ref$1];
	
	        // We delete so that it isn't called again for the same element. If the
	        // ref changes, or the element changes, this will be defined again.
	        delete _elem[ref$1];
	
	        // Execute the saved ref after esuring we've cleand up after it.
	        if (typeof ref$$1 === 'function') {
	          ref$$1(_elem);
	        }
	
	        return _elem;
	      }
	
	      // We must call elementOpenStart and elementOpenEnd even if we are
	      // skipping because they queue up attributes and then call elementClose.
	      if (!skips || func === elementOpenStart || func === elementOpenEnd) {
	        return func.apply(undefined, args);
	      }
	    }
	  };
	}
	
	function newAttr() {
	  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    args[_key2] = arguments[_key2];
	  }
	
	  if (stackCurrentHelper) {
	    stackCurrentHelper[$stackCurrentHelperProps][args[0]] = args[1];
	  } else if (stackChren.length) {
	    stackChren[stackChren.length - 1].push([newAttr, args]);
	  } else {
	    overrideArgs.push(args[0]);
	    overrideArgs.push(args[1]);
	  }
	}
	
	function stackOpen(tname, key, statics) {
	  var props$$1 = { key: key, statics: statics };
	
	  for (var _len3 = arguments.length, attrs = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
	    attrs[_key3 - 3] = arguments[_key3];
	  }
	
	  for (var a = 0; a < attrs.length; a += 2) {
	    props$$1[attrs[a]] = attrs[a + 1];
	  }
	  tname[$stackCurrentHelperProps] = props$$1;
	  stackChren.push([]);
	}
	
	function stackClose(tname) {
	  var chren = stackChren.pop();
	  var props$$1 = tname[$stackCurrentHelperProps];
	  delete tname[$stackCurrentHelperProps];
	  var elemOrFn = tname(props$$1, function () {
	    return chren.forEach(function (args) {
	      return args[0].apply(args, toConsumableArray(args[1]));
	    });
	  });
	  return typeof elemOrFn === 'function' ? elemOrFn() : elemOrFn;
	}
	
	// Incremental DOM overrides
	// -------------------------
	
	// We must override internal functions that call internal Incremental DOM
	// functions because we can't override the internal references. This means
	// we must roughly re-implement their behaviour. Luckily, they're fairly
	// simple.
	var newElementOpenStart = wrapIdomFunc(elementOpenStart, stackOpen);
	var newElementOpenEnd = wrapIdomFunc(elementOpenEnd);
	
	// Standard open / closed overrides don't need to reproduce internal behaviour
	// because they are the ones referenced from *End and *Start.
	var newElementOpen = wrapIdomFunc(elementOpen$1, stackOpen);
	var newElementClose = wrapIdomFunc(incrementalDom.elementClose, stackClose);
	
	// Ensure we call our overridden functions instead of the internal ones.
	function newElementVoid(tag) {
	  for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
	    args[_key4 - 1] = arguments[_key4];
	  }
	
	  newElementOpen.apply(undefined, [tag].concat(args));
	  return newElementClose(tag);
	}
	
	// Text override ensures their calls can queue if using function helpers.
	var newText = wrapIdomFunc(incrementalDom.text);
	
	// Convenience function for declaring an Incremental DOM element using
	// hyperscript-style syntax.
	function element(tname, attrs) {
	  var atype = typeof attrs === 'undefined' ? 'undefined' : _typeof(attrs);
	
	  // If attributes are a function, then they should be treated as children.
	
	  for (var _len5 = arguments.length, chren = Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
	    chren[_key5 - 2] = arguments[_key5];
	  }
	
	  if (atype === 'function' || atype === 'string' || atype === 'number') {
	    chren.unshift(attrs);
	  }
	
	  // Ensure the attributes are an object. Null is considered an object so we
	  // have to test for this explicitly.
	  if (attrs === null || atype !== 'object') {
	    attrs = {};
	  }
	
	  // We open the element so we can set attrs after.
	  newElementOpenStart(tname, attrs.key, attrs.statics);
	
	  // Delete so special attrs don't actually get set.
	  delete attrs.key;
	  delete attrs.statics;
	
	  // Set attributes.
	  Object.keys(attrs).forEach(function (name$$1) {
	    return newAttr(name$$1, attrs[name$$1]);
	  });
	
	  // Close before we render the descendant tree.
	  newElementOpenEnd(tname);
	
	  chren.forEach(function (ch) {
	    var ctype = typeof ch === 'undefined' ? 'undefined' : _typeof(ch);
	    if (ctype === 'function') {
	      ch();
	    } else if (ctype === 'string' || ctype === 'number') {
	      newText(ch);
	    } else if (Array.isArray(ch)) {
	      ch.forEach(function (sch) {
	        return sch();
	      });
	    }
	  });
	
	  return newElementClose(tname);
	}
	
	// Even further convenience for building a DSL out of JavaScript functions or hooking into standard
	// transpiles for JSX (React.createElement() / h).
	function builder() {
	  for (var _len6 = arguments.length, tags = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	    tags[_key6] = arguments[_key6];
	  }
	
	  if (tags.length === 0) {
	    return function () {
	      for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	        args[_key7] = arguments[_key7];
	      }
	
	      return element.bind.apply(element, [null].concat(args));
	    };
	  }
	  return tags.map(function (tag) {
	    return function () {
	      for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
	        args[_key8] = arguments[_key8];
	      }
	
	      return element.bind.apply(element, [null, tag].concat(args));
	    };
	  });
	}
	
	
	
	var vdom = Object.freeze({
		element: element,
		builder: builder,
		attr: newAttr,
		elementClose: newElementClose,
		elementOpen: newElementOpen,
		elementOpenEnd: newElementOpenEnd,
		elementOpenStart: newElementOpenStart,
		elementVoid: newElementVoid,
		text: newText
	});
	
	var data = function (element) {
	  var namespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	
	  var data = element.__SKATE_DATA || (element.__SKATE_DATA = {});
	  return namespace && (data[namespace] || (data[namespace] = {})) || data; // eslint-disable-line no-mixed-operators
	};
	
	var nativeHints = ['native code', '[object MutationObserverConstructor]' // for mobile safari iOS 9.0
	];
	var native = (function (fn) {
	  return nativeHints.map(function (hint) {
	    return (fn || '').toString().indexOf([hint]) > -1;
	  }).reduce(function (a, b) {
	    return a || b;
	  });
	});
	
	var MutationObserver = root.MutationObserver;
	
	
	function microtaskDebounce(cbFunc) {
	  var scheduled = false;
	  var i = 0;
	  var cbArgs = [];
	  var elem = document.createElement('span');
	  var observer = new MutationObserver(function () {
	    cbFunc.apply(undefined, toConsumableArray(cbArgs));
	    scheduled = false;
	    cbArgs = null;
	  });
	
	  observer.observe(elem, { childList: true });
	
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    cbArgs = args;
	    if (!scheduled) {
	      scheduled = true;
	      elem.textContent = '' + i;
	      i += 1;
	    }
	  };
	}
	
	// We have to use setTimeout() for IE9 and 10 because the Mutation Observer
	// polyfill requires that the element be in the document to trigger Mutation
	// Events. Mutation Events are also synchronous and thus wouldn't debounce.
	//
	// The soonest we can set the timeout for in IE is 1 as they have issues when
	// setting to 0.
	function taskDebounce(cbFunc) {
	  var scheduled = false;
	  var cbArgs = [];
	  return function () {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	
	    cbArgs = args;
	    if (!scheduled) {
	      scheduled = true;
	      setTimeout(function () {
	        scheduled = false;
	        cbFunc.apply(undefined, toConsumableArray(cbArgs));
	      }, 1);
	    }
	  };
	}
	var debounce = native(MutationObserver) ? microtaskDebounce : taskDebounce;
	
	var getOwnPropertyDescriptors = function () {
	  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  return keys(obj).reduce(function (prev, curr) {
	    prev[curr] = Object.getOwnPropertyDescriptor(obj, curr);
	    return prev;
	  }, {});
	};
	
	function get$2(elem) {
	  var props$$1 = {};
	  keys(elem.constructor.props).forEach(function (key) {
	    props$$1[key] = elem[key];
	  });
	
	  return props$$1;
	}
	
	function set$2(elem, newProps) {
	  assign(elem, newProps);
	  if (elem.constructor[renderer$1]) {
	    elem.constructor[renderer$1](elem);
	  }
	}
	
	var props$1 = function (elem, newProps) {
	  return typeof newProps === 'undefined' ? get$2(elem) : set$2(elem, newProps);
	};
	
	function getDefaultValue(elem, name, opts) {
	  return typeof opts.default === 'function' ? opts.default(elem, { name: name }) : opts.default;
	}
	
	function getInitialValue(elem, name, opts) {
	  return typeof opts.initial === 'function' ? opts.initial(elem, { name: name }) : opts.initial;
	}
	
	function getPropData(elem, name) {
	  var elemData = data(elem, 'props');
	  return elemData[name] || (elemData[name] = {});
	}
	
	function syncFirstTimeProp(elem, prop, propName, attributeName, propData) {
	  var syncAttrValue = propData.lastAssignedValue;
	  if (empty(syncAttrValue)) {
	    if ('initial' in prop) {
	      syncAttrValue = getInitialValue(elem, propName, prop);
	    } else if ('default' in prop) {
	      syncAttrValue = getDefaultValue(elem, propName, prop);
	    }
	  }
	  if (!empty(syncAttrValue) && prop.serialize) {
	    syncAttrValue = prop.serialize(syncAttrValue);
	  }
	  if (!empty(syncAttrValue)) {
	    propData.syncingAttribute = true;
	    elem.setAttribute(attributeName, syncAttrValue);
	  }
	}
	
	function syncExistingProp(elem, prop, propName, attributeName, propData) {
	  if (attributeName && !propData.settingAttribute) {
	    var internalValue = propData.internalValue;
	
	    var serializedValue = prop.serialize(internalValue);
	    var currentAttrValue = elem.getAttribute(attributeName);
	    var serializedIsEmpty = empty(serializedValue);
	    var attributeChanged = !(serializedIsEmpty && empty(currentAttrValue) || serializedValue === currentAttrValue);
	
	    propData.syncingAttribute = true;
	
	    var shouldRemoveAttribute = empty(propData.lastAssignedValue);
	    if (shouldRemoveAttribute || serializedIsEmpty) {
	      elem.removeAttribute(attributeName);
	    } else {
	      elem.setAttribute(attributeName, serializedValue);
	    }
	
	    if (!attributeChanged && propData.syncingAttribute) {
	      propData.syncingAttribute = false;
	    }
	  }
	
	  // Allow the attribute to be linked again.
	  propData.settingAttribute = false;
	}
	
	function syncPropToAttr(elem, prop, propName, isFirstSync) {
	  var attributeName = data(elem, 'propertyLinks')[propName];
	  var propData = getPropData(elem, propName);
	
	  if (attributeName) {
	    if (isFirstSync) {
	      syncFirstTimeProp(elem, prop, propName, attributeName, propData);
	    } else {
	      syncExistingProp(elem, prop, propName, attributeName, propData);
	    }
	  }
	}
	
	var HTMLElement = root.HTMLElement;
	
	var htmlElementPrototype = HTMLElement ? HTMLElement.prototype : {};
	
	function callConstructor(elem) {
	  var elemData = data(elem);
	  var readyCallbacks = elemData.readyCallbacks;
	  var constructor = elem.constructor;
	
	  // Ensures that this can never be called twice.
	
	  if (elem[created$1]) {
	    return;
	  }
	
	  elem[created$1] = true;
	
	  // Set up a renderer that is debounced for property sets to call directly.
	  elem[rendererDebounced] = debounce(constructor[renderer$1].bind(constructor));
	
	  // Set up property lifecycle.
	  if (constructor.props && constructor[props]) {
	    constructor[props](elem);
	  }
	
	  // Props should be set up before calling this.
	  if (typeof constructor.created === 'function') {
	    constructor.created(elem);
	  }
	
	  // Created should be set before invoking the ready listeners.
	  if (readyCallbacks) {
	    readyCallbacks.forEach(function (cb) {
	      return cb(elem);
	    });
	    delete elemData.readyCallbacks;
	  }
	}
	
	function syncPropsToAttrs(elem) {
	  var props$$1 = elem.constructor.props;
	  Object.keys(props$$1).forEach(function (propName) {
	    var prop = props$$1[propName];
	    syncPropToAttr(elem, prop, propName, true);
	  });
	}
	
	function callConnected(elem) {
	  var constructor = elem.constructor;
	
	
	  syncPropsToAttrs(elem);
	
	  elem[connected] = true;
	  elem[rendererDebounced](elem);
	
	  if (typeof constructor.attached === 'function') {
	    constructor.attached(elem);
	  }
	
	  elem.setAttribute('defined', '');
	}
	
	function callDisconnected(elem) {
	  var constructor = elem.constructor;
	
	
	  elem[connected] = false;
	
	  if (typeof constructor.detached === 'function') {
	    constructor.detached(elem);
	  }
	}
	
	// Custom Elements v1
	function Component() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  var elem = (typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === 'object' ? Reflect.construct(HTMLElement, args, this.constructor) : HTMLElement.call(this, args[0]);
	  callConstructor(elem);
	  return elem;
	}
	
	// Custom Elements v1
	Component.observedAttributes = [];
	
	// Skate
	Component.props = {};
	
	// Skate
	Component.extend = function extend() {
	  var definition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var Base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
	
	  // Create class for the user.
	  var Ctor = function (_Base) {
	    inherits(Ctor, _Base);
	
	    function Ctor() {
	      classCallCheck(this, Ctor);
	      return possibleConstructorReturn(this, (Ctor.__proto__ || Object.getPrototypeOf(Ctor)).apply(this, arguments));
	    }
	
	    return Ctor;
	  }(Base);
	
	  // Pass on statics from the Base if not supported (IE 9 and 10).
	
	
	  if (!Ctor.observedAttributes) {
	    var staticOpts = getOwnPropertyDescriptors(Base);
	    delete staticOpts.length;
	    delete staticOpts.prototype;
	    Object.defineProperties(Ctor, staticOpts);
	  }
	
	  // For inheriting from the object literal.
	  var opts = getOwnPropertyDescriptors(definition);
	  var prot = getOwnPropertyDescriptors(definition.prototype);
	
	  // Prototype is non configurable (but is writable).
	  delete opts.prototype;
	
	  // Pass on static and instance members from the definition.
	  Object.defineProperties(Ctor, opts);
	  Object.defineProperties(Ctor.prototype, prot);
	
	  return Ctor;
	};
	
	// Skate
	//
	// Incremental DOM renderer.
	Component.renderer = function renderer(_ref) {
	  var elem = _ref.elem,
	      render = _ref.render,
	      shadowRoot = _ref.shadowRoot;
	
	  incrementalDom.patchInner(shadowRoot, function () {
	    var possibleFn = render(elem);
	    if (typeof possibleFn === 'function') {
	      possibleFn();
	    } else if (Array.isArray(possibleFn)) {
	      possibleFn.forEach(function (fn) {
	        if (typeof fn === 'function') {
	          fn();
	        }
	      });
	    }
	  });
	};
	
	// Skate
	//
	// This is a default implementation that does strict equality copmarison on
	// previous props and next props. It synchronously renders on the first prop
	// that is different and returns immediately.
	Component.updated = function updated(elem, prev) {
	  if (!prev) {
	    return true;
	  }
	  // use get all keys so that we check Symbols as well as regular props
	  // using a for loop so we can break early
	  var allKeys = keys(prev);
	  for (var i = 0; i < allKeys.length; i += 1) {
	    if (prev[allKeys[i]] !== elem[allKeys[i]]) {
	      return true;
	    }
	  }
	  return false;
	};
	
	// Skate
	//
	// Calls the user-defined updated() lifecycle callback.
	Component[updated$1] = function _updated(elem) {
	  if (typeof this.updated === 'function') {
	    var prev = elem[props];
	    elem[props] = props$1(elem);
	    return this.updated(elem, prev);
	  }
	  return true;
	};
	
	// Skate
	//
	// Goes through the user-defined render lifecycle.
	Component[renderer$1] = function _renderer(elem) {
	  if (elem[rendering] || !elem[connected]) {
	    return;
	  }
	
	  // Flag as rendering. This prevents anything from trying to render - or
	  // queueing a render - while there is a pending render.
	  elem[rendering] = true;
	
	  var shouldRender = this[updated$1](elem);
	
	  // Even though this would ideally be checked in the updated() callback,
	  // it may not be, so we ensure that there is a point in proceeding.
	  if (!this.render || !this.renderer) {
	    elem[rendering] = false;
	    return;
	  }
	
	  if (shouldRender) {
	    if (!elem.shadowRoot) {
	      elem.attachShadow({ mode: 'open' });
	    }
	
	    this.renderer({
	      elem: elem,
	      render: this.render,
	      shadowRoot: elem.shadowRoot
	    });
	
	    if (typeof this.rendered === 'function') {
	      this.rendered(elem);
	    }
	  }
	
	  elem[rendering] = false;
	};
	
	Component.prototype = Object.create(htmlElementPrototype, {
	  // Custom Elements v1
	  connectedCallback: {
	    configurable: true,
	    value: function value() {
	      callConnected(this);
	    }
	  },
	
	  // Custom Elements v1
	  disconnectedCallback: {
	    configurable: true,
	    value: function value() {
	      callDisconnected(this);
	    }
	  },
	
	  // Custom Elements v1
	  attributeChangedCallback: {
	    configurable: true,
	    value: function value(name$$1, oldValue, newValue) {
	      var attributeChanged = this.constructor.attributeChanged;
	
	      var propertyName = data(this, 'attributeLinks')[name$$1];
	
	      if (propertyName) {
	        var propData = data(this, 'props')[propertyName];
	
	        // This ensures a property set doesn't cause the attribute changed
	        // handler to run again once we set this flag. This only ever has a
	        // chance to run when you set an attribute, it then sets a property and
	        // then that causes the attribute to be set again.
	        if (propData.syncingAttribute) {
	          propData.syncingAttribute = false;
	        } else {
	          // Sync up the property.
	          var propOpts = this.constructor.props[propertyName];
	          propData.settingAttribute = true;
	          var newPropVal = newValue !== null && propOpts.deserialize ? propOpts.deserialize(newValue) : newValue;
	          this[propertyName] = newPropVal;
	        }
	      }
	
	      if (attributeChanged) {
	        attributeChanged(this, { name: name$$1, newValue: newValue, oldValue: oldValue });
	      }
	    }
	  }
	});
	
	var dashCase = function (str) {
	  return str.split(/([A-Z])/).reduce(function (one, two, idx) {
	    var dash = !one || idx % 2 === 0 ? '' : '-';
	    return '' + one + dash + two.toLowerCase();
	  });
	};
	
	function createNativePropertyDefinition(name$$1, opts) {
	  var prop = {
	    configurable: true,
	    enumerable: true
	  };
	
	  prop.created = function created(elem) {
	    var propData = getPropData(elem, name$$1);
	    var attributeName = opts.attribute === true ? dashCase(name$$1) : opts.attribute;
	    var initialValue = elem[name$$1];
	
	    // Store property to attribute link information.
	    data(elem, 'attributeLinks')[attributeName] = name$$1;
	    data(elem, 'propertyLinks')[name$$1] = attributeName;
	
	    // Set up initial value if it wasn't specified.
	    if (empty(initialValue)) {
	      if (attributeName && elem.hasAttribute(attributeName)) {
	        initialValue = opts.deserialize(elem.getAttribute(attributeName));
	      } else if ('initial' in opts) {
	        initialValue = getInitialValue(elem, name$$1, opts);
	      } else if ('default' in opts) {
	        initialValue = getDefaultValue(elem, name$$1, opts);
	      }
	    }
	
	    propData.internalValue = opts.coerce ? opts.coerce(initialValue) : initialValue;
	  };
	
	  prop.get = function get() {
	    var propData = getPropData(this, name$$1);
	    var internalValue = propData.internalValue;
	
	    return typeof opts.get === 'function' ? opts.get(this, { name: name$$1, internalValue: internalValue }) : internalValue;
	  };
	
	  prop.set = function set(newValue) {
	    var propData = getPropData(this, name$$1);
	    propData.lastAssignedValue = newValue;
	    var oldValue = propData.oldValue;
	
	
	    if (empty(oldValue)) {
	      oldValue = null;
	    }
	
	    if (empty(newValue)) {
	      newValue = getDefaultValue(this, name$$1, opts);
	    }
	
	    if (typeof opts.coerce === 'function') {
	      newValue = opts.coerce(newValue);
	    }
	
	    var changeData = { name: name$$1, newValue: newValue, oldValue: oldValue };
	
	    if (typeof opts.set === 'function') {
	      opts.set(this, changeData);
	    }
	
	    // Queue a re-render.
	    this[rendererDebounced](this);
	
	    // Update prop data so we can use it next time.
	    propData.internalValue = propData.oldValue = newValue;
	
	    // Link up the attribute.
	    if (this[connected]) {
	      syncPropToAttr(this, opts, name$$1, false);
	    }
	  };
	
	  return prop;
	}
	
	var initProps = function (opts) {
	  opts = opts || {};
	
	  if (typeof opts === 'function') {
	    opts = { coerce: opts };
	  }
	
	  return function (name$$1) {
	    return createNativePropertyDefinition(name$$1, assign({
	      default: null,
	      deserialize: function deserialize(value) {
	        return value;
	      },
	      serialize: function serialize(value) {
	        return value;
	      }
	    }, opts));
	  };
	};
	
	/* eslint no-bitwise: 0 */
	
	// Ensures that definitions passed as part of the constructor are functions
	// that return property definitions used on the element.
	function ensurePropertyFunctions(Ctor) {
	  var props$$1 = Ctor.props;
	
	  return keys(props$$1).reduce(function (descriptors, descriptorName) {
	    descriptors[descriptorName] = props$$1[descriptorName];
	    if (typeof descriptors[descriptorName] !== 'function') {
	      descriptors[descriptorName] = initProps(descriptors[descriptorName]);
	    }
	    return descriptors;
	  }, {});
	}
	
	// Ensures the property definitions are transformed to objects that can be used
	// to create properties on the element.
	function ensurePropertyDefinitions(Ctor) {
	  var props$$1 = ensurePropertyFunctions(Ctor);
	  return keys(props$$1).reduce(function (descriptors, descriptorName) {
	    descriptors[descriptorName] = props$$1[descriptorName](descriptorName);
	    return descriptors;
	  }, {});
	}
	
	// Ensures linked properties that have linked attributes are pre-formatted to
	// the attribute name in which they are linked.
	function formatLinkedAttributes(Ctor) {
	  var observedAttributes = Ctor.observedAttributes,
	      props$$1 = Ctor.props;
	
	
	  if (!props$$1) {
	    return;
	  }
	
	  keys(props$$1).forEach(function (name$$1) {
	    var prop = props$$1[name$$1];
	    var attr = prop.attribute;
	    if (attr) {
	      // Ensure the property is updated.
	      var linkedAttr = prop.attribute = attr === true ? dashCase(name$$1) : attr;
	
	      // Automatically observe the attribute since they're linked from the
	      // attributeChangedCallback.
	      if (observedAttributes.indexOf(linkedAttr) === -1) {
	        observedAttributes.push(linkedAttr);
	      }
	    }
	  });
	
	  // Merge observed attributes.
	  Object.defineProperty(Ctor, 'observedAttributes', {
	    configurable: true,
	    enumerable: true,
	    get: function get() {
	      return observedAttributes;
	    }
	  });
	}
	
	function createInitProps(Ctor) {
	  var props$$1 = ensurePropertyDefinitions(Ctor);
	
	  return function (elem) {
	    if (!props$$1) {
	      return;
	    }
	
	    keys(props$$1).forEach(function (name$$1) {
	      var prop = props$$1[name$$1];
	      prop.created(elem);
	
	      // We check here before defining to see if the prop was specified prior
	      // to upgrading.
	      var hasPropBeforeUpgrading = name$$1 in elem;
	
	      // This is saved prior to defining so that we can set it after it it was
	      // defined prior to upgrading. We don't want to invoke the getter if we
	      // don't need to, so we only get the value if we need to re-sync.
	      var valueBeforeUpgrading = hasPropBeforeUpgrading && elem[name$$1];
	
	      // https://bugs.webkit.org/show_bug.cgi?id=49739
	      //
	      // When Webkit fixes that bug so that native property accessors can be
	      // retrieved, we can move defining the property to the prototype and away
	      // from having to do if for every instance as all other browsers support
	      // this.
	      Object.defineProperty(elem, name$$1, prop);
	
	      // We re-set the prop if it was specified prior to upgrading because we
	      // need to ensure set() is triggered both in polyfilled environments and
	      // in native where the definition may be registerd after elements it
	      // represents have already been created.
	      if (hasPropBeforeUpgrading) {
	        elem[name$$1] = valueBeforeUpgrading;
	      }
	    });
	  };
	}
	
	function generateUniqueName(name$$1) {
	  // http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript/2117523#2117523
	  var rand = 'xxxxxxxx'.replace(/[xy]/g, function (c) {
	    var r = Math.random() * 16 | 0;
	    var v = c === 'x' ? r : r & 0x3 | 0x8; // eslint-disable-line no-mixed-operators
	    return v.toString(16);
	  });
	
	  return name$$1 + '-' + rand;
	}
	
	function prepareForRegistration(name$$1, Ctor) {
	  Ctor[name] = name$$1;
	  Ctor[props] = createInitProps(Ctor);
	}
	
	var define = function (name$$1, opts) {
	  if (opts === undefined) {
	    throw new Error('You have to define options to register a component ' + name$$1);
	  }
	  var Ctor = (typeof opts === 'undefined' ? 'undefined' : _typeof(opts)) === 'object' ? Component.extend(opts) : opts;
	  var customElements = root.customElements;
	
	  formatLinkedAttributes(Ctor);
	
	  if (!customElements) {
	    throw new Error('Skate requires native custom element support or a polyfill.');
	  }
	
	  var uniqueName = name$$1;
	  if (customElements.get(name$$1)) {
	    uniqueName = generateUniqueName(name$$1);
	  }
	  prepareForRegistration(uniqueName, Ctor);
	  customElements.define(uniqueName, Ctor, Ctor.extends ? { extends: Ctor.extends } : null);
	  return Ctor;
	};
	
	var Event = function (TheEvent) {
	  if (TheEvent) {
	    try {
	      new TheEvent('emit-init'); // eslint-disable-line no-new
	    } catch (e) {
	      return undefined;
	    }
	  }
	  return TheEvent;
	}(root.Event);
	
	function createCustomEvent(name) {
	  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var detail = opts.detail;
	
	  delete opts.detail;
	
	  var e = void 0;
	  if (Event) {
	    e = new Event(name, opts);
	    if (typeof detail !== 'undefined') {
	      Object.defineProperty(e, 'detail', { value: detail });
	    }
	  } else {
	    e = document.createEvent('CustomEvent');
	    e.initCustomEvent(name, opts.bubbles, opts.cancelable, detail);
	  }
	  return e;
	}
	
	var emit = function (elem, name) {
	  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	  if (opts.bubbles === undefined) {
	    opts.bubbles = true;
	  }
	  if (opts.cancelable === undefined) {
	    opts.cancelable = true;
	  }
	  if (opts.composed === undefined) {
	    opts.composed = true;
	  }
	  return elem.dispatchEvent(createCustomEvent(name, opts));
	};
	
	function getValue(elem) {
	  var type = elem.type;
	  if (type === 'checkbox' || type === 'radio') {
	    return elem.checked ? elem.value || true : false;
	  }
	  return elem.value;
	}
	
	var link = function (elem, target) {
	  return function (e) {
	    var value = getValue(e.target);
	    var localTarget = target || e.target.name || 'value';
	
	    if (localTarget.indexOf('.') > -1) {
	      var parts = localTarget.split('.');
	      var firstPart = parts[0];
	      var propName = parts.pop();
	      var obj = parts.reduce(function (prev, curr) {
	        return prev && prev[curr];
	      }, elem);
	
	      obj[propName || e.target.name] = value;
	      props$1(elem, defineProperty({}, firstPart, elem[firstPart]));
	    } else {
	      props$1(elem, defineProperty({}, localTarget, value));
	    }
	  };
	};
	
	var ready = function (elem, done) {
	  var info = data(elem);
	  if (elem[created$1]) {
	    done(elem);
	  } else if (info.readyCallbacks) {
	    info.readyCallbacks.push(done);
	  } else {
	    info.readyCallbacks = [done];
	  }
	};
	
	var h = builder();
	
	exports.Component = Component;
	exports.define = define;
	exports.emit = emit;
	exports.h = h;
	exports.link = link;
	exports.prop = prop;
	exports.props = props$1;
	exports.ready = ready;
	exports.symbols = symbols$1;
	exports.vdom = vdom;
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	})));
	//# sourceMappingURL=index.js.map


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * @license
	 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS-IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	'use strict';
	
	/**
	 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS-IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	/**
	 * A cached reference to the hasOwnProperty function.
	 */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	/**
	 * A cached reference to the create function.
	 */
	var create = Object.create;
	
	/**
	 * Used to prevent property collisions between our "map" and its prototype.
	 * @param {!Object<string, *>} map The map to check.
	 * @param {string} property The property to check.
	 * @return {boolean} Whether map has property.
	 */
	var has = function (map, property) {
	  return hasOwnProperty.call(map, property);
	};
	
	/**
	 * Creates an map object without a prototype.
	 * @return {!Object}
	 */
	var createMap = function () {
	  return create(null);
	};
	
	/**
	 * Keeps track of information needed to perform diffs for a given DOM node.
	 * @param {!string} nodeName
	 * @param {?string=} key
	 * @constructor
	 */
	function NodeData(nodeName, key) {
	  /**
	   * The attributes and their values.
	   * @const {!Object<string, *>}
	   */
	  this.attrs = createMap();
	
	  /**
	   * An array of attribute name/value pairs, used for quickly diffing the
	   * incomming attributes to see if the DOM node's attributes need to be
	   * updated.
	   * @const {Array<*>}
	   */
	  this.attrsArr = [];
	
	  /**
	   * The incoming attributes for this Node, before they are updated.
	   * @const {!Object<string, *>}
	   */
	  this.newAttrs = createMap();
	
	  /**
	   * The key used to identify this node, used to preserve DOM nodes when they
	   * move within their parent.
	   * @const
	   */
	  this.key = key;
	
	  /**
	   * Keeps track of children within this node by their key.
	   * {?Object<string, !Element>}
	   */
	  this.keyMap = null;
	
	  /**
	   * Whether or not the keyMap is currently valid.
	   * {boolean}
	   */
	  this.keyMapValid = true;
	
	  /**
	   * The node name for this node.
	   * @const {string}
	   */
	  this.nodeName = nodeName;
	
	  /**
	   * @type {?string}
	   */
	  this.text = null;
	}
	
	/**
	 * Initializes a NodeData object for a Node.
	 *
	 * @param {Node} node The node to initialize data for.
	 * @param {string} nodeName The node name of node.
	 * @param {?string=} key The key that identifies the node.
	 * @return {!NodeData} The newly initialized data object
	 */
	var initData = function (node, nodeName, key) {
	  var data = new NodeData(nodeName, key);
	  node['__incrementalDOMData'] = data;
	  return data;
	};
	
	/**
	 * Retrieves the NodeData object for a Node, creating it if necessary.
	 *
	 * @param {Node} node The node to retrieve the data for.
	 * @return {!NodeData} The NodeData for this Node.
	 */
	var getData = function (node) {
	  var data = node['__incrementalDOMData'];
	
	  if (!data) {
	    var nodeName = node.nodeName.toLowerCase();
	    var key = null;
	
	    if (node instanceof Element) {
	      key = node.getAttribute('key');
	    }
	
	    data = initData(node, nodeName, key);
	  }
	
	  return data;
	};
	
	/**
	 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS-IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	/** @const */
	var symbols = {
	  default: '__default',
	
	  placeholder: '__placeholder'
	};
	
	/**
	 * @param {string} name
	 * @return {string|undefined} The namespace to use for the attribute.
	 */
	var getNamespace = function (name) {
	  if (name.lastIndexOf('xml:', 0) === 0) {
	    return 'http://www.w3.org/XML/1998/namespace';
	  }
	
	  if (name.lastIndexOf('xlink:', 0) === 0) {
	    return 'http://www.w3.org/1999/xlink';
	  }
	};
	
	/**
	 * Applies an attribute or property to a given Element. If the value is null
	 * or undefined, it is removed from the Element. Otherwise, the value is set
	 * as an attribute.
	 * @param {!Element} el
	 * @param {string} name The attribute's name.
	 * @param {?(boolean|number|string)=} value The attribute's value.
	 */
	var applyAttr = function (el, name, value) {
	  if (value == null) {
	    el.removeAttribute(name);
	  } else {
	    var attrNS = getNamespace(name);
	    if (attrNS) {
	      el.setAttributeNS(attrNS, name, value);
	    } else {
	      el.setAttribute(name, value);
	    }
	  }
	};
	
	/**
	 * Applies a property to a given Element.
	 * @param {!Element} el
	 * @param {string} name The property's name.
	 * @param {*} value The property's value.
	 */
	var applyProp = function (el, name, value) {
	  el[name] = value;
	};
	
	/**
	 * Applies a style to an Element. No vendor prefix expansion is done for
	 * property names/values.
	 * @param {!Element} el
	 * @param {string} name The attribute's name.
	 * @param {*} style The style to set. Either a string of css or an object
	 *     containing property-value pairs.
	 */
	var applyStyle = function (el, name, style) {
	  if (typeof style === 'string') {
	    el.style.cssText = style;
	  } else {
	    el.style.cssText = '';
	    var elStyle = el.style;
	    var obj = /** @type {!Object<string,string>} */style;
	
	    for (var prop in obj) {
	      if (has(obj, prop)) {
	        elStyle[prop] = obj[prop];
	      }
	    }
	  }
	};
	
	/**
	 * Updates a single attribute on an Element.
	 * @param {!Element} el
	 * @param {string} name The attribute's name.
	 * @param {*} value The attribute's value. If the value is an object or
	 *     function it is set on the Element, otherwise, it is set as an HTML
	 *     attribute.
	 */
	var applyAttributeTyped = function (el, name, value) {
	  var type = typeof value;
	
	  if (type === 'object' || type === 'function') {
	    applyProp(el, name, value);
	  } else {
	    applyAttr(el, name, /** @type {?(boolean|number|string)} */value);
	  }
	};
	
	/**
	 * Calls the appropriate attribute mutator for this attribute.
	 * @param {!Element} el
	 * @param {string} name The attribute's name.
	 * @param {*} value The attribute's value.
	 */
	var updateAttribute = function (el, name, value) {
	  var data = getData(el);
	  var attrs = data.attrs;
	
	  if (attrs[name] === value) {
	    return;
	  }
	
	  var mutator = attributes[name] || attributes[symbols.default];
	  mutator(el, name, value);
	
	  attrs[name] = value;
	};
	
	/**
	 * A publicly mutable object to provide custom mutators for attributes.
	 * @const {!Object<string, function(!Element, string, *)>}
	 */
	var attributes = createMap();
	
	// Special generic mutator that's called for any attribute that does not
	// have a specific mutator.
	attributes[symbols.default] = applyAttributeTyped;
	
	attributes[symbols.placeholder] = function () {};
	
	attributes['style'] = applyStyle;
	
	/**
	 * Gets the namespace to create an element (of a given tag) in.
	 * @param {string} tag The tag to get the namespace for.
	 * @param {?Node} parent
	 * @return {?string} The namespace to create the tag in.
	 */
	var getNamespaceForTag = function (tag, parent) {
	  if (tag === 'svg') {
	    return 'http://www.w3.org/2000/svg';
	  }
	
	  if (getData(parent).nodeName === 'foreignObject') {
	    return null;
	  }
	
	  return parent.namespaceURI;
	};
	
	/**
	 * Creates an Element.
	 * @param {Document} doc The document with which to create the Element.
	 * @param {?Node} parent
	 * @param {string} tag The tag for the Element.
	 * @param {?string=} key A key to identify the Element.
	 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
	 *     static attributes for the Element.
	 * @return {!Element}
	 */
	var createElement = function (doc, parent, tag, key, statics) {
	  var namespace = getNamespaceForTag(tag, parent);
	  var el = undefined;
	
	  if (namespace) {
	    el = doc.createElementNS(namespace, tag);
	  } else {
	    el = doc.createElement(tag);
	  }
	
	  initData(el, tag, key);
	
	  if (statics) {
	    for (var i = 0; i < statics.length; i += 2) {
	      updateAttribute(el, /** @type {!string}*/statics[i], statics[i + 1]);
	    }
	  }
	
	  return el;
	};
	
	/**
	 * Creates a Text Node.
	 * @param {Document} doc The document with which to create the Element.
	 * @return {!Text}
	 */
	var createText = function (doc) {
	  var node = doc.createTextNode('');
	  initData(node, '#text', null);
	  return node;
	};
	
	/**
	 * Creates a mapping that can be used to look up children using a key.
	 * @param {?Node} el
	 * @return {!Object<string, !Element>} A mapping of keys to the children of the
	 *     Element.
	 */
	var createKeyMap = function (el) {
	  var map = createMap();
	  var child = el.firstElementChild;
	
	  while (child) {
	    var key = getData(child).key;
	
	    if (key) {
	      map[key] = child;
	    }
	
	    child = child.nextElementSibling;
	  }
	
	  return map;
	};
	
	/**
	 * Retrieves the mapping of key to child node for a given Element, creating it
	 * if necessary.
	 * @param {?Node} el
	 * @return {!Object<string, !Node>} A mapping of keys to child Elements
	 */
	var getKeyMap = function (el) {
	  var data = getData(el);
	
	  if (!data.keyMap) {
	    data.keyMap = createKeyMap(el);
	  }
	
	  return data.keyMap;
	};
	
	/**
	 * Retrieves a child from the parent with the given key.
	 * @param {?Node} parent
	 * @param {?string=} key
	 * @return {?Node} The child corresponding to the key.
	 */
	var getChild = function (parent, key) {
	  return key ? getKeyMap(parent)[key] : null;
	};
	
	/**
	 * Registers an element as being a child. The parent will keep track of the
	 * child using the key. The child can be retrieved using the same key using
	 * getKeyMap. The provided key should be unique within the parent Element.
	 * @param {?Node} parent The parent of child.
	 * @param {string} key A key to identify the child with.
	 * @param {!Node} child The child to register.
	 */
	var registerChild = function (parent, key, child) {
	  getKeyMap(parent)[key] = child;
	};
	
	/**
	 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS-IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	/** @const */
	var notifications = {
	  /**
	   * Called after patch has compleated with any Nodes that have been created
	   * and added to the DOM.
	   * @type {?function(Array<!Node>)}
	   */
	  nodesCreated: null,
	
	  /**
	   * Called after patch has compleated with any Nodes that have been removed
	   * from the DOM.
	   * Note it's an applications responsibility to handle any childNodes.
	   * @type {?function(Array<!Node>)}
	   */
	  nodesDeleted: null
	};
	
	/**
	 * Keeps track of the state of a patch.
	 * @constructor
	 */
	function Context() {
	  /**
	   * @type {(Array<!Node>|undefined)}
	   */
	  this.created = notifications.nodesCreated && [];
	
	  /**
	   * @type {(Array<!Node>|undefined)}
	   */
	  this.deleted = notifications.nodesDeleted && [];
	}
	
	/**
	 * @param {!Node} node
	 */
	Context.prototype.markCreated = function (node) {
	  if (this.created) {
	    this.created.push(node);
	  }
	};
	
	/**
	 * @param {!Node} node
	 */
	Context.prototype.markDeleted = function (node) {
	  if (this.deleted) {
	    this.deleted.push(node);
	  }
	};
	
	/**
	 * Notifies about nodes that were created during the patch opearation.
	 */
	Context.prototype.notifyChanges = function () {
	  if (this.created && this.created.length > 0) {
	    notifications.nodesCreated(this.created);
	  }
	
	  if (this.deleted && this.deleted.length > 0) {
	    notifications.nodesDeleted(this.deleted);
	  }
	};
	
	/**
	* Makes sure that keyed Element matches the tag name provided.
	* @param {!string} nodeName The nodeName of the node that is being matched.
	* @param {string=} tag The tag name of the Element.
	* @param {?string=} key The key of the Element.
	*/
	var assertKeyedTagMatches = function (nodeName, tag, key) {
	  if (nodeName !== tag) {
	    throw new Error('Was expecting node with key "' + key + '" to be a ' + tag + ', not a ' + nodeName + '.');
	  }
	};
	
	/** @type {?Context} */
	var context = null;
	
	/** @type {?Node} */
	var currentNode = null;
	
	/** @type {?Node} */
	var currentParent = null;
	
	/** @type {?Element|?DocumentFragment} */
	var root = null;
	
	/** @type {?Document} */
	var doc = null;
	
	/**
	 * Returns a patcher function that sets up and restores a patch context,
	 * running the run function with the provided data.
	 * @param {function((!Element|!DocumentFragment),!function(T),T=)} run
	 * @return {function((!Element|!DocumentFragment),!function(T),T=)}
	 * @template T
	 */
	var patchFactory = function (run) {
	  /**
	   * TODO(moz): These annotations won't be necessary once we switch to Closure
	   * Compiler's new type inference. Remove these once the switch is done.
	   *
	   * @param {(!Element|!DocumentFragment)} node
	   * @param {!function(T)} fn
	   * @param {T=} data
	   * @template T
	   */
	  var f = function (node, fn, data) {
	    var prevContext = context;
	    var prevRoot = root;
	    var prevDoc = doc;
	    var prevCurrentNode = currentNode;
	    var prevCurrentParent = currentParent;
	    var previousInAttributes = false;
	    var previousInSkip = false;
	
	    context = new Context();
	    root = node;
	    doc = node.ownerDocument;
	    currentParent = node.parentNode;
	
	    if (false) {}
	
	    run(node, fn, data);
	
	    if (false) {}
	
	    context.notifyChanges();
	
	    context = prevContext;
	    root = prevRoot;
	    doc = prevDoc;
	    currentNode = prevCurrentNode;
	    currentParent = prevCurrentParent;
	  };
	  return f;
	};
	
	/**
	 * Patches the document starting at node with the provided function. This
	 * function may be called during an existing patch operation.
	 * @param {!Element|!DocumentFragment} node The Element or Document
	 *     to patch.
	 * @param {!function(T)} fn A function containing elementOpen/elementClose/etc.
	 *     calls that describe the DOM.
	 * @param {T=} data An argument passed to fn to represent DOM state.
	 * @template T
	 */
	var patchInner = patchFactory(function (node, fn, data) {
	  currentNode = node;
	
	  enterNode();
	  fn(data);
	  exitNode();
	
	  if (false) {}
	});
	
	/**
	 * Patches an Element with the the provided function. Exactly one top level
	 * element call should be made corresponding to `node`.
	 * @param {!Element} node The Element where the patch should start.
	 * @param {!function(T)} fn A function containing elementOpen/elementClose/etc.
	 *     calls that describe the DOM. This should have at most one top level
	 *     element call.
	 * @param {T=} data An argument passed to fn to represent DOM state.
	 * @template T
	 */
	var patchOuter = patchFactory(function (node, fn, data) {
	  currentNode = /** @type {!Element} */{ nextSibling: node };
	
	  fn(data);
	
	  if (false) {}
	});
	
	/**
	 * Checks whether or not the current node matches the specified nodeName and
	 * key.
	 *
	 * @param {?string} nodeName The nodeName for this node.
	 * @param {?string=} key An optional key that identifies a node.
	 * @return {boolean} True if the node matches, false otherwise.
	 */
	var matches = function (nodeName, key) {
	  var data = getData(currentNode);
	
	  // Key check is done using double equals as we want to treat a null key the
	  // same as undefined. This should be okay as the only values allowed are
	  // strings, null and undefined so the == semantics are not too weird.
	  return nodeName === data.nodeName && key == data.key;
	};
	
	/**
	 * Aligns the virtual Element definition with the actual DOM, moving the
	 * corresponding DOM node to the correct location or creating it if necessary.
	 * @param {string} nodeName For an Element, this should be a valid tag string.
	 *     For a Text, this should be #text.
	 * @param {?string=} key The key used to identify this element.
	 * @param {?Array<*>=} statics For an Element, this should be an array of
	 *     name-value pairs.
	 */
	var alignWithDOM = function (nodeName, key, statics) {
	  if (currentNode && matches(nodeName, key)) {
	    return;
	  }
	
	  var node = undefined;
	
	  // Check to see if the node has moved within the parent.
	  if (key) {
	    node = getChild(currentParent, key);
	    if (node && 'production' !== 'production') {
	      assertKeyedTagMatches(getData(node).nodeName, nodeName, key);
	    }
	  }
	
	  // Create the node if it doesn't exist.
	  if (!node) {
	    if (nodeName === '#text') {
	      node = createText(doc);
	    } else {
	      node = createElement(doc, currentParent, nodeName, key, statics);
	    }
	
	    if (key) {
	      registerChild(currentParent, key, node);
	    }
	
	    context.markCreated(node);
	  }
	
	  // If the node has a key, remove it from the DOM to prevent a large number
	  // of re-orders in the case that it moved far or was completely removed.
	  // Since we hold on to a reference through the keyMap, we can always add it
	  // back.
	  if (currentNode && getData(currentNode).key) {
	    currentParent.replaceChild(node, currentNode);
	    getData(currentParent).keyMapValid = false;
	  } else {
	    currentParent.insertBefore(node, currentNode);
	  }
	
	  currentNode = node;
	};
	
	/**
	 * Clears out any unvisited Nodes, as the corresponding virtual element
	 * functions were never called for them.
	 */
	var clearUnvisitedDOM = function () {
	  var node = currentParent;
	  var data = getData(node);
	  var keyMap = data.keyMap;
	  var keyMapValid = data.keyMapValid;
	  var child = node.lastChild;
	  var key = undefined;
	
	  if (child === currentNode && keyMapValid) {
	    return;
	  }
	
	  if (data.attrs[symbols.placeholder] && node !== root) {
	    if (false) {}
	    return;
	  }
	
	  while (child !== currentNode) {
	    node.removeChild(child);
	    context.markDeleted( /** @type {!Node}*/child);
	
	    key = getData(child).key;
	    if (key) {
	      delete keyMap[key];
	    }
	    child = node.lastChild;
	  }
	
	  // Clean the keyMap, removing any unusued keys.
	  if (!keyMapValid) {
	    for (key in keyMap) {
	      child = keyMap[key];
	      if (child.parentNode !== node) {
	        context.markDeleted(child);
	        delete keyMap[key];
	      }
	    }
	
	    data.keyMapValid = true;
	  }
	};
	
	/**
	 * Changes to the first child of the current node.
	 */
	var enterNode = function () {
	  currentParent = currentNode;
	  currentNode = null;
	};
	
	/**
	 * Changes to the next sibling of the current node.
	 */
	var nextNode = function () {
	  if (currentNode) {
	    currentNode = currentNode.nextSibling;
	  } else {
	    currentNode = currentParent.firstChild;
	  }
	};
	
	/**
	 * Changes to the parent of the current node, removing any unvisited children.
	 */
	var exitNode = function () {
	  clearUnvisitedDOM();
	
	  currentNode = currentParent;
	  currentParent = currentParent.parentNode;
	};
	
	/**
	 * Makes sure that the current node is an Element with a matching tagName and
	 * key.
	 *
	 * @param {string} tag The element's tag.
	 * @param {?string=} key The key used to identify this element. This can be an
	 *     empty string, but performance may be better if a unique value is used
	 *     when iterating over an array of items.
	 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
	 *     static attributes for the Element. These will only be set once when the
	 *     Element is created.
	 * @return {!Element} The corresponding Element.
	 */
	var coreElementOpen = function (tag, key, statics) {
	  nextNode();
	  alignWithDOM(tag, key, statics);
	  enterNode();
	  return (/** @type {!Element} */currentParent
	  );
	};
	
	/**
	 * Closes the currently open Element, removing any unvisited children if
	 * necessary.
	 *
	 * @return {!Element} The corresponding Element.
	 */
	var coreElementClose = function () {
	  if (false) {}
	
	  exitNode();
	  return (/** @type {!Element} */currentNode
	  );
	};
	
	/**
	 * Makes sure the current node is a Text node and creates a Text node if it is
	 * not.
	 *
	 * @return {!Text} The corresponding Text Node.
	 */
	var coreText = function () {
	  nextNode();
	  alignWithDOM('#text', null, null);
	  return (/** @type {!Text} */currentNode
	  );
	};
	
	/**
	 * Gets the current Element being patched.
	 * @return {!Element}
	 */
	var currentElement = function () {
	  if (false) {}
	  return (/** @type {!Element} */currentParent
	  );
	};
	
	/**
	 * Skips the children in a subtree, allowing an Element to be closed without
	 * clearing out the children.
	 */
	var skip = function () {
	  if (false) {}
	  currentNode = currentParent.lastChild;
	};
	
	/**
	 * The offset in the virtual element declaration where the attributes are
	 * specified.
	 * @const
	 */
	var ATTRIBUTES_OFFSET = 3;
	
	/**
	 * Builds an array of arguments for use with elementOpenStart, attr and
	 * elementOpenEnd.
	 * @const {Array<*>}
	 */
	var argsBuilder = [];
	
	/**
	 * @param {string} tag The element's tag.
	 * @param {?string=} key The key used to identify this element. This can be an
	 *     empty string, but performance may be better if a unique value is used
	 *     when iterating over an array of items.
	 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
	 *     static attributes for the Element. These will only be set once when the
	 *     Element is created.
	 * @param {...*} const_args Attribute name/value pairs of the dynamic attributes
	 *     for the Element.
	 * @return {!Element} The corresponding Element.
	 */
	var elementOpen = function (tag, key, statics, const_args) {
	  if (false) {}
	
	  var node = coreElementOpen(tag, key, statics);
	  var data = getData(node);
	
	  /*
	   * Checks to see if one or more attributes have changed for a given Element.
	   * When no attributes have changed, this is much faster than checking each
	   * individual argument. When attributes have changed, the overhead of this is
	   * minimal.
	   */
	  var attrsArr = data.attrsArr;
	  var newAttrs = data.newAttrs;
	  var attrsChanged = false;
	  var i = ATTRIBUTES_OFFSET;
	  var j = 0;
	
	  for (; i < arguments.length; i += 1, j += 1) {
	    if (attrsArr[j] !== arguments[i]) {
	      attrsChanged = true;
	      break;
	    }
	  }
	
	  for (; i < arguments.length; i += 1, j += 1) {
	    attrsArr[j] = arguments[i];
	  }
	
	  if (j < attrsArr.length) {
	    attrsChanged = true;
	    attrsArr.length = j;
	  }
	
	  /*
	   * Actually perform the attribute update.
	   */
	  if (attrsChanged) {
	    for (i = ATTRIBUTES_OFFSET; i < arguments.length; i += 2) {
	      newAttrs[arguments[i]] = arguments[i + 1];
	    }
	
	    for (var _attr in newAttrs) {
	      updateAttribute(node, _attr, newAttrs[_attr]);
	      newAttrs[_attr] = undefined;
	    }
	  }
	
	  return node;
	};
	
	/**
	 * Declares a virtual Element at the current location in the document. This
	 * corresponds to an opening tag and a elementClose tag is required. This is
	 * like elementOpen, but the attributes are defined using the attr function
	 * rather than being passed as arguments. Must be folllowed by 0 or more calls
	 * to attr, then a call to elementOpenEnd.
	 * @param {string} tag The element's tag.
	 * @param {?string=} key The key used to identify this element. This can be an
	 *     empty string, but performance may be better if a unique value is used
	 *     when iterating over an array of items.
	 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
	 *     static attributes for the Element. These will only be set once when the
	 *     Element is created.
	 */
	var elementOpenStart = function (tag, key, statics) {
	  if (false) {}
	
	  argsBuilder[0] = tag;
	  argsBuilder[1] = key;
	  argsBuilder[2] = statics;
	};
	
	/***
	 * Defines a virtual attribute at this point of the DOM. This is only valid
	 * when called between elementOpenStart and elementOpenEnd.
	 *
	 * @param {string} name
	 * @param {*} value
	 */
	var attr = function (name, value) {
	  if (false) {}
	
	  argsBuilder.push(name, value);
	};
	
	/**
	 * Closes an open tag started with elementOpenStart.
	 * @return {!Element} The corresponding Element.
	 */
	var elementOpenEnd = function () {
	  if (false) {}
	
	  var node = elementOpen.apply(null, argsBuilder);
	  argsBuilder.length = 0;
	  return node;
	};
	
	/**
	 * Closes an open virtual Element.
	 *
	 * @param {string} tag The element's tag.
	 * @return {!Element} The corresponding Element.
	 */
	var elementClose = function (tag) {
	  if (false) {}
	
	  var node = coreElementClose();
	
	  if (false) {}
	
	  return node;
	};
	
	/**
	 * Declares a virtual Element at the current location in the document that has
	 * no children.
	 * @param {string} tag The element's tag.
	 * @param {?string=} key The key used to identify this element. This can be an
	 *     empty string, but performance may be better if a unique value is used
	 *     when iterating over an array of items.
	 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
	 *     static attributes for the Element. These will only be set once when the
	 *     Element is created.
	 * @param {...*} const_args Attribute name/value pairs of the dynamic attributes
	 *     for the Element.
	 * @return {!Element} The corresponding Element.
	 */
	var elementVoid = function (tag, key, statics, const_args) {
	  elementOpen.apply(null, arguments);
	  return elementClose(tag);
	};
	
	/**
	 * Declares a virtual Element at the current location in the document that is a
	 * placeholder element. Children of this Element can be manually managed and
	 * will not be cleared by the library.
	 *
	 * A key must be specified to make sure that this node is correctly preserved
	 * across all conditionals.
	 *
	 * @param {string} tag The element's tag.
	 * @param {string} key The key used to identify this element.
	 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
	 *     static attributes for the Element. These will only be set once when the
	 *     Element is created.
	 * @param {...*} const_args Attribute name/value pairs of the dynamic attributes
	 *     for the Element.
	 * @return {!Element} The corresponding Element.
	 */
	var elementPlaceholder = function (tag, key, statics, const_args) {
	  if (false) {}
	
	  elementOpen.apply(null, arguments);
	  skip();
	  return elementClose(tag);
	};
	
	/**
	 * Declares a virtual Text at this point in the document.
	 *
	 * @param {string|number|boolean} value The value of the Text.
	 * @param {...(function((string|number|boolean)):string)} const_args
	 *     Functions to format the value which are called only when the value has
	 *     changed.
	 * @return {!Text} The corresponding text node.
	 */
	var text = function (value, const_args) {
	  if (false) {}
	
	  var node = coreText();
	  var data = getData(node);
	
	  if (data.text !== value) {
	    data.text = /** @type {string} */value;
	
	    var formatted = value;
	    for (var i = 1; i < arguments.length; i += 1) {
	      /*
	       * Call the formatter function directly to prevent leaking arguments.
	       * https://github.com/google/incremental-dom/pull/204#issuecomment-178223574
	       */
	      var fn = arguments[i];
	      formatted = fn(formatted);
	    }
	
	    node.data = formatted;
	  }
	
	  return node;
	};
	
	exports.patch = patchInner;
	exports.patchInner = patchInner;
	exports.patchOuter = patchOuter;
	exports.currentElement = currentElement;
	exports.skip = skip;
	exports.elementVoid = elementVoid;
	exports.elementOpenStart = elementOpenStart;
	exports.elementOpenEnd = elementOpenEnd;
	exports.elementOpen = elementOpen;
	exports.elementClose = elementClose;
	exports.elementPlaceholder = elementPlaceholder;
	exports.text = text;
	exports.attr = attr;
	exports.symbols = symbols;
	exports.attributes = attributes;
	exports.applyAttr = applyAttr;
	exports.applyProp = applyProp;
	exports.notifications = notifications;
	
	//# sourceMappingURL=incremental-dom-cjs.js.map

/***/ },
/* 4 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict'
	module.exports = (typeof self === 'object' && self.self === self && self) ||
	  (typeof global === 'object' && global.global === global && global) ||
	  this
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map