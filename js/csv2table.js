var LF = "\n";
var CR = "\r";
var TAB = "\t";

function is_nl2br() {
	if (document.getElementById('nl2br').checked) {
		return true;
	}
	return true;
}

function nl2br(str) {
	var result = '';
	var newText = str.split("\n");
	var c = newText.length;
	for (var i=0; i<c; i++) {
		if (i>0) {
			result += '<br />';
		}
		result += newText[i];
	}
	return result;
}
function resetNotBlank() {
	if (document.getElementById('fitblank').checked) {
		document.getElementById('notblank').checked = true;
		document.getElementById('fitblanktop').checked = false;
	}
}
function resetNotBlankTop() {
	if (document.getElementById('fitblanktop').checked) {
		document.getElementById('notblank').checked = true;
		document.getElementById('fitblank').checked = false;
	}
}
function resetFitBlank() {
	if (document.getElementById('notblank').checked == false) {
		document.getElementById('fitblank').checked = false;
		document.getElementById('fitblanktop').checked = false;
	}
}

function addRowspan(rowspan, dat, row, col) {
	targetRow = row - 1;
	if (dat[targetRow] == null) {
		return rowspan;
	}
	if (dat[targetRow][col] == '' || dat[targetRow][col] == '[:joinTop:]') {
		rowspan == addRowspan(rowspan, dat, targetRow, col);
	} else {
		rowspan[targetRow][col]++;
	}
	return rowspan;
}

function copyTags(){
	var ele = document.getElementById('to');
	var arg = ele.innerText;
	if (arg) {
		clipboardData.setData('text', arg);
		alert('コピーしました。');
	} else {
		alert('文字列が空なのでコピーしませんでした。');
	}
}

function confirmTable() {
	if (document.getElementById('to').value) {
		var temp = document.getElementById('to').value.split("\r").join('').split("\n");
		var val = '';
		var c = temp.length;
		var endCSS = false;
		for (var i=0; i<c; i++) {
			if (! endCSS) {
				if (temp[i] == '</style>') {
					endCSS = true;
				}
				continue;
			}
			val = val + temp[i];
		}
		if (val == '') {
			val = document.getElementById('to').value;
		}

//		document.getElementById('checkerBody').innerHTML = val;
//	} else {
//		document.getElementById('checkerBody').innerHTML = '<p class="nodata">No data</p>';

	}
/*
	showID('checkerBG');
	showID('checker');
	var checkerWidth = '1000';
	var checkerHeight = document.getElementById('checker').offsetHeight;
	//BG
	var ele = document.getElementById('checkerBG');

	var body = document.getElementsByTagName('body').item(0);
	ele.style.height = (body.offsetHeight + 30) + 'px';
	//FG
	var ele = document.getElementById('checker');
	ele.style.width = checkerWidth + 'px';
	//ele.style.height = checkerHeight + 'px';

	if (isIE()) {
		var pageX = document.documentElement.clientWidth;
		var pageY = document.documentElement.clientHeight;
	} else {
		var pageX = window.innerWidth - 20;
		var pageY = window.innerHeight;
	}
	var scrY = getScrollY();
	var posTop = scrY + (pageY - checkerHeight) / 2;
	if (posTop < 10) {
		posTop = 10;
	}
	ele.style.top = posTop + 'px';
	var posLeft = (pageX - checkerWidth) / 2;
	ele.style.left = posLeft + 'px';
*/
}

