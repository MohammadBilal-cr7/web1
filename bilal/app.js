var a=0;
function increase(){

        document.getElementById('abcd').innerHTML = ++a         
    }
    function decrease(){

        document.getElementById('abcd').innerHTML = --a         
    }
    var b=false;
    function convert(){
        b=!b
        if(b===true)
        {
            document.getElementById('2').style.backgroundColor="black";
            document.getElementById('1').innerHTML="dark";
            document.getElementById('2').style.color="white";
            document.getElementById('txt').innerHTML="light";
        }
        else{

            document.getElementById('1').innerHTML="light";
            document.getElementById('txt').innerHTML="dark";
            document.getElementById('2').style.color="black";
            document.getElementById('2').style.backgroundColor="white";
        }
    }