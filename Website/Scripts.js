function time() {
    var d = new Date;
    var hours = d.getUTCHours()-8;
    var minutes = d.getUTCMinutes();
    var ampm = "AM";

    if(minutes < 10) {
        minutes = padDigits(minutes,2);
    }


    if(hours > 12) {
        hours = hours - 12;
        ampm = "PM";
    }

    var s = hours + ":" + minutes + ampm;
    document.getElementById("Time").innerHTML = s;//.getTime();
}

function padDigits(number, digits) {
    return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
}

function showInfo() {
    document.getElementsByClassName("infoBar")[0].style.position="relative";
    document.getElementsByClassName("infoBar")[0].style.width="317px"; /* -20 from padding of logo */
    document.getElementsByClassName("infoBar")[0].style.height="80px";
    document.getElementsByClassName("infoBar")[0].style.marginTop="375px";
    //document.getElementsByClassName("infoBar")[0].style.backgroundColor="black";
    document.getElementsByClassName("infoBar")[0].style.backgroundImage="url('infobar.png')";
    document.getElementsByClassName("infoBar")[0].style.backgroundSize="317px 80px";
    document.getElementsByClassName("infoBar")[0].style.zIndex="10";
}

function removeInfo() {
    document.getElementsByClassName("infoBar")[0].style.position="";
    document.getElementsByClassName("infoBar")[0].style.width=""; /* -20 from padding of logo */
    document.getElementsByClassName("infoBar")[0].style.height="";
    document.getElementsByClassName("infoBar")[0].style.marginTop="";
    document.getElementsByClassName("infoBar")[0].style.backgroundColor="";
}
