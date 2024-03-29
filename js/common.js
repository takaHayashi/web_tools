/************************************************************************************
 **** XMLHttpRequest
 ************************************************************************************/
	/**
	 * HTTP通信用、共通関ｿ
	 */
	function createXMLHttpRequest(cbFunc) {
		var XMLhttpObject = null;
		try {
			XMLhttpObject = new XMLHttpRequest();
		} catch(e) {
			try{
				XMLhttpObject = new ActiveXObject("Msxml2.XMLHTTP");
			} catch(e){
				try{
					XMLhttpObject = new ActiveXObject("Microsoft.XMLHTTP");
				} catch(e) {
					return null;
				}
			}
		}
		if (XMLhttpObject) XMLhttpObject.onreadystatechange = cbFunc;
		return XMLhttpObject;
	}

	/**
	 * xmlHTTPrequestでデータを取得します。
	 */
	function postXMLhttpObj(loadFunc, postData) {
		httpObj = createXMLHttpRequest(loadFunc);
		if (httpObj) {
			httpObj.open('POST', 'index.php', true);
			httpObj.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); 
			httpObj.send(postData);
		}
	}
	function getXMLhttpObj(loadFunc, postAddr) {
		httpObj = createXMLHttpRequest(loadFunc);
		if (httpObj) {
			httpObj.open('GET', postAddr, true);
			httpObj.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); 
			httpObj.send('');
		}
	}

/************************************************************************************
 **** CLASS
 ************************************************************************************/
	/**
	 * クラスを冊���靴泙后｣
	 */
/*
	function removeClassName (ele, delClassName) {
		var elclassName = ele.className;
		if (elclassName == '') return;
		elclassName = elclassName.split(' ');
		cnt = elclassName.length;
		var NewClass = new Array();
		for (i=0; i<cnt; i++) {
			if (elclassName[i] == delClassName) continue;
			NewClass.push(elclassName[i]);
		}
		ele.className = NewClass.join(' ');
	}
*/
	/**
	 * クラスを追加します。
	 */
	function addClassName (ele, additionalName) {
		removeClassName(ele, additionalName);
		if (ele.className == null || ele.className == '') {
			ele.className = additionalName;
			return;
		}
		ele.className = ele.className + ' ' + additionalName;
	}
	/**
	 * クラスをﾆ���悗┐泙后８気離�D薀垢�｢覆ぞ��臘媛辰靴泙后｣
	 */
	function changeClassName (ele, classFrom, classTo) {
		removeClassName(ele, classFrom);
		addClassName(ele, classTo);
	}

	function issetClassName (ele, checkClassName) {
		elclassName = ele.className;
		if (elclassName == null || elclassName == '') {
			return false;
		}
		elclassName = elclassName.split(' ');
		var cnt = elclassName.length;
		for (var i=0; i<cnt; i++) {
			if (elclassName[i] == checkClassName) return true;
		}
		return false;
	}
	

	/**
	 * 指定のクラス名をｻったエ���瓮鵐箸鮗萋世靴泙后｣
	 */
	function getElementsByClass (requireClassName, tagName) {
		if (tagName == null) {
			tagName = '*';
		}
		var ele = document.getElementsByTagName(tagName);
		var cnt = ele.length;
		var matchEle = new Array();
		for (var i=0; i<cnt; i++) {
			
			if (issetClassName(ele[i], requireClassName)) {
				matchEle.push(ele[i]);
			}
		}
		return matchEle;
	}
	//存在しなけ���佚佻燭垢
	if (! document.getElementsByClass) {
		document.getElementsByClass = getElementsByClass;
	}

	/**
	 * 表示／非表示をﾆ���悗┐泙ｹ
	 */
	function chgHidden (chgHiddenClassName) {
		var ele = document.getElementsByClass(chgHiddenClassName);
		var cnt = ele.length;
		for (var i=0; i<cnt; i++) {
			//ele[i].style.color='#f00';
			if (issetClassName(ele[i], 'hidden')) {
				removeClassName(ele[i], 'hidden');
			} else {
				addClassName(ele[i], 'hidden');
			}
		}
	}
	/**
	 * 表示
	 */
	function showClass (chgHiddenClassName) {
		var ele = document.getElementsByClass(chgHiddenClassName);
		var cnt = ele.length;
		for (var i=0; i<cnt; i++) {
			removeClassName(ele[i], 'hidden');
		}
	}
	/**
	 * 非表示
	 */
	function hiddenClass (chgHiddenClassName) {
		var ele = document.getElementsByClass(chgHiddenClassName);
		var cnt = ele.length;
		for (var i=0; i<cnt; i++) {
			addClassName(ele[i], 'hidden');
		}
	}
	/**
	 * 表示／非表示をﾆ���悗┐泙ｹ
	 */
	function changeOne (chgHiddenClassGroup, chgHiddenClassName) {
		var ele = document.getElementsByClass(chgHiddenClassGroup);
		var cnt = ele.length;
		for (var i=0; i<cnt; i++) {
			if (issetClassName(ele[i], chgHiddenClassName)) {
				if (issetClassName(ele[i], 'hidden')) {
					removeClassName(ele[i], 'hidden');
				} else {
					addClassName(ele[i], 'hidden');
				}
			} else {
				addClassName(ele[i], 'hidden');
			}
		}
	}
	/**
	 * 親クラスのなかから胤�弔離�D薀垢世栄充┐靴泙ｹ
	 */
	function showOne (chgHiddenClassGroup, chgHiddenClassName) {
		var ele = document.getElementsByClass(chgHiddenClassGroup);
		var cnt = ele.length;
		for (var i=0; i<cnt; i++) {
			if (issetClassName(ele[i], chgHiddenClassName)) {
				removeClassName(ele[i], 'hidden');
				
			} else {
				addClassName(ele[i], 'hidden');
			}
		}
	}
	
	function showID(targetID) {
//		removeClassName(document.getElementById(targetID), 'hidden');
	}
	function hiddenID(targetID) {
		addClassName(document.getElementById(targetID), 'hidden');
	}
	
	function writeHiddenCSS () {
		document.write('<style>.hidden{display:none ! important;}</style>');
	}

