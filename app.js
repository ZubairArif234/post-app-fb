
var textarea = document.querySelector("#textarea")
var cancelbtn = document.getElementById('cancelbtn')
var postalert = document.getElementById ('alert')


function postval (){
    event.preventDefault()
var valuem = document.querySelector("#textarea")
console.log (valuem.value)
var posntn = document.getElementById(posbtn)

valuem.value = ""
postalert.style.display = "block";
}


function postcolour (){
    var valuem2 = document.querySelector("#textarea")
posbtn.style.backgroundColor = "#1b74e4"
posbtn.style.color = "white"

}

function postcolour2 (){
    var valuem3 = document.querySelector("#textarea")
posbtn.style.backgroundColor = "#f1f3f4"
posbtn.style.color = "grey"

}




function colouropt1 (){
// var colour1 = textarea.ATTRIBUTE_NODE (placeholder)
textarea.style.backgroundColor = "white"
textarea.style.color = "black"

}

function colouropt2 (){
    // var colour1 = textarea.ATTRIBUTE_NODE (placeholder)
    textarea.style.backgroundColor = "#ff099c"
    textarea.style.color = "white"
    
    }

    function colouropt3 (){
        // var colour1 = textarea.ATTRIBUTE_NODE (placeholder)
        textarea.style.backgroundColor = "#5dadec"
        textarea.style.color = "white"
        
        }

        function colouropt4 (){
            // var colour1 = textarea.ATTRIBUTE_NODE (placeholder)
            textarea.style.backgroundColor = "#ff8611"
            textarea.style.color = "white"
            
            }
            function colouropt5 (){
                // var colour1 = textarea.ATTRIBUTE_NODE (placeholder)
                textarea.style.backgroundColor = "#7b67ec"
                textarea.style.color = "white"
                
                }
                function colouropt6 (){
                    // var colour1 = textarea.ATTRIBUTE_NODE (placeholder)
                    textarea.style.backgroundColor = "#761d4b"
                    textarea.style.color = "white"
                    
                    }
                    function colouropt7 (){
                        // var colour1 = textarea.ATTRIBUTE_NODE (placeholder)
                        textarea.style.backgroundColor = "#014260"
                        textarea.style.color = "white"
                        
                        }        

var colormenubtn = document.getElementById('colouroptmenu')
var colorbtn = document.getElementById('colouroptbtn')
colormenubtn.onclick = function (){

    colorbtn.style.display = "flex";
    
}

// var postalert = document.getElementById ('alert')
// posbtn.onclick = function (){
//     postalert.style.display = "block";
// }
