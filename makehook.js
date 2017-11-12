var loc = window.location.href;
if (loc.includes("youtube")&&loc.includes("watch")){
	window.location=loc.replace("youtube", "hooktube");
}
else if (loc.includes("youtu.be")){
		window.location=loc.replace("youtu.be/", "hooktube.com/watch?v=");
}
