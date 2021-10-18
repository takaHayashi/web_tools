function konv_roma(){
	var text = document.henkan.mytext.value;

	text = text.replace(/Ｇ１/g, "ＧI");
	text = text.replace(/Ｇ２/g, "ＧII");
	text = text.replace(/Ｇ３/g, "ＧIII");
	text = text.replace(/Ｇ1/g, "ＧI");
	text = text.replace(/Ｇ2/g, "ＧII");
	text = text.replace(/Ｇ3/g, "ＧIII");
	text = text.replace(/G１/g, "ＧI");
	text = text.replace(/G２/g, "ＧII");
	text = text.replace(/G３/g, "ＧIII");
	text = text.replace(/G1/g, "ＧI");
	text = text.replace(/G2/g, "ＧII");
	text = text.replace(/G3/g, "ＧIII");
	text = text.replace(/Ｊｐｎ1/g, "ＪｐｎI");
	text = text.replace(/Ｊｐｎ2/g, "ＪｐｎII");
	text = text.replace(/Ｊｐｎ3/g, "ＪｐｎIII");
	text = text.replace(/Ｊｐｎ１/g, "ＪｐｎI");
	text = text.replace(/Ｊｐｎ２/g, "ＪｐｎII");
	text = text.replace(/Ｊｐｎ３/g, "ＪｐｎIII");
	text = text.replace(/Jpn1/g, "ＪｐｎI");
	text = text.replace(/Jpn2/g, "ＪｐｎII");
	text = text.replace(/Jpn3/g, "ＪｐｎIII");
	text = text.replace(/Jpn１/g, "ＪｐｎI");
	text = text.replace(/Jpn２/g, "ＪｐｎII");
	text = text.replace(/Jpn３/g, "ＪｐｎIII");
	text = text.replace(/Ⅰ/g, "I");
	text = text.replace(/Ⅱ/g, "II");
	text = text.replace(/Ⅲ/g, "III");

	document.henkan.mytext.value = text;
	var html = document.henkan.mytext.value ;
	var html = html.replace(/\r\n|\r|\n/g, '<br>');
	document.getElementById('preview').innerHTML = html ;
}