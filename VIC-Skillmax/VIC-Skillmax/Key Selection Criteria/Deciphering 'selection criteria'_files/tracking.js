function getPageName(){
	var stringURL="";
	var questPos;

	var loc=String(location.href).split("?")[0];
	var subStr=loc.substring((loc.lastIndexOf("/")), 500);
	var dotPos=subStr.indexOf(".");
	var questPos=subStr.indexOf("?");

	if(dotPos!=-1) {
		stringURL=loc.substring((loc.lastIndexOf("/")+1), dotPos + loc.length - subStr.length);
	} else 	if(questPos!=-1) {
		stringURL=loc.substring((loc.lastIndexOf("/")+1), questPos + loc.length - subStr.length);
	}else {
		stringURL=subStr.substring(1, subStr.length);
	}

	return stringURL;
}

var pageName = getPageName();
var thisUrl = location.href.toLowerCase();
if(pageName == 'post-a-job') {
	// Cache-busting and pageid values
	random = Math.round(Math.random() * 100000000);
	if (!pageNum) var pageNum = Math.round(Math.random() * 100000000);

	document.write('<SCR');
	document.write('IPT TYPE="TEXT/JAVASCRIPT" SRC="http://mercury.tiser.com.au/jserver/acc_random=' + random + '/SITE=CONE/AREA=CLASS.JOBS.ADVERTISERS.INDEX/AAMSZ=468X60/MAAMZ=LEADERBOARD/pageid=' + pageNum + '">');
	document.write('</SCR');
	document.write('IPT>');

} else if (thisUrl.indexOf('pricing-and-packages') != -1) {
	// Cache-busting and pageid values
	random = Math.round(Math.random() * 100000000);
	if (!pageNum) var pageNum = Math.round(Math.random() * 100000000);

	document.write('<SCR');
	document.write('IPT TYPE="TEXT/JAVASCRIPT" SRC="http://mercury.tiser.com.au/jserver/acc_random=' + random + '/SITE=CONE/AREA=CLASS.JOBS.ADVERTISERS.PRICING/AAMSZ=468X60/MAAMZ=LEADERBOARD/pageid=' + pageNum + '">');
	document.write('</SCR');
	document.write('IPT>');
} else if (thisUrl.indexOf('optimise-your-ad') != -1) {
	// Cache-busting and pageid values
	random = Math.round(Math.random() * 100000000);
	if (!pageNum) var pageNum = Math.round(Math.random() * 100000000);

	document.write('<SCR');
	document.write('IPT TYPE="TEXT/JAVASCRIPT" SRC="http://mercury.tiser.com.au/jserver/acc_random=' + random + '/SITE=CONE/AREA=CLASS.JOBS.ADVERTISERS.OPTIMISE/AAMSZ=468X60/MAAMZ=LEADERBOARD/pageid=' + pageNum + '">');
	document.write('</SCR');
	document.write('IPT>');
} else if (thisUrl.indexOf('choose-careerone') != -1) {	
	// Cache-busting and pageid values
	random = Math.round(Math.random() * 100000000);
	if (!pageNum) var pageNum = Math.round(Math.random() * 100000000);

	document.write('<SCR');
	document.write('IPT TYPE="TEXT/JAVASCRIPT" SRC="http://mercury.tiser.com.au/jserver/acc_random=' + random + '/SITE=CONE/AREA=CLASS.JOBS.ADVERTISERS.WHY/AAMSZ=468X60/MAAMZ=LEADERBOARD/pageid=' + pageNum + '">');
	document.write('</SCR');
	document.write('IPT>');
} else if (thisUrl.indexOf('/pid/271') != -1) {
	// resume search
	// Cache-busting and pageid values
	random = Math.round(Math.random() * 100000000);
	if (!pageNum) var pageNum = Math.round(Math.random() * 100000000);

	document.write('<SCR');
	document.write('IPT TYPE="TEXT/JAVASCRIPT" SRC="http://mercury.tiser.com.au/jserver/acc_random=' + random + '/SITE=CONE/AREA=CLASS.JOBS.ADVERTISERS.RESUME/AAMSZ=468X60/MAAMZ=LEADERBOARD/pageid=' + pageNum + '">');
	document.write('</SCR');
	document.write('IPT>');
} else if (thisUrl.indexOf('/pid/1874') != -1) {
	// remaking the net	
	// Cache-busting and pageid values
	random = Math.round(Math.random() * 100000000);
	if (!pageNum) var pageNum = Math.round(Math.random() * 100000000);

	document.write('<SCR');
	document.write('IPT TYPE="TEXT/JAVASCRIPT" SRC="http://mercury.tiser.com.au/jserver/acc_random=' + random + '/SITE=CONE/AREA=CLASS.JOBS.ADVERTISERS.REMAKING/AAMSZ=468X60/MAAMZ=LEADERBOARD/pageid=' + pageNum + '">');
	document.write('</SCR');
	document.write('IPT>');
} else if (thisUrl.indexOf('/pid/1847') != -1) {
	// hiring expectations
	// Cache-busting and pageid values
	random = Math.round(Math.random() * 100000000);
	if (!pageNum) var pageNum = Math.round(Math.random() * 100000000);

	document.write('<SCR');
	document.write('IPT TYPE="TEXT/JAVASCRIPT" SRC="http://mercury.tiser.com.au/jserver/acc_random=' + random + '/SITE=CONE/AREA=CLASS.JOBS.ADVERTISERS.HIRING/AAMSZ=468X60/MAAMZ=LEADERBOARD/pageid=' + pageNum + '">');
	document.write('</SCR');
	document.write('IPT>');
} else if (thisUrl.indexOf('/pid/1844') != -1) {
	random = Math.round(Math.random() * 100000000);
	if (!pageNum) var pageNum = Math.round(Math.random() * 100000000);

	document.write('<SCR');
	document.write('IPT TYPE="TEXT/JAVASCRIPT" SRC="http://mercury.tiser.com.au/jserver/acc_random=' + random + '/SITE=CONE/AREA=CLASS.JOBS.ADVERTISERS.REMAKING/AAMSZ=468X60/MAAMZ=LEADERBOARD/pageid=' + pageNum + '">');
	document.write('</SCR');
	document.write('IPT>');
} else {
	// default for all others
	// Cache-busting and pageid values
	random = Math.round(Math.random() * 100000000);
	if (!pageNum) var pageNum = Math.round(Math.random() * 100000000);

	document.write('<SCR');
	document.write('IPT TYPE="TEXT/JAVASCRIPT" SRC="http://mercury.tiser.com.au/jserver/acc_random=' + random + '/SITE=CONE/AREA=CLASS.JOBS.SEARCH/AAMSZ=468X60/pageid=' + pageNum + '">');
	document.write('</SCR');
	document.write('IPT>');
	
}
