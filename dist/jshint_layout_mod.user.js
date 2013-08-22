// ==UserScript==
// @name			JSHint_Layout_Mod
// @version			1.3.20130604
// @namespace		cssmagic
// @description		A userscript to adjust page layout of JSHint.com.
// @icon			http://www.jshint.com/favicon.ico
// @grant			none
// @include			http://jshint.com/*
// @include			http://www.jshint.com/*
// ==/UserScript==

/*! Tiny Lib v0.1.0 **/
var $ = function(s){return document.querySelectorAll(s);};
$.id = function(s){return document.getElementById(s);};
$.cls = function(s){return document.getElementsByClassName(s);};
$.tag = function(s,eWrapper){return (eWrapper || document).getElementsByTagName(s);};
$.crE = function(s){return document.createElement(s);};
$.crT = function(s){return document.createTextNode(s);};
$.insBfr = function(eW,e){eW.insertBefore(e,eW.firstChild);};
$.rmv = function (e) {e.parentNode.removeChild(e);};
$.getT = function(e){return e.firstChild.data;};
$.setT = function(e,s){e.firstChild.data=s;};
$.hide = function(e){e.style.visibility='hidden';};
$.show = function(e){e.style.visibility='visible';};
$.off = function(e){e.style.display='none';};
$.on = function(e){e.style.display='';};
$.style = function(e,p,v){
	if (v) {
		e.style[p] = v;
	} else {
		e.style.cssText = p;
	}
};
$.addEv = function(e,sEv,fn){e.addEventListener(sEv,fn,false);};
$.rmvEv = function(e,sEv,fn){e.removeEventListener(sEv,fn,false);};
$.each = function (a,fn){for(var i=0,l=a.length;i<l;++i){fn(a[i]);}};
$.hasT = function(so,s){return so.indexOf(s)>-1;};
$.hasCls = function(so,s){return $.hasT(' '+so+' ',' '+s+' ');};
$.addCls = function(e,s){var so=e.className;if(!$.hasCls(so,s))e.className+=(' '+s);};
$.rmvCls = function(e,s){var so=e.className;if($.hasCls(so,s))e.className=(' '+so+' ').replace(' '+s+' ',' ').trim();};
$.css = function (s) {
	var css = $.crE('style');
	css.innerHTML = s;
	console.log(css);
	$.tag('head')[0].appendChild(css);
};
$.cssText = '';

////////////////////  fn  ////////////////////
var _ = {};
_.ini = function () {
	if (location.pathname === '/') {
		_.modLayout();
		_.autoResetMsg();
	}
};
_.modLayout = function () {
	//hide header & footer
	$.cssText += 'body > .header {display: none;}';
	$.cssText += 'body > .content > a[href*="github.com/jshint"] {display: none;}';
	$.cssText += 'body > .content > .intro {display: none;}';
	$.cssText += 'body > .footer {display: none;}';
	
	//hide option
	$.cssText += 'body > .content > .editor > .options {display: none;}';
	
	//mod 'report' id, to avoid page scroll
	//var eReport = $.id('report');
	//eReport.id = 'old-report';
	
	//fix main body
	$.cssText += 'html {overflow-y:scroll;} body {height: auto; padding: 10px 0 20px;}';
	$.cssText += 'body > .content {margin: 0;}';
	$.cssText += 'body > .content:after {content:"";display:block;clear:both;height:0;}';
	
	//insert info bar, to avoid page jump
	var msgInfo = this.msgInfo = $.crE('div');
	$.addCls(msgInfo, 'alert alert-info');
	msgInfo.innerHTML = 'Ready to lint. Please paste your code below.';
	$.insBfr($.cls('editorArea')[0], msgInfo);
	
	//fix msg bar
	$.cssText += '.editorArea > .alert {margin-bottom: 10px;}';
	$.cssText += '.editorArea > .alert-success {border-color: #468847;}';
	$.cssText += '.editorArea > .alert-error {border-color: #B94A48;}';
	$.cssText += '.editorArea > .alert-info {border-color: #3A87AD;}';
	
	//layout - page
	$.cssText += 'body {width: 1620px; max-width: 1620px;}';
	$.cssText += '.editorArea {float: left; width: 880px;}';
	$.cssText += '.editorArea ~ .report {float: right; width: 680px;}';
	
	//layout - report
	$.cssText += '.editorArea ~ .report > h4:first-child {display: none;}';
	$.cssText += '.editorArea ~ .report > h4 {margin-top: 0;}';
	$.cssText += '.editorArea ~ .report .options-string {display: none;}';
	$.cssText += '.editorArea ~ .report .documentation-link {display: none;}';
	
	//lint btn
	$.cssText += '.editorArea > .controls button {width:100%;height:60px;font-size:30px;padding:10px 0 12px;border-radius:8px;font-weight: 700;}';
	
	//apply css
	$.css($.cssText);
};

_.autoResetMsg = function () {
	var _ns = this;
	//this.msgInfo = $('.alert-info')[0];
	this.msgError = $('.alert-error')[0];
	this.msgSuccess = $('.alert-success')[0];
	this.reportBox = $('.editorArea ~ .report')[0];
	this.codeBox = $('.CodeMirror')[0];
	this.btn = $('.editorArea > .controls button')[0];
	$.addEv(this.codeBox, 'click', function () {
		$.on(_ns.msgInfo);
		$.off(_ns.msgError);
		$.off(_ns.msgSuccess);
		$.off(_ns.reportBox);
	});
	$.addEv(this.btn, 'click', function () {
		$.off(_ns.msgInfo);
	});
};

////////////////////  ini  ////////////////////
_.ini();
