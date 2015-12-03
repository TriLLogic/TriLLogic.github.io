function newCookie(){
    user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
           setCookie("username", user, 30);
           alert("Name reset. Refresh the page to view.");
       }
}

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
        var a = 1;
    } else if (user=="Satan"){
        setCookie("username", "", 30);
        window.location="http://www.churchofsatan.com/";
    } 
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
           setCookie("username", user, 30);
       }
    }
}
var n = getCookie("username")
if (n != ""){
    document.getElementById('results').innerHTML = "Welcome, " + n;
} else {
    document.getElementById('results').innerHTML = "Welcome to our site!";
}
//document.getElementById("output").innerHTML=name;
