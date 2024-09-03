// start right hand nav functions 
function doOnLoad() {
    docLoaded = true;
//    randomPaper();
//    rotateWeather(0);
}

// masthead front page select box

var paperLink;
var theSelect;

function loadPaperImage(theSelect) {
	pictmp = new Image(126,178);
	pictmp.src = metaPaper[theSelect.value][2];
	document.images["paperPlace"].src = eval("pictmp" + ".src");
	paperLink=metaPaper[theSelect.value][0];
}

function papersLink(dest) {
	ptmp = document.papersDrop.papersDropSelect.options[document.papersDrop.papersDropSelect.selectedIndex];
	if (dest=="site") {
	window.location=paperLink;
	}
	if (dest=="delivery") {
	window.location=metaPaper[ptmp.value][1];
	}
}

function randomPaper() {
	var randomPaper=Math.floor(Math.random()*metaPaper.length) // no. of papers
	document.papersDrop.papersDropSelect.selectedIndex=randomPaper;
	ptmp = document.papersDrop.papersDropSelect.options[document.papersDrop.papersDropSelect.selectedIndex];
	paperLink = ptmp.value;
	loadPaperImage(ptmp);
}

// etrade stock price form code

function displayProductSearch() {
	newwindow = window.open("https://www.etradeaustralia.com.au/Application/ProductSearch/ProductSearch.asp", "ProductSearch", "dependent=no,height=350px,width=320px,scrollbars,resizable=yes,alwaysRaised=yes");
}
	
function doQuote() {
	var strURL;
	var strSymbol = escape(window.document.frmStockQuote.Code.value);
	var strExchange = window.document.frmStockQuote.Exchange[document.frmStockQuote.Exchange.selectedIndex].value;
	var strType = window.document.frmStockQuote.Type[document.frmStockQuote.Type.selectedIndex].value;
	strURL = "https://www.etradeaustralia.com.au/Products/StockCentre/StockCentre.asp?DisplayAs=Quotes&Code=" + strSymbol + "&Exchange=" + strExchange + "&Type=" + strType;
	document.frmStockQuote.URL.value = strURL;
	return true;
}


// weather 

function setWeather(theoption) {
	if (theoption.options[theoption.selectedIndex].value == "more") {
		return false;
	}
	else {
		clearTimeout(wTime);
		tt="na";
		theplace = eval("w"+theoption.options[theoption.selectedIndex].value);
		updateWeatherDiv(theplace);
	}
}

var tts=0;
var wTime;
var tt="timer";

function rotateWeather(stateNum) {
	if (navigator.appName.indexOf("Microsoft") == -1) {
		ranNumba=(wStates.length-1);
		stateNum=Math.floor(Math.random()*ranNumba)
	}	
	if (tt=="timer") {
		stateNumx = wStates[stateNum];
		stateNumxy = eval(stateNumx);
		updateWeatherDiv(stateNumxy);
	}
}

function updateWeatherDiv(tp) {
	// city 
	document.getElementById("weatherCity").firstChild.nodeValue = tp[0];
	// forecast 
	document.getElementById("weatherForecast").firstChild.nodeValue = tp[2];	
	// hi low
	document.getElementById("weatherHiLow").firstChild.nodeValue = tp[4] +" - "+ tp[3];
	// image
	document.getElementById("weatherIcon").src = tp[1];
	if ((tt=="timer")&&(navigator.appName.indexOf("Microsoft") != -1)) {
		if (tts<(wStates.length-1)) {
			tts++;
		} else {
			tts=0;
		}	
		var wTime = setTimeout("rotateWeather(tts)",3200);
	} 
}
