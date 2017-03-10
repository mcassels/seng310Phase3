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

function clearAll() {
	removeInfo();
	removeMoreInfo();
}

function showMoreInfo() {

	document.getElementsByClassName("moreInfo")[0].style.position="relative";
	document.getElementsByClassName("moreInfo")[0].style.width="317px"; /* -20 from padding of logo */
	document.getElementsByClassName("moreInfo")[0].style.height="408px";
	document.getElementsByClassName("moreInfo")[0].style.marginTop="0px";
	//document.getElementsByClassName("infoBar")[0].style.backgroundColor="black";
	document.getElementsByClassName("moreInfo")[0].style.backgroundImage="url('images/moreInfo.png')";
	document.getElementsByClassName("moreInfo")[0].style.backgroundSize="317px 408px";
	document.getElementsByClassName("moreInfo")[0].style.zIndex="1";
}
function showInfo() {

    document.getElementsByClassName("infoBar")[0].style.position="relative";
    document.getElementsByClassName("infoBar")[0].style.width="317px"; /* -20 from padding of logo */
    document.getElementsByClassName("infoBar")[0].style.height="85px";
    document.getElementsByClassName("infoBar")[0].style.marginTop="327px";
    //document.getElementsByClassName("infoBar")[0].style.backgroundColor="black";
    document.getElementsByClassName("infoBar")[0].style.backgroundImage="url('images/infobar.jpg')";
    document.getElementsByClassName("infoBar")[0].style.backgroundSize="317px 80px";
    document.getElementsByClassName("infoBar")[0].style.zIndex="4";
}

function removeInfo() {
    document.getElementsByClassName("infoBar")[0].style.position="";
    document.getElementsByClassName("infoBar")[0].style.width=""; /* -20 from padding of logo */
    document.getElementsByClassName("infoBar")[0].style.height="";
    document.getElementsByClassName("infoBar")[0].style.marginTop="";
    document.getElementsByClassName("infoBar")[0].style.backgroundColor="";
}

function removeMoreInfo() {
    document.getElementsByClassName("moreInfo")[0].style.position="";
    document.getElementsByClassName("moreInfo")[0].style.width=""; /* -20 from padding of logo */
    document.getElementsByClassName("moreInfo")[0].style.height="";
    document.getElementsByClassName("moreInfo")[0].style.marginTop="";
    document.getElementsByClassName("moreInfo")[0].style.backgroundColor="";
}




function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
