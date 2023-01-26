function panelOnSelectType(element){
    let c = element.parentElement.parentElement.children;
    for (var i = 0; i < c.length; ++i) {
        if(c[i].classList.contains("tab")) c[i].style.display = "none"
    }
    element.parentElement.parentElement.getElementsByClassName(element.value)[0].style.display = "block"
}