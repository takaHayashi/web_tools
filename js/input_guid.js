function ShowFormGuide(obj,GuideSentence) {
  if( obj.value == '' ) {
    obj.value = GuideSentence;
    obj.style.color = '#000';
  }
}
function HideFormGuide(obj,GuideSentence) {
  if( obj.value == GuideSentence ) {
    obj.value='';
    obj.style.color = '#000';
  }
}