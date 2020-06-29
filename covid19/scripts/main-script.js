function hamburgerButton(){
    var element = document.getElementById("dropdown-list");
    if(element.style.display=="none")
    element.style.display="flex";
    else
    element.style.display="none";
}