function exchange() {
	var csv = document.getElementById('from').value;
	if (csv == '') {
		confirmTable();
		return;
	}
	if (document.getElementById('stab').checked) {
		separator = "\t";
	} else {
		separator = '\t';
	}
	var result ='<link rel="stylesheet" type="text/css" href="https://r.nikkei.com/.resources/static/data-table/www.css" />\n<figure class="rn-table__wrapper" style="';
	var result_end ='</figure>';
	var csvArray = csv2array(csv, separator);
	var dat = Encoding.convert(csvArray, 'UNICODE', 'AUTO'); 
	if (document.getElementById('talign').checked) {
		result += 'margin:0 auto;';
	}
	if (document.getElementById('twidth').value!="") {
		result += 'width:';
		result += document.getElementById('twidth').value;
		result += 'px;';
	}
	result +='" >\n  <table class="rn-table';
	
	if (document.getElementById('tborder').checked) {
		result +=' rn-table--no-border';
	}

	if (document.getElementById('stripe').checked) {
		result +=' rn-table--stripe';
	}
	var fsize = document.getElementsByName( "fsize" ) ;
	for ( var a="", i=fsize.length; i--; ) {
		if ( fsize[i].checked ) {
			result += fsize[i].value ;
			break ;
		}
	}

	result +='"';
	if (document.getElementById('twidth').value=="") {
		result +=' >\n';
	} else {
		result +=' width="100%" >\n';
	}
	if (document.getElementById('title').value=="") {
	} else {
		result +='  <caption>';
		var title = document.getElementById('title').value;
		result +=title;
		result +='</caption>\n';
	}
	if (document.getElementById('theadrows').checked) {
		var theadrows = '1';
	} else {
		var theadrows = '0';
	}
	if (document.getElementById('thcols').checked) {
		var thcols = '1';
	} else {
		var thcols = '0';
	}

	if (document.getElementById('notblank').checked) {
		var notblank = true;
	} else {
		var notblank = false;
	}
	if (document.getElementById('fitblank').checked) {
		var fitblank = true;
	} else {
		var fitblank = false;
	}

	if (document.getElementById('fitblanktop').checked) {
		var fitblanktop = true;
	} else {
		var fitblanktop = false;
	}


	//
	if (document.getElementById('setthead').checked) {
		var settheadclass = true;
	} else {
		var settheadclass = true;
	}
	if (document.getElementById('setlevel').checked) {
		var setlevelclass = true;
	} else {
		var setlevelclass = true;
	}

	if (document.getElementById('theadstyle').value == '') {
		var theadstyle = '';
	} else {
		var theadstyle = document.getElementById('theadstyle').value;
	}
	if (document.getElementById('theadstyle2').checked) {
		var theadstyle2 = document.getElementById('theadstyle2').value;
	} else {
		var theadstyle2 = '';
	}
	if (document.getElementById('theadstyle3').value == '') {
		var theadstyle3 = '';
	} else {
		var theadstyle3 = document.getElementById('theadstyle3').value;
	}
	if (document.getElementById('theadstyle4').value == '') {
		var theadstyle4 = '';
	} else {
		var theadstyle4 = document.getElementById('theadstyle4').value;
	}
	if (document.getElementById('setlevelname').value == '') {
		var setlevelname = '';
	} else {
		var setlevelname = document.getElementById('setlevelname').value;
	}
	if (document.getElementById('setlevelname2').checked) {
		var setlevelname2 = document.getElementById('setlevelname2').value;
	} else {
		var setlevelname2 = '';
	}
	if (document.getElementById('setlevelname3').value == '') {
		var setlevelname3 = '';
	} else {
		var setlevelname3 = document.getElementById('setlevelname3').value;
	}
	if (document.getElementById('setlevelname4').value == '') {
		var setlevelname4 = '';
	} else {
		var setlevelname4 = document.getElementById('setlevelname4').value;
	}
	if (document.getElementById('notlevelfirst').checked) {
		var notlevelfirst = true;
	} else {
		var notlevelfirst = false;
	}


	if (document.getElementById('setrowclass').checked) {
		var setrowclass = true;
	} else {
		var setrowclass = false;
	}
	if (document.getElementById('setrowclassname').value == '') {
		var setrowclassname = 'nrow';
	} else {
		var setrowclassname = document.getElementById('setrowclassname').value;
	}
	if (document.getElementById('setrowclassinterval').value == '') {
		var setrowclassinterval = 2;//default
	} else {
		var setrowclassinterval = document.getElementById('setrowclassinterval').value;
	}
	if (document.getElementById('setrowclassnum').checked) {
		var setrowclassnum = true;
	} else {
		var setrowclassnum = false;
	}

	var rowspan = new Array();
	var cntrow = dat.length;

	for (var i=0; i<cntrow; i++) {
		rowspan[i] = new Array();

		var cntcol = dat[i].length;
		for (var ii=0; ii<cntcol; ii++) {
			rowspan[i][ii] = 1;
			if (dat[i][ii] == '' || dat[i][ii] == '[:joinTop:]') {
				//dat[i][ii] = '';
				//alert(dat[i][ii]);
				rowspan = addRowspan(rowspan, dat, i, ii);
			}
		}
	}
	var in_head = false;
	var in_tbody = false;

	var cntrow = dat.length;
	for (var i=0; i<cntrow; i++) {
		if (i==0 && theadrows > 0) {
			result +='    <thead>\n';
			in_thead = true;
		} else if (i == theadrows) {
			result +='    <tbody>\n';
			in_tbody = true;
		}

		if (setrowclass && (i % setrowclassinterval) == 0) {
			var settrclassname = setrowclassname;
			if (setrowclassnum) {
				settrclassname = settrclassname + '' + i;
			}
		} else {
			var settrclassname = '';
		}

		if (settrclassname == '') {
			var propTRclass = '';
		} else {
			var propTRclass = ' class="' + settrclassname + '"';
		}
		result +='      <tr' + propTRclass + '>\n';
		var cntcol = dat[i].length;
		for (var ii=0; ii<cntcol; ii++) {
			var data = dat[i][ii];

			if ((data == '' && ii != 0 && notblank) || data == '[:joinLeft:]') {
				if (! fitblank && i > 0 && data != '[:joinLeft:]') {
					continue;
				}
			  var temp = result.split('colspan="');
			  var colspan = temp[temp.length-1].substr(0, temp[temp.length-1].indexOf('"'));
			  colspan++;
			  temp[temp.length-1] = colspan + '' + temp[temp.length-1].substr(temp[temp.length-1].indexOf('"'), temp[temp.length-1].length);
			//alert(temp[temp.length-1]);
			  result = temp.join('colspan="');
				continue;
      } else if (! notblank && data == '') {
			  data = '　';
			} else if (data == '' && ii == 0 && i != 0) {
				colspan = 0;
				continue;
			} else if (data == '[:joinTop:]') {
				colspan = 0;
				continue;
			} else {
				colspan = 0;
			}
			//nl2br
			if (is_nl2br()) {
				data = nl2br(data);
			}

			var tagname = 'th';
			if (in_tbody && ii >= thcols) {
				tagname = 'td';
			}
			data = data.split(LF).join(LF);


			if (in_thead && settheadclass && tagname == 'th' && (ii != 0 || notlevelfirst == false)) {
			  theadstylename = theadstyle+theadstyle2+theadstyle3+theadstyle4;
			} else {
				theadstylename = '';
			}
			if (theadstylename != '') {
				var theadstyles = ' class="' + theadstylename + '"';
			} else {
				var theadstyles = '';
			}
			if (in_tbody && setlevelclass && tagname == 'th' && (ii != 0 || notlevelfirst == false)) {
				setclassname = setlevelname+setlevelname2+setlevelname3+setlevelname4;
			} else {
				setclassname = '';
			}
			if (setclassname != '') {
				var classname = ' class="' + setclassname + '"';
			} else {
				var classname = '';
			}
			if (notblank && (fitblanktop || ii == 0 || dat[(i + rowspan[i][ii] - 1)][ii] == '[:joinTop:]') && rowspan[i][ii] > 1) {
				var proprowspan = ' rowspan="' + rowspan[i][ii] + '"';
			} else {
				var proprowspan = '';
			}

			var regex = /^[0-9,.\-\+??]*$/;
			var tdright ='';
			if(data.match(regex)){
				tdright +=' class="rn-table__cell--align-right"';
			}
		  if (i == theadrows - 1) {
			  result +='        <' + tagname  + proprowspan + ' colspan="1"'+ theadstyles + '>';
			  result +=data;
			  result +='</' + tagname + '>\n';
		  } else {
			  result +='        <' + tagname + tdright + proprowspan + ' colspan="1"'+ classname + '>';
			  result +=data;
			  result +='</' + tagname + '>\n';
		  }
		}
		result +='      </tr>\n';
		if (i == theadrows - 1) {
			result +='    </thead>\n';
		} else if(i == cntrow - 1) {
			result +='    </tbody>\n';
		}
	}
	result += '  </table>\n';

	if (document.getElementById('caption').value=="") {
		result += result_end;
	} else {
		var caption = document.getElementById('caption').value;
		result += '<figcaption class="rn-table__bottom-caption">';
		result += caption;
		result +='</figcaption>';
		result += result_end;
	}

	var to = document.getElementById('to');
	if (! document.getElementById('nodump').checked) {
//		to.value = "<style>\n" + getCSS() + "</style>\n" + result.split(' colspan="1"').join('');
		to.value = result.split(' colspan="1"').join('');
	} else {
		to.value = result.split(' colspan="1"').join('');
	}
	confirmTable();
	document.getElementById('to').focus();
}
function numFull2Harf(val) {
	var full = new Array('?O', '?P', '?Q', '?R', '?S', '?T', '?U', '?V', '?W', '?X');
	var half = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
	var c = full.length;
	for (var i=0; i<c; i++) {
		val = val.split(full[i]).join(half[i]);
	}
	return val;
}
function regularizeProfile() {
	if (isNaN(numFull2Harf(document.getElementById('theadrows').value) * 1)) {
		document.getElementById('theadrows').value = 0;
	}
	if (isNaN(numFull2Harf(document.getElementById('thcols').value) * 1)) {
		document.getElementById('thcols').value = 0;
	}
	if (isNaN(numFull2Harf(document.getElementById('setrowclassinterval').value) * 1)) {
		document.getElementById('setrowclassinterval').value = 0;
	}
}
var ENABLE_SELECTOR = new Array();
function resetEnableSelector() {
	ENABLE_SELECTOR = new Array();
	ENABLE_SELECTOR['table'] = true;
	ENABLE_SELECTOR['th'] = true;
	ENABLE_SELECTOR['td'] = true;
}
function setEnableSelector(selector) {
	ENABLE_SELECTOR[selector] = true;
}
function issetEnableSelector(selector) {
	if (ENABLE_SELECTOR[selector]) {
		return true;
	}
	return false;
}

