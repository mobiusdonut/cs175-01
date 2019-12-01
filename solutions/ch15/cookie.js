"use strict";
var getCookieByName = function( name ) {
  var cookies = document.cookie;
  var start = cookies.indexOf(name + "=");
  if (start === -1) {
    return "";
  }
  else {
    start = start + (name.length + 1);
    var end = cookies.indexOf(";", start);
    if (end === -1) {
      end = cookies.length;
    }
    var cookieValue = cookies.substring(start, end);
    return decodeURIComponent(cookieValue);
  }
};

var setCookie = function( name, value, days ) {
  var cookie = name + "=" + encodeURIComponent(value);
  if (days !== undefined) {
    cookie += "; max-age=" + days * 24 * 60 * 60;
  }
  cookie += "; path=/";
  document.cookie = cookie;
};

var deleteCookie = function( name ) {
  document.cookie = name + "=''; max-age=0; path=/";
};
