$(document).ready(function(){
  $(".rectangle_transparent_1").on("click", function(){
    if ($(".rectangle_transparent_1").hasClass("flag_1")) {
      $(".tree_1").css("z-index","200");
      $( ".rectangle_transparent_1" ).removeClass("flag_1");
      $( ".rectangle_transparent_1" ).addClass("flag_2");
    };
  });
  $(".tree_1").on("click", function(){
    if ($(".rectangle_transparent_1").hasClass("flag_2")) {
      $(".tree_1").css("z-index","1");
      $( ".rectangle_transparent_1" ).removeClass("flag_2");
      $( ".rectangle_transparent_1" ).addClass("flag_1");
    };
  });
  $(".rectangle_transparent_1").hover(function(){
      $(".tree_1").toggleClass("tree_1_green");
  });
  $(".tree_1").hover(function(){
      $(".tree_1").toggleClass("tree_1_green");
  });
  $(".rectangle_transparent_2").on("click", function(){
    if ($(".rectangle_transparent_2").hasClass("flag_1")) {
      $(".tree_2").css("z-index","200");
      $( ".rectangle_transparent_2" ).removeClass("flag_1");
      $( ".rectangle_transparent_2" ).addClass("flag_2");
    };
  });
  $(".tree_2").on("click", function(){
    if ($(".rectangle_transparent_2").hasClass("flag_2")) {
    $(".tree_2").css("z-index","2");
    $( ".rectangle_transparent_2" ).removeClass("flag_2");
    $( ".rectangle_transparent_2" ).addClass("flag_1");
  };
});
$(".rectangle_transparent_2").hover(function(){
    $(".tree_2").toggleClass("tree_2_green");
});
$(".tree_2").hover(function(){
    $(".tree_2").toggleClass("tree_2_green");
});
$(".rectangle_transparent_3").on("click", function(){
  if ($(".rectangle_transparent_3").hasClass("flag_1")) {
    $(".tree_3").css("z-index","200");
    $( ".rectangle_transparent_3" ).removeClass("flag_1");
    $( ".rectangle_transparent_3" ).addClass("flag_2");
  };
});
$(".tree_3").on("click", function(){
  if ($(".rectangle_transparent_3").hasClass("flag_2")) {
    $(".tree_3").css("z-index","1");
    $( ".rectangle_transparent_3" ).removeClass("flag_2");
    $( ".rectangle_transparent_3" ).addClass("flag_1");
  };
});
$(".rectangle_transparent_3").hover(function(){
    $(".tree_3").toggleClass("tree_3_green");
});
$(".tree_3").hover(function(){
    $(".tree_3").toggleClass("tree_3_green");
});
$(".rectangle_transparent_4").on("click", function(){
  if ($(".rectangle_transparent_4").hasClass("flag_1")) {
    $(".tree_4").css("z-index","200");
    $( ".rectangle_transparent_4" ).removeClass("flag_1");
    $( ".rectangle_transparent_4" ).addClass("flag_2");
  };
});
$(".tree_4").on("click", function(){
  if ($(".rectangle_transparent_4").hasClass("flag_2")) {
    $(".tree_4").css("z-index","2");
    $( ".rectangle_transparent_4" ).removeClass("flag_2");
    $( ".rectangle_transparent_4" ).addClass("flag_1");
  };
});
$(".rectangle_transparent_4").hover(function(){
  $(".tree_4").toggleClass("tree_4_green");
});
$(".tree_4").hover(function(){
  $(".tree_4").toggleClass("tree_4_green");
});
});
