// Make an LI grey upon lick and adda a strik-through effect
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

// Remove the li when clicking X
$("ul").on("click", "span", function(event){
        $(this).parent().fadeOut(500, function(){
            $(this).remove();
        });
        event.stopPropagation();
    });

    // Detect a keypress
    $("input[type='text']").keypress(function(event){
        if(event.which === 13) {
            // Grabbing new todo text from input
            var todoText = $(this).val();
            $(this).val("");
            // Create a new li and add to ul
            $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
        }
        
    });