/************************************************************************************
 **** COMMON
 ************************************************************************************/
	/**
	 * 子要素を全て冊���靴泙后｣
	 */
	function clearChildNodes(parentID) {
		_clearChildNodes(document.getElementById(parentID));
	}
	function _clearChildNodes(parentEle) {
/*		while (parentEle.hasChildNodes()) {
			parentEle.removeChild(parentEle.childNodes.item(0));
		}
*/
	}
	
	/**
	 * 中身のテキストをﾆ���悗┐泙后�@淵織阿魯┘好院璽廖ﾋ
	 */
	function setText(eleID, newText, nl2br) {
		_setText(document.getElementById(eleID), newText, nl2br);
	}
	function _setText(ele, newText, nl2br) {
		_clearChildNodes(ele);
		if (nl2br) {
			newText = newText.split("\n");
			var c = newText.length;
			for (var i=0; i<c; i++) {
				if (i>0) {
					ele.appendChild(document.createElement('br'));
				}
				ele.appendChild(document.createTextNode(newText[i]));
			}
		} else {
			ele.appendChild(document.createTextNode(newText));
		}
	}
	function array_sum(arr) {
		var c = arr.length;
		var rs = 0;
		for (var i=0; i<c; i++) {
			rs += new Number(arr[i]);
		}
		return;
	}
	/**
	 * 不透明度を指定します。100:不透明、0:透明
	 */
	function setAlpha(ele, intAlpha) {
		intAlpha = new Number(intAlpha);
		if (intAlpha > 100) {
			intAlpha = 100;
		} else if (0 > intAlpha) {
			intAlpha = 0;
		}
		
		if (isIE()) {
			ele._alpha = ele.style.filter;
			ele.style.filter = 'alpha(opacity=' + intAlpha + ')';
		} else {
			ele._alpha = ele.style.opacity * 1;
			ele.style.opacity = intAlpha / 100;
		}
	}
	function resetAlpha(ele) {
		if (isIE()) {
			ele.style.filter = ele._alpha;
		} else {
			ele.style.opacity = ele._alpha;
		}
	}
	function isIE() {
		var isIE = /*@cc_on!@*/false;
		if (isIE) {
			return true;
		}
		return false;
	}
	/**
	 * 上からど���世吋好�D�ｻ璽��靴討い���[萋世靴泙后｣
	 */
	function getScrollY() {
		if (isIE()) {
			return document.documentElement.scrollTop;
		}
		return self.pageYOffset;
	}
	/**
	 * CSVの文字列を配列に格納します。
	 */
	function csv2array(strcsv, separator) {
		if (separator == null || separator == '') {
			separator = ',';
		}
		
		var csv = new Array();
		//strcsv = strcsv.replace(/CR/g, '').split(LF);
		strcsv = strcsv.split(CR).join('').split(LF);
		
		//CSV配ﾎ
		var csv = new Array();
		
		//カ���鵐塙ﾔ
		var row = 0;
		
		var tempval = '';
		var cnt = strcsv.length;
		
		
		//ｲ行ごとに���璽ﾗ
		for (var i=0; i<cnt; i++) {
			if (strcsv[i] == '') {
				continue;
			}
			var val = strcsv[i].split(separator);
			var cntval = val.length;
			var lastNum = cntval - 1;
			//多次元配列に箭�ﾀ
			if (csv[row] == null) {
				csv[row] = new Array();
			}
			
			//カンマごとに���璽ﾗ
			for (var ii=0; ii<cntval; ii++) {
				var current = val[ii];
				if (current == '"it has ""quote"" invalue"') {
					alert(current);
				}
				//前回からの拳�腓覆ｷ
				if (tempval == '') {
					//二重引用符から始まっていなけ���伉名��諒源�ﾌ
					if (current.substring(0, 1) != '"') {
						csv[row].push(current);
						continue;
					}
					//カンマ、二重引用符、ｲ行のど����C�｢呂い辰討い��｣
					
					current = current.substring(1, current.length);
				}
				//セ����ｲ扱��靴討い���C匹Δｫ
				if (current.match(/^(.*[^"])?("")*"$/)) {
					current = tempval + current.substring(0, current.length - 1);
					//二重引用符のエスケープをはずす
					current = current.replace(/""/g, '"');
					csv[row].push(current);
					tempval = '';
					continue;
				}
				//セ����ｲ扱��靴討い覆ぞ��隋�ｰ行かカンマが続く
				//最後のセ���両��膕行が続く
				if (ii == lastNum) {
					tempval += current + "\n";
				} else {
					tempval += current + separator;
				}
				
			}
			if (tempval != '') {
				continue;
			}
			row++;
		}
		var a = 0;
		return csv;
	}
/************************************************************************************
 **** FORM
 ************************************************************************************/
	/**
	 * 指定IDのセ����D箸離�｣廛轡腑鵑魘�C砲靴泙后｣
	 */
	function removeAllOptions (id_select, cStart, cEnd) {
		var sEle = document.getElementById(id_select);
		var cnt = sEle.length;
		if (cStart==null) {
			cStart=0;
		}
		if (cEnd!=null && cnt>cEnd) {
			cnt = cEnd;
		}
		for (i=cnt; i>=cStart; i--) {
			sEle.options[i] = null;
		}
	}

	function createCommonForm () {
		//formエ���瓮鵐箸鮑�{ｮ
		formEle = document.createElement('form');
		formEle.id = 'commonFrm';
		formEle.action = 'index.php';
		formEle.method = 'post';
		
		//bodyタグに追加
		bodyEle = document.getElementsByTagName('body')[0].appendChild(formEle);
		//name:typeのエ���瓮鵐箸鮑�{ｮ
		typeEle = createCommonInput('type', '');
		typeEle.id = 'commonFrmType';
		
		//name:actionのエ���瓮鵐箸鮑�{ｮ
		actEle = createCommonInput('action', '');
		actEle.id = 'commonFrmAction';
	}
	/**
	 * 
	 */
	function createCommonInput(newName, newValue) {
		var ele = document.createElement('input');
		ele.name = newName;
		ele.type = 'hidden';
		ele.value = newValue;
		document.getElementById('commonFrm').appendChild(ele);
		return ele;
	}
	function modelTo (goType, goAction) {
		document.getElementById('commonFrmType').value   = goType;
		document.getElementById('commonFrmAction').value = goAction;
		document.getElementById('commonFrm').submit();
	}

//set hidden class
writeHiddenCSS ();