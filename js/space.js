function space(){
	var text = document.henkan.mytext.value;

	text = text.replace(/(^\s+).$/g, "");

	document.henkan.mytext.value = text;
	var html = document.henkan.mytext.value ;
	var html = html.replace(/\r\n|\r|\n/g, '<br>');
	document.getElementById('preview').innerHTML = "<div style='color:blue;font-weight:bold;margin:auto;'>　↓確認用</div><hr>";
	document.getElementById('preview').innerHTML += html;
	document.getElementById('kome').innerHTML = "↓ココをコピーして使って下さい" ;
}