/************************************************************************************
 **** XMLHttpRequest
 ************************************************************************************/
	/**
	 * HTTP�ʐM�p�A���ʊֿ
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
	 * xmlHTTPrequest�Ńf�[�^���擾���܂��B
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
	 * �N���X��������C���@�
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
	 * �N���X��ǉ����܂��B
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
	 * �N���X�������������@�W�C���D�D�C���������c�Q�C�C���@�
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
	 * �w��̃N���X���������G����D�D����Đ��C���@�
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
	//���݂��Ȃ�����Ø͐C�C
	if (! document.getElementsByClass) {
		document.getElementsByClass = getElementsByClass;
	}

	/**
	 * �\���^��\���������������
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
	 * �\��
	 */
	function showClass (chgHiddenClassName) {
		var ele = document.getElementsByClass(chgHiddenClassName);
		var cnt = ele.length;
		for (var i=0; i<cnt; i++) {
			removeClassName(ele[i], 'hidden');
		}
	}
	/**
	 * ��\��
	 */
	function hiddenClass (chgHiddenClassName) {
		var ele = document.getElementsByClass(chgHiddenClassName);
		var cnt = ele.length;
		for (var i=0; i<cnt; i++) {
			addClassName(ele[i], 'hidden');
		}
	}
	/**
	 * �\���^��\���������������
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
	 * �e�N���X�̂Ȃ������������D�D�C���h�[���C���
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
	 * �q�v�f��S�č�����C���@�
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
	 * ���g�̃e�L�X�g�������������@�@���D���D���D�@���@�
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
	 * �s�����x���w�肵�܂��B100:�s�����A0:����
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
	 * �ォ��ǂ�����D�D�D�����C�������[�Đ��C���@�
	 */
	function getScrollY() {
		if (isIE()) {
			return document.documentElement.scrollTop;
		}
		return self.pageYOffset;
	}
	/**
	 * CSV�̕������z��Ɋi�[���܂��B
	 */
	function csv2array(strcsv, separator) {
		if (separator == null || separator == '') {
			separator = ',';
		}
		
		var csv = new Array();
		//strcsv = strcsv.replace(/CR/g, '').split(LF);
		strcsv = strcsv.split(CR).join('').split(LF);
		
		//CSV�z�
		var csv = new Array();
		
		//�J����D���
		var row = 0;
		
		var tempval = '';
		var cnt = strcsv.length;
		
		
		//��s���ƂɃ�����
		for (var i=0; i<cnt; i++) {
			if (strcsv[i] == '') {
				continue;
			}
			var val = strcsv[i].split(separator);
			var cntval = val.length;
			var lastNum = cntval - 1;
			//�������z��ɐ���
			if (csv[row] == null) {
				csv[row] = new Array();
			}
			
			//�J���}���ƂɃ�����
			for (var ii=0; ii<cntval; ii++) {
				var current = val[ii];
				if (current == '"it has ""quote"" invalue"') {
					alert(current);
				}
				//�O�񂩂�̌���C���
				if (tempval == '') {
					//��d���p������n�܂��Ă��Ȃ���������Ȍ���
					if (current.substring(0, 1) != '"') {
						csv[row].push(current);
						continue;
					}
					//�J���}�A��d���p���A��s�̂ǂ���C���C���C�������
					
					current = current.substring(1, current.length);
				}
				//�Z����������C�������C�C���
				if (current.match(/^(.*[^"])?("")*"$/)) {
					current = tempval + current.substring(0, current.length - 1);
					//��d���p���̃G�X�P�[�v���͂���
					current = current.replace(/""/g, '"');
					csv[row].push(current);
					tempval = '';
					continue;
				}
				//�Z����������C�����������@���s���J���}������
				//�Ō�̃Z��������Q�s������
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
	 * �w��ID�̃Z����D�������D�D�D�C��C�C�C���@�
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
		//form�G����D�D����{�
		formEle = document.createElement('form');
		formEle.id = 'commonFrm';
		formEle.action = 'index.php';
		formEle.method = 'post';
		
		//body�^�O�ɒǉ�
		bodyEle = document.getElementsByTagName('body')[0].appendChild(formEle);
		//name:type�̃G����D�D����{�
		typeEle = createCommonInput('type', '');
		typeEle.id = 'commonFrmType';
		
		//name:action�̃G����D�D����{�
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