/** 
 * GoogleAnalyticsPixelCounter 
 * version 1.0
 * 
 * https://github.com/digitalinc/GoogleAnalyticsPixelCounter
*/

(function (document, encode, tid) {
	try {
		var src = (document.location.protocol +
			"//www.google-analytics.com/collect?v=1&t=pageview&cid=" + Math.random() +
			"&tid=" + tid +
			"&dl=" + encode(document.location.href) +
			"&dr=" + encode(document.referrer) +
			"&dt=" + encode(document.title) +
			"&z=0");

		(new Image()).src = src;
	} catch (e) {}
})(document, encodeURIComponent, "UA-XXXXXX-Y");