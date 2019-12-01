
var ua= navigator.userAgent.toString();
if(ua.indexOf("Trident") > -1) 
{ var chki = true}

else {
var chkf = ua.includes("Firefox");
var chke = ua.includes("Edge");
var chki = ua.includes("Trident");
var chkc = ua.includes("Chrome");
}
if (chke==true)
    { 
        document.write("<link type=\"text/css\" rel=\"stylesheet\" href=\"style.css\">"); 
    } 
    else if (chkf == true)
    { 
        document.write("<link type=\"text/css\" rel=\"stylesheet\" href=\"stylem.css\">"); 
    } 
    else if (chki == true)
    { 
        document.write("<link type=\"text/css\" rel=\"stylesheet\" href=\"stylei.css\">"); 
    } 
    else if (chkc == true)
    { 
        document.write("<link type=\"text/css\" rel=\"stylesheet\" href=\"stylec.css\">"); 
    } 
    else 
    
    { 
        document.write("<link type=\"text/css\" rel=\"stylesheet\" href=\"style.css\">"); 
    } 
