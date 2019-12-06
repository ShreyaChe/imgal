

var ua= navigator.userAgent.toString();
if(ua.indexOf("Trident") > -1) 
{ var chki = true}

else {
var chkf = ua.includes("Firefox");
var chke = ua.includes("Edge");
var chki = ua.includes("Trident");
var chkc = ua.includes("Chrome");
}

if (chkc == true | chki == true)
{document.getElementById("im1").style.width = '48.5%'
document.getElementById("im2").style.width = '25%'
document.getElementById("im3").style.width = '25%' }


var x = document.getElementById("im1").width 
var x = x + 29 ;
var c = x + 35 ;

if (chkc == true  )
{ var c = x + 33 ;}


if ( chki == true)
{   var x = x - 4 ;
    var c = x + 22 ;}

var a = " &#x1F64E;Anna   &#x1F552; 2 days ago "
var y =  "Leveraging Social Proof for Growth";
var z = "Duolingo removes language barriers by connecting people that need websites translated with students that are learning a language.Through trial and error the team at Duolingo has astered the art of data driven product development through AB testing and focus on the right metrics to optimize.driven product development through AB testing and a focus on the right metrics to optimize.";

document.getElementById("team1").style.width = x + 'px';
document.getElementById("team2").style.width = document.getElementById("im2").width + 'px';
document.getElementById("team3").style.width = document.getElementById("im3").width + 'px';

 
document.getElementById("head1").style.width = x + 'px';
document.getElementById("head2").style.width = document.getElementById("im2").width + 'px';
document.getElementById("head3").style.width = document.getElementById("im3").width + 'px';
 
document.getElementById("head1").innerHTML = y ; 
document.getElementById("head2").innerHTML = y ; 
document.getElementById("head3").innerHTML = y ; 

document.getElementById("cntnt1").style.width = c + 'px';
document.getElementById("cntnt2").style.width = document.getElementById("im2").width + 'px';
document.getElementById("cntnt3").style.width = document.getElementById("im3").width + 'px';
 
 
document.getElementById("cntnt1").innerHTML = z ; 
document.getElementById("cntnt2").innerHTML = z ; 
document.getElementById("cntnt3").innerHTML = z ; 

document.getElementById("athrtm1").style.width = x + 'px';
document.getElementById("athrtm2").style.width = document.getElementById("im2").width + 'px';
document.getElementById("athrtm3").style.width = document.getElementById("im3").width + 'px';

document.getElementById("athrtm1").innerHTML = a ; 
document.getElementById("athrtm2").innerHTML = a ; 
document.getElementById("athrtm3").innerHTML = a ; 


if (chkc == true )
{document.getElementById("tx").style.width = '70%';
document.getElementById("tx").style.marginRight = '8px';
document.getElementById("ima1").style.width = '32.5%';
document.getElementById("ima2").style.width = '32.5%';
document.getElementById("ima3").style.width = '33%' ;
document.getElementById("ima3").style.marginRight = '0%';

  }

  if (chki == true )
{  document.getElementById("tx").style.paddingRight = '5%';
    document.getElementById("tx").style.paddingLeft = '1%';
    document.getElementById("tx").style.marginRight = '8px';
    document.getElementById("tx").style.minWidth = '18%';
    document.getElementById("ima1").style.width = '14.8%';
    document.getElementById("ima1").style.marginRight = '.3%';
    document.getElementById("ima2").style.width = '15.4%';
    document.getElementById("ima2").style.marginRight = '.3%';
    document.getElementById("ima3").style.width = '15.4%';}

    if (chke == true )
    {
      document.getElementById("tx").style.width = '54%';
    }
var f = document.getElementById("ima1").width 


 
document.getElementById("teama1").style.width = f + 'px';
document.getElementById("teama2").style.width = document.getElementById("ima2").width + 'px';
document.getElementById("teama3").style.width = document.getElementById("ima3").width + 'px';

if (chkc == true )
{ 
    document.getElementById("teama1").style.paddingRight =  61 + 'px' ;
    document.getElementById("teama1").style.marginRight = 8 + 'px' ;
    document.getElementById("teama2").style.paddingRight = 62 + 'px' ;
    document.getElementById("teama2").style.marginRight = 7 + 'px' ;
    document.getElementById("teama3").style.paddingRight = 62 + 'px' ;
  }
 
  if (chki == true )
  {
    document.getElementById("teama1").style.paddingRight =  81 + 'px' ;
    document.getElementById("teama1").style.marginRight = 7 + 'px' ;
    document.getElementById("teama2").style.paddingRight =  87 + 'px' ;
    document.getElementById("teama2").style.marginRight = 7 + 'px' ;
    document.getElementById("teama3").style.paddingRight =  86 + 'px' ;
  } 
document.getElementById("heada1").style.width = f + 'px';
document.getElementById("heada2").style.width = document.getElementById("ima2").width + 'px';
document.getElementById("heada3").style.width = document.getElementById("ima3").width + 'px';

