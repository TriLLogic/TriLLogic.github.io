function redirect(){
  links = ["http://thebest404pageever.com/swf/Carlton.swf", "http://thebest404pageever.com/swf/Super_Spice_Bros_64.swf", "http://thebest404pageever.com/swf/Spinnarkura.swf", "http://thebest404pageever.com/swf/TERRORISTS_WIN_AGAIN.swf", "http://thebest404pageever.com/swf/scientific_fus_ro_dah.swf", "http://thebest404pageever.com/swf/TrollingSaruman.swf"];
  window.location.href = links[getRandomInt(0, links.length)];
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
