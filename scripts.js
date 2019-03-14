//get the DOM ready

$( document ).ready(function() 
{
    //event handler for lanthanide flex box

    $(".lanel").on("click",function(event){
        console.log(event.target.innerText);
    });

    //event handler for actinide flex box
    
    $(".actel").on("click",function(event){
        console.log(event.target.innerText);
    });
    });