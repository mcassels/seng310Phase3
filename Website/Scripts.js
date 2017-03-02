function time() {
    var d = new Date;
    var hours = d.getUTCHours() - 8;
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
