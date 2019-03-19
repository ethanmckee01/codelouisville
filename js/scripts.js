
var desc = "test";      //declaring a description variable for my modal

$( document ).ready(function() //get the DOM ready
{
    //event handler for lanthanide flex box
    $(".lanel,.actel").on("click",function(event)
    {
        let atomicNumber = parseInt($(this).closest('.lanel,.actel').children('.atnum').text());  //declaring a variable here, declare it as an int to keep my switch tidy
        console.log(atomicNumber);  
        switch(atomicNumber) 
        {
            case 57: 
            desc = "This is Lanthanum.";                                //Switch checks what element was clicked to generate the modal text
            break;
            case 58: 
            desc = "This is Cerium.";
            break;
            case 59: 
            desc = "This is Praseodymium.";
            break;
            case 60: 
            desc = "This is Neodymium.";
            break;
            case 61: 
            desc = "This is Promethium.";
            break;
            case 62: 
            desc = "This is Samarium.";
            break;
            case 63: 
            desc = "This is Europium.";
            break;
            case 64: 
            desc = "This is Gadolinium.";
            break;
            case 65: 
            desc = "This is Terbium.";
            break;
            case 66: 
            desc = "This is Dysprosium.";
            break;
            case 67: 
            desc = "This is Holmium.";
            break;
            case 68: 
            desc = "This is Erbium.";
            break;
            case 69: 
            desc = "This is Thulium.";
            break;
            case 70: 
            desc = "This is Ytterbium.";
            break;
            case 71: 
            desc = "This is Lutetium.";
            break;
            case 89:
            desc = "This is Actinium.";
            break;
            case 90:
            desc = "This is Thorium.";
            break;
            case 91:
            desc = "This is Protactinium.";
            break;
            case 92:
            desc = "This is Uranium.";
            break;
            case 93:
            desc = "This is Neptunium.";
            break;
            case 94:
            desc = "This is Plutonium.";
            break;
            case 95:
            desc = "This is Americium.";
            break;
            case 96:
            desc = "This is Curium.";
            break;
            case 97:
            desc = "This is Berkelium.";
            break;
            case 98:
            desc = "This is Californium.";
            break;
            case 99:
            desc = "This is Einsteinium.";
            break;
            case 100:
            desc = "This is Fermium.";
            break;
            case 101:
            desc = "This is Mendelevium.";
            break;
            case 102:
            desc = "This is Nobelium.";
            break;
            case 103:
            desc = "This is Lawrencium.";
            break;
        }
        $('#modal').css('visibility','visible');    //modal appears on click
        console.log(atomicNumber);
        if(atomicNumber >= 57 && atomicNumber <= 71)        //this checks what type of element was clicked and changes the modal background
                {
                 $('#elem-desc').css('background-color','gainsboro').css('color','black');   //gainsboro for lanthanides
                }
                else
                {
                 $('#elem-desc').css('background-color','cornflowerblue').css('color','white');  //cornflower blue for actinides
                }
        $('#elem-desc').text(desc);  //puts in the description for the element
    }      
    );
    $("#modal").on("click",function(){               //Clicking the black space outside the modal closes it and brings back the description text
        $('#modal').css('visibility','hidden');
        $('.lanel').css('visibility','visible');
        $('.actel').css('visibility','visible');
        $('#elm-container').css('visibility','visible');
    }).children().on('click', function (event) {     //Two chained click events. Clicking the text/the modal itself does NOT close it, so
        event.stopPropagation();                     //the information can still be easily right clicked/selected.
    });
    });