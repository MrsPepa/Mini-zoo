var img = document.getElementsByClassName("animal");


var select = document.getElementById("select");
select.onchange = function(){
	if(select.value == "original"){
		for (var i = img.length - 1; i >= 0; i++){
			img[i].classList.remove("blanco-negro");
			img[i].classList.remove("invertir-colores");
			img[i].classList.remove("sepia");
		}
	}
}