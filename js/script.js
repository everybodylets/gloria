function screen17() {
	//alert(document.viewport.getWidth()+"px");
	if(document.viewport.getWidth()>1152)
		$('styles1024').disabled=true;
	else
	{
		$('styles1024').disabled=false;
	}
}
Event.observe(window, 'resize', screen17);
Event.observe(window, 'load', screen17);

function hs(id)
{
	var items=$$('.compaign dd');
	var letter=$('letter'+id);
	if(letter.style.display!='block')
	{
		for(i=0; i<items.length; i++)
			items[i].style.display='none';
		letter.style.display='block';
	}
	else
		letter.style.display='none';
}