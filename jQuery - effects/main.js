// Fadeout effect - like this, it only hides the elements
// $("button").on("click", function(){
//     $("div").fadeOut("slow", function(){
//         console.log("Fade Out");
//     });
// });

// // You can remove them completely
// $("button").on("click", function(){
//     $("div").fadeOut("slow", function(){
//         $(this).remove();
//     });
// });

// // Fade in
// $("button").on("click", function(){
//     $("div").fadeIn("slow", function(){
//         console.log("Fade In");
//     });
// });

// // Fade toggle
// $("button").on("click", function(){
//     $("div").fadeToggle("slow", function(){
//         console.log("Fade Toggle");
//     });
// });

//// Sliding effects /////

// Slide Down
$("button").on("click", function(){
    $("div").slideDown("slow", function(){
        console.log("Slide Down");
    });
});

// Slide Up
$("button").on("click", function(){
    $("div").slideUp("slow", function(){
        console.log("Slide Up");
    });
});