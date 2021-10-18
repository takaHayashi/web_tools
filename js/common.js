/************************************************************************************
 **** XMLHttpRequest
 ************************************************************************************/
	/**
	 * HTTP’ÊM—pA‹¤’ÊŠÖ¿
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
	 * xmlHTTPrequest‚Åƒf[ƒ^‚ğæ“¾‚µ‚Ü‚·B
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
	 * ƒNƒ‰ƒX‚ğûÿıÿŒCŸ¢@£
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
	 * ƒNƒ‰ƒX‚ğ’Ç‰Á‚µ‚Ü‚·B
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
	 * ƒNƒ‰ƒX‚ğÆ‚ûÿœ¢„¢Ÿ¢@‚W‹C—£ˆDåDC†¢•¢‚¼ıÿäc•Q’CŒCŸ¢@£
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
	 * w’è‚ÌƒNƒ‰ƒX–¼‚ğ»‚Á‚½ƒGƒÿáDêD”¢éºäÄ¢ŒCŸ¢@£
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
	//‘¶İ‚µ‚È‚¯‚ûÿ˜Ã˜ÍCC
	if (! document.getElementsByClass) {
		document.getElementsByClass = getElementsByClass;
	}

	/**
	 * •\¦^”ñ•\¦‚ğÆ‚ûÿœ¢„¢Ÿ¢¹
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
	 * •\¦
	 */
	function showClass (chgHiddenClassName) {
		var ele = document.getElementsByClass(chgHiddenClassName);
		var cnt = ele.length;
		for (var i=0; i<cnt; i++) {
			removeClassName(ele[i], 'hidden');
		}
	}
	/**
	 * ”ñ•\¦
	 */
	function hiddenClass (chgHiddenClassName) {
		var ele = document.getElementsByClass(chgHiddenClassName);
		var cnt = ele.length;
		for (var i=0; i<cnt; i++) {
			addClassName(ele[i], 'hidden');
		}
	}
	/**
	 * •\¦^”ñ•\¦‚ğÆ‚ûÿœ¢„¢Ÿ¢¹
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
	 * eƒNƒ‰ƒX‚Ì‚È‚©‚©‚çˆûÿ’¢—£ˆDåDC¢‰h[„¢ŒCŸ¢¹
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
	 * q—v‘f‚ğ‘S‚ÄûÿıÿŒCŸ¢@£
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
	 * ’†g‚ÌƒeƒLƒXƒg‚ğÆ‚ûÿœ¢„¢Ÿ¢@‚@•£Dˆ¢˜D„£D‰@£œ@Ë
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
	 * •s“§–¾“x‚ğw’è‚µ‚Ü‚·B100:•s“§–¾A0:“§–¾
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
	 * ã‚©‚ç‚Ç‚ûÿ¢‰DDˆDí»£ıÿŒC“¢‚¢ıÿ†[äÄ¢ŒCŸ¢@£
	 */
	function getScrollY() {
		if (isIE()) {
			return document.documentElement.scrollTop;
		}
		return self.pageYOffset;
	}
	/**
	 * CSV‚Ì•¶š—ñ‚ğ”z—ñ‚ÉŠi”[‚µ‚Ü‚·B
	 */
	function csv2array(strcsv, separator) {
		if (separator == null || separator == '') {
			separator = ',';
		}
		
		var csv = new Array();
		//strcsv = strcsv.replace(/CR/g, '').split(LF);
		strcsv = strcsv.split(CR).join('').split(LF);
		
		//CSV”zÎ
		var csv = new Array();
		
		//ƒJƒÿêD”·Ô
		var row = 0;
		
		var tempval = '';
		var cnt = strcsv.length;
		
		
		//²s‚²‚Æ‚Éƒÿ£×
		for (var i=0; i<cnt; i++) {
			if (strcsv[i] == '') {
				continue;
			}
			var val = strcsv[i].split(separator);
			var cntval = val.length;
			var lastNum = cntval - 1;
			//‘½ŸŒ³”z—ñ‚ÉûÿÀ
			if (csv[row] == null) {
				csv[row] = new Array();
			}
			
			//ƒJƒ“ƒ}‚²‚Æ‚Éƒÿ£×
			for (var ii=0; ii<cntval; ii++) {
				var current = val[ii];
				if (current == '"it has ""quote"" invalue"') {
					alert(current);
				}
				//‘O‰ñ‚©‚ç‚ÌŒÿäC•¢·
				if (tempval == '') {
					//“ñdˆø—p•„‚©‚çn‚Ü‚Á‚Ä‚¢‚È‚¯‚ûÿ˜Â–¼ıÿ—ÈŒ¹íÌ
					if (current.substring(0, 1) != '"') {
						csv[row].push(current);
						continue;
					}
					//ƒJƒ“ƒ}A“ñdˆø—p•„A²s‚Ì‚Ç‚ûÿ†C†¢˜C‚¢’C“¢‚¢ıÿ£
					
					current = current.substring(1, current.length);
				}
				//ƒZƒÿ†²ˆµıÿŒC“¢‚¢ıÿ†C•Cƒ¢«
				if (current.match(/^(.*[^"])?("")*"$/)) {
					current = tempval + current.substring(0, current.length - 1);
					//“ñdˆø—p•„‚ÌƒGƒXƒP[ƒv‚ğ‚Í‚¸‚·
					current = current.replace(/""/g, '"');
					csv[row].push(current);
					tempval = '';
					continue;
				}
				//ƒZƒÿ†²ˆµıÿŒC“¢‚¢•¢‚¼ıÿä@°s‚©ƒJƒ“ƒ}‚ª‘±‚­
				//ÅŒã‚ÌƒZƒÿ—¼ıÿäQs‚ª‘±‚­
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
	 * w’èID‚ÌƒZƒÿˆD”¢—£…£œDŒDäDêCé´ëC–CŒCŸ¢@£
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
		//formƒGƒÿáDêD”¢é¸î{®
		formEle = document.createElement('form');
		formEle.id = 'commonFrm';
		formEle.action = 'index.php';
		formEle.method = 'post';
		
		//bodyƒ^ƒO‚É’Ç‰Á
		bodyEle = document.getElementsByTagName('body')[0].appendChild(formEle);
		//name:type‚ÌƒGƒÿáDêD”¢é¸î{®
		typeEle = createCommonInput('type', '');
		typeEle.id = 'commonFrmType';
		
		//name:action‚ÌƒGƒÿáDêD”¢é¸î{®
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