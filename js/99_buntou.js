function buntou(){
	alert("文頭に全角スペースがあるか調べる。");
	var str = document.henkan.mytext.value;


		if (str.match(/^([^　]+)(.+)$/g)) {
			alert("マッチしました。");
		}else {
			alert("マッチしません。");
		}

	var str_chk = arr;

str_chk = str_chk.replace(/^　/g,"<span class=\"bkred\">　</span>");


	var text = new String;
	text = '<div style="font-weight:bold;">■<span style="color:red;">１桁</span>の洋数字は<span style="color:red;">赤</span> <span style="color:blue;">２桁以上</span>は<span style="color:blue;">青</span>で表示されます。</div>';
	document.getElementById('kom').innerHTML = text;
	document.henkan.after.value = str;
	str_chk = str_chk.replace(/\r\n|\n/g, '<br>');
	document.getElementById('preview').innerHTML = str_chk;
}
