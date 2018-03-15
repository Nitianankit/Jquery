// Check off spicific todos by clicking
$("ul").on("click", "li", function(){
     /* //if it is gray
      // console.log($(this).css("color"));
      if($(this).css("color") === "rgb(128, 128, 128)"){

      	     //turn it black
           $(this).css({
 		 
 		 color: "black",
 		 textDecoration: "none"
      });

      }

      else{

      	  $(this).css({
 		 
 		 color: "gray",
 		 textDecoration: "line-through"
      });

      }*/

      $(this).toggleClass("completed");
     
     
});

//Click on X to delete todo
$("ul").on("click", "span", function(event){
	
	$(this).parent().fadeOut(500,function(){
       $(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
     if(event.which === 13){
     	//grabbing new todo text from input
     	var todoText = $(this).val();
     	$(this).val("");
     	//create a new li and add to ul
     	$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")

     }
});

$(".fa-plus").click(function(){
 
      $("input[type='text']").fadeToggle();
});