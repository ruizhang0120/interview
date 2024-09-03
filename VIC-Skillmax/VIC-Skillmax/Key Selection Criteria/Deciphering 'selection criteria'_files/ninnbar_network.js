document.writeln('<link rel="stylesheet" type="text/css" href="http://central.news.com.au/ninnbar/ninnbar_network.css">');
document.writeln('<div id="ninnbar">\
<div id="nnFixed">\
<div id="nnNews"><a href="http://redirect.news.com.au/servlet/jsp/Redirect.jsp?redirect=ni_news">NEWS.com.au</a></div>\
<div id="nnFox"><a href="http://redirect.news.com.au/servlet/jsp/Redirect.jsp?redirect=foxsports">FOX SPORTS</a></div>\
<div id="nnClassifieds"><a href="http://redirect.news.com.au/servlet/jsp/Redirect.jsp?redirect=ni_class">CLASSIFIEDS</a></div>\
<div id="nnNewspapers"><a href="http://redirect.news.com.au/servlet/jsp/Redirect.jsp?redirect=ni_newspapers">NEWSPAPERS</a></div>\
<div id="nnMobile"><a href="http://mobile.news.com.au/">MOBILE</a></div>\
<div id="nnSearch" style="margin: 0; width: 190px;">\
<div id="nnSearchText">Search the web</div>\
<form action="http://searchresults.news.com.au/servlet/Search"  name="searchheader" method="post" class="searchForm">\
<div id="nnSearchInput"><input type="text" name="queryterm" value="" class="searchText"></div>\
<div id="nnSearchGo"><input type="submit" value="Go" class="searchGo" onmouseover=this.style.background="#ffffff" onmouseout=this.style.background="#F1F1F1"></div>\
<input type="hidden" name="site" value="ninews">\
</form>\
</div>\
</div>\
</div>');

// network ninnbar that expands 100% width
// height set but will expand full width with search box floating right...
// inline styles on "nnSearchText" so I don't have to change common style sheet.
