// copies the argument to the clipboard
function AdvancedCopy(theText){
  //create our hidden div element
  var hiddenCopy = document.createElement('div');
  //set the innerHTML of the div
  hiddenCopy.innerHTML = theText;
  //set the position to be absolute and off the screen
  hiddenCopy.style.position = 'absolute';
  hiddenCopy.style.left = '-9999px';

  //check and see if the user had a text selection range
  var currentRange;
  if(document.getSelection().rangeCount > 0)
  {
    // the user has a text selection range, store it
    currentRange = document.getSelection().getRangeAt(0);
    // remove the current selection
    window.getSelection().removeRange(currentRange);
  }
  else
  {
    //they didn't have anything selected
    currentRange = false;
  }

  //append the div to the body
  document.body.appendChild(hiddenCopy);
  //create a selection range
  var CopyRange = document.createRange();
  //set the copy range to be the hidden div
  CopyRange.selectNode(hiddenCopy);
  //add the copy range
  window.getSelection().addRange(CopyRange);

  //since not all browsers support this, use a try block
  try 
  {
    //copy the text
    document.getElementById("custom-tooltip").style.display = "inline";
    document.execCommand("copy");
    setTimeout(function () {
      document.getElementById("custom-tooltip").style.display = "none";
    }, 1500);
  }
  catch(err)
  {
    window.alert("Your Browser Doesn't support this! Error : " + err);
  }
  //remove the selection range (Chrome throws a warning if we don't.)
  window.getSelection().removeRange(CopyRange);
  //remove the hidden div
  document.body.removeChild(hiddenCopy);

  //return the old selection range
  if(currentRange)
  {
    window.getSelection().addRange(currentRange);
  }
}