function karagyou(){
	var str = document.henkan.mytext.value
	str = str.replace(/\n/mg, "\n\n");
	str = str.replace(/^\s*\n/mg, "\n");
	document.henkan.mytext.value = str;
}