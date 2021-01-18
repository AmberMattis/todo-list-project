$(document).ready(function(){
    "use strict"
//    create a function that changes the title of the current list
//    this will change to main heading


// This function will display a modal that should allow the user to change the name of the to-do list
function changeListTitle() {
    $("#newList").click(function () {
        $(".modal").modal("show");
    });
}

// will allow the user to click create new list button on page load
$(window).onload(changeListTitle());

})