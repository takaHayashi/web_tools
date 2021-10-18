function konv_han(){
	alert("【注意！】必ずプレビューをご確認ください。\n\n　洋数字を半角に変換します。\n\n　※数字に挟まれた 「，」「・」「．」は半角になります。");
	han = "0123456789";
	zen = "０１２３４５６７８９";
	var text = document.henkan.mytext.value;
	var str = "";
	var str_chk = "";
	for (i=0; i<text.length; i++){
		c = text.charAt(i);
		n = zen.indexOf(c,0);
		if (n >= 0){
			c = han.charAt(n);
			str += c;
			str_chk += c;
		}else{
			str += c;
			str_chk += c;
		}
	}
/*
	str = str.replace(/([0-9])・([0-9])/g, "$1"+"."+"$2");
	str = str.replace(/([0-9])．([0-9])/g, "$1"+"."+"$2");
	str = str.replace(/([0-9])，([0-9])/g, "$1"+","+"$2");
	str_chk = str_chk.replace(/([0-9])・([0-9])/g, "<span class=\"bkblue\">"+"$1"+"."+"$2"+"</span>");
	str_chk = str_chk.replace(/([0-9])．([0-9])/g, "<span class=\"bkblue\">"+"$1"+"."+"$2"+"</span>");
	str_chk = str_chk.replace(/([0-9])，([0-9])/g, "<span class=\"bkblue\">"+"$1"+","+"$2"+"</span>");
	str_chk = str_chk.replace(/([0-9])\/([0-9])\/([0-9])/g, "<span class=\"bkblue\">"+"$1"+"/"+"$2"+"/"+"$3"+"</span>");
	str_chk = str_chk.replace(/([0-9])\/([0-9])/g, "<span class=\"bkblue\">"+"$1"+"/"+"$2"+"</span>");
*/
	str_chk = str_chk.replace(/([0-9]+)/g, "<span class=\"bkblue\">"+"$1"+"</span>");
	var text = new String;
	text = '<div style="font-weight:bold;">■洋数字を全て半角に変換します。変換したものは<span style="color:blue;">青</span>で表示します。</div>';
	document.getElementById('kom').innerHTML = text;

	document.henkan.mytext.value = str;
	str_chk = str_chk.replace(/\r\n|\r|\n/g, '<br>');
	document.getElementById('preview').innerHTML = str_chk;
	document.getElementById('kome').innerHTML = "↓ココをコピーして使って下さい" ;
}