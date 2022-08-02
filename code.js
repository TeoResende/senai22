setTimeout(ligacao,500)

function ligacao(){
	
var reset = document.getElementById("reset")
var jx = document.getElementById("jx")
var jo = document.getElementById("jo")



reset.addEventListener("click",function(){
	alert("Reiniciando o jogo!") 
	document.location.reload(true)
})
}

