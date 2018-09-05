// Change image size
$('img').css("width", "500px");

// Retrieve the image
$('img').attr("src");

// Change the image 
$('img').attr("src", "https://i.ytimg.com/vi/zx0gXM_FkgE/maxresdefault.jpg");

// Update only the first image
$('img:first').attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM3Ai2LAZurR0Oyho4tgLhnt74n2EhrnlQXirn9H7dbuiZM_WL");

// Update only the last image
$("img").last().attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM3Ai2LAZurR0Oyho4tgLhnt74n2EhrnlQXirn9H7dbuiZM_WL");

// Update all 3 images
$("img").attr("src", "https://www.vwt.org.uk/wp-content/uploads/2015/03/Pine-marten-BANNER.jpg");

// val() method
// Can act like a getter
$("input").val();

// Can act like a setter
$("input").val("Some text from val();");