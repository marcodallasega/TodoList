var container = $(".container")[0];
var plus = $(".fa-plus:first");
var newTodo = $("#newTodo");

$("ul").on("click", ".fa-trash-alt", function() {
    $(this).parent().remove();
});

$("ul").on("click", "span", function(event) {
    $(this).toggleClass("done");
});

$("#newTodo").keypress(function(event) {
    if (event.keyCode === 13) {
        var newLi = "<li><i class=\"fas fa-trash-alt fa-lg\"></i> <span>" + $(this).val() + "</span></li>";
        $("ul").append(newLi);
        $(this).val("");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle(0, "linear");
})

/*
NB make sure to have understood EXACTLY THE DIFFERECE BETWEEN .on() and .click() !!

.on(events, selector, handler)
    EVENT DELEGATION : bind the handler (the on-click function)
                       to dynamically add elements

.click()
    does not do event delegation: if you add a new element,
    you need you rebind the element to it.
*/


