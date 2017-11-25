function keyTrap(e)	
{		 
	
  /** Edward Lim 2012-01-30 Javascript to block page scrolling backward and forward **.
  //keydown(event);
  /** End **/
	  
  // Netscape uses e, IE window.event		
  var event = (e)?e:window.event;		
  var keyPressed = (e)?e.which:window.event.keyCode;			
  var ctrlPressed = (e)?(e.ctrlKey):window.event.ctrlKey;		
  var altPressed = (e)?(e.altKey):window.event.altKey;
  
  if (!event.srcElement) event.srcElement = event.target;  
  		
  if(keyPressed==8) //disable backspace button to back history
  {
  	if (event.srcElement.tagName.toUpperCase()=='INPUT' &&         
  	    event.srcElement.type.toUpperCase()!='TEXTAREA' && 
  	    event.srcElement.type.toUpperCase()!='TEXT' &&
   	    event.srcElement.type.toUpperCase()!='PASSWORD')
  	{
      window.event.keyCode = 0;	
      return false;			      
  	}
    if (!(event.srcElement.tagName.toUpperCase()== 'INPUT' && !event.srcElement.readOnly) && 
        event.srcElement.tagName.toUpperCase() !='TEXTAREA' && 
        event.srcElement.tagName.toUpperCase() !='TEXT')
    {
      window.event.keyCode = 0;	
      return false;			      
    }
  }
  
  //disable Alt+'<-' and Alt+'->' to back/forward history
  if (altPressed)
  {
  	if(keyPressed && (keyPressed == 37 || keyPressed == 39))
  	{
  		//window.event.keyCode = 0;
     	return false;			
   	}
  }
  
  if (ctrlPressed)		
  {			
    switch (keyPressed)			
    {				
      case 76:	// CTRL-L.					      
      case 72:	// CTRL-H.					
      case 66:	// CTRL-B.					
      case 73:	// CTRL-I.					      
      case 79:	// CTRL-O.					
      case 87:	// CTRL-W.					
      case 82:	// CTRL-R.					
      case 80:	// CTRL-P.					
      case 78:	// CTRL-N.					
      case 112: // CTRL-F1
      case 113: // CTRL-F2
      case 114: // CTRL-F3
      case 115: // CTRL-F4     
      case 116: // CTRL-F5     
      case 117: // CTRL-F6     
      case 118: // CTRL-F7     
      case 119: // CTRL-F8     
      case 120: // CTRL-F9     
      case 121: // CTRL-F10     
      case 122: // CTRL-F11     
      case 123: // CTRL-F12                                                
        window.event.keyCode = 0;	
        return false;			
    }		
  }
  else
  {
    if(keyPressed>=112 && keyPressed<=123)
    {
      window.event.keyCode = 0;	
      return false;			
    }    
  }
  
}	

if(document.layers)	
{				
  //NS4+		document.captureEvents(Event.ONKEYDOWN);	
}	
document.onkeydown=keyTrap;

//showtips
if (!document.layers&&!document.all){
	event="test"
}	

/** Edward Lim 2012-01-30 Javascript to block page scrolling backward and forward **.
/*
if (window.addEventListener){
	window.addEventListener('DOMMouseScroll', wheel, false);
	window.addEventListener('keydown', keydown, false);
	window.addEventListener('keyup', keyup, false);
}

window.onmousewheel = document.onmousewheel = wheel;
window.onkeydown = document.onkeydown = keyTrap;
window.onkeyup = document.onkeyup = keyup;

var block_shift = false;

function wheel(event){
	if (block_shift){	
		if (event && event.preventDefault) {
			event.preventDefault();	
			event.returnValue = false;	
		}
		else  {
			window.event.returnValue = false;	
			window.event.cancelBubble=true; 
		}
	}
}

function keydown(event){
	var keyPressed = (event)?event.keyCode:window.event.keyCode;
	if(keyPressed == 16)	
		block_shift = true;
}

function keyup(event){
	var keyPressed = (event)?event.keyCode:window.event.keyCode;
	if(keyPressed == 16)	
		block_shift = false;
}
*/
/** End **/