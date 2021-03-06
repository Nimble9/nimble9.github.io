var crossBrowsingEvent = (function (window) {
    if (window.addEventListener) {
        return function(fn) {
            document.addEventListener("DOMContentLoaded", fn);
        };
    } else if (window.attachEvent) {
        return function(fn) {
            window.attachEvent("onload", fn);
        };
    } else {
        return function(fn) {
            window.onload = fn;
        }
    }
}(window));

crossBrowsingEvent(function() {
    (function($) {

        (function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){function e(e,s){var n,a,o,r=e.nodeName.toLowerCase();return"area"===r?(n=e.parentNode,a=n.name,e.href&&a&&"map"===n.nodeName.toLowerCase()?(o=t("img[usemap='#"+a+"']")[0],!!o&&i(o)):!1):(/^(input|select|textarea|button|object)$/.test(r)?!e.disabled:"a"===r?e.href||s:s)&&i(e)}function i(e){return t.expr.filters.visible(e)&&!t(e).parents().addBack().filter(function(){return"hidden"===t.css(this,"visibility")}).length}t.ui=t.ui||{},t.extend(t.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),t.fn.extend({scrollParent:function(e){var i=this.css("position"),s="absolute"===i,n=e?/(auto|scroll|hidden)/:/(auto|scroll)/,a=this.parents().filter(function(){var e=t(this);return s&&"static"===e.css("position")?!1:n.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==i&&a.length?a:t(this[0].ownerDocument||document)},uniqueId:function(){var t=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}}),t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,s){return!!t.data(e,s[3])},focusable:function(i){return e(i,!isNaN(t.attr(i,"tabindex")))},tabbable:function(i){var s=t.attr(i,"tabindex"),n=isNaN(s);return(n||s>=0)&&e(i,!n)}}),t("<a>").outerWidth(1).jquery||t.each(["Width","Height"],function(e,i){function s(e,i,s,a){return t.each(n,function(){i-=parseFloat(t.css(e,"padding"+this))||0,s&&(i-=parseFloat(t.css(e,"border"+this+"Width"))||0),a&&(i-=parseFloat(t.css(e,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],a=i.toLowerCase(),o={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+i]=function(e){return void 0===e?o["inner"+i].call(this):this.each(function(){t(this).css(a,s(this,e)+"px")})},t.fn["outer"+i]=function(e,n){return"number"!=typeof e?o["outer"+i].call(this,e):this.each(function(){t(this).css(a,s(this,e,!0,n)+"px")})}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(t.fn.removeData=function(e){return function(i){return arguments.length?e.call(this,t.camelCase(i)):e.call(this)}}(t.fn.removeData)),t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),t.fn.extend({focus:function(e){return function(i,s){return"number"==typeof i?this.each(function(){var e=this;setTimeout(function(){t(e).focus(),s&&s.call(e)},i)}):e.apply(this,arguments)}}(t.fn.focus),disableSelection:function(){var t="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(t+".ui-disableSelection",function(t){t.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(e){if(void 0!==e)return this.css("zIndex",e);if(this.length)for(var i,s,n=t(this[0]);n.length&&n[0]!==document;){if(i=n.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0}}),t.ui.plugin={add:function(e,i,s){var n,a=t.ui[e].prototype;for(n in s)a.plugins[n]=a.plugins[n]||[],a.plugins[n].push([i,s[n]])},call:function(t,e,i,s){var n,a=t.plugins[e];if(a&&(s||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(n=0;a.length>n;n++)t.options[a[n][0]]&&a[n][1].apply(t.element,i)}};var s=0,n=Array.prototype.slice;t.cleanData=function(e){return function(i){var s,n,a;for(a=0;null!=(n=i[a]);a++)try{s=t._data(n,"events"),s&&s.remove&&t(n).triggerHandler("remove")}catch(o){}e(i)}}(t.cleanData),t.widget=function(e,i,s){var n,a,o,r,h={},l=e.split(".")[0];return e=e.split(".")[1],n=l+"-"+e,s||(s=i,i=t.Widget),t.expr[":"][n.toLowerCase()]=function(e){return!!t.data(e,n)},t[l]=t[l]||{},a=t[l][e],o=t[l][e]=function(t,e){return this._createWidget?(arguments.length&&this._createWidget(t,e),void 0):new o(t,e)},t.extend(o,a,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),r=new i,r.options=t.widget.extend({},r.options),t.each(s,function(e,s){return t.isFunction(s)?(h[e]=function(){var t=function(){return i.prototype[e].apply(this,arguments)},n=function(t){return i.prototype[e].apply(this,t)};return function(){var e,i=this._super,a=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=a,e}}(),void 0):(h[e]=s,void 0)}),o.prototype=t.widget.extend(r,{widgetEventPrefix:a?r.widgetEventPrefix||e:e},h,{constructor:o,namespace:l,widgetName:e,widgetFullName:n}),a?(t.each(a._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete a._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var i,s,a=n.call(arguments,1),o=0,r=a.length;r>o;o++)for(i in a[o])s=a[o][i],a[o].hasOwnProperty(i)&&void 0!==s&&(e[i]=t.isPlainObject(s)?t.isPlainObject(e[i])?t.widget.extend({},e[i],s):t.widget.extend({},s):s);return e},t.widget.bridge=function(e,i){var s=i.prototype.widgetFullName||e;t.fn[e]=function(a){var o="string"==typeof a,r=n.call(arguments,1),h=this;return o?this.each(function(){var i,n=t.data(this,s);return"instance"===a?(h=n,!1):n?t.isFunction(n[a])&&"_"!==a.charAt(0)?(i=n[a].apply(n,r),i!==n&&void 0!==i?(h=i&&i.jquery?h.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+a+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; "+"attempted to call method '"+a+"'")}):(r.length&&(a=t.widget.extend.apply(null,[a].concat(r))),this.each(function(){var e=t.data(this,s);e?(e.option(a||{}),e._init&&e._init()):t.data(this,s,new i(a,this))})),h}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,i){i=t(i||this.defaultElement||this)[0],this.element=t(i),this.uuid=s++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),i!==this&&(t.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===i&&this.destroy()}}),this.document=t(i.style?i.ownerDocument:i.document||i),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,a,o=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(o={},s=e.split("."),e=s.shift(),s.length){for(n=o[e]=t.widget.extend({},this.options[e]),a=0;s.length-1>a;a++)n[s[a]]=n[s[a]]||{},n=n[s[a]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];o[e]=i}return this._setOptions(o),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!e),e&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(e,i,s){var n,a=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,function(s,o){function r(){return e||a.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof o?a[o]:o).apply(a,arguments):void 0}"string"!=typeof o&&(r.guid=o.guid=o.guid||r.guid||t.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+a.eventNamespace,u=h[2];u?n.delegate(u,l,r):i.bind(l,r)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(i).undelegate(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,s){var n,a,o=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(t.isFunction(o)&&o.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,a){"string"==typeof n&&(n={effect:n});var o,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),o=!t.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,a):s.queue(function(i){t(this)[e](),a&&a.call(s[0]),i()})}}),t.widget;var a=!1;t(document).mouseup(function(){a=!1}),t.widget("ui.mouse",{version:"1.11.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.bind("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).bind("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(!a){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var i=this,s=1===e.which,n="string"==typeof this.options.cancel&&e.target.nodeName?t(e.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(e)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(e)!==!1,!this._mouseStarted)?(e.preventDefault(),!0):(!0===t.data(e.target,this.widgetName+".preventClickEvent")&&t.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return i._mouseMove(t)},this._mouseUpDelegate=function(t){return i._mouseUp(t)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),a=!0,!0)):!0}},_mouseMove:function(e){if(this._mouseMoved){if(t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button)return this._mouseUp(e);if(!e.which)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),a=!1,!1},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),function(){function e(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function i(e,i){return parseInt(t.css(e,i),10)||0}function s(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var n,a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,u=/top|center|bottom/,c=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;t.position={scrollbarWidth:function(){if(void 0!==n)return n;var e,i,s=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),a=s.children()[0];return t("body").append(s),e=a.offsetWidth,s.css("overflow","scroll"),i=a.offsetWidth,e===i&&(i=s[0].clientWidth),s.remove(),n=e-i},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,a="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:a?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s||n?i.width():i.outerWidth(),height:s||n?i.height():i.outerHeight()}}},t.fn.position=function(n){if(!n||!n.of)return f.apply(this,arguments);n=t.extend({},n);var p,m,g,v,_,b,y=t(n.of),x=t.position.getWithinInfo(n.within),w=t.position.getScrollInfo(x),k=(n.collision||"flip").split(" "),D={};return b=s(y),y[0].preventDefault&&(n.at="left top"),m=b.width,g=b.height,v=b.offset,_=t.extend({},v),t.each(["my","at"],function(){var t,e,i=(n[this]||"").split(" ");1===i.length&&(i=l.test(i[0])?i.concat(["center"]):u.test(i[0])?["center"].concat(i):["center","center"]),i[0]=l.test(i[0])?i[0]:"center",i[1]=u.test(i[1])?i[1]:"center",t=c.exec(i[0]),e=c.exec(i[1]),D[this]=[t?t[0]:0,e?e[0]:0],n[this]=[d.exec(i[0])[0],d.exec(i[1])[0]]}),1===k.length&&(k[1]=k[0]),"right"===n.at[0]?_.left+=m:"center"===n.at[0]&&(_.left+=m/2),"bottom"===n.at[1]?_.top+=g:"center"===n.at[1]&&(_.top+=g/2),p=e(D.at,m,g),_.left+=p[0],_.top+=p[1],this.each(function(){var s,l,u=t(this),c=u.outerWidth(),d=u.outerHeight(),f=i(this,"marginLeft"),b=i(this,"marginTop"),T=c+f+i(this,"marginRight")+w.width,S=d+b+i(this,"marginBottom")+w.height,C=t.extend({},_),M=e(D.my,u.outerWidth(),u.outerHeight());"right"===n.my[0]?C.left-=c:"center"===n.my[0]&&(C.left-=c/2),"bottom"===n.my[1]?C.top-=d:"center"===n.my[1]&&(C.top-=d/2),C.left+=M[0],C.top+=M[1],a||(C.left=h(C.left),C.top=h(C.top)),s={marginLeft:f,marginTop:b},t.each(["left","top"],function(e,i){t.ui.position[k[e]]&&t.ui.position[k[e]][i](C,{targetWidth:m,targetHeight:g,elemWidth:c,elemHeight:d,collisionPosition:s,collisionWidth:T,collisionHeight:S,offset:[p[0]+M[0],p[1]+M[1]],my:n.my,at:n.at,within:x,elem:u})}),n.using&&(l=function(t){var e=v.left-C.left,i=e+m-c,s=v.top-C.top,a=s+g-d,h={target:{element:y,left:v.left,top:v.top,width:m,height:g},element:{element:u,left:C.left,top:C.top,width:c,height:d},horizontal:0>i?"left":e>0?"right":"center",vertical:0>a?"top":s>0?"bottom":"middle"};c>m&&m>r(e+i)&&(h.horizontal="center"),d>g&&g>r(s+a)&&(h.vertical="middle"),h.important=o(r(e),r(i))>o(r(s),r(a))?"horizontal":"vertical",n.using.call(this,t,h)}),u.offset(t.extend(C,{using:l}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,h=n-r,l=r+e.collisionWidth-a-n;e.collisionWidth>a?h>0&&0>=l?(i=t.left+h+e.collisionWidth-a-n,t.left+=h-i):t.left=l>0&&0>=h?n:h>l?n+a-e.collisionWidth:n:h>0?t.left+=h:l>0?t.left-=l:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,h=n-r,l=r+e.collisionHeight-a-n;e.collisionHeight>a?h>0&&0>=l?(i=t.top+h+e.collisionHeight-a-n,t.top+=h-i):t.top=l>0&&0>=h?n:h>l?n+a-e.collisionHeight:n:h>0?t.top+=h:l>0?t.top-=l:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=t.left-e.collisionPosition.marginLeft,u=l-h,c=l+e.collisionWidth-o-h,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>u?(i=t.left+d+p+f+e.collisionWidth-o-a,(0>i||r(u)>i)&&(t.left+=d+p+f)):c>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-h,(s>0||c>r(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=t.top-e.collisionPosition.marginTop,u=l-h,c=l+e.collisionHeight-o-h,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,m=-2*e.offset[1];0>u?(s=t.top+p+f+m+e.collisionHeight-o-a,(0>s||r(u)>s)&&(t.top+=p+f+m)):c>0&&(i=t.top-e.collisionPosition.marginTop+p+f+m-h,(i>0||c>r(i))&&(t.top+=p+f+m))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,s,n,o,r=document.getElementsByTagName("body")[0],h=document.createElement("div");e=document.createElement(r?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},r&&t.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(o in s)e.style[o]=s[o];e.appendChild(h),i=r||document.documentElement,i.insertBefore(e,i.firstChild),h.style.cssText="position: absolute; left: 10.7432222px;",n=t(h).offset().left,a=n>10&&11>n,e.innerHTML="",i.removeChild(e)}()}(),t.ui.position,t.widget("ui.draggable",t.ui.mouse,{version:"1.11.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._removeHandleClassName(),this._mouseDestroy(),void 0)},_mouseCapture:function(e){var i=this.options;return this._blurActiveElement(e),this.helper||i.disabled||t(e.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(e),this.handle?(this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0):!1)},_blockFrames:function(e){this.iframeBlocks=this.document.find(e).map(function(){var e=t(this);return t("<div>").css("position","absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(e){var i=this.document[0];if(this.handleElement.is(e.target))try{i.activeElement&&"body"!==i.activeElement.nodeName.toLowerCase()&&t(i.activeElement).blur()}catch(s){}},_mouseStart:function(e){var i=this.options;return this.helper=this._createHelper(e),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===t(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(e),this.originalPosition=this.position=this._generatePosition(e,!1),this.originalPageX=e.pageX,this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",e)===!1?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._normalizeRightBottom(),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top}},_mouseDrag:function(e,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",e,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var i=this,s=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(s=t.ui.ddmanager.drop(this,e)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",e)!==!1&&i._clear()}):this._trigger("stop",e)!==!1&&this._clear(),!1},_mouseUp:function(e){return this._unblockFrames(),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),this.handleElement.is(e.target)&&this.element.focus(),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(e){return this.options.handle?!!t(e.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper),n=s?t(i.helper.apply(this.element[0],[e])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return n.parents("body").length||n.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s&&n[0]===this.element[0]&&this._setPositionRelative(),n[0]===this.element[0]||/(fixed|absolute)/.test(n.css("position"))||n.css("position","absolute"),n},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var e=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var t=this.element.position(),e=this._isRootNode(this.scrollParent[0]);return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options,a=this.document[0];return this.relativeContainer=null,n.containment?"window"===n.containment?(this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===n.containment?(this.containment=[0,0,t(a).width()-this.helperProportions.width-this.margins.left,(t(a).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):n.containment.constructor===Array?(this.containment=n.containment,void 0):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=t(n.containment),s=i[0],s&&(e=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(e?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i),void 0):(this.containment=null,void 0)},_convertPositionTo:function(t,e){e||(e=this.position);var i="absolute"===t?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:e.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(t,e){var i,s,n,a,o=this.options,r=this._isRootNode(this.scrollParent[0]),h=t.pageX,l=t.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),e&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),o.grid&&(n=o.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-o.grid[1]:n+o.grid[1]:n,a=o.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,h=i?a-this.offset.click.left>=i[0]||a-this.offset.click.left>i[2]?a:a-this.offset.click.left>=i[0]?a-o.grid[0]:a+o.grid[0]:a),"y"===o.axis&&(h=this.originalPageX),"x"===o.axis&&(l=this.originalPageY)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_normalizeRightBottom:function(){"y"!==this.options.axis&&"auto"!==this.helper.css("right")&&(this.helper.width(this.helper.width()),this.helper.css("right","auto")),"x"!==this.options.axis&&"auto"!==this.helper.css("bottom")&&(this.helper.height(this.helper.height()),this.helper.css("bottom","auto"))},_trigger:function(e,i,s){return s=s||this._uiHash(),t.ui.plugin.call(this,e,[i,s,this],!0),/^(drag|start|stop)/.test(e)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),t.Widget.prototype._trigger.call(this,e,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,i,s){var n=t.extend({},i,{item:s.element});s.sortables=[],t(s.options.connectToSortable).each(function(){var i=t(this).sortable("instance");i&&!i.options.disabled&&(s.sortables.push(i),i.refreshPositions(),i._trigger("activate",e,n))})},stop:function(e,i,s){var n=t.extend({},i,{item:s.element});s.cancelHelperRemoval=!1,t.each(s.sortables,function(){var t=this;t.isOver?(t.isOver=0,s.cancelHelperRemoval=!0,t.cancelHelperRemoval=!1,t._storedCSS={position:t.placeholder.css("position"),top:t.placeholder.css("top"),left:t.placeholder.css("left")},t._mouseStop(e),t.options.helper=t.options._helper):(t.cancelHelperRemoval=!0,t._trigger("deactivate",e,n))})},drag:function(e,i,s){t.each(s.sortables,function(){var n=!1,a=this;a.positionAbs=s.positionAbs,a.helperProportions=s.helperProportions,a.offset.click=s.offset.click,a._intersectsWith(a.containerCache)&&(n=!0,t.each(s.sortables,function(){return this.positionAbs=s.positionAbs,this.helperProportions=s.helperProportions,this.offset.click=s.offset.click,this!==a&&this._intersectsWith(this.containerCache)&&t.contains(a.element[0],this.element[0])&&(n=!1),n
            })),n?(a.isOver||(a.isOver=1,s._parent=i.helper.parent(),a.currentItem=i.helper.appendTo(a.element).data("ui-sortable-item",!0),a.options._helper=a.options.helper,a.options.helper=function(){return i.helper[0]},e.target=a.currentItem[0],a._mouseCapture(e,!0),a._mouseStart(e,!0,!0),a.offset.click.top=s.offset.click.top,a.offset.click.left=s.offset.click.left,a.offset.parent.left-=s.offset.parent.left-a.offset.parent.left,a.offset.parent.top-=s.offset.parent.top-a.offset.parent.top,s._trigger("toSortable",e),s.dropped=a.element,t.each(s.sortables,function(){this.refreshPositions()}),s.currentItem=s.element,a.fromOutside=s),a.currentItem&&(a._mouseDrag(e),i.position=a.position)):a.isOver&&(a.isOver=0,a.cancelHelperRemoval=!0,a.options._revert=a.options.revert,a.options.revert=!1,a._trigger("out",e,a._uiHash(a)),a._mouseStop(e,!0),a.options.revert=a.options._revert,a.options.helper=a.options._helper,a.placeholder&&a.placeholder.remove(),i.helper.appendTo(s._parent),s._refreshOffsets(e),i.position=s._generatePosition(e,!0),s._trigger("fromSortable",e),s.dropped=!1,t.each(s.sortables,function(){this.refreshPositions()}))})}}),t.ui.plugin.add("draggable","cursor",{start:function(e,i,s){var n=t("body"),a=s.options;n.css("cursor")&&(a._cursor=n.css("cursor")),n.css("cursor",a.cursor)},stop:function(e,i,s){var n=s.options;n._cursor&&t("body").css("cursor",n._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,i,s){var n=t(i.helper),a=s.options;n.css("opacity")&&(a._opacity=n.css("opacity")),n.css("opacity",a.opacity)},stop:function(e,i,s){var n=s.options;n._opacity&&t(i.helper).css("opacity",n._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(t,e,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(e,i,s){var n=s.options,a=!1,o=s.scrollParentNotHidden[0],r=s.document[0];o!==r&&"HTML"!==o.tagName?(n.axis&&"x"===n.axis||(s.overflowOffset.top+o.offsetHeight-e.pageY<n.scrollSensitivity?o.scrollTop=a=o.scrollTop+n.scrollSpeed:e.pageY-s.overflowOffset.top<n.scrollSensitivity&&(o.scrollTop=a=o.scrollTop-n.scrollSpeed)),n.axis&&"y"===n.axis||(s.overflowOffset.left+o.offsetWidth-e.pageX<n.scrollSensitivity?o.scrollLeft=a=o.scrollLeft+n.scrollSpeed:e.pageX-s.overflowOffset.left<n.scrollSensitivity&&(o.scrollLeft=a=o.scrollLeft-n.scrollSpeed))):(n.axis&&"x"===n.axis||(e.pageY-t(r).scrollTop()<n.scrollSensitivity?a=t(r).scrollTop(t(r).scrollTop()-n.scrollSpeed):t(window).height()-(e.pageY-t(r).scrollTop())<n.scrollSensitivity&&(a=t(r).scrollTop(t(r).scrollTop()+n.scrollSpeed))),n.axis&&"y"===n.axis||(e.pageX-t(r).scrollLeft()<n.scrollSensitivity?a=t(r).scrollLeft(t(r).scrollLeft()-n.scrollSpeed):t(window).width()-(e.pageX-t(r).scrollLeft())<n.scrollSensitivity&&(a=t(r).scrollLeft(t(r).scrollLeft()+n.scrollSpeed)))),a!==!1&&t.ui.ddmanager&&!n.dropBehaviour&&t.ui.ddmanager.prepareOffsets(s,e)}}),t.ui.plugin.add("draggable","snap",{start:function(e,i,s){var n=s.options;s.snapElements=[],t(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var e=t(this),i=e.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:i.top,left:i.left})})},drag:function(e,i,s){var n,a,o,r,h,l,u,c,d,p,f=s.options,m=f.snapTolerance,g=i.offset.left,v=g+s.helperProportions.width,_=i.offset.top,b=_+s.helperProportions.height;for(d=s.snapElements.length-1;d>=0;d--)h=s.snapElements[d].left-s.margins.left,l=h+s.snapElements[d].width,u=s.snapElements[d].top-s.margins.top,c=u+s.snapElements[d].height,h-m>v||g>l+m||u-m>b||_>c+m||!t.contains(s.snapElements[d].item.ownerDocument,s.snapElements[d].item)?(s.snapElements[d].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=!1):("inner"!==f.snapMode&&(n=m>=Math.abs(u-b),a=m>=Math.abs(c-_),o=m>=Math.abs(h-v),r=m>=Math.abs(l-g),n&&(i.position.top=s._convertPositionTo("relative",{top:u-s.helperProportions.height,left:0}).top),a&&(i.position.top=s._convertPositionTo("relative",{top:c,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h-s.helperProportions.width}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l}).left)),p=n||a||o||r,"outer"!==f.snapMode&&(n=m>=Math.abs(u-_),a=m>=Math.abs(c-b),o=m>=Math.abs(h-g),r=m>=Math.abs(l-v),n&&(i.position.top=s._convertPositionTo("relative",{top:u,left:0}).top),a&&(i.position.top=s._convertPositionTo("relative",{top:c-s.helperProportions.height,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left)),!s.snapElements[d].snapping&&(n||a||o||r||p)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=n||a||o||r||p)}}),t.ui.plugin.add("draggable","stack",{start:function(e,i,s){var n,a=s.options,o=t.makeArray(t(a.stack)).sort(function(e,i){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0)});o.length&&(n=parseInt(t(o[0]).css("zIndex"),10)||0,t(o).each(function(e){t(this).css("zIndex",n+e)}),this.css("zIndex",n+o.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,i,s){var n=t(i.helper),a=s.options;n.css("zIndex")&&(a._zIndex=n.css("zIndex")),n.css("zIndex",a.zIndex)},stop:function(e,i,s){var n=s.options;n._zIndex&&t(i.helper).css("zIndex",n._zIndex)}}),t.ui.draggable,t.widget("ui.slider",t.ui.mouse,{version:"1.11.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<a href='#' class='ui-slider-handle ui-state-default ui-corner-all'></a>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)o.push(a);this.handles=n.add(t(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e)})},_createRange:function(){var e=this.options,i="";e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=t("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===e.range||"max"===e.range?" ui-slider-range-"+e.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,a,o,r,h,l,u=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-u.values(e));(n>i||n===i&&(e===u._lastChangedValue||u.values(e)===c.min))&&(n=i,a=t(this),o=e)}),r=this._start(e,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),h=a.offset(),l=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:e.pageX-h.left-a.width()/2,top:e.pageY-h.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,a;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(t,e){var i={handle:this.handles[e],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("start",t,i)},_slide:function(t,e,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(e?0:1),2===this.options.values.length&&this.options.range===!0&&(0===e&&i>s||1===e&&s>i)&&(i=s),i!==this.values(e)&&(n=this.values(),n[e]=i,a=this._trigger("slide",t,{handle:this.handles[e],value:i,values:n}),s=this.values(e?0:1),a!==!1&&this.values(e,i))):i!==this.value()&&(a=this._trigger("slide",t,{handle:this.handles[e],value:i}),a!==!1&&this.value(i))},_stop:function(t,e){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("stop",t,i)},_change:function(t,e){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._lastChangedValue=e,this._trigger("change",t,i)}},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),void 0):this._value()},values:function(e,i){var s,n,a;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),void 0;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(e):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),"disabled"===e&&this.element.toggleClass("ui-state-disabled",!!i),this._super(e,i),e){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue(),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_calculateNewMax:function(){var t=this.options.max,e=this._valueMin(),i=this.options.step,s=Math.floor(+(t-e).toFixed(this._precision())/i)*i;t=s+e,this.max=parseFloat(t.toFixed(this._precision()))},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshValue:function(){var e,i,s,n,a,o=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),u["horizontal"===h.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[l?"animate":"css"](u,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(e){var i,s,n,a,o=t(e.target).data("ui-slider-handle-index");switch(e.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(e.preventDefault(),!this._keySliding&&(this._keySliding=!0,t(e.target).addClass("ui-state-active"),i=this._start(e,o),i===!1))return}switch(a=this.options.step,s=n=this.options.values&&this.options.values.length?this.values(o):this.value(),e.keyCode){case t.ui.keyCode.HOME:n=this._valueMin();break;case t.ui.keyCode.END:n=this._valueMax();break;case t.ui.keyCode.PAGE_UP:n=this._trimAlignValue(s+(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(s-(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(s===this._valueMax())return;n=this._trimAlignValue(s+a);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(s===this._valueMin())return;n=this._trimAlignValue(s-a)}this._slide(e,o,n)},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),t(e.target).removeClass("ui-state-active"))}}})});


        !function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f(a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b)}}}(jQuery);

        var hmd = {} || window.hmd;

        hmd = function(){
            var args = Array.prototype.slice.call(arguments),
                callback = args.pop(),
                modules = (args[0] && typeof args[0] === "string") ? args : args[0],
                i;

            if(!(this instanceof hmd)){
                return new hmd(modules, callback);
            }

            if(!modules || modules === "*" || modules[0] === "*"){
                modules = [];
                for(i in hmd.modules){
                    if(hmd.modules.hasOwnProperty(i)){
                        modules.push(i);
                    }
                }
            }

            for(i = 0; i < modules.length; i += 1) {
                hmd.modules[modules[i]](this);
            }

            if(callback !== undefined && typeof callback === "function"){
                callback(this);
            }
        };


        hmd(function() {
            var windowW = window.innerWidth;
            var windowH = window.innerHeight;
            var responsiveEvent;
            var ft1vid;
            var ft10Vid;
            var didScroll,
                didScroll2,
                didScroll3,
                didArrows,
                didDegree;

            /* motion count */
            var count = 2.89;
            var count2 = 95;
            var size = 50;
            var size2 = windowW<721?73:63;
            var gop = windowW<721?0.55:0.4;

            var pad = function(n, width) {
                n = n + "";
                //console.log(new Array(width-n.length+1).join("0"), n, n.length);
                return n.length >= width?n:new Array(width - n.length + 1).join("0") + n;
            };

            var getIEVersion = function() {
                var rv = -1; // Return value assumes failure.
                if (navigator.appName == 'Microsoft Internet Explorer') {
                    var ua = navigator.userAgent;
                    var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
                    if (re.exec(ua) != null)
                        rv = parseFloat(RegExp.$1);
                }
                return rv;
            };

            var offsetVal = function(elem, st) {
                var elements = $(elem),
                    len = elements.length,
                    i;

                for(i = 0; i < len; i++) {
                    var element = elements[i],
                        elementOffset = offset(elements[i]),
                        elementTop = elementOffset.top,
                        elementHeight = element.offsetHeight;

                    if(st > elementTop && st < elementTop + elementHeight) {
                        return {
                            element: element,
                            elementTop: elementTop,
                            elementHeight: elementHeight
                        };
                    }
                }
            };

            var responsiveImage = function(w){
                var device = "src-pc";
                var wv = w;
                if (wv < 721) {
                    device = "src-mobile";
                } else {
                    device = "src-pc";
                }

                var img = $('.screen-responsive');
                var obj;

                for(var i=0; i<img.length; i++) {
                    obj = img.eq(i);

                    if (obj.data(device)) {
                        obj.attr('src', obj.data(device));
                    }
                }
            };

            // left: 37, up: 38, right: 39, down: 40,
            // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
            var keys = {37: 1, 38: 1, 39: 1, 40: 1};

            var preventDefault = function (e) {
                e = e || window.event;
                if (e.preventDefault)
                    e.preventDefault();
                e.returnValue = false;
            };

            var preventDefaultForScrollKeys = function(e) {
                if (keys[e.keyCode]) {
                    preventDefault(e);
                    return false;
                }
            };

            var disableScroll = function() {
                if (window.addEventListener) // older FF
                    window.addEventListener('DOMMouseScroll', preventDefault, false);
                window.onwheel = preventDefault; // modern standard
                window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
                window.ontouchmove  = preventDefault; // mobile
                // document.onkeydown  = preventDefaultForScrollKeys;
            };

            var enableScroll = function() {
                if (window.removeEventListener)
                    window.removeEventListener('DOMMouseScroll', preventDefault, false);
                window.onmousewheel = document.onmousewheel = null;
                window.onwheel = null;
                window.ontouchmove = null;
                //document.onkeydown = null;
            };

            var onRender = function(context, $this) {
                (function loop() {
                    if(!$this.paused && !$this.ended) {
                        context.drawImage($this, 0, 0);
                        setTimeout(loop, 1000 / 50);
                    }
                })();
            };

            var offRender = function(context, $this, pause) {
                (function loop() {
                    if ($this.paused && !pause) {
                        context.drawImage($this, 0, 0);
                        setTimeout(loop, 1000 / 50);
                        setTimeout(function () {
                            pause = true;
                        }, 50);
                    }
                }())
            };

            $(document).scroll(function(e) {
                var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

                var feature1 = (function() {
                    var $ft1 = $(".pdp-feature-01");
                    var $ft1Top = $($ft1).offset().top;
                    var $ft1TextArea = $(".pdp-feature-01 .pdp-text-area").offset().top;
                    var video = document.getElementById("video-1");
                    var leftObj = $(".pdp-feature-01 .left-obj");
                    var rightObj = $(".pdp-feature-01 .right-obj");
                    var current;

                    if(scrollTop > $ft1Top && scrollTop < $ft1Top+$($ft1).height()) {
                        current = (scrollTop - $ft1Top) / 30;
                        $(leftObj).css({
                            transform: "translateX(" + current.toFixed(0) +"px)"
                        });
                        $(rightObj).css({
                            transform: "translateX(-" + current.toFixed(0) +"px)"
                        });
                    }

                    if(scrollTop > $ft1TextArea && windowW > 1023) {
                        if(ft1vid === undefined) {
                            video.play();
                            ft1vid = false;
                        }
                    } else {
                        ft1vid = undefined;
                    }
                }());

                var feature2 = (function() {
                    var $ft2 = $(".pdp-feature-02");
                    var $ft2Top = $($ft2).offset().top;
                    var $ftArea = $(".pdp-feature-02 .scrolled .pdp-feature-area");
                    var copy1 = $(".inner-copy-01");
                    var copy2 = $(".inner-copy-02");
                    var fCopy = $(".fade-copy");
                    var $img = $(".pdp-feature-02 .scrolled .feature-img");
                    var $img1 = $(".pdp-feature-02 .scrolled .img-01");
                    var $img2 = $(".pdp-feature-02 .scrolled .img-02");
                    var $arrowsArea = $(".pop-wrapper .arrows-area");
                    var $pop = $(".pop-wrapper .pop");
                    var $scrolled = $(".scrolled");
                    var scrollScale;
                    var scrollPhase1;
                    var scrollPhase2;
                    var scrollPhase3;
                    var scrollPhase4;

                    if(scrollTop > $ft2Top) {
                        scrollScale = scrollTop - $ft2Top;
                        scrollPhase1 = scrollTop - $ft2Top;
                        // start fixed
                        $($scrolled).addClass("fixed");
                        $($ft2).css({
                            height: "2000px"
                        });
                        $($img).addClass("moved");

                        if(scrollScale > 500) {
                            $(copy1).addClass("hide");
                            $(copy2).addClass("showed");
                        } else {
                            $(copy1).removeClass("hide");
                            $(copy2).removeClass("showed");
                        }

                        if(scrollPhase1 > 250) {
                            scrollPhase2 = scrollPhase1;
                            $($img1).addClass("hide");
                            $($ftArea).removeClass("scaled"); // remove scale
                            $($pop).addClass("showed"); // pop show
                            $($arrowsArea).removeClass("showed"); // arrows hide
                            $(fCopy).addClass("moved"); // copy show

                        } else {
                            $(fCopy).removeClass("moved"); // copy hide
                            $($pop).removeClass("showed");
                        }

                        if(scrollPhase2 > 500) {
                            scrollPhase3 = scrollPhase2;
                            $($ftArea).addClass("scaled"); // add scale
                            $($arrowsArea).addClass("showed"); // arrows show
                            $(fCopy).removeClass("moved"); // copy hide

                        }

                        if(scrollPhase3 > 750) {
                            scrollPhase4 = scrollPhase3;
                            didScroll = true;
                            $($scrolled).css("margin-top", 0);
                        }

                        if(scrollPhase4 > 1000) {
                            $($scrolled).removeClass("fixed");
                            $($scrolled).css("margin-top", 1000);
                        }
                    } else {
                        // initial end fixed
                        $($scrolled).removeClass("fixed");
                        $($img).removeClass("moved");
                        $($img1).removeClass("hide");

                        // pop-wrapper init
                        size = 50;
                        count = 2.89;
                        $(".arrows").css({
                            width: size + "%",
                            height: size + "%"
                        });
                        $($ft2).css({
                            height: "auto"
                        });
                        $(".count").text(count+'"');
                        didScroll = false;
                    }
                }());

                var feature3 = (function() {
                    var $ft3 = $(".pdp-feature-03");
                    var $ft3Top = $($ft3).offset().top;

                    if(scrollTop > $ft3Top) {
                        didScroll2 = true;
                        document.querySelector('.mask-box').classList.add('on');

                    } else if(scrollTop < $ft3Top - $ft3.height()) {
                        document.querySelector('.mask-box').classList.remove('on');
                        // $(".wide").css({
                        //     width: size2 + "%"
                        // });
                        $(".degree").text("Field of View " + count2.toFixed(0) +"°");

                        size2 = windowW<721?73:63;
                        gop = windowW<721?0.55:0.4;
                        count2 = 95;
                        didScroll2 = false;
                    }
                }());

                var feature4 = (function() {
                    var $ft4 = $(".pdp-feature-04");
                    var $ft4Top = $($ft4).offset().top;

                    if(scrollTop > $ft4Top) {
                        $(".pdp-feature-04 .pdp-feature-area figure:first-child").addClass("moved");
                    } else {
                        $(".pdp-feature-04 .pdp-feature-area figure:first-child").removeClass("moved");
                    }
                }());

                var feature5 = (function() {
                    var $ft5 = $(".pdp-feature-05");
                    var $ft5Top = $($ft5).offset().top;

                    if(scrollTop > $ft5Top) {
                        $(".pdp-feature-05 .bg-img").addClass("showed");
                    } else {
                        $(".pdp-feature-05 .bg-img").removeClass("showed");
                    }
                }());

                var feature6 = (function() {
                    var $ft6 = $(".pdp-feature-06");
                    var $ft6Top = $($ft6).offset().top;

                    if(scrollTop > $ft6Top) {
                        $(".sound-img-wrapper").addClass("showed");
                    } else {
                        $(".sound-img-wrapper").removeClass("showed");
                    }

                }());


                var feature7 = (function() {
                    var $ft7 = $(".pdp-feature-07");
                    var $ft7Top = $($ft7).offset().top;
                    if (scrollTop > $ft7Top) {
                        $(".pdp-feature-07 .on-img").addClass("showed");
                    } else {
                        $(".pdp-feature-07 .on-img").removeClass("showed");
                    }
                }());

                var feature10 = (function() {
                    var $ft10 = $(".pdp-feature-10");
                    var $ft10Top = $($ft10).offset().top;
                    var video = document.getElementById("video-10");
                    if(scrollTop > $ft10Top && windowW > 1023) {
                        if(ft10Vid === undefined) {
                            video.play();
                            ft10Vid = false;
                        }

                    } else {
                        ft10Vid = undefined;
                    }
                }());

                // var feature11 = (function() {
                //     var $ft11 = $(".pdp-feature-11");
                //     var $ft11Top = $($ft11).offset().top;
                //
                //     if(scrollTop > $ft11Top) {
                //         didScroll3 = true;
                //     }
                // }());

                var feature13 = (function() {
                    var $ft13 = $(".pdp-feature-13");
                    var $ft13Top = $($ft13).offset().top;

                    if(scrollTop > $ft13Top) {
                        $(".pdp-feature-13 .obj-img").addClass("moved");
                    } else {
                        $(".pdp-feature-13 .obj-img").removeClass("moved");
                    }
                }());


                //ie8
                var feature5_ie8 = (function() {
                    var ie8 = getIEVersion();
                    if(ie8 === 8) {
                        var $ft5 = $(".pdp-feature-05");
                        var $ft5Top = $($ft5).offset().top;
                        var $icon = $(".feature-icon-wrapper .feature-icon");
                        var showIcon;
                        var num = 0;

                        if(scrollTop > $ft5Top) {
                            showIcon = setInterval(function() {

                                $($icon[num]).css({
                                    display : "block"
                                });

                                num++;
                                if(num > 3) {
                                    clearInterval(showIcon);
                                }
                            }, 1000);
                        }
                    }
                }());

            });

            $(function() {
                responsiveImage(windowW);

                // 모바일 체크
                var filter = "win16|win32|win64|mac|macintel";
                var viewType = "";
                if(navigator.platform) {
                    if(filter.indexOf(navigator.platform.toLowerCase()) < 0) {
                        viewType = "MOBILE";

                        // $(".mv-feature").css("display", "block");
                        // $(".wv-feature").css("display", "none");

                        ft10Vid = false;
                    } else {
                        viewType = "PC";

                        // $(".mv-feature").css("display", "none");
                        // $(".wv-feature").css("display", "block");

                    }
                    console.log(viewType);
                }

                // ie8 체크
                var ie8 = getIEVersion();
                if(ie8 === 8) {
                    $(".mv-feature").css("display", "block");
                    $(".wv-feature").css("display", "none");
                    $(".translation").css("display", "none");
                    $(".wide").css("width", "100%");
                    $(".degree").text("Field of View 110°");
                    $(".pdp-feature-02 .scrolled .pdp-feature-area .img-02").css({
                        zIndex: 2,
                        position: "relative"

                    });
                    $(".pdp-feature-02 .scrolled").hide();
                    $(".pdp-feature-02 .slide-feature").show();

                    $(".pdp-feature-11 .dynamic-area").hide();
                    $(".pdp-feature-11 .static-area").show();
                    $(".pdp-feature-05 .pdp-feature-area .bg-img").css({
                        visibility: "visible",
                        opacity: 1
                    });
                }

                var feature2 = (function() {
                    var title = $(".pdp-feature-02 .feature-title");
                    var description = $(".pdp-feature-02 .feature-description");
                    clearInterval(didArrows);
                    didArrows = setInterval(function() {
                        if(didScroll) {
                            if(size < 100) {
                                size = size + 1;
                                count = count + 0.013;
                                $(".arrows").css({
                                    width: size + "%",
                                    height: size + "%"
                                });
                                $(".count").text(count.toFixed(2)+'"');
                            } else {
                                $(".count").text(count.toFixed(1)+'"');
                                didScroll = false;
                            }
                        }

                    }, 25);

                    $(".pdp-feature-02 .slide-area").slick({
                        accessibility: false,
                        infinite: false,
                        dots: true,
                        arrows: false
                    });
                    $(".pdp-feature-02 .slide-area").on("afterChange", function(a, b, c) {
                        if(c === 1) {
                            $(title).text("Super-clear, stable viewing");
                            $(description).text("The Samsung HMD Odyssey’s 3.5” display allows for faster focusing and a clear and stable experience. That means that no matter how close you get to losing yourself in your game, every single image, large or small, still or moving, will be super-sharp and crystal clear.");
                        } else {
                            $(title).text("Lifelike experience");
                            $(description).text("Watch Mixed Reality content come to life with an incredible dual AMOLED display. Compared to LCD displays, the Samsung HMD Odyssey delivers more vibrant hues with a color reproduction rate of up to 105%, 130 nit brightness and deeper blacks. With higher contrast, you can enjoy far crisper, more lifelike images.");
                        }
                        $(".pdp-feature-02 .slick-dots li").removeAttr("aria-hidden");
                    });
                    $(".pdp-feature-02 .slick-dots li").removeAttr("aria-hidden");
                }());

                var feature3 = (function() {
                    var elem = document.querySelector('.pdp-feature-03 .wide-area');
                    elem.prepend(div('mask-box'));
                    var mask = document.querySelector('.mask-box');
                    mask.appendChild(div('mask mask-left'));
                    mask.appendChild(div('mask mask-right'));

                    function div (cn) {
                        var div = document.createElement('div');
                        if(cn) div.className = cn;
                        return div;
                    }

                    clearInterval(didDegree);
                    didDegree = setInterval(function() {
                        if(didScroll2) {
                            if(size2 < 100) {
                                size2 = size2 + 1;
                                count2 = count2 + gop;
                                // $(".wide").css({
                                //     width: size2 + "%"
                                // });
                                $(".degree").text("Field of View " + count2.toFixed(0) +"°");
                            }
                        }
                    }, 35);
                }());

                var feature7 = (function() {
                    var $slide = $(".pdp-feature-07 .pdp-feature-area");
                    var $subTitle = $(".pdp-feature-07 .feature-sub-title");
                    var $description = $(".pdp-feature-07 .feature-description");
                    var $disclaimer = $(".pdp-feature-07 .feature-disclaimer");
                    var video = document.getElementById("video-7");
                    $($slide).slick({
                        accessibility: false,
                        arrows: true,
                        infinite: false,
                        dots: true,
                        prevArrow: "<button type='button' class='slick-prev'>Previous</button>",
                        nextArrow: "<button type='button' class='slick-next'>Next</button>"
                    });
                    var $prev = $(".slick-prev");
                    var $next = $(".slick-next");
                    var $arrows = $(".slick-arrow");
                    var $current = 0;

                    $(".pdp-feature-07 .slick-dots li").eq(0).children().text("Convenient connectivity");
                    $(".pdp-feature-07 .slick-dots li").eq(1).children().text("No external motion sensors");
                    // $($prev).css("display", "none");
                    // $($prev).addClass("hide");
                    $(".pdp-feature-07 .slick-dots li").removeAttr("aria-hidden");
                    $($slide).on("afterChange", function(a, b, c) {
                        $current = $($slide).slick("slickCurrentSlide");
                        $(".pdp-feature-07 .slick-dots li").removeAttr("aria-hidden");
                        if(c === 0) {
                            $($subTitle).text("Convenient connectivity");
                            $($description).text("The Samsung HMD Odyssey offers you easy-to-use connectivity. Its Windows 10 OS automatically senses HDMI and USB connections and launches mixed reality portals.");
                            $($disclaimer).css("display", "block");
                        } else {
                            $($subTitle).text("No external motion sensors");
                            $($description).text("Using the Samsung HMD Odyssey is a breeze. Unlike typical head-mounted displays featuring outside-in tracking, you do not have to install any extra sensors to use the device. No need for a complicated installation process―simply connect it to your PC and get started right away!")
                            // $($disclaimer).addClass("hide");
                            $($disclaimer).css("display", "none");

                            if(windowW > 1023)
                                video.play();
                        }
                    });

                    $($arrows)
                        .focus(function() {
                            $(this).addClass("hover");
                        })
                        .blur(function() {
                            $(this).removeClass("hover");
                        })
                        .click(function() {
                            if($current === 1) {
                                setTimeout(function() {
                                    $($next).focus();
                                }, 600);
                            } else {
                                setTimeout(function() {
                                    $($prev).focus();
                                }, 600);

                            }
                        });
                }());

                //feature09
                var feature9 = (function() {
                    var $scene1 = $(".pdp-feature-09 .frame-scene1");
                    var $scene2 = $(".pdp-feature-09 .frame-scene2");
                    var $scene3 = $(".pdp-feature-09 .frame-scene3");
                    var $btn1 = $(".translation-01 a");
                    var $btn2 = $(".translation-02 a");
                    var $btn3 = $(".translation-03 a");

                    // canvas rendering
                    var x = document.getElementById("video-9-x");
                    var y = document.getElementById("video-9-y");
                    var z = document.getElementById("video-9-z");

                    var btn = [$btn1, $btn2, $btn3];
                    var scene = [$scene1, $scene2, $scene3];
                    var vid = [x, y, z];

                    function _each(fn) {
                        for(var i = 0; i < btn.length; i++) {
                            fn(i);
                        }
                    }
                    function vidOn(e) {
                        _each(function (i) {
                            if($(e.currentTarget)[0] === btn[i][0]) {
                                scene[i].addClass('active');
                                vid[i].play();
                            } else {
                                scene[i].removeClass('active');
                            }
                        });
                    }

                    function vidOff(e) {
                        _each(function (i) {
                            if($(e.currentTarget)[0] === btn[i][0]) {
                                vid[i].pause();
                                vid[i].currentTime = 0;
                            } else {
                                vid[i].currentTime = 0;
                            }
                        });
                    }

                    $btn1.on("mouseenter focus", vidOn);
                    $btn2.on("mouseenter focus", vidOn);
                    $btn3.on("mouseenter focus", vidOn);

                    $btn1.on("mouseleave blur", vidOff);
                    $btn2.on("mouseleave blur", vidOff);
                    $btn3.on("mouseleave blur", vidOff);

                    $($btn1)
                        .focus(function() {
                            $(this).parent().addClass("hover");
                        })
                        .blur(function() {
                            $(this).parent().removeClass("hover");
                        });

                    $($btn2)
                        .focus(function() {
                            $(this).parent().addClass("hover");
                        })
                        .blur(function() {
                            $(this).parent().removeClass("hover");
                        });

                    $($btn3)
                        .focus(function() {
                            $(this).parent().addClass("hover");
                        })
                        .blur(function() {
                            $(this).parent().removeClass("hover");
                        })
                }());

                var feature11 = (function() {
                    var $img = $(".pdp-feature-11 .dynamic-area .feature-img img");
                    var $src = $($img).attr("src");
                    var $val = $src.match(/1016_HMD360_\d{3}/g);
                    var num = 83;
                    var value = 83;
                    var count = 0;
                    var max = 109;

                    // var $preload = $(".src-feature-11 .preload-image img");
                    // var $preSrc = $($preload).attr("src");
                    // var $preVal = $preSrc.match(/1016_HMD360_\d{3}/g);
                    // window.setInterval(function() {
                    //     if(count < max) {
                    //         count++;
                    //         $($preload).attr("src", $preSrc.replace($preVal, "1016_HMD360_"+pad(count, 3)))
                    //     }
                    // }, 50);

                    $(".pdp-feature-11 .slider").slider({
                        range: "max",
                        value: 0,
                        min: 0,
                        max: 108,
                        slide: function(event, ui) {
                            var val = ui.value;
                            $img.removeClass('on');
                            $img.eq(val).addClass("on");

                            if(val === 108) {
                                $(".btn-wrapper").addClass("showed");
                            } else {
                                $(".btn-wrapper").removeClass("showed");
                            }
                        },
                        create : function(event, ui) {
                            $(this).find('.ui-slider-handle').attr({
                                'data-omni': 'redefined_drag',
                                'title': 'Drag button',
                                'href': '#none'
                            }).text("Zoom-in icons for viewing the front and side of Samsung HMD Odyssey devices");

                            // gallery open
                            $(".g-btn a").click(function() {
                                var galleryImg = $(".gallery-img img");
                                var galleryImgHeight = $(galleryImg).height();
                                var $id = $(this).attr("href");

                                $($id).addClass("showed");
                                setTimeout(function() {
                                    $($id).find(".closed-btn button").get(0).focus();
                                }, 50);

                                // mobile
                                if(windowW < 721) {
                                    // $(galleryImg).css({
                                    //     top: (windowH - galleryImgHeight) / 2
                                    // });
                                    $(".gallery-wrapper").show();
                                    document.body.style.overflow = "hidden";
                                }


                                return false;
                            });

                            // gallery closed
                            $(".closed-btn button").click(function() {
                                var $class = $(this).parent().parent().attr("id");
                                $(this).parent().parent().removeClass("showed");
                                $("."+$class).children("a").focus();

                                if(windowW < 721) {

                                    $(".gallery-wrapper").hide();
                                    document.body.style.overflow = "visible";
                                }
                                return false;
                            });

                            // keyboard tab
                            $(".g-btn a")
                                .focus(function() {
                                    $(this).parent().addClass("hover");
                                })
                                .blur(function() {
                                    $(this).parent().removeClass("hover");
                                });

                            $(".closed-btn button")
                                .focus()
                                .keydown(function(e) {
                                    if(e.keyCode === 9 || e.keyCode === 9 && e.keyCode === 16) {
                                        // e.preventDefault();
                                        return false;
                                    } else if(e.keyCode === 13) {
                                        var $class = $(this).parent().parent().attr("id");
                                        $(this).parent().parent().removeClass("showed");
                                        $("."+$class).children("a").focus();
                                        return false;
                                    }
                                });

                            // $(".pdp-feature-11 .slider a").on('click', function(){
                            //     $(this).trigger('click.omni');
                            // });

                            // setInterval(function() {
                            //     if(didScroll3) {
                            //         if(num < 109) {
                            //             num++;
                            //             // $($img).attr("src", $src.replace($val, "1016_HMD360_" + pad(num, 3)));
                            //
                            //             if(num % 2 === 0) {
                            //                 $img.removeClass("on");
                            //                 $img.eq(num).addClass("on");
                            //             }
                            //
                            //             if(value < 109) {
                            //                 value++;
                            //                 $(".pdp-feature-11 .slider").slider("option", "value", value);
                            //             }
                            //
                            //             if (value === 109) {
                            //                 $(".btn-wrapper").addClass("showed");
                            //             } else {
                            //                 $(".btn-wrapper").removeClass("showed");
                            //             }
                            //         }
                            //     }
                            // }, 100);
                        }
                    }).on('mousedown touchstart', function(e){
                        $(this).find('a').blur();
                        e && e.preventDefault();
                    });
                }());

                var feature12 = (function() {
                    var $img = $(".pdp-feature-12 .lens-img img");
                    var $src = $($img).attr("src");
                    var $val = $src.match(/lens-\d{2}/g);

                    var $leftLens = $(".left-img");
                    var $rightLens = $(".right-img");
                    var $lensImg = $(".lens-img");

                    var lensLeftBg = $(".lens-left-area .lens-bg");
                    var lensRightBg = $(".lens-right-area .lens-bg");
                    var lensWidth = $(".lens-img").width();
                    var lensBgWidth = $(".lens-area .lens-bg").width();
                    var padding = (lensBgWidth - lensWidth) / 2;

                    $(lensLeftBg).css("margin-left", "-"+padding+"px");
                    $(lensRightBg).css("margin-right", "-"+padding+"px");

                    $(".pdp-feature-12 .slider").slider({
                        range: "max",
                        value: 16,
                        min: 0,
                        max: 31,
                        slide: function(event, ui) {
                            var num = ui.value;
                            $leftLens.css({
                                left: ui.value
                            });
                            $rightLens.css({
                                right: ui.value
                            });

                            // $($img).attr("src", $src.replace($val, "lens-" + pad(num, 2)));
                            $leftLens.removeClass("on");
                            $leftLens.eq(num).addClass("on");
                            $rightLens.removeClass("on");
                            $rightLens.eq(num).addClass("on");
                        },
                        create : function(event, ui) {
                            $(this).find('.ui-slider-handle').attr({
                                'data-omni': 'redefined_drag',
                                'title': 'Drag button',
                                'href': '#none'
                            }).text("A focus control icon for using the IPD Control Wheel");
                        }
                    }).on('mousedown touchstart', function(e){
                        $(this).find('a').blur();
                        e && e.preventDefault();
                    });
                    // $(".pdp-feature-12 .slider a").on('click', function(){
                    //     $(this).trigger('click.omni');
                    // });
                }());

            });

            $(window).resize(function() {
                windowW = window.innerWidth;
                clearTimeout(responsiveEvent);
                responsiveEvent = setTimeout(function() {
                    responsiveImage(windowW);
                    var size2 = windowW<721?73:63;
                    var gop = windowW<721?0.55:0.4;
                    var feature12 = (function() {
                        var lensLeftBg = $(".lens-left-area .lens-bg");
                        var lensRightBg = $(".lens-right-area .lens-bg");
                        var lensWidth = $(".lens-img").width();
                        var lensBgWidth = $(".lens-area .lens-bg").width();
                        var padding = (lensBgWidth - lensWidth) / 2;
                        $(lensLeftBg).css("margin-left", "-"+padding+"px");
                        $(lensRightBg).css("margin-right", "-"+padding+"px");
                    }());

                    // // mobile
                    // var galleryImg = $(".gallery-img img");
                    // var galleryImgHeight = $(galleryImg).height();
                    // if(windowW < 721) {
                    //     $(galleryImg).css({
                    //         top: (windowH - galleryImgHeight) / 2
                    //     });
                    // }

                }, 250);
            });

        });
    }(jQuery));
});