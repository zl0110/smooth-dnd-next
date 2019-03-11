!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).SmoothDnD={})}(this,function(e){"use strict";var t,n,o="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};(t=o.Node||o.Element)&&t.prototype&&!t.prototype.matches&&(t.prototype.matches=t.prototype.matchesSelector||t.prototype.mozMatchesSelector||t.prototype.msMatchesSelector||t.prototype.oMatchesSelector||t.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;0<=--n&&t.item(n)!==this;);return-1<n}),(n=o.Node||o.Element)&&n.prototype&&null==n.prototype.firstElementChild&&Object.defineProperty(n.prototype,"firstElementChild",{get:function(){for(var e,t=this.childNodes,n=0;e=t[n++];)if(1===e.nodeType)return e;return null}}),Array.prototype.some||(Array.prototype.some=function(e){if(null==this)throw new TypeError("Array.prototype.some called on null or undefined");if("function"!=typeof e)throw new TypeError;for(var t=Object(this),n=t.length>>>0,o=2<=arguments.length?arguments[1]:void 0,r=0;r<n;r++)if(r in t&&e.call(o,t[r],r,t))return!0;return!1});var r,i=function(e,t,n){return"x"===n?{left:Math.max(e.left,t.left),top:e.top,right:Math.min(e.right,t.right),bottom:e.bottom}:{left:e.left,top:Math.max(e.top,t.top),right:e.right,bottom:Math.min(e.bottom,t.bottom)}},p=function(e){var t=e.getBoundingClientRect(),n={left:t.left,right:t.right+10,top:t.top,bottom:t.bottom};if(s(e,"x")&&!u(e,"x")){var o=n.right-n.left;n.right=n.right+e.scrollWidth-o}if(s(e,"y")&&!u(e,"y")){var r=n.bottom-n.top;n.bottom=n.bottom+e.scrollHeight-r}return n},a=function(e){var t=global.getComputedStyle(e),n=t.overflow;if("auto"===n||"scroll"===n)return"xy";var o=t["overflow-x"],r="auto"===o||"scroll"===o,i=t["overflow-y"],a="auto"===i||"scroll"===i;return"".concat(r?"x":"").concat(a?"y":"")||null},l=function(e,t){var n=global.getComputedStyle(e),o=n.overflow,r=n["overflow-".concat(t)];return"auto"===o||"scroll"===o||("auto"===r||"scroll"===r)},u=function(e,t){var n=global.getComputedStyle(e),o=n.overflow,r=n["overflow-".concat(t)];return"auto"===o||"scroll"===o||"hidden"===o||("auto"===r||"scroll"===r||"hidden"===r)},s=function(e,t){return"x"===t?e.scrollWidth>e.clientWidth:e.scrollHeight>e.clientHeight},m=function(e,t){var n=e,o=t||p(e);for(n=e.parentElement;n;)s(n,"x")&&u(n,"x")&&(o=i(o,n.getBoundingClientRect(),"x")),s(n,"y")&&u(n,"y")&&(o=i(o,n.getBoundingClientRect(),"y")),n=n.parentElement;return o},h=function(t,n){var o=[];return setTimeout(function(){for(var e=t;e;)(l(e,"x")||l(e,"y"))&&(e.addEventListener("scroll",n),o.push(e)),e=e.parentElement;global.addEventListener("scroll",n)},10),{dispose:function(){o.forEach(function(e){e.removeEventListener("scroll",n)}),global.removeEventListener("scroll",n)}}},v=function(e,t){for(var n=e;n;){if(n.matches(t))return n;n=n.parentElement}return null},b=function(e,t){return-1<e.className.split(" ").map(function(e){return e}).indexOf(t)},C=function(e,t){if(e){var n=e.className.split(" ").filter(function(e){return e});-1===n.indexOf(t)&&(n.unshift(t),e.className=n.join(" "))}},y=function(e,t){if(e){var n=e.className.split(" ").filter(function(e){return e&&e!==t});e.className=n.join(" ")}},c=function(e,t){return e.removeChild(e.children[t])},d=function(e,t,n){n>=e.children.length?e.appendChild(t):e.insertBefore(t,e.children[n])},g=function(){global.getSelection?global.getSelection().empty?global.getSelection().empty():global.getSelection().removeAllRanges&&global.getSelection().removeAllRanges():global.document.selection&&global.document.selection.empty()},f=function(e){if(e){var t=global.getComputedStyle(e);if(t)return t.cursor}return null},E="smooth-dnd-container-instance",x="smooth-dnd-containers-in-draggable",S="smooth-dnd-draggable-wrapper",D="animated",w="__smooth_dnd_draggable_translation_value",O="__smooth_dnd_draggable_visibility_value",I="smooth-dnd-ghost",R="smooth-dnd-container",B="smooth-dnd-extra-size-for-insertion",z="smooth-dnd-stretcher-element",T="smooth-dnd-stretcher-instance",A="smooth-dnd-disable-touch-action",P="smooth-dnd-no-user-select",L=Object.freeze({containerInstance:E,containersInDraggable:x,defaultGroupName:"@@smooth-dnd-default-group@@",wrapperClass:S,defaultGrabHandleClass:"smooth-dnd-default-grap-handle",animationClass:D,translationValue:w,visibilityValue:O,ghostClass:I,containerClass:R,extraSizeForInsertion:B,stretcherElementClass:z,stretcherElementInstance:T,isDraggableDetached:"smoth-dnd-is-draggable-detached",disbaleTouchActions:A,noUserSelectClass:P});function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function H(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var M={overflow:"hidden",display:"block"},V={height:"100%",display:"inline-block","vertical-align":"top","white-space":"normal"},X=(j(r={},".".concat(R),{position:"relative"}),j(r,".".concat(R," *"),{"box-sizing":"border-box"}),j(r,".".concat(R,".horizontal"),{"white-space":"nowrap"}),j(r,".".concat(R,".horizontal > .").concat(z),{display:"inline-block"}),j(r,".".concat(R,".horizontal > .").concat(S),V),j(r,".".concat(R,".vertical > .").concat(S),M),j(r,".".concat(S),{}),j(r,".".concat(S,".horizontal"),V),j(r,".".concat(S,".vertical"),M),j(r,".".concat(S,".animated"),{transition:"transform ease"}),j(r,".".concat(I," *"),{"box-sizing":"border-box"}),j(r,".".concat(I,".animated"),{transition:"all ease-in-out"}),j(r,".".concat(A," *"),{"touch-actions":"none","-ms-touch-actions":"none"}),j(r,".".concat(P," *"),{"-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}),r);function Y(o){return Object.keys(o).reduce(function(e,t){var n=o[t];return"object"===N(n)?"".concat(e).concat(t,"{").concat(Y(n),"}"):"".concat(e).concat(t,":").concat(n,";")},"")}function _(e){if(e&&"undefined"!=typeof window){var t=global.document.head||global.document.getElementsByTagName("head")[0],n=global.document.createElement("style"),o=Y({"body *":{cursor:"".concat(e," !important")}});return n.type="text/css",n.styleSheet?n.styleSheet.cssText=o:n.appendChild(global.document.createTextNode(o)),t.appendChild(n),n}return null}var k=function(l){var u=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"y",n=!1,s=null,c=null,d=null,g=null;return{animate:function(e,t){d=e,g=t,(n=!0)&&function a(){null===s&&(s=requestAnimationFrame(function(e){null===c&&(c=e);var t=e-c;c=e;var n,o,r,i=t/1e3*g;o=u,r=i="begin"===d?0-i:i,(n=l)&&(n!==window?"x"===o?n.scrollLeft+=r:n.scrollTop+=r:"x"===o?n.scrollBy(r,0):n.scrollBy(0,r)),s=null,a()}))}()},stop:function(){n&&(cancelAnimationFrame(s),n=!1,s=c=null)}}};function W(e){var t={element:e,rect:m(e,e.getBoundingClientRect()),descendants:[],invalidate:n,axis:"y",dispose:function(){e.removeEventListener("scroll",n)}};function n(){t.rect=m(e,e.getBoundingClientRect()),t.descendants.forEach(function(e){return e.invalidate()})}return e.addEventListener("scroll",n),t}function F(e){return Object.assign(e,k(e.element,e.axis))}var q=function(e){var t,r,i,n=(t=e.map(function(e){return e.element}),r=[],i=null,t.forEach(function(e){var t=e;for(i=null;t;){var n=a(t);if(n&&!r.some(function(e){return e.element===t})){var o=W(t);i&&o.descendants.push(i),i=o,"xy"===n?(r.push(Object.assign({},o,{axis:"x"})),r.push(Object.assign({},o,{axis:"y"},{descendants:[]}))):r.push(Object.assign({},o,{axis:n}))}t=t.parentElement}}),r),o=[].concat(H(n.map(F)),H(function(){function e(){return{left:0,right:global.innerWidth,top:0,bottom:global.innerHeight}}return[Object.assign({rect:e(),axis:"y"},k(global)),Object.assign({rect:e(),axis:"x"},k(global,"x"))]}()));return function(e){var p=e.draggableInfo,t=e.reset;if(o.length){if(t)return o.forEach(function(e){return e.stop()}),void n.forEach(function(e){return e.dispose()});o.forEach(function(e){var t,n,o,r,i,a,l,u,s,c,d,g,f=(t=p.mousePosition,a=(n=e).rect,l=a.left,u=a.right,s=a.top,c=a.bottom,d=t.x,g=t.y,d<l||u<d||g<s||c<g?null:(i="x"===n.axis?(o=l,r=u,d):(o=s,r=c,g),r-i<100?{direction:"end",speedFactor:(100-(r-i))/100}:i-o<100?{direction:"begin",speedFactor:(100-(i-o))/100}:null));f?e.animate(f.direction,1500*f.speedFactor):e.stop()})}}},G=["mousedown","touchstart"],U=["mousemove","touchmove"],J=["mouseup","touchend"],K=null,Q=null,Z=null,$=null,ee=[],te=!1,ne=null,oe=null,re=null,ie=null,ae="undefined"!=typeof window&&!!(global.navigator.userAgent.match(/Android/i)||global.navigator.userAgent.match(/webOS/i)||global.navigator.userAgent.match(/iPhone/i)||global.navigator.userAgent.match(/iPad/i)||global.navigator.userAgent.match(/iPod/i)||global.navigator.userAgent.match(/BlackBerry/i)||global.navigator.userAgent.match(/Windows Phone/i));function le(){"undefined"!=typeof window&&G.forEach(function(e){global.document.addEventListener(e,ce,{passive:!1})})}function ue(){return $&&$.ghostParent?$.ghostParent:Q&&Q.parentElement||global.document.body}var se=function(){var r,i,o,a=null,l=1,u=5;function s(e){var t=ge(e),n=t.clientX,o=t.clientY;if(i)(Math.abs(r.clientX-n)>u||Math.abs(r.clientY-o)>u)&&g();else if(Math.abs(r.clientX-n)>l||Math.abs(r.clientY-o)>l)return f()}function c(){g()}function d(){g()}function g(){clearTimeout(a),U.forEach(function(e){return global.document.removeEventListener(e,s)},{passive:!1}),J.forEach(function(e){return global.document.removeEventListener(e,c)},{passive:!1}),global.document.removeEventListener("drag",d,{passive:!1})}function f(){clearTimeout(a),g(),o()}return function(e,t,n){r=ge(e),o=n,(i="number"==typeof t?t:ae?200:0)&&(a=setTimeout(f,i)),U.forEach(function(e){return global.document.addEventListener(e,s)},{passive:!1}),J.forEach(function(e){return global.document.addEventListener(e,c)},{passive:!1}),global.document.addEventListener("drag",d,{passive:!1})}}();function ce(e){var t=ge(e);if(!te&&(void 0===t.button||0===t.button)&&(Q=v(t.target,"."+S))){var n=v(Q,"."+R),o=ee.filter(function(e){return e.element===n})[0],r=o.getOptions().dragHandleSelector,i=o.getOptions().nonDragAreaSelector,a=!0;r&&!v(t.target,r)&&(a=!1),i&&v(t.target,i)&&(a=!1),a&&se(t,o.getOptions().dragBeginDelay,function(){g(),me(t,f(e.target)),U.forEach(function(e){global.document.addEventListener(e,he,{passive:!1})}),J.forEach(function(e){global.document.addEventListener(e,de,{passive:!1})})})}}function de(){var e;U.forEach(function(e){global.document.removeEventListener(e,he,{passive:!1})}),J.forEach(function(e){global.document.removeEventListener(e,de,{passive:!1})}),oe({reset:!0}),ie&&((e=ie)&&"undefined"!=typeof window&&(global.document.head||global.document.getElementsByTagName("head")[0]).removeChild(e),ie=null),$&&function(e){function i(){y(Z.ghost,"animated"),Z.ghost.style.transitionDuration=null,ue().removeChild(Z.ghost),e()}function t(e,t,n){var o=e.top,r=e.left;C(Z.ghost,"animated"),n&&C(Z.ghost.firstElementChild,n),Z.ghost.style.transitionDuration=t+"ms",Z.ghost.style.left=r+"px",Z.ghost.style.top=o+"px",setTimeout(function(){i()},t+20)}if($.targetElement){var n=ee.filter(function(e){return e.element===$.targetElement})[0];!(f=n.getOptions()).shouldAnimateDrop||f.shouldAnimateDrop($.container.getOptions(),$.payload)?t(n.getDragResult().shadowBeginEnd.rect,Math.max(150,n.getOptions().animationDuration/2),n.getOptions().dropClass):i()}else{var o=ee.filter(function(e){return e===$.container})[0],r=o.getOptions(),a=r.behaviour,l=r.removeOnDropOut;if("move"===a&&!l&&o.getDragResult()){var u=o.getDragResult(),s=u.removedIndex,c=u.elementSize,d=o.layout;o.getTranslateCalculator({dragResult:{removedIndex:s,addedIndex:s,elementSize:c,pos:void 0,shadowBeginEnd:void 0}});var g=0<s?d.getBeginEnd(o.draggables[s-1]).end:d.getBeginEndOfContainer().begin;t(d.getTopLeftOfElementBegin(g),o.getOptions().animationDuration,o.getOptions().dropClass)}else C(Z.ghost,"animated"),Z.ghost.style.transitionDuration=o.getOptions().animationDuration+"ms",Z.ghost.style.opacity="0",Z.ghost.style.transform="scale(0.90)",setTimeout(function(){i()},o.getOptions().animationDuration)}var f}(function(){y(global.document.body,A),y(global.document.body,P),pe(!1),(K||[]).forEach(function(e){e.handleDrop($)}),te=!1,ne=re=$=Z=Q=K=null})}function ge(e){return e.touches?e.touches[0]:e}function fe(e,t){return e.getOptions().autoScrollEnabled?q(t):function(e){return null}}function pe(o){ee.forEach(function(e){var t=o?e.getOptions().onDragStart:e.getOptions().onDragEnd;if(t){var n={isSource:e===$.container,payload:$.payload};e.isDragRelevant($.container,$.payload)?n.willAcceptDrop=!0:n.willAcceptDrop=!1,t(n)}})}function me(e,t){if(null!==Q){te=!0;var n=ee.filter(function(e){return Q.parentElement===e.element})[0];n.setDraggables(),re=n.getOptions().lockAxis?n.getOptions().lockAxis.toLowerCase():null,b=Q,y=ee.filter(function(e){return b.parentElement===e.element})[0],E=y.draggables.indexOf(b),x=y.getOptions().getGhostParent,$={container:y,element:b,elementIndex:E,payload:y.getOptions().getChildPayload?y.getOptions().getChildPayload(E):void 0,targetElement:null,position:{x:0,y:0},groupName:y.getOptions().groupName,ghostParent:x?x():null,invalidateShadow:null,mousePosition:null},o=Q,i={x:e.clientX,y:e.clientY},a=$.container,l=t,u=i.x,s=i.y,c=o.getBoundingClientRect(),d=c.left,g=c.top,f=c.right,p=c.bottom,m=d+(f-d)/2,h=g+(p-g)/2,(v=o.cloneNode(!0)).style.zIndex="1000",v.style.boxSizing="border-box",v.style.position="fixed",v.style.left=d+"px",v.style.top=g+"px",v.style.width=f-d+"px",v.style.height=p-g+"px",v.style.overflow="visible",v.style.transition=null,v.style.removeProperty("transition"),v.style.pointerEvents="none",a.getOptions().dragClass?setTimeout(function(){C(v.firstElementChild,a.getOptions().dragClass);var e=global.getComputedStyle(v.firstElementChild).cursor;ie=_(e)}):ie=_(l),C(v,a.getOptions().orientation||"vertical"),C(v,I),Z={ghost:v,centerDelta:{x:m-u,y:h-s},positionDelta:{left:d-u,top:g-s}},$.position={x:e.clientX+Z.centerDelta.x,y:e.clientY+Z.centerDelta.y},$.mousePosition={x:e.clientX,y:e.clientY},C(global.document.body,A),C(global.document.body,P),K=ee.filter(function(e){return e.isDragRelevant(n,$.payload)}),r=K,ne=function(n){var o=!1;r.forEach(function(e){var t=e.handleDrag(n);o=!!t.containerBoxChanged||!1,t.containerBoxChanged=!1}),oe({draggableInfo:n}),o&&(o=!1,setTimeout(function(){ee.forEach(function(e){e.layout.invalidateRects(),e.onTranslated()})},10))},oe&&oe({reset:!0,draggableInfo:void 0}),oe=fe(n,K),K.forEach(function(e){return e.prepareDrag(e,K)}),pe(!0),ne($),ue().appendChild(Z.ghost)}var r,o,i,a,l,u,s,c,d,g,f,p,m,h,v,b,y,E,x}function he(e){e.preventDefault();var t=ge(e);$?(re?"y"===re?(Z.ghost.style.top="".concat(t.clientY+Z.positionDelta.top,"px"),$.position.y=t.clientY+Z.centerDelta.y,$.mousePosition.y=t.clientY):"x"===re&&(Z.ghost.style.left="".concat(t.clientX+Z.positionDelta.left,"px"),$.position.x=t.clientX+Z.centerDelta.x,$.mousePosition.x=t.clientX):(Z.ghost.style.left="".concat(t.clientX+Z.positionDelta.left,"px"),Z.ghost.style.top="".concat(t.clientY+Z.positionDelta.top,"px"),$.position.x=t.clientX+Z.centerDelta.x,$.position.y=t.clientY+Z.centerDelta.y,$.mousePosition.x=t.clientX,$.mousePosition.y=t.clientY),ne($)):me(t,f(e.target))}!function(){if("undefined"!=typeof window){var e=global.document.head||global.document.getElementsByTagName("head")[0],t=global.document.createElement("style"),n=Y(X);t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(global.document.createTextNode(n)),e.appendChild(t)}}();var ve=(le(),{register:function(e){var t;t=e,ee.push(t),te&&$&&t.isDragRelevant($.container,$.payload)&&(K.push(t),t.prepareDrag(t,K),oe&&oe({reset:!0,draggableInfo:void 0}),oe=fe(t,K),K.forEach(function(e){return e.prepareDrag(e,K)}),t.handleDrag($))},unregister:function(e){ee.splice(ee.indexOf(e),1)}}),be={size:"offsetWidth",distanceToParent:"offsetLeft",translate:"transform",begin:"left",end:"right",dragPosition:"x",scrollSize:"scrollWidth",offsetSize:"offsetWidth",scrollValue:"scrollLeft",scale:"scaleX",setSize:"width",setters:{translate:function(e){return"translate3d(".concat(e,"px, 0, 0)")}}},ye={size:"offsetHeight",distanceToParent:"offsetTop",translate:"transform",begin:"top",end:"bottom",dragPosition:"y",scrollSize:"scrollHeight",offsetSize:"offsetHeight",scrollValue:"scrollTop",scale:"scaleY",setSize:"height",setters:{translate:function(e){return"translate3d(0,".concat(e,"px, 0)")}}};function Ee(o,u,e){o[B]=0;var r,n=e,i=(r="horizontal"===u?be:ye,{get:function(e,t){return e[r[t]||t]},set:function(e,t,n){requestAnimationFrame(function(){e[r[t]]=r.setters[t]?r.setters[t](n):n})}}),s={translation:0},t=null;global.addEventListener("resize",function(){c(o)}),setTimeout(function(){l()},10);var a=h(o,function(){c(o),t&&t()});function l(){var e,t;c(o),t=(e=o).getBoundingClientRect(),s.scaleX=e.offsetWidth?(t.right-t.left)/e.offsetWidth:1,s.scaleY=e.offsetHeight?(t.bottom-t.top)/e.offsetHeight:1}function c(e){s.rect=p(e),s.visibleRect=m(e,s.rect)}function d(e){return i.get(e,"size")*i.get(s,"scale")}function g(e){return i.get(e,"dragPosition")}function f(e,t){var n=s.visibleRect,o=n.left,r=n.top,i=n.right,a=n.bottom;a-r<2&&(a=r+30);var l=s.rect;return"vertical"===u?e>l.left&&e<l.right&&r<t&&t<a:o<e&&e<i&&t>l.top&&t<l.bottom}return{getSize:d,getContainerRectangles:function(){return{rect:s.rect,visibleRect:s.visibleRect}},getBeginEndOfDOMRect:function(e){return{begin:i.get(e,"begin"),end:i.get(e,"end")}},getBeginEndOfContainer:function(){return{begin:i.get(s.rect,"begin")+s.translation,end:i.get(s.rect,"end")+s.translation}},getBeginEndOfContainerVisibleRect:function(){return{begin:i.get(s.visibleRect,"begin")+s.translation,end:i.get(s.visibleRect,"end")+s.translation}},getBeginEnd:function(e){var t,n=(t=e,(i.get(t,"distanceToParent")+(t[w]||0))*i.get(s,"scale")+(i.get(s.rect,"begin")+s.translation)-i.get(o,"scrollValue"));return{begin:n,end:n+d(e)*i.get(s,"scale")}},getAxisValue:g,setTranslation:function(e,t){t?i.set(e.style,"translate",t):e.style.removeProperty("transform"),e[w]=t,e[x]&&setTimeout(function(){e[x].forEach(function(e){!function t(e){e.layout.invalidateRects(),e.onTranslated(),e.getChildContainers()&&e.getChildContainers().forEach(function(e){return t(e)})}(e)})},n+20)},getTranslation:function(e){return e[w]},setVisibility:function(e,t){void 0!==e[O]&&e[O]===t||(t?e.style.removeProperty("visibility"):e.style.visibility="hidden",e[O]=t)},isVisible:function(e){return void 0===e[O]||e[O]},isInVisibleRect:f,dispose:function(){a&&a.dispose()},getContainerScale:function(){return{scaleX:s.scaleX,scaleY:s.scaleY}},setScrollListener:function(e){t=e},setSize:function(e,t){i.set(e,"setSize",t)},getTopLeftOfElementBegin:function(e){var t=0;return{top:"horizontal"===u?(t=e,s.rect.top):(t=s.rect.left,e),left:t}},getScrollSize:function(e){return i.get(e,"scrollSize")},getScrollValue:function(e){return i.get(e,"scrollValue")},setScrollValue:function(e,t){return i.set(e,"scrollValue",t)},invalidate:l,invalidateRects:function(){c(o)},getPosition:function(e){return f(e.x,e.y)?g(e):null}}}function xe(e){var u=e.element,s=e.draggables;return function(e,t){var n=e,o=n.removedIndex,r=n.addedIndex,i=n.droppedElement,a=null;if(null!==o&&(a=c(u,o),s.splice(o,1)),null!==r){var l=global.document.createElement("div");l.className="".concat(S),l.appendChild(a&&a.firstElementChild?a.firstElementChild:i),l[x]=[],d(u,l,r),r>=s.length?s.push(l):s.splice(r,0,l)}t&&t(e)}}var Ce=Object.freeze({domDropHandler:xe,reactDropHandler:function(){return{handler:function(){return function(e,t){t&&t(e)}}}}}),Se={groupName:void 0,behaviour:"move",orientation:"vertical",getChildPayload:void 0,animationDuration:250,autoScrollEnabled:!0,shouldAcceptDrop:void 0,shouldAnimateDrop:void 0};function De(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:Se.animationDuration;t?(C(e,D),e.style.transitionDuration=n+"ms"):(y(e,D),e.style.removeProperty("transition-duration"))}function we(e){return e?e[E]:null}function Oe(n){var o=[];return Array.prototype.forEach.call(n.children,function(e){if(e.nodeType===Node.ELEMENT_NODE){var t=e;b(e,S)||(t=function(e){if(Qe.wrapChild){var t=global.document.createElement("div");return t.className="".concat(S),e.parentElement.insertBefore(t,e),t.appendChild(e),t}return e}(e)),t[x]=[],t[w]=0,o.push(t)}else n.removeChild(e)}),o}function Ie(e){var f=e.layout;return function(e,t){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2];return function e(t,n,o,r){var i=4<arguments.length&&void 0!==arguments[4]&&arguments[4];if(r<o)return o;if(o===r){var a=f.getBeginEnd(t[o]),l=a.begin,u=a.end;return l<n&&n<=u?i?n<(u+l)/2?o:o+1:o:null}var s=Math.floor((r+o)/2),c=f.getBeginEnd(t[s]),d=c.begin,g=c.end;return n<d?e(t,n,o,s-1,i):g<n?e(t,n,s+1,r,i):i?n<(g+d)/2?s:s+1:s}(e,t,0,e.length-1,n)}}function Re(e){var t,n,o,r,i=e.element,a=e.draggables,l=e.layout,u=e.options,s=(n=(t={element:i,draggables:a,layout:l,options:u}).element,o=t.draggables,r=t.layout,function(){o.forEach(function(e){De(e,!1),r.setTranslation(e,0),r.setVisibility(e,!0),e[x]=[]}),n[T]&&(n[T].parentNode.removeChild(n[T]),n[T]=null)}),c=(Qe.dropHandler||xe)({element:i,draggables:a,layout:l,options:u});return function(e,t){var n=t.addedIndex,o=t.removedIndex;if(s(),e.targetElement||u.removeOnDropOut){var r={removedIndex:o,addedIndex:null!==n?null!==o&&o<n?n-1:n:null,payload:e.payload,droppedElement:e.element.firstElementChild};c(r,u.onDrop)}}}function Be(e,t){var n=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:Se;return Object.assign({},Se,e)}(t),o=Oe(e);return C(e,"".concat(R," ").concat(n.orientation)),{element:e,draggables:o,options:n,layout:Ee(e,n.orientation,n.animationDuration)}}function ze(e,t){var n=function(e,t){for(var n=e.element;n;){var o=we(n.parentElement);if(o&&-1<t.indexOf(o))return{container:o,draggable:n};n=n.parentElement}return null}(e,t);n&&(n.container.getChildContainers().push(e),e.setParentContainer(n.container),n.draggable[x].push(e))}function Te(e){var o=e.element,r=e.options,i=null;return function(e){var t=e.draggableInfo,n=i;return null==i&&t.container.element===o&&"copy"!==r.behaviour&&(n=i=t.elementIndex),{removedIndex:n}}}function Ae(e){var n=e.draggables,o=e.layout;return function(e){var t=e.dragResult;null!==t.removedIndex&&o.setVisibility(n[t.removedIndex],!1)}}function Pe(e){var n=e.element,o=e.layout;return function(e){var t=e.draggableInfo;return{pos:we(n).isPosInChildContainer()?null:o.getPosition(t.position)}}}function Le(e){var n=e.element,o=!1;return function(e){var t=e.dragResult;we(n).getParentContainer()&&o!==(null!==t.pos)&&(o=null!==t.pos,we(n).getParentContainer().onChildPositionCaptured(o))}}function Ne(e){var n=e.layout,o=null;return function(e){var t=e.draggableInfo;return null===e.dragResult.pos?o=null:{elementSize:o=o||n.getSize(t.element)}}}function je(e){var o=e.element;return function(e){var t=e.draggableInfo,n=e.dragResult;!function(e,t){var n=!(2<arguments.length&&void 0!==arguments[2])||arguments[2];t&&n?e.targetElement=t:e.targetElement===t&&(e.targetElement=null)}(t,o,!!n.pos)}}function He(){return function(e){return null!==e.dragResult.pos?{addedIndex:0}:{addedIndex:null}}}function Me(e){e.draggables;var r=e.layout,i=null;return function(e){var t=e.dragResult.addedIndex;if(t===i)return null;i=t;var n=r.getBeginEndOfContainer(),o=n.begin;n.end;return{shadowBeginEnd:{rect:r.getTopLeftOfElementBegin(o)}}}}function Ve(e){var o=We(e);return function(e){var t=e.draggableInfo,n=e.dragResult;return t.invalidateShadow?o({draggableInfo:t,dragResult:n}):null}}function Xe(e){var t,i,a,o=(i=(t=e).draggables,a=Ie({layout:t.layout}),function(e){var t=e.dragResult,n=t.shadowBeginEnd,o=t.pos;if(n)return n.begin+n.beginAdjustment<=o&&n.end>=o?null:o<n.begin+n.beginAdjustment?a(i,o):o>n.end?a(i,o)+1:i.length;var r=a(i,o,!0);return null!==r?r:i.length});return function(e){var t=e.dragResult,n=null;return null!==t.pos&&null===(n=o({dragResult:t}))&&(n=t.addedIndex),{addedIndex:n}}}function Ye(){var r=null;return function(e){var t=e.dragResult,n=t.addedIndex,o=t.shadowBeginEnd;n!==r&&null!==r&&o&&(o.beginAdjustment=0),r=n}}function _e(e){var c=e.element,d=e.draggables,g=e.layout,f=e.options,p=null;return function(e){var t=e.dragResult,n=t.addedIndex,o=t.removedIndex,r=t.elementSize;if(null===o)if(null!==n){if(!p){var i=g.getBeginEndOfContainer();i.end=i.begin+g.getSize(c);var a=g.getScrollSize(c)>g.getSize(c)?i.begin+g.getScrollSize(c)-g.getScrollValue(c):i.end,l=0<d.length?g.getBeginEnd(d[d.length-1]).end-d[d.length-1][w]:i.begin;if(a<l+r){(p=global.document.createElement("div")).className=z+" "+f.orientation;var u=r+l-a;return g.setSize(p.style,"".concat(u,"px")),c.appendChild(p),c[T]=p,{containerBoxChanged:!0}}}}else if(p){g.setTranslation(p,0);var s=p;return p=null,c.removeChild(s),{containerBoxChanged:!(c[T]=null)}}}}function ke(e){var u=e.draggables,s=e.layout,c=null,d=null;return function(e){var t=e.dragResult,n=t.addedIndex,o=t.removedIndex,r=t.elementSize;if(n!==c||o!==d){for(var i=0;i<u.length;i++)if(i!==o){var a=u[i],l=0;null!==o&&o<i&&(l-=s.getSize(u[o])),null!==n&&n<=i&&(l+=r),s.setTranslation(a,l)}return{addedIndex:c=n,removedIndex:d=o}}}}function We(e){var b=e.draggables,y=e.layout,E=null;return function(e){var t=e.draggableInfo,n=e.dragResult,o=n.addedIndex,r=n.removedIndex,i=n.elementSize,a=n.pos,l=n.shadowBeginEnd;if(null===a)return{shadowBeginEnd:E=null};if(null===o||!t.invalidateShadow&&o===E)return null;E&&(E=o);var u=o-1,s=0,c=null,d=null;if(u===r&&u--,-1<u){var g=y.getSize(b[u]);if(d=y.getBeginEnd(b[u]),i<g){var f=(g-i)/2;s=d.end-f}else s=d.end}else d={end:y.getBeginEndOfContainer().begin};var p=1e4,m=o;if(m===r&&m++,m<b.length){var h=y.getSize(b[m]);if(c=y.getBeginEnd(b[m]),i<h){var v=(h-i)/2;p=c.begin+v}else p=c.begin}else c={begin:y.getContainerRectangles().rect.end};return{shadowBeginEnd:{begin:s,end:p,rect:d&&c?y.getTopLeftOfElementBegin(d.end):null,beginAdjustment:l?l.beginAdjustment:0}}}}function Fe(){var a=null;return function(e){var t=e.dragResult,n=t.pos,o=t.addedIndex,r=t.shadowBeginEnd;if(null!==n){if(null!=o&&null===a){if(n<r.begin){var i=n-r.begin-5;r.beginAdjustment=i}a=o}}else a=null}}function qe(e){var n=e.options,o=!1;return function(e){var t=!!e.dragResult.pos;if(t!==o){if(!(o=t))return n.onDragLeave&&n.onDragLeave(),{dragLeft:!0};n.onDragEnter&&n.onDragEnter()}}}function Ge(e){var u=e.options,s=null;return function(e){var t=e.dragResult,n=t.addedIndex,o=t.removedIndex,r=e.draggableInfo,i=r.payload,a=r.element;if(u.onDropReady&&null!==n&&s!==n){var l=s=n;null!==o&&o<n&&l--,u.onDropReady({addedIndex:l,removedIndex:o,payload:i,element:a.firstElementChild})}}}function Ue(e){return"drop-zone"===e.options.behaviour?Je(e)(Te,Ae,Pe,Le,Ne,je,He,Me,qe,Ge):Je(e)(Te,Ae,Pe,Le,Ne,je,Ve,Xe,Ye,_e,ke,We,Fe,qe,Ge)}function Je(i){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=t.map(function(e){return e(i)}),r=null;return function(n){return r=o.reduce(function(e,t){return Object.assign(e,t({draggableInfo:n,dragResult:e}))},r||{addedIndex:null,removedIndex:null,elementSize:null,pos:null,shadowBeginEnd:null})}}}function Ke(m){return function(e){var t,o,r,n=null,i=null,a=Be(m,e),l=Ue(a),u=Re(a),s=null,c=!1,d=[];function g(){null!==i&&(i.invalidateShadow=!0,n=l(i),i.invalidateShadow=!1)}function f(e){c=e,s&&(s.onChildPositionCaptured(e),i&&(n=l(i)))}function p(e,t){for(var n=Oe(t),o=0;o<n.length;o++)e[o]=n[o];for(var r=0;r<e.length-n.length;r++)e.pop()}return a.layout.setScrollListener(function(){g()}),{element:m,draggables:a.draggables,isDragRelevant:(t=a,o=t.element,r=t.options,function(e,t){if(r.shouldAcceptDrop)return r.shouldAcceptDrop(e.getOptions(),t);var n=e.getOptions();return"copy"!==r.behaviour&&v(o,"."+S)!==e.element&&(e.element===o||!(!n.groupName||n.groupName!==r.groupName))}),getScale:a.layout.getContainerScale,layout:a.layout,getChildContainers:function(){return d},onChildPositionCaptured:f,dispose:function(e){var t;t=e.element,Qe.wrapChild&&Array.prototype.forEach.call(t.children,function(e){e.nodeType===Node.ELEMENT_NODE&&b(e,S)&&(t.insertBefore(e.firstElementChild,e),t.removeChild(e))})},prepareDrag:function(e,t){var n=e.element,o=a.draggables,r=e.getOptions();p(o,n),e.layout.invalidateRects(),ze(e,t),o.forEach(function(e){return De(e,!0,r.animationDuration)})},isPosInChildContainer:function(){return c},handleDrag:function(e){return(n=l(i=e))&&n.dragLeft&&"drop-zone"!==a.options.behaviour&&(n.dragLeft=!1,setTimeout(function(){n&&ke(a)({dragResult:n})},20)),n},handleDrop:function(e){i=null,f(!1),l=Ue(a),u(e,n),s=n=null,d=[]},getDragResult:function(){return n},getTranslateCalculator:function(e){return ke(a)(e)},setParentContainer:function(e){s=e},getParentContainer:function(){return s},onTranslated:function(){g()},getOptions:function(){return a.options},setDraggables:function(){p(a.draggables,m)}}}}var Qe=function(e,t){var n=Ke(e)(t);return e[E]=n,ve.register(n),{dispose:function(){ve.unregister(n),n.layout.dispose(),n.dispose(n)}}};Qe.wrapChild=!0;e.smoothDnD=Qe,e.constants=L,e.dropHandlers=Ce,e.default=function e(t,n){return console.warn('default export is deprecated. please use named export "smoothDnD"'),void 0!==e.dropHandler&&(Qe.dropHandler=e.dropHandler),void 0!==e.wrapChild&&(Qe.wrapChild=e.wrapChild),Qe(t,n)},Object.defineProperty(e,"__esModule",{value:!0})});
