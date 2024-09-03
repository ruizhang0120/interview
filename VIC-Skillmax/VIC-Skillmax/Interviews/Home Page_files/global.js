
/* Function for showing and hiding elements that use 'display:none' to hide */
function toggleDisplay(targetId)
{
    if (document.getElementById) {
        target = document.getElementById(targetId);
    	if (target.style.display == "none"){
    		target.style.display = "";
    	} else {
    		target.style.display = "none";
    	}
    }
}

// toggle visibility 
function toggleVisibility(targetId) {
    if (document.getElementById) {
        target = document.getElementById(targetId);
    	if (target.style.visibility == "hidden"){
    		target.style.visibility = "visible";
    	} else {
    		target.style.visibility = "hidden";
    	}
    }
}

function enableVisibility(targetId) {
    if (document.getElementById) {
        document.getElementById(targetId).style.visibility = "visible";
    	} 
    else if (document.all){
        document.all[targetId].style.visibility = "visible";
    	}
    }

function disableVisibility(targetId) {
    if (document.getElementById) {
        document.getElementById(targetId).style.visibility = "hidden";
    	} 
    else if (document.all){
        document.all[targetId].style.visibility = "hidden";
    	}
    }

function checkAll(theForm) { // check all the checkboxes in the list
  for (var i=0;i<theForm.elements.length;i++) {
    var e = theForm.elements[i];
		var eName = e.name;
    	if (eName != 'allbox' && 
            (e.type.indexOf("checkbox") == 0)) {
        	e.checked = theForm.allbox.checked;		
		}
	} 
}

function checkAllEnabled(theForm) { // check all the enabled checkboxes in the list
  for (var i=0;i<theForm.elements.length;i++) {
    var e = theForm.elements[i];
		var eName = e.name;
    	if (eName != 'allbox' && 
            (e.type.indexOf("checkbox") == 0) &&
            (e.disabled == false)) {
        	e.checked = theForm.allbox.checked;		
		}
	} 
}

function checkAllBatch(theForm,cName,allNo_stat) { // check all the checkboxes in the list
   var n=theForm.elements.length;
   for (var i=0;i<n;i++){
     if (theForm.elements[i].className.indexOf(cName) !=-1){
       if (allNo_stat.checked) {
         theForm.elements[i].checked = true;
       } else {
         theForm.elements[i].checked = false;
       }
     }
   }
}


/* This function is used to select a checkbox by passing
 * in the checkbox id
 */
function toggleChoice(elementId) {
    var element = document.getElementById(elementId);
    if (element.checked) {
        element.checked = false;
    } else {
        element.checked = true;
    }
}

function hideSelect()
{if (document.all){document.all.formselect.style.visibility="hidden";}}

function unhideSelect()
{if (document.all){document.all.formselect.style.visibility="visible";}}

