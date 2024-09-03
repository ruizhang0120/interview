
var refr=escape(document.referrer); /* get the http referer and encode it */
var dom=location.hostname; /* get the host domain */
var stURL="http://pm14.com/n/8831/23791/www.careerone.com.au/d6a02d990025030000000006000000000355c2020000000000000000000000000000000100/i/c?0&1pixgif&referer="
+ refr;
if ( (refr && refr.search(dom) == -1) && (location.href.toUpperCase().indexOf("247SEO=N") == -1) ) /* if the referrer is external preload the image request and does not contain 247SEO argument = "N" */
{
imageTR = new Image();
imageTR.src = stURL;
}
