function exchange2() {
	var csv = document.getElementById('from').value;
	if (csv == '') {
		confirmTable();
		return;
	}
	//�z��ɕϊ�
	var dat = csv2array(csv, separator);


	result = csv;
  var to = document.getElementById('to');
	to.value = result;

}
