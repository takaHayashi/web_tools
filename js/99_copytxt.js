function copytxt(copyObj, NAME) {
	theObj = eval("document.text." + NAME);
	theObj.focus();
	theObj.select();
	if(copyObj == "yes"){
		theRange = theObj.createTextRange();
		theRange.execCommand("copy");
	}
}