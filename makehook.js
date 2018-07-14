var loc = window.location.href;
if (loc.includes("youtube")){
	window.location=loc.replace("youtube", "hooktube");
}
else if (loc.includes("youtu.be")){
	window.location=loc.replace("youtu.be/", "hooktube.com/watch?v=");
}
else if (loc.includes("youtube-nocookie")){
	window.location=loc.replace("youtube-nocookie.com/", "hooktube.com/");
}
