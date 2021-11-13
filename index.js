var i=0;
var n=0;
var image=["p3.jpg" , "p4.jpg","p5.jpg","p7.jpg"]
var text=[ "imagine the world<br> 20$", "cuteness<br> 30$", "charcoal work<br> 20$","Pen work<br> 25$"]

setInterval(autochange,5000);
function autochange(){
    if(n==0){
    if(i<3){
        i+=1;
    }
    else{
        i=0;
    }
    console.log(i);
    document.getElementById("i1").style.backgroundImage="url("+image[i].toString()+")";
}}

    

function textShow(){
    n=1;
    document.getElementById("i2").innerHTML=text[i].toString();
    document.getElementById("i2").style.color="white";
    document.getElementById("i2").style.fontSize="3em";
    document.getElementById("i2").style.textAlign="top";
 }
 
 function textHide(){
     n=0;
     document.getElementById("i2").innerHTML="";
  }
  
 
function lPic(){
    if(i<3){
    i+=1;
   }
   else{
       i=0;
   }
   document.getElementById("i1").style.backgroundImage="url("+image[i].toString()+")";
}


   
function rPic(){
    if(i>0){
    i-=1;
    }
    else{
        i=3;
    }
    document.getElementById("i1").style.backgroundImage="url("+image[i].toString()+")";
}





   
   
