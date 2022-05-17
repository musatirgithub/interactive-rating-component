function atClick(){
    let elements = document.getElementsByClassName("rating");

    function rater (){
        this.classList.add("active");
    }

    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove("active");
        elements[i].addEventListener("click", rater);
    }
}