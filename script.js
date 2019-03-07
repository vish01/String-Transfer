var myVar;
function forward(){
    clearInterval(myVar);
    var first = document.getElementById("firstfield");
    var second = document.getElementById("secondfield");
//    myVar = window.myVar;
     myVar = setInterval(function(){

        if(first.value.length > 0)
        {

        second.value += first.value[0];
       first.value = first.value.slice(1);
        
        // document.getElementById("pause1").onclick(pause());
        }
        else{
            clearInterval(myVar);
        }
    }, 1000);
    }
function backward(){
    clearInterval(myVar);

    var first = document.getElementById("firstfield");
    var second = document.getElementById("secondfield");
    // myVar = this.myVar;
    myVar = setInterval(function(){
        if(second.value.length > 0)
        {

        first.value = second.value[second.value.length - 1] + first.value;
       second.value = second.value.slice(0,-1);
            }
    }, 1000);
}
// myVar = window.myVar
// window.pause = pause;
var pause = function(){
    console.log("cleared");
    clearInterval(myVar);
}