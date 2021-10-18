/*-----------------------------------------------------------------------
★概要★
１）textareaに入力された値の中の数字を全て半角に変換
２）数字に挟まれた「．」「，」「：」を半角に
３）数字と記号（.,:/）以外に囲まれた１桁の数字を全角に変換
４）textareaに変換結果を返す
５）該当箇所を背景赤（１桁数字）、背景青（２桁以上の数字）にして確認用画面を作る
-----------------------------------------------------------------------*/

function konv_zenhan(){
alert("【注意！】必ずプレビューをご確認ください。\n\n　・１桁の洋数字は全角\n　・２桁以上は半角に変換します");

/*
「han」に半角数字を代入し「zen」に全角数字を代入する
「document.henkan.mytext.value」でtextareaの値を取って変数「text」に入れる
「text.length」で文字数だけfor文でループ処理
「charAt(i)」で「i」文字目を変数「c」に代入し
「n = zen.indexOf(c,0)」で文字「c」が「zen」にある文字かどうか調べあれば「0」以上、無ければ「-1」を返す。
IF文で「0」以上（全角）か検索し、そうなら半角に変換する
*/

	var han = "0123456789";
	var zen = "０１２３４５６７８９";
	var text = document.henkan.mytext.value;
	var str = "";
	var str_chk = "";
	var c = "";
	var n = "";

	for (i=0; i<text.length; i++){
		c = text.charAt(i);
		n = zen.indexOf(c,0);
		if (n >= 0){
			c = han.charAt(n);
			str += c;
		}else{
			str += c;
		}
	}


/*
数字に挟まれた「．」「，」「：」を半角に
*/

	str = str
	.replace(/(\d+?)．(\d+?)/g, "$1"+"."+"$2")
	.replace(/(\d+?)，(\d+?)/g, "$1"+","+"$2")
	.replace(/(\d+?)：(\d+?)/g, "$1"+":"+"$2");

/*
正規表現「/(^|(?:[^0-9.,:/]))([0-9])((?![0-9.,:/])|$)/g」で
「0から9と記号.,:/」以外に囲まれた１桁の数字「0-9」があるとき
function(m)の処理が始まる。条件的には「m.length」は「２」になるはず
「m.length == 2」の時、正規表現の２つ目の値（数字）を
CONV_TABLE = ["０","１","２","３","４","５","６","７","８","９"]で
全角に変換している。
*/

	str = str.replace(/(^|(?:[^0-9.,:/]))([0-9])((?![0-9.,:/])|$)/g,
	function(m) {
		var CONV_TABLE = ["０","１","２","３","４","５","６","７","８","９"];
		var s, n;
	if (m.length == 2) {
		s = m.charAt(0);
		n = CONV_TABLE[parseInt(m.charAt(1))];
	} else {
		s = "";
		n = CONV_TABLE[parseInt(m)];
	}
	return s + n;
});

//配信画面に変更箇所を表示するための変数「str_chk」を定義し、strの値を代入
	str_chk = str;


/*
正規表現で全角の数字を引っかけて、それを<span class=\"bkred\">で囲む
正規表現で半角の数字を引っかけて、それを<span class=\"bkblue\">で囲む

*/
str_chk = str_chk.replace(/([０-９]{1})/g, "<span class=\"bkred\">"+"$1"+"</span>");
str_chk = str_chk.replace(/([0-9]+)([.,:/]{1})([0-9]+)([.,:/]{1})([0-9]+)/g, "<span class=\"bkblue\">"+"$1$2$3$4$5"+"</span>");
str_chk = str_chk.replace(/([0-9]+)([.,:\/]{1})([0-9]+)/g, "<span class=\"bkblue\">"+"$1$2$3"+"</span>");
str_chk = str_chk.replace(/(\d{2,})/g, "<span class=\"bkblue\">"+"$1"+"</span>");

	var text = new String;
	text = '<div style="font-weight:bold;">■<span style="color:red;">１桁</span>の洋数字は<span style="color:red;">赤</span> <span style="color:blue;">２桁以上</span>は<span style="color:blue;">青</span>で表示されます。</div>';
	document.henkan.mytext.value = str;
	str_chk = str_chk.replace(/\r\n|\n/g, '<br>');
	document.getElementById('preview').innerHTML = str_chk;
	document.getElementById('kome').innerHTML = "↓ココをコピーして使って下さい" 
}