function setProfile() {
	resetEnableSelector();
	regularizeProfile();

//	var box = document.getElementById('colorprofile');

	var theadrows = parseInt(numFull2Harf(document.getElementById('theadrows').value));

	var setrowclass = document.getElementById('setrowclass').checked;
	var setrowclassname = document.getElementById('setrowclassname').value;
	var setrowclassinterval = parseInt(numFull2Harf(document.getElementById('setrowclassinterval').value));

	var setlevel = document.getElementById('setlevel').checked;
	var notlevelfirst = document.getElementById('notlevelfirst').checked;
	//
	var setlevelname = document.getElementById('setlevelname').value;
	var setlevelname2 = document.getElementById('setlevelname2').value;
	var setlevelname3 = document.getElementById('setlevelname3').value;
	var setlevelname4 = document.getElementById('setlevelname4').value;

	if (document.getElementById('setlevel').checked) {
		var thcols =parseInt(numFull2Harf(document.getElementById('thcols').value));
	} else if (parseInt(numFull2Harf(document.getElementById('thcols').value)) > 0) {

		var thcols = 1;
	} else {
		var thcols = 0;
	}

	var table = document.createElement('table');
	if (theadrows > 0) {
		var thead = document.createElement('thead');
			var tr = document.createElement('tr');
				var th = document.createElement('th');
					th.colSpan = (thcols + 2);
					th.onclick = setColor;
					th.appendChild(document.createTextNode('thead th'));
				setEnableSelector('thead th');
				tr.appendChild(th);
			thead.appendChild(tr);
		table.appendChild(thead);
	}else{
		var thead = "";
		var tr = "";
		var th = "";

	}

	var c = thcols * 1 + 2;
	var tbody = document.createElement('tbody');

	for (var row=0; row<4; row++) {
		var tr = document.createElement('tr');
		if (setrowclass && (row % 2 == 0)) {
			tr.className = setrowclassname;
		} else {
			tr.className = '';
		}
		for (var i=0; i<c; i++) {
			if (i < thcols) {
				var th = document.createElement('th');
					th.onclick = setColor;
				if (setrowclass && (row % 2 == 0) && setlevel && (! notlevelfirst || i+1 > 1)) {
					th.className = setlevelname + setlevelname2 + setlevelname3 + setlevelname4 + (i+1);
					th.appendChild(document.createTextNode('tr.' + setrowclassname + ' th.' + setlevelname+ setlevelname2 + setlevelname3 + setlevelname4 + (i+1)));
					setEnableSelector('tr.' + setrowclassname + ' th.' + setlevelname+ setlevelname2 + setlevelname3 + setlevelname4 + (i+1));
				} else if (setrowclass && (row % 2 == 0)) {
					th.className = '';
					th.appendChild(document.createTextNode('tr.' + setrowclassname + ' th'));
					setEnableSelector('tr.' + setrowclassname + ' th');
				} else if (setlevel && (! notlevelfirst || i+1 > 1)) {
					th.className = setlevelname+ setlevelname2 + setlevelname3 + setlevelname4 + (i+1);
					th.appendChild(document.createTextNode('th.' + setlevelname+ setlevelname2 + setlevelname3 + setlevelname4 + (i+1)));
					setEnableSelector('th.' + setlevelname+ setlevelname2 + setlevelname3 + setlevelname4 + (i+1));
				} else {
					th.className = '';
					th.appendChild(document.createTextNode('th'));
					setEnableSelector('th');
				}
				tr.appendChild(th);
			} else {
				var td = document.createElement('td');
					td.onclick = setColor;
				if (setrowclass && (row % 2 == 0)) {
					td.appendChild(document.createTextNode('tr.' + setrowclassname + ' td'));

					setEnableSelector('tr.' + setrowclassname + ' td');
				} else {
					td.appendChild(document.createTextNode('td'));

					setEnableSelector('td');
				}
					tr.appendChild(td);
			}
		}
		tbody.appendChild(tr);
	}
	table.appendChild(tbody);
//	_clearChildNodes(box);
	setCSS();
}

