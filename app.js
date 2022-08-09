
var textarea = document.querySelector("#textarea")
var cancelbtn = document.getElementById('cancelbtn')
var postalert = document.getElementById ('alert')
var posttext = document.getElementById ('textpost')
var postbox = document.getElementById('postboxletter')
var post1 = document.getElementById('creatpost')

function postval (){
    event.preventDefault()
var valuem = document.querySelector("#textarea")
var valuemvalue = valuem.value
var posntn = document.getElementById(posbtn)

valuem.value = ""
postalert.style.display = "block";
setTimeout( function (){
postalert.style.display = "none" },2000)

posttext.innerText = valuemvalue
postbox.style.display = "block"
post1.style.display = "none"
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
   posttext.style.backgroundColor = "white"
   posttext.style.color = "black"
textarea.style.backgroundColor = "white"
textarea.style.color = "black"

}

function colouropt2 (){
    posttext.style.backgroundColor = "#ff099c"
    posttext.style.color = "white"
   
    textarea.style.backgroundColor = "#ff099c"
    textarea.style.color = "white"
    
    }

    function colouropt3 (){
        posttext.style.backgroundColor = "#5dadec"
    posttext.style.color = "white"
        // var colour1 = textarea.ATTRIBUTE_NODE (placeholder)
        textarea.style.backgroundColor = "#5dadec"
        textarea.style.color = "white"
        
        }

        function colouropt4 (){
            posttext.style.backgroundColor = "#ff8611"
    posttext.style.color = "white"
            // var colour1 = textarea.ATTRIBUTE_NODE (placeholder)
            textarea.style.backgroundColor = "#ff8611"
            textarea.style.color = "white"
            
            }
            function colouropt5 (){
                posttext.style.backgroundColor = "#7b67ec"
    posttext.style.color = "white"
                // var colour1 = textarea.ATTRIBUTE_NODE (placeholder)
                textarea.style.backgroundColor = "#7b67ec"
                textarea.style.color = "white"
                
                }
                function colouropt6 (){
                    posttext.style.backgroundColor = "#761d4b"
    posttext.style.color = "white"
                    // var colour1 = textarea.ATTRIBUTE_NODE (placeholder)
                    textarea.style.backgroundColor = "#761d4b"
                    textarea.style.color = "white"
                    
                    }
                    function colouropt7 (){
                        posttext.style.backgroundColor = "#014260"
    posttext.style.color = "white"
                        // var colour1 = textarea.ATTRIBUTE_NODE (placeholder)
                        textarea.style.backgroundColor = "#014260"
                        textarea.style.color = "white"
                        
                        }        

var colormenubtn = document.getElementById('colouroptmenu')
var colorbtn = document.getElementById('colouroptbtn')
colormenubtn.onclick = function (){

    colorbtn.style.display = "flex";
    
}

var like = document.getElementById ('likeit')
var likep = document.getElementById('likep')
 function likecolor (){
    like.src = "assets/facebook-like-blue.png"
    likep.style.color = "#1b74e4"
}

var commentbar = document.getElementById ('commentsec')
var commbtn = document.getElementById ('comm')
var commtext = document.querySelector("#comment")

commbtn.onclick = function (){
    commentbar.style.display = "block"
}

var comhogaya = document.getElementById('commenthogaya')
var comsome = document.getElementById('someonecomm')
var comtext = document.getElementById('comp')
comhogaya.onclick = function (){
    if (commtext.value === ""){
        comsome.style.display = "none"
    }else{ 
        // commtext.value = ""
        comsome.style.display = "flex"
        comtext.innerHTML = commtext.value}
        commtext.value = ""
}
 
var sharep = document.getElementById ('share')
function sharecolor (){
    sharep.style.color = "#1b74e4"

}
