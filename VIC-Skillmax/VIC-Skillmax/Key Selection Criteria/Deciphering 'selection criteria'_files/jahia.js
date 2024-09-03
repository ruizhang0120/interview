//  NK      14.05.2001 	Close global engine popup when opening a new one!
//  NK      14.05.2001 	Within a same site, append each window name with the session id
//					   	to resolve session conflict between different sites  !
//  NK      22.05.2001 	If a popup is already opened ( check if its name is equal with the one to open),
//						give it the focus instead of close and reopen it.
//  NK      30.01.2002 	yO ! another subtil bug found.
//						Added closeEngineWin(), this function should be set on the "onUnload" and "onClose()" event
//						of any page from which engine popup can be launched.
//						This ensure that when the page is closed or unloaded,any engine popup that is left open is closed !!!!
//						Whitout that, more than one engine can be left open and this means -> possible engine session conflict !!!!
//


    // global popup
    myEngineWin = null;

    // OpenJahiaWindow
    function OpenJahiaWindow( url, name, width, height )
    {
        var params;
        if (screen.availHeight <= 600) {
            params = "width=" + width + ",height=" + height + ",resizable=yes,scrollbars=yes,status=no";
        } else {
            params = "width=" + width + ",height=" + height + ",resizable=yes,scrollbars=no,status=no";
        }
        var theMatrix = Math.round(Math.random() * 10000);

        var newURL = url + "&matrix=" + theMatrix;

        // Hollis : check if the popup is alread opened, if so, give it the focus
        if ( myEngineWin != null ){
            if ( myEngineWin.closed ){ // need to test it first...
                myEngineWin = null;
                myEngineWin = window.open( newURL, name, params );
            } else {
                if ( myEngineWin.name != name ){
                    myEngineWin.close();
                    myEngineWin = null;
                    myEngineWin = window.open( newURL, name, params );
                } else {
                    myEngineWin.focus();
                }
            }
        } else {
            myEngineWin = window.open( newURL, name, params );
        }

    } // end OpenJahiaWindow


    // OpenJahiaScrollableWindow
    function OpenJahiaScrollableWindow( url, name, width, height )
    {

        var params = "width=" + width + ",height=" + height + ",resizable=1,scrollbars=1,status=0";

        var theMatrix = Math.round(Math.random() * 10000);
        var newURL = url + "&matrix=" + theMatrix;

        // Check if the popup is alread opened, if so, give it the focus
        if ( myEngineWin != null ){
            if ( myEngineWin.closed ){ // need to test it first...
                myEngineWin = null;
                myEngineWin = window.open( newURL, name, params );
            } else {
                if ( myEngineWin.name != name ){
                    myEngineWin.close();
                    myEngineWin = null;
                    myEngineWin = window.open( newURL, name, params );
                } else {
                    myEngineWin.focus();
                }
            }
        } else {
            myEngineWin = window.open( newURL, name, params );
        }


    } // end OpenJahiaScrollableWindow


    // ReloadEngine
    function ReloadEngine( params )
    {
        var oldurl  = location.href;
        var pos     = oldurl.indexOf("&engine_params");
        if (pos != -1) {
            oldurl = oldurl.substring( 0, pos );
        }
        var newurl = oldurl + "&engine_params=" + params;
        location.href = newurl;

    } // end ReloadEngine

    function closeEngineWin(){
        if ( myEngineWin != null ){
            if ( myEngineWin.closed ){ // need to test it first...
                myEngineWin = null;
            } else {
                myEngineWin.close();
                myEngineWin = null;
            }
        }
    }

    // Open "Work in progress window"
    // param httpserverpath should be http://<servername>:<port>
    function openWorkInProgressWindow(httpServerPath)
    {

        var params = "width=200,height=200,resizable=0,scrollbars=0,status=0";

        var theMatrix = Math.round(Math.random() * 10000);
        var theUrl = httpServerPath;

        theUrl += "/jsp/jahia/administration/work_in_progress.html" + "?matrix=" + theMatrix;
        //var workInProgressWin = window.open( theUrl, "workInProgressWin", params );
        myEngineWin = window.open( theUrl, "workInProgressWin", params );

    } // openWorkInProgressWindow


    var oldLoc = "";


    // CloseJahiaWindow
    function CloseJahiaWindow()
    {
        var params = "";
        if (CloseJahiaWindow.arguments.length > 0) {
            params = CloseJahiaWindow.arguments[0];
        }
        var theMatrix = Math.round(Math.random() * 10000);
        var oldUrl = window.opener.location.href;
        if (oldUrl.indexOf("matrix") != -1) {
            oldUrl = oldUrl.substring( 0, oldUrl.indexOf("matrix")-1 );
        }
        var pos     = oldUrl.indexOf("&engine_params");
        if (pos != -1) {
            oldUrl = oldUrl.substring( 0, pos );
        }

        var pos2		= oldUrl.indexOf("#");
        var anchorVal	= oldUrl.substring( pos2, oldUrl.length );

        if ( pos2 != -1 ) {
            oldUrl = oldUrl.substring( 0, pos2 );

        }

        var newUrl = "";



        if (oldUrl.indexOf("?") != -1) {
            newUrl = oldUrl + "&matrix=" + theMatrix;
            if ( pos2 != -1 ){
                 newUrl = newUrl + anchorVal;
            }
        } else {
            newUrl = oldUrl + "?matrix=" + theMatrix;
            if ( pos2 != -1 ){
                 newUrl = newUrl + anchorVal;
            }
        }
        if (params != "") {
            newUrl += params;
            if ( pos2 != -1 ){
                 newUrl = newUrl + anchorVal;
            }
        }

        // alert( "Rereshing window with url :\n" + newUrl );

        if ( params.indexOf("submit") != -1 ){
            if ( window.opener != null ){
                window.opener.document.forms[0].submit();
            }
            window.close();
        } else {
            window.opener.location.href = newUrl;
            oldLoc = window.opener.location;
            WaitForRefresh();
        }

    } // end CloseJahiaWindow

    // saveAndAddNew
    function saveAndAddNew(url,refreshOpener)
    {
        var engineWin = window.opener.myEngineWin;
        window.opener.myEngineWin = null;
        window.location.href = defineMatrixParam(url);
        if ( refreshOpener == "yes" ){
            window.opener.location.href = defineMatrixParam(window.opener.location.href);
        }
        oldLoc = window.opener.location;
        while( window.opener.location != null
               && (oldLoc != window.opener.location) ){
            setTimeout( "", 1000 );
        }
        window.opener.myEngineWin = engineWin;
    }


    // applyJahiaWindow
    function applyJahiaWindow(url)
    {
        var oldEngine = window.opener.myEngineWin;
        window.opener.myEngineWin = null;
        window.location.href = defineMatrixParam(url);
        window.opener.location.href = defineMatrixParam(window.opener.location.href);
        // Skip temporary while netscape does no work.
        var browser = navigator.appName;
        if (browser.indexOf("Netscape") != -1) {
            return;
        } else {
            // FIXME : The following lines work with IE but not with netscape !!!
            window.opener.document.title = "fake";
            while (window.opener.document != null &&
                   window.opener.document.title == "fake") {
                setTimeout("", 1000);
            }
        }
        window.opener.myEngineWin = oldEngine;
    }

    // defineMatrixParam
    function defineMatrixParam(url)
    {
        var newUrl = url;
        var endUrl = "";
        var matrixPos = url.indexOf("matrix=");
        if (matrixPos != -1) {
            newUrl = url.substring(0, matrixPos);
            var i = matrixPos;
            for (; i < url.length && url.charAt(i) != "&"; i++);
            endUrl = url.substr(i);
        } else if (newUrl.indexOf("?") == -1) {
            newUrl += "?";
        } else {
            newUrl += "&";
        }

        newUrl += "matrix=" + Math.round(Math.random() * 10000) + endUrl;
        //alert(newUrl);
        return newUrl;
    }

    // closePopupWindow
    function closePopupWindow()
    {
        var params = "";
        if (closePopupWindow.arguments.length > 0) {
            params = closePopupWindow.arguments[0];
        }
        if (closePopupWindow.arguments.length > 1) {
            var refreshOpener = closePopupWindow.arguments[1];
            if ( refreshOpener == "yes" ){
                var theUrl = window.opener.location.href;
                if ( theUrl.indexOf("?") != -1 ){
                    if ( params.charAt(0) == "&" ){
                        theUrl += params;
                    } else {
                        theUrl += "&" + params;
                    }
                } else {
                    if ( params.charAt(0) == "&" ){
                        theUrl += "?" + params.substring(1,params.length);
                    } else {
                        theUrl += "?" + params;
                    }
                }
                window.opener.location.href = defineMatrixParam(theUrl);
            }
        }
        window.close();
    }

    // applyPopupWindow
    function applyPopupWindow(popupNewUrl,openerUrlParams,refreshOpener)
    {
        if ( refreshOpener == "yes" ){
            var theUrl = window.opener.location.href;
            if ( theUrl.indexOf("?") != -1 ){
                if ( openerUrlParams.charAt(0) == "&" ){
                    theUrl += openerUrlParams;
                } else {
                    theUrl += "&" + openerUrlParams;
                }
            } else {
                if ( openerUrlParams.charAt(0) == "&" ){
                    theUrl += "?" + openerUrlParams.substring(1,openerUrlParams.length);
                } else {
                    theUrl += "?" + openerUrlParams;
                }
            }
            window.opener.location.href = defineMatrixParam(theUrl);
            WaitForRefresh();
        }
        window.location.href = defineMatrixParam(popupNewUrl);
    }

    // WaitForRefresh (called by CloseJahiaWindow)
    function WaitForRefresh()
    {
        // alert( "Trying to close" );
        var newLoc = window.opener.location
        if (newLoc != oldLoc) {
            var timer = setTimeout( "WaitForRefresh()", 100 );
        } else {
            window.close();
        }
    } // end WaitForRefresh



    function MM_preloadImages() { //v3.0
      var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
        var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
        if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
    }

    function MM_swapImgRestore() { //v3.0
      var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
    }

    function MM_findObj(n, d) { //v3.0
      var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
        d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
      if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
      for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document); return x;
    }

    function MM_swapImage() { //v3.0
      var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
       if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
    }


    function setfocus(){} // This function has to be on the body tag (onLoad) but the declaration isn't on all includes.


    // Used with container list pagination
    // Set
    function changePage(whatForm,scrollingInput,val)
    {
        scrollingInput.value = val;
        whatForm.submit();
    }


