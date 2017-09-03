var results="";
var results2="";
var calresults="";
var lastkey="";
var flg=1;
var re1=/^[\*|\/].+/;
var re2=/.+[\*|\/]$/;
var re3=/(\+|-|\*|\/)/;
var re4=/.+[\+|-|\*|\/]{1,99}.+/
var re5=/\d.+/;
function calculater () {
    if (event.srcElement.innerText=="=") {
        return;
    }
    if (event.srcElement.innerText=="AC") {
        results="";
        display.innerText="0";
        return;
    }
    if (event.srcElement.id=="display") {
        return;
    }

    if (results.match(re1)) {
        display.innerText="输入错误";
        results="";
        return;
    }
    if(lastkey.match(re3)&&event.srcElement.innerText.match(re3)){
        return;
    }
    if(lastkey=="="&&event.srcElement.innerText.match(re3)){
        results=calresults;
    }

    if (event.srcElement.innerText=="+/-"&&results!="") {
        if (flg==-1) {
            results=String(results2);
            display.innerText=results;
            flg=-flg;
            return;
        }
        results2=results;
        results = "-"+"("+results+")";
        flg=-flg;
        display.innerText=results;
        return;
    }

    results+=event.srcElement.innerText;
    lastkey=event.srcElement.innerText;
    display.innerText=results;
}
function resultscalculate(){
    if (results.match(re1)||results.match(re2)) {
        display.innerText="输入错误";
        results="";
        return;
    }

    calresults=eval(results);
    display.innerText=calresults;
    lastkey="=";
    results="";
}