s1='一';
function CheckCode() {
	alert("aaaa");
	var exstr='<span style="color:red">';
	var et='</span>';
	
	if (document.getElementById) {
		src=document.getElementById('writing');
		dst=document.getElementById('preview');
		work='';
		for (lp=0;lp<src.value.length;lp++) {
			ucode=src.value.charAt(lp);
			uncode=src.value.charCodeAt(lp);
			if ((uncode<12288) && (uncode>29081))) {
				work+=ucode;
			} else if (s1.indexOf(ucode)!=-1) {
				work+=ucode;
			} else {
				work+=exstr+ucode+et;
			}
		}
		dst.innerHTML=work;
	}
}
