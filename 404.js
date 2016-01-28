function redirect(){
  links = ["http://thebest404pageever.com/swf/Carlton.swf", "http://thebest404pageever.com/swf/Super_Spice_Bros_64.swf", "http://thebest404pageever.com/swf/Spinnarkura.swf", "http://thebest404pageever.com/swf/TERRORISTS_WIN_AGAIN.swf", "http://thebest404pageever.com/swf/scientific_fus_ro_dah.swf", "http://thebest404pageever.com/swf/TrollingSaruman.swf", "http://thebest404pageever.com/swf/negru.swf", "http://thebest404pageever.com/swf/bupbup.swf", "http://thebest404pageever.com/swf/GOD_DAMN_ITS_GOOD_TO_BE_FREE.swf", "http://thebest404pageever.com/swf/WTF_Girl_Lamborghini.swf", "http://thebest404pageever.com/swf/shuffling.swf", "http://thebest404pageever.com/swf/miyamoto.swf", "http://thebest404pageever.com/swf/Tower_of_Gayyyyyyyy.swf", "http://thebest404pageever.com/swf/Roll_Flying_around_the_World.swf", "http://thebest404pageever.com/swf/Pi.swf", "http://thebest404pageever.com/swf/tf_toast.swf", "http://thebest404pageever.com/swf/ALL_NIGHT_LONG.swf", "http://thebest404pageever.com/swf/house_boombox.swf", "http://thebest404pageever.com/swf/train_trollin.swf", "http://thebest404pageever.com/swf/TheNightIDied.swf", "http://thebest404pageever.com/swf/flying_guns.swf", "http://thebest404pageever.com/swf/Retro_Sax_Guy.swf"];
  window.location.href = links[getRandomInt(0, links.length)];
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
