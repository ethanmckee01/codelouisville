//get the DOM ready

var desc = "test";      //declaring a description variable for my modal

$( document ).ready(function() 
{
    //event handler for lanthanide flex box

    $(".lanel").on("click",function(event){
        if(event.target.innerText == '57' ||
           event.target.innerText == 'La' ||                //Long series of checks to find which Lanthanide was clicked so it can update the modal correctly.
           event.target.innerText == '138.91')              //Thankfully each element has a unique abbreviation, number, and weight, so this check is easy.
           {
               desc = "This is Lanthanum.";
           }
        else if(event.target.innerText == '58' ||
                event.target.innerText == 'Ce' ||        
                event.target.innerText == '140.12')
            {
            desc = "This is Cerium.";
             }
             else if(event.target.innerText == '59' ||
                event.target.innerText == 'Pr' ||        
                event.target.innerText == '140.91')
            {
            desc = "This is Praseodymium.";
             }
             else if(event.target.innerText == '60' ||
                event.target.innerText == 'Nd' ||        
                event.target.innerText == '144.24')
            {
            desc = "This is Neodymium.";
             }
             else if(event.target.innerText == '61' ||
                event.target.innerText == 'Pm' ||        
                event.target.innerText == '145')
            {
            desc = "This is Promethium.";
             }
             else if(event.target.innerText == '62' ||
                event.target.innerText == 'Sm' ||        
                event.target.innerText == '150.36')
            {
            desc = "This is Samarium.";
             }
             else if(event.target.innerText == '63' ||
                event.target.innerText == 'Eu' ||        
                event.target.innerText == '151.96')
            {
            desc = "This is Europium.";
             }
             else if(event.target.innerText == '64' ||
                event.target.innerText == 'Gd' ||        
                event.target.innerText == '157.25')
            {
            desc = "This is Gandolinium.";
             }
             else if(event.target.innerText == '65' ||
                event.target.innerText == 'Tb' ||        
                event.target.innerText == '158.93')
            {
            desc = "This is Terbium.";
             }
             else if(event.target.innerText == '66' ||
                event.target.innerText == 'Dy' ||        
                event.target.innerText == '162.50')
            {
            desc = "This is Dysprosium.";
             }
             else if(event.target.innerText == '67' ||
                event.target.innerText == 'Ho' ||        
                event.target.innerText == '164.93')
            {
            desc = "This is Holmium.";
             }
             else if(event.target.innerText == '68' ||
                event.target.innerText == 'Er' ||        
                event.target.innerText == '167.26')
            {
            desc = "This is Erbium.";
             }
             else if(event.target.innerText == '69' ||
                event.target.innerText == 'Tm' ||        
                event.target.innerText == '168.93')
            {
            desc = "This is Thulium.";
             }
             else if(event.target.innerText == '70' ||
                event.target.innerText == 'Yb' ||        
                event.target.innerText == '173.05')
            {
            desc = "This is Ytterbium.";
             }
             else if(event.target.innerText == '71' ||
                event.target.innerText == 'Lu' ||        
                event.target.innerText == '174.97')
            {
            desc = "This is Lutetium.";
             }
        $('#modal').css('visibility','visible');    //modal appears on click
        $('#elem-desc').css('background-color','gainsboro').css('color','black');
        $('#elem-desc').text(desc);
    });

    
    
    $(".actel").on("click",function(event){
        if(event.target.innerText == '89' ||                //event handler for actinide flex box
           event.target.innerText == 'Ac' ||                //Same checks but with Actinide
           event.target.innerText == '227')              
        {
           desc = "This is Actinium.";
        }
            else if(event.target.innerText == '90' ||
                    event.target.innerText == 'Th' ||        
                    event.target.innerText == '232.04')
            {
                     desc = "This is Thorium.";
            }
            else if(event.target.innerText == '91' ||
                    event.target.innerText == 'Pa' ||        
                    event.target.innerText == '231.04')
            {
                     desc = "This is Protactinium.";
            }
            else if(event.target.innerText == '92' ||
                    event.target.innerText == 'U' ||        
                    event.target.innerText == '238.03')
            {
            desc = "This is Uranium.";
            }
            else if(event.target.innerText == '93' ||
                    event.target.innerText == 'Np' ||        
                    event.target.innerText == '237')
            {
            desc = "This is Neptunium.";
            }
            else if(event.target.innerText == '94' ||
                    event.target.innerText == 'Pu' ||        
                    event.target.innerText == '244')
            {
            desc = "This is Plutonium.";
            }
            else if(event.target.innerText == '95' ||
                    event.target.innerText == 'Am' ||        
                    event.target.innerText == '243')
            {
            desc = "This is Americium.";
            }
            else if(event.target.innerText == '96' ||
                    event.target.innerText == 'Cm' ||        
                    event.target.innerText == '247')
            {
            desc = "This is Curium.";
            }
            else if(event.target.innerText == '97' ||
                    event.target.innerText == 'Bk' ||        
                    event.target.innerText == '248')
            {
            desc = "This is Berkelium.";
            }
            else if(event.target.innerText == '98' ||
                    event.target.innerText == 'Cf' ||        
                    event.target.innerText == '251')
            {
            desc = "This is Californium.";
            }
            else if(event.target.innerText == '99' ||
                    event.target.innerText == 'Es' ||        
                    event.target.innerText == '252')
            {
            desc = "This is Einsteinium.";
            }
            else if(event.target.innerText == '100' ||
                    event.target.innerText == 'Fm' ||        
                    event.target.innerText == '257')
            {
            desc = "This is Fermium.";
            }
            else if(event.target.innerText == '101' ||
                    event.target.innerText == 'Md' ||        
                    event.target.innerText == '258')
            {
            desc = "This is Mendelevium.";
            }
            else if(event.target.innerText == '102' ||
                    event.target.innerText == 'No' ||        
                    event.target.innerText == '259')
            {
            desc = "This is Nobelium.";
            }
            else if(event.target.innerText == '103' ||
                    event.target.innerText == 'Lr' ||        
                    event.target.innerText == '266')
            {
            desc = "This is Lawrencium.";
            }
        $('#modal').css('visibility','visible');    //modal appears on click and periodic table
        $('#elm-container').css('visibility','hidden');
        $('#elem-desc').css('background-color','cornflowerblue').css('color','white');
        $('#elem-desc').text(desc);
    });

    $("#modal").on("click",function(){               //Clicking the black space outside the modal closes it and brings back the periodic table
        $('#modal').css('visibility','hidden');
        $('.lanel').css('visibility','visible');
        $('.actel').css('visibility','visible');
        $('#elm-container').css('visibility','visible');
    }).children().on('click', function (event) {     //Clicking the text/the modal itself does NOT close it, so
        event.stopPropagation();                     //the information can still be easily right clicked/selected.
    });
    });