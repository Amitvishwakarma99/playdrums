//button clicks event
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
    {
        document.querySelectorAll(".drum")[i].addEventListener("click",buttonClick);
    
        
    }
function buttonClick(){
    var a=this.innerHTML;
    mksnd(a);
    btanmtn(a);
    
    
    
}
//key press event
document.addEventListener("keydown",function(evnt){
     mksnd(evnt.key);
     btanmtn(evnt.key);
     });


//button animation
function btanmtn(key)
{
    var k=document.querySelector("."+key);
    k.classList.add("pressed");
    setTimeout(function() {k.classList.remove("pressed");
        
    }, 100);
}


//making sound
function mksnd(a){
    switch (a) {
        
        case "w":
            var w=new Audio("sounds/tom-1.mp3");
            w.play();
            break;
        case "a":
            var w=new Audio("sounds/tom-2.mp3");
            w.play();
            break;
        case "s":
            var w=new Audio("sounds/tom-3.mp3");
            w.play();
            break;
        case "d":
            var w=new Audio("sounds/tom-4.mp3");
            w.play();
            break;
        case "j":
            var w=new Audio("sounds/snare.mp3");
            w.play();
            break;
        case "k":
            var w=new Audio("sounds/crash.mp3");
            w.play();
            break;
        case "l":
            var w=new Audio("sounds/kick-bass.mp3");
            w.play();
            break;
        default:
            console.log("wrong key");
            break;
    }
    
}