let jsNames = [
  
  "var",
  "let",
  "const",
  "concat",
  "indexOf",
  "join",
  "lastIndexOf",
  "pop",
  "push",
  "reverse",
  "shift",
  "slice",
  "sort",
  "splice",
  "unshift",
  "valueOf",

  "alert",
  "confirm",
  "console.log",
  "document.write",
  "prompt",

  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "eval",
  "isFinite",
  "isNaN",
  "Number",
  "parseFloat",
  "parseInt",

  "for",
  "while",
  "do while",
  "break",
  "continue",

  "charAt",
  "charCodeAt",
  "concat",
  "fromCharCode",
  "indexOf",
  "lastIndexOf",
  "match",
  "replace",
  "search",
  "slice",
  "split",
  "substr",
  "substring",
  "toLowerCase",
  "toUpperCase",
  "valueOf",

  "MAX_VALUE",
  "MIN_VALUE",
  "NaN",
  "NEGATIVE_INFINITY",
  "POSITIVE_INFINITY",

  "toExponential",
  "toFixed",
  "toPrecision",
  "toString",
  "valueOf",

  "E",
  "LN2",
  "LN10",
  "LOG2E",
  "LOG10E",
  "PI",
  "SQRT1_2",
  "SQRT2",

  "abs",
  "acos",
  "asin",
  "atan",
  "atan2",
  "ceil",
  "cos",
  "exp",
  "floor",
  "log",
  "max",
  "min",
  "pow",
  "random",
  "round",
  "sin",
  "sqrt",
  "tan",

  "Date",
  "getDate",
  "getDay",
  "getFullYear",
  "getHours",
  "getMilliseconds",
  "getMinutes",
  "getMonth",
  "getSeconds",
  "getTime",
  "getUTCDate",
  "parse",

  "setDate",
  "setFullYear",
  "setHours",
  "setMilliseconds",
  "setMinutes",
  "setMonth",
  "setSeconds",
  "setTime",
  "setUTCDate",

  "attributes",
  "baseURI",
  "childNodes",
  "firstChild",
  "lastChild",
  "nextSibling",
  "nodeName",
  "nodeType",
  "nodeValue",
  "ownerDocument",
  "parentNode",
  "previousSibling",
  "textContent",
  "innerText",
  "outerText",
  "innerHTML",
  "outerHTML",

  "appendChild",
  "cloneNode",
  "compareDocumentPosition",
  "getFeature",
  "hasAttributes",
  "hasChildNodes",
  "insertBefore",
  "isDefaultNamespace",
  "isEqualNode",
  "isSameNode",
  "isSupported",
  "lookupNamespaceURI",
  "lookupPrefix",
  "normalize",
  "removeChild",
  "replaceChild",

  "getAttribute",
  "getAttributeNS",
  "getAttributeNode",
  "getAttributeNodeNS",
  "getElementsByTagName",
  "getElementByClassName",
  "getElementById",
  "querySelector",
  "querySelectorAll",
  "getElementsByTagNameNS",
  "hasAttribute",
  "hasAttributeNS",
  "removeAttribute",
  "removeAttributeNS",
  "removeAttributeNode",
  "setAttribute",
  "setAttributeNS",
  "setAttributeNode",
  "setAttributeNodeNS",

  "closed",
  "defaultStatus",
  "document",
  "frames",
  "history",
  "innerHeight",
  "innerWidth",
  "length",
  "location",
  "name",
  "navigator",
  "opener",
  "outerHeight",
  "outerWidth",
  "pageXOffset",
  "pageYOffset",
  "parent",
  "screen",
  "screenLeft",
  "screenTop",
  "screenX",
  "screenY",
  "self",
  "status",
  "top",

  "alert",
  "blur",
  "clearInterval",
  "clearTimeout",
  "close",
  "confirm",
  "focus",
  "moveBy",
  "moveTo",
  "open",
  "print",
  "prompt",
  "resizeBy",
  "resizeTo",
  "scrollBy",
  "scrollTo",
  "setInterval",
  "setTimeout",
  "stop",

  "availHeight",
  "availWidth",
  "colorDepth",
  "height",
  "pixelDepth",
  "width",

  "onclick",
  "oncontextmenu",
  "ondblclick",
  "onmousedown",
  "onmouseenter",
  "onmouseleave",
  "onmousemove",
  "onmouseover",
  "onmouseout",
  "onmouseup",

  "onkeydown",
  "onkeypress",
  "onkeyup",

  "onabort",
  "onbeforeunload",
  "onerror",
  "onhashchange",
  "onload",
  "onpagehide",
  "onpageshow",
  "onresize",
  "onscroll",
  "onunload",

  "onblur",
  "onchange",
  "onfocus",
  "onfocusin",
  "onfocusout",
  "oninput",
  "oninvalid",
  "onreset",
  "onsearch",
  "onselect",
  "onsubmit",

  "ondrag",
  "ondragend",
  "ondragenter",
  "ondragleave",
  "ondragover",
  "ondragstart",
  "ondrop",

  "oncopy",
  "oncut",
  "onpaste",

  "onabort",
  "oncanplay",
  "oncanplaythrough",
  "ondurationchange",
  "onerror",
  "onloadeddata",
  "onloadedmetadata",
  "onloadstart",
  "onpause",
  "onplay",
  "onplaying",
  "onprogress",
  "onratechange",
  "onseeked",
  "onseeking",
  "onstalled",
  "onsuspend",
  "ontimeupdate",
  "onvolumechange",
  "onwaiting",

  "animationend",
  "animationiteration",
  "animationstart",

  "transitionend",
  "onmessage",
  "onoffline",
  "ononline",
  "onpopstate",
  "onshow",
  "onstorage",
  "ontoggle",
  "onwheel",
  "ontouchcancel",
  "ontouchend",
  "ontouchmove",
  "ontouchstart",

  "try",
  "catch",
  "throw",
  "finally",
  "trim",
  "name",
  "message",
  "EvalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError",

  
  "accessKey",
  "addEventListener",
  "removeEventListener",
  "classList",
  "className",
  "add",
  "remove",
  "click",
  "clientHeight",
  "clientLeft",
  "clientTop",
  "clientWidth",
  "closeNode",
  "closest",
  "contains",
  "contentEditable",
  "dir",
  "firstElementChild",
  "getBoundingClientRect",
  "getElementsByClassName",
  "id",
  "insertAdjacentElement",
  "insertAdjacentHTML",
  "insertAdjacentText",
  "isContentEditable",
  "lang",
  "lastElementChild",
  "matches",
  "namespaceURI",
  "offsetHeight",
  "offsetWidth",
  "offsetLeft",
  "offsetParent",
  "offsetTop",
  "parentElement",
  "previousElementSibling",
  "scrollHeight",
  "scrollIntoView",
  "scrollLeft",
  "scrollTop",
  "scrollWidth",
  "style",
  "tabIndex",
  "tagName",
  "title",
  "function",
  "async",
  
];