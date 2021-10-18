/*-----------------------------------------------------------------------
★概要★
１）textareaに入力された値の中の全角の英数字記号をnikkei.comと同じロジックで半角に変換
２）数字に挟まれた記号もnikkei.comと同じロジックで半角に
３）textareaに変換結果を返す
４）該当箇所を背景青にして確認用画面を作る
-----------------------------------------------------------------------*/

function konv_en_to_han(){
	alert("【注意】全角の英数字記号をnikkei.comと同じロジックで半角に変換します。\n　・英字:[ａ-ｚＡ-Ｚ] は半角\n　・数字[０-９] は半角\n　・この記号は半角（．，：；’“”／＝＆＠％＿）\n\n以下の記号は 前後が半角であれば 半角\n　・全角スペース\n　・HORIZONTAL BAR:―\n　・長音記号: ー\n　・全角ハイフンマイナス: －\n　・疑問符: ？\n　・感嘆符: ！");

	han = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\.\,\:\;\'“\"\/\=\&\@\%\_";
	zen = "０１２３４５６７８９ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ．，：；’“”／＝＆＠％＿";
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
//全角スペースは 前後が半角であれば 半角
	str = str.replace(/([0-9A-Za-z.,:;'“"/=&@%_])　([0-9A-Za-z.,:;'“"/=&@%_])/g, "$1"+" "+"$2");
//HORIZONTAL BAR:―は 前後が半角であれば 半角
	str = str.replace(/([0-9A-Za-z.,:;'“"/=&@%_])―([0-9A-Za-z.,:;'“"/=&@%_])/g, "$1"+"-"+"$2");

//長音記号: ーは 前後が半角であれば 半角
	str = str.replace(/([0-9A-Za-z.,:;'“"/=&@%_])ー([0-9A-Za-z.,:;'“"/=&@%_])/g, "$1"+"-"+"$2");
//全角ハイフンマイナス: －は前後が半角であれば 半角
	str = str.replace(/([0-9A-Za-z.,:;'“"/=&@%_])－([0-9A-Za-z.,:;'“"/=&@%_])/g, "$1"+"-"+"$2");
//疑問符: ？は 前後が半角であれば 半角
	str = str.replace(/([0-9A-Za-z.,:;'“"/=&@%_])？([0-9A-Za-z.,:;'“"/=&@%_])/g, "$1"+"?"+"$2");
//感嘆符: ！は 前後が半角であれば 半角
	str = str.replace(/([0-9A-Za-z.,:;'“"/=&@%_])！([0-9A-Za-z.,:;'“"/=&@%_])/g, "$1"+"!"+"$2");


	str_chk = str_chk.replace(/([0-9A-Za-z.,:;'“"/=&@%_]+)/g, "<span class=\"bkblue\">"+"$1"+"</span>");
	var text = new String;
	text = '<div style="font-weight:bold;">■洋数字を全て半角に変換します。変換したものは<span style="color:blue;">青</span>で表示します。</div>';
	document.getElementById('kom').innerHTML = text;

	document.henkan.mytext.value = str;
	str_chk = str_chk.replace(/\r\n|\r|\n/g, '<br>');
	document.getElementById('preview').innerHTML = str_chk;
	document.getElementById('kome').innerHTML = "↓ココをコピーして使って下さい" ;
}