var loc = window.location.href;
if(loc.includes("m.youtube.com")){
        window.location=loc.replace("m.youtube.com", "invidio.us");
}
else if (loc.includes("youtube")){
	window.location=loc.replace("youtube.com", "invidio.us");
}
else if (loc.includes("youtu.be")){
	window.location=loc.replace("youtu.be/", "invidio.us/watch?v=");
}
else if (loc.includes("youtube-nocookie")){
	window.location=loc.replace("youtube-nocookie.com/", "invidio.us/");
}
if(loc.includes("/results?search_query")){
        window.location=loc.replace("/results?search_query", "/query?q");
}
