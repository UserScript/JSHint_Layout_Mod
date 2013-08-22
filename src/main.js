////////////////////  fn  ////////////////////
var _ = {};
_.ini = function () {
	if (location.pathname === '/') {
		this.getElem();
		this.modLayout();
		this.autoResetMsg();
	}
};
_.getElem = function () {
	this.msgInfo = $.crElem('div');  //need to insert to alert area later.
	this.msgError = $('.alert-error')[0];
	this.msgSuccess = $('.alert-success')[0];
	this.codeBox = $('.CodeMirror')[0];
	this.optionBox = $('.editor > .options')[0];
	this.reportBox = $('.editorArea ~ .report')[0];
	this.btn = $('.editorArea > .controls button')[0];
};
_.modLayout = function () {
	//fix main body
	$.cssText += 'html {overflow-y:scroll;}';
	$.cssText += 'body {height: auto; padding: 15px 0 20px;}';
	$.cssText += 'body > .content {margin: 0;}';
	$.cssText += 'body > .content:after {content:"";display:block;clear:both;height:0;}';
	
	//layout - page
	$.cssText += 'body {width: 1620px; max-width: 1620px;}';
	$.cssText += '.editorArea {float: left; width: 880px;}';
	$.cssText += '.editorArea ~ .report {float: right; width: 680px;}';

	//hide nav & header & footer
	$.cssText += 'body > .navbar {display: none;}';
	$.cssText += 'body > .page-header {display: none;}';
	$.cssText += 'body > .content > .intro {display: none;}';
	$.cssText += 'body > .footer {display: none;}';
	
	//hide intro
	$.cssText += '#jshint-pitch, body > .content > .alert-info {display: none;}';
	
	//hide github badge - out of date
	//$.cssText += 'body > .content > a[href*="github.com/jshint"] {display: none;}';
	
	//msg bar
	$.cssText += '.editorArea > .alert {margin-bottom: 10px;}';
	$.cssText += '.editorArea > .alert-success {border-color: #468847;}';
	$.cssText += '.editorArea > .alert-error {border-color: #B94A48;}';
	$.cssText += '.editorArea > .alert-info {border-color: #3A87AD; padding-right: 14px;}';
	$.cssText += '.editorArea > .alert-info a {float: right; white-space: nowrap; text-decoration: underline;}';
	
	//hide option
	$.cssText += 'body > .content > .editor > .options {display: none;}';
	
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

	//insert info bar, to avoid page jump
	var msgInfo = this.msgInfo;
	$.addClass(msgInfo, 'alert alert-info');
	msgInfo.innerHTML = 'Ready to lint. Please paste your code below. <a href="http://userscripts.org/scripts/show/152538" target="_blank">JSHint Layout Mod</a>';
	$.insBefore($('.editorArea')[0], msgInfo);
	
	//remove link in error msg, to avoid page scroll
	var msgError = this.msgError;
	var html = msgError.innerHTML;
	html = html.split('<a ')[0];
	html += 'report on the right side.';
	msgError.innerHTML = html;

	//bind
	$.on(this.codeBox, 'click', function () {
		$.show(msgInfo);
		$.hide(msgError);
		$.hide(_ns.msgSuccess);
		$.hide(_ns.reportBox);
	});
	$.on(this.btn, 'click', function () {
		$.hide(msgInfo);
	});
};

////////////////////  ini  ////////////////////
_.ini();