if (chkc == true)
{ 
    document.getElementById("heada1").style.width = '32.5%';
    document.getElementById("heada1").style.marginRight = '.8%';
    document.getElementById("heada2").style.marginRight = '.7%';
     
  }
  if (chki == true)
  { 
      document.getElementById("heada1").style.width = '12.82%';
      document.getElementById("heada1").style.marginRight = '.33%';
      document.getElementById("heada2").style.width = '13.4%';
      document.getElementById("heada2").style.marginRight = '.34%';
      document.getElementById("heada3").style.width = '13.4%';      
    }

document.getElementById("heada1").innerHTML = y ; 
document.getElementById("heada2").innerHTML = y ; 
document.getElementById("heada3").innerHTML = y ; 

document.getElementById("cntnta1").style.width = f + 'px';
document.getElementById("cntnta2").style.width = document.getElementById("ima2").width + 'px';
document.getElementById("cntnta3").style.width = document.getElementById("ima3").width + 'px';


if (chkc == true )
{ 
    document.getElementById("cntnta1").style.width = '32.5%';
    document.getElementById("cntnta1").style.marginRight = '.8%';
    document.getElementById("cntnta2").style.marginRight = '.7%';
     
  }
  if (chki == true )
  { 
      document.getElementById("cntnta1").style.width = '10.85%';
      document.getElementById("cntnta1").style.marginRight = '.3%';
      
      document.getElementById("cntnta2").style.marginRight = '.38%';
      document.getElementById("cntnta2").style.paddingRight = '4.12%';
      document.getElementById("cntnta3").style.paddingRight = '4.12%'; 
    }
  
document.getElementById("cntnta1").innerHTML = z ; 
document.getElementById("cntnta2").innerHTML = z ; 
document.getElementById("cntnta3").innerHTML = z ; 
 
document.getElementById("athrtma1").style.width = f + 'px';
document.getElementById("athrtma2").style.width = document.getElementById("ima2").width + 'px';
document.getElementById("athrtma3").style.width = document.getElementById("ima3").width + 'px';
 

if (chkc == true)
{ 
    document.getElementById("athrtma1").style.width = '32.5%';
    document.getElementById("athrtma1").style.marginRight = '.8%';
    document.getElementById("athrtma2").style.marginRight = '.7%';
     
  }

  
if (chki == true)
{ 
    document.getElementById("athrtma1").style.width = '12.85%';
    document.getElementById("athrtma1").style.marginRight = '.3%';
    document.getElementById("athrtma2").style.width = '13.4%';
    document.getElementById("athrtma2").style.marginRight = '.36%';
    document.getElementById("athrtma3").style.width = '13.4%';
     
  }

document.getElementById("athrtma1").innerHTML = a ; 
document.getElementById("athrtma2").innerHTML = a ; 
document.getElementById("athrtma3").innerHTML = a ; 


if (chkc == true | chki == true)
{document.getElementById("imb1").style.width = '24%';
document.getElementById("imb2").style.width = '24.5%'
document.getElementById("imb3").style.width = '50%' }


var g = document.getElementById("imb1").width ;
var g = g - 15 ;
var h = document.getElementById("imb2").width ;
var h = h - 15 ;

document.getElementById("teamb1").style.width = g + 'px';
document.getElementById("teamb2").style.width = h + 'px';
document.getElementById("teamb3").style.width = document.getElementById("imb3").width + 'px';

document.getElementById("headb1").style.width = g + 'px';
document.getElementById("headb2").style.width = h + 'px';
document.getElementById("headb3").style.width = document.getElementById("imb3").width + 'px';
 
document.getElementById("headb1").innerHTML = y ; 
document.getElementById("headb2").innerHTML = y ; 
document.getElementById("headb3").innerHTML = y ; 

var i = g - 15 ;
var j = h - 15;
if (chki == true)
{ 
    var i = i + 1.1
    document.getElementById("cntntb1").style.marginRight = '.6%';
    var j = j + 1.1
    document.getElementById("cntntb2").style.marginRight = '.5%';
}
document.getElementById("cntntb1").style.width = i + 'px';
document.getElementById("cntntb2").style.width = j + 'px';
document.getElementById("cntntb3").style.width = document.getElementById("imb3").width + 'px';
 
 
document.getElementById("cntntb1").innerHTML = z ; 
document.getElementById("cntntb2").innerHTML = z ; 
document.getElementById("cntntb3").innerHTML = z ; 
 
document.getElementById("athrtmb1").style.width = g + 'px';
document.getElementById("athrtmb2").style.width = h + 'px';
document.getElementById("athrtmb3").style.width = document.getElementById("imb3").width + 'px';

document.getElementById("athrtmb1").innerHTML = a ; 
document.getElementById("athrtmb2").innerHTML = a ; 
document.getElementById("athrtmb3").innerHTML = a ; 

