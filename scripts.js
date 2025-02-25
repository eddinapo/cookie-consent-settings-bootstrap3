$(document).ready(function() {
    if (!getCookie("cookieConsent")) {
        $("#cookieConsent").modal('show');
    }
});

function saveCookieSettings() {
    var analyticsCookies = $("#analyticsCookies").is(":checked");
    var marketingCookies = $("#marketingCookies").is(":checked");

    setCookie("analyticsCookies", analyticsCookies, 365);
    setCookie("marketingCookies", marketingCookies, 365);
    setCookie("cookieConsent", true, 365);

    $("#cookieConsent").modal('hide');
}


function rejectCookies() {
    setCookie("analyticsCookies", false, 365);
    setCookie("marketingCookies", false, 365);
    setCookie("cookieConsent", true, 365);

    $("#cookieConsent").modal('hide');
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
