
setInterval(function(){mover();},150);

function mover(){
	let x=Number(document.getElementById("c").getAttribute("cx"));
	let y=Number(document.getElementById("c").getAttribute("cy"));
	let r=Number(document.getElementById("c").getAttribute("r"));
	
	if (x<window.innerWidth && x>0){
		x=x+(Math.floor(9*Math.random())-4);
		y=y+(Math.floor(9*Math.random())-4);
		document.getElementById("c").setAttribute("cx",x);
		document.getElementById("c").setAttribute("cy",y);
	}
}

