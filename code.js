setTimeout(ligacao,500)

function ligacao(){
//Ligação JS / HTML	
var reset = document.getElementById("reset")
var jx = document.getElementById("jx")
var jo = document.getElementById("jo")

reset.addEventListener("click",function(){
	alert("Reiniciando o jogo! "+jx.value+" VS "+jo.value) 
	document.location.reload(true)
})
}