var COLOR_PROFILE = new Array();
	COLOR_PROFILE['table'] = new Array();
	COLOR_PROFILE['table']['border-collapse'] = 'collapse';
	COLOR_PROFILE['th'] = new Array();
	COLOR_PROFILE['th']['border'] = 'solid 1px #666666';
	COLOR_PROFILE['th']['color'] = '#000000';
	COLOR_PROFILE['th']['background-color'] = '#ffffff';
	COLOR_PROFILE['td'] = new Array();
	COLOR_PROFILE['td']['border'] = 'solid 1px #666666';
	COLOR_PROFILE['td']['color'] = '#000000';
	COLOR_PROFILE['td']['background-color'] = '#ffffff';

var CURRENT_CSS = new Array();

function resetCurrentCSS() {
	CURRENT_CSS['selector'] = '';
	CURRENT_CSS['property'] = '';
}

function setCSS() {
	var sheet = document.styleSheets[(document.styleSheets.length - 1)];
	if (isIE()) {
		for (var selector in COLOR_PROFILE) {
			for (var property in COLOR_PROFILE[selector]) {
				var value = COLOR_PROFILE[selector][property];
				sheet.addRule(selector, property + ': ' + value);
			}
		}
	} else {
		for (var selector in COLOR_PROFILE) {
			var CSS = selector + ' {';
			for (var property in COLOR_PROFILE[selector]) {
				CSS += "\t" + property + ': ' + COLOR_PROFILE[selector][property] + ';'
			}
			CSS += '}'
//			sheet.insertRule(CSS, sheet.cssRules.length);
		}
	}
}

function getCSS() {
	var CSS = '';
	for (var selector in COLOR_PROFILE) {
		if (! issetEnableSelector(selector)) {
			continue;
		}
		CSS += selector + ' {';
		for (var property in COLOR_PROFILE[selector]) {
			CSS += "\t" + property + ': ' + COLOR_PROFILE[selector][property] + ';'
		}
		CSS += '}'
	}
	return CSS;
}
function rgb2hex(rgb) {
	var pCol = rgb.match(/rgb\(([0-9]+), ([0-9]+), ([0-9]+)\)/);
	var bin = '#';
	var x = 'x';
	for (var i=1; i<=3; i++) {
		pCol[i] = parseInt(pCol[i]).toString(16);
		if (pCol[i].length == 1) {
			pCol[i] = '0' + pCol[i];
		}
		bin = bin + pCol[i];
		x = x + pCol[i];
	}
	return bin;
}
function hex2rgb(hex) {
	if (hex.substr(0,1) == '#') {
		hex = hex.substr(1);
	}
	hex = trueHEX(hex);

	var rgb = 'rgb(' + eval('0x' + hex.substr(0, 2)) + ', ' + eval('0x' + hex.substr(2, 2)) + ', ' + eval('0x' + hex.substr(4, 2)) + ')';

	return rgb;
}
function trueHEX(hex) {
	if (hex.length == 3) {
		hex = hex.substr(0,1) + hex.substr(0,1) + hex.substr(1,1) + hex.substr(1,1) + hex.substr(2,1) + hex.substr(2,1);
	}
	return hex;
}
function rgb2arr(rgb) {
	var pCol = rgb.match(/rgb\(([0-9]+), ([0-9]+), ([0-9]+)\)/);
	var arr  = new Array();
	for (var i=1; i<=3; i++) {
		arr[i-1] = pCol[i];
	}
	return arr;
}
function setColor() {
	showID('swatch');
	document.getElementById('swatch').style.left = '0px';
	if (isIE()) {
		var selector = this.innerText;
		var FG  = rgb2arr(hex2rgb(this.currentStyle.color));
		var BG  = rgb2arr(hex2rgb(this.currentStyle.backgroundColor));
	} else {
		var selector = this.textContent;
		var styles = getComputedStyle(this, '');
		var FG  = rgb2arr(getComputedStyle(this, '')['color']);
		var BG  = rgb2arr(getComputedStyle(this, '')['backgroundColor']);
	}
	if (document.getElementById('setFG').checked) {
		CURRENT_CSS['property'] = 'color';
		XXX.setValue(FG, false);
	} else {
		CURRENT_CSS['property'] = 'background-color';
		XXX.setValue(BG, false);
	}
	CURRENT_CSS['selector'] = selector;
}
function setTableColor(bool) {
	if (bool) {
		if (! COLOR_PROFILE[CURRENT_CSS['selector']]) {
			COLOR_PROFILE[CURRENT_CSS['selector']] = new Array();
		}
		COLOR_PROFILE[CURRENT_CSS['selector']][CURRENT_CSS['property']] = '#' + CURRENT_CSS['color'];
		setCSS();
	}
	resetCurrentCSS()
	hiddenID('swatch');
}