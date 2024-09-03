function Browser() {

  var ua, s, i;

  this.isIE    = false;  // Internet Explorer
  this.isNS    = false;  // Netscape
  this.version = null;

  ua = navigator.userAgent;

  s = "MSIE";
  if ((i = ua.indexOf(s)) >= 0) {
    this.isIE = true;
    this.version = parseFloat(ua.substr(i + s.length));
    return;
  }

  s = "Netscape6/";
  if ((i = ua.indexOf(s)) >= 0) {
    this.isNS = true;
    this.version = parseFloat(ua.substr(i + s.length));
    return;
  }

  // Treat any other "Gecko" browser as NS 6.1.

  s = "Gecko";
  if ((i = ua.indexOf(s)) >= 0) {
    this.isNS = true;
    this.version = 6.1;
    return;
  }
}

var browser = new Browser();

function test(e) {
    window.alert(getX(e) + ',' + getY(e));
}
function getPageOffsetLeft(el) {

  var x;

  // Return the x coordinate of an element relative to the page.

  x = el.offsetLeft;
  if (el.offsetParent != null)
    x += getPageOffsetLeft(el.offsetParent);

  return x;
}

function getPageOffsetTop(el) {

  var y;

  // Return the x coordinate of an element relative to the page.

  y = el.offsetTop;
  if (el.offsetParent != null)
    y += getPageOffsetTop(el.offsetParent);

  return y;
}
function jahiaGetObject(idf) {
    if (document.getElementById) {
        return document.getElementById(idf);
    } else if (document.all) {
        return document.all[idf];
    } else {
        return null;
    }
}

function getX(id) {
    var e = document.getElementById ? document.getElementById(id) : document.all ? document.all[id] : document.layers[id];
    //var e = jahiaGetObject(id);
    x = getPageOffsetLeft(e);
    // adjust position for IE
    if (browser.isIE) {
        x += e.offsetParent.clientLeft;
    }
    return x;
}
function getY(id) {
    var e = document.getElementById ? document.getElementById(id) : document.all ? document.all[id] : document.layers[id];
    //var e = jahiaGetObject(id);
    y = getPageOffsetTop(e) + e.offsetHeight;
    // adjust position for IE
    if (browser.isIE) {
        y += e.offsetParent.clientTop;
    }
    y += 4;
    return y;
}