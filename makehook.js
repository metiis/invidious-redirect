var loc = window.location.href;
var newloc = loc;
if(newloc.includes("m.youtube.com")){
        newloc=newloc.replace("m.youtube.com", "yewtu.be");
}
else if (newloc.includes("youtube")){
	newloc=newloc.replace("youtube.com", "yewtu.be");
}
else if (newloc.includes("youtu.be")){
	newloc=newloc.replace("youtu.be/", "yewtu.be/watch?v=");
}
else if (newloc.includes("youtube-nocookie")){
	newloc=newloc.replace("youtube-nocookie.com/", "yewtu.be/");
}
if(newloc.includes("/results?q")){
        newloc=newloc.replace("/results?q", "/search?q");
}
if(newloc.includes("/results?search_query")){
        newloc=newloc.replace("/results?search_query", "/search?q");
}
window.location=newloc;

