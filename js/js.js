/**********************************/
/*                                */
/*        TOTEM company           */
/*   http://www.totem.kiev.ua     */
/*             2007               */
/*                                */
/**********************************/

function BannUp(){
objects = document.getElementsByTagName("object");
for (var i = 0; i < objects.length; i++)
{
    objects[i].outerHTML = objects[i].outerHTML;
}
}
function getElementsByClassName(className, tag, elm){
	var testClass = new RegExp("(^|\\s)" + className + "(\\s|$)");
	var tag = tag || "*";
	var elm = elm || document;
	var elements = (tag == "*" && elm.all)? elm.all : elm.getElementsByTagName(tag);
	var returnElements = [];
	var current;
	var length = elements.length;
	for(var i=0; i<length; i++){
		current = elements[i];
		if(testClass.test(current.className)){
			returnElements.push(current);
		}
	}
	return returnElements;
}
function ChangeIcons(tag){
	for (var i = 0; i < document.getElementsByTagName(tag).length; i++){
	document.getElementsByTagName(tag)[i].id=''
	}
}
function CloseUls(el_class, el_tag, p_tag){
for (var i = 0; i < getElementsByClassName(el_class, el_tag).length; i++){
	getElementsByClassName(el_class, el_tag)[i].style.display='none'
	}
	ChangeIcons(p_tag);
}
function SwitchUl(elem, el_class, el_tag, p_tag, p_class){
	if ($(elem).style.display=='none'){
		CloseUls(el_class, el_tag, p_tag);
		var h6;
		var t = $(elem);
		while (t = t.previousSibling) {
		if (t.tagName == p_tag) { h6 = t; break; }
		}
		h6.id = p_class;
		Effect.BlindDown(elem);
	}
	else { Effect.BlindUp(elem); ChangeIcons(p_tag); }
}
function FlashChange(){
	//var browser_name = navigator.appName;
	//var browser_version = parseFloat(navigator.appVersion);
	//alert(browser_name);
	//alert(browser_version);
	document.getElementById('m_02').style.position='relative';
	$('m_02').style.position='relative';
	$('m_02').style.zIndex='100';
	$('r_colon').position='relative';
}