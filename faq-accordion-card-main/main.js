var heading = document.getElementsByTagName("button")
var  i ;
for(i = 0 ; i < heading.length ; i++){
    heading[i].addEventListener("click",function(){
        const des = this.nextElementSibling;
        const arrow = document.getElementsByClassName(".arrow")
        if (des.style.display == "block"){
            des.style.display = "none"
        }else{ 
            des.style.display = "block"
        }
        arrow.classList.togle("rotate")
    });
}

