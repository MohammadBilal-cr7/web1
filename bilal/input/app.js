var curr
function currencyChange()
{
    curr=document.getElementById('currency').value;
    if(curr==="pkr"){
        cow=66500;
        goat=22000;
        cowShare=9500;
        sign="rs"
        getValueCow()
        getValueGoat()
        getValueCowShare()
    }
    else if(curr === "usd"){
        cow = 150;
        goat=50;
        cowShare=21;
        sign=="$"
        getValueCow()
        getValueGoat()
        getValueCowShare()
    }
    else if(curr === "cad"){
        cow = 100;
        goat=30;
        cowShare=15;
        getValueCow()
        getValueGoat()
        getValueCowShare()
        
    }
}
    var cow;
    c=0;
    
function getValueCow()
{
    var a = document.getElementById('1').value
    
    c =document.getElementById('total1').value = a*cow 
    // document.getElementById('total').innerHTML=g+c+cs
    document.getElementById('total').innerHTML=`${g+c+cs} ${curr}`
}
var goat;
g=0;
function getValueGoat()
{
    var a = document.getElementById('2').value
    g = document.getElementById('total2').value = a*goat 

    // document.getElementById('total').innerHTML=g+c+cs
    document.getElementById('total').innerHTML=`${g+c+cs} ${curr} `
}
var cowShare;
var cs=0;
function getValueCowShare()
{   
    var a=document.getElementById('3').value
    cs=document.getElementById('total3').value=  a*cowShare
   
    document.getElementById('total').innerHTML=`${g+c+cs} ${curr}`    

    
}
