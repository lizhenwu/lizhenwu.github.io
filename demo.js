$(document).ready(function(){
    $(".col-md-8").hide();
    $(window).scroll(function() {
      var h = $(".CareerPage").offset().top;
      if($(this).scrollTop()>h-100){
        $(".car1").addClass("move");
        $(".col-md-8").show();
        
      }
      
        
      
});
});

