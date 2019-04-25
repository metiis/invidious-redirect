browser.storage.sync.get('instance').then((res) => {
  var instance = res.instance;
  console.log("instance is " + instance);
  var loc = window.location.href;
  var newloc = loc;
  if(newloc.includes("m.youtube.com")){
    newloc=newloc.replace("m.youtube.com", instance);
  }
  else if (newloc.includes("youtube")){
  newloc=newloc.replace("youtube.com", instance);
  }
  else if (newloc.includes("youtu.be")){
  newloc=newloc.replace("youtu.be/", instance + "/watch?v=");
  }
  else if (newloc.includes("youtube-nocookie")){
  newloc=newloc.replace("youtube-nocookie.com/", instance);
  }
  if(newloc.includes("/results?q")){
    newloc=newloc.replace("/results?q", "/search?q");
  }
  if(newloc.includes("/results?search_query")){
    newloc=newloc.replace("/results?search_query", "/search?q");
  }
  window.location=newloc;
});
