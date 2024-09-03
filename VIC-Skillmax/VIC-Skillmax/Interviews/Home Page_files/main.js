//
// $Source: /home/cvs/TG/source/web/styles/white/javascripts/main.js,v $
// $Author: grant $
// $Date: 2004/08/12 00:25:16 $
// $Revision: 1.2 $
//
// Copyright (C) 2003 Hubbub Pty Ltd ABN 91 064 575 426.
// All rights reserved. Redistribution and use in source and binary forms,
// with or without modification, are prohibited without the express written
// consent of Hubbub Pty Ltd.
//
// See Terms of Use at: www.hubbub.com.au/sourceCodeCopyrightMessage.html
//

if (document.all)
// document.styleSheets["buttonstyle"].addRule(".dhtmlbutton","background-color:buttonface;border: 1px solid buttonface;background-color:buttonface;padding:1px;cursor:hand;")

function upeffect(cur){
	if (document.all)
		cur.className='overbutton'
}

function downeffect(cur){
	if (document.all)
		cur.className='downbutton'
}


function normaleffect(cur){
	if (document.all)
		cur.className='dhtmlbutton'
}