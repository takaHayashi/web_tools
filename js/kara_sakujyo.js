function kara_sakujyo(){
	var str = document.henkan.mytext.value
	str = str.replace(/^\s*\n/mg, "");
	document.henkan.mytext.value = str;
}