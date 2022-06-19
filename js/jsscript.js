// Главная страница
// Анимация стартовой страницы
$(document).ready(function(){
  $(".rectangle_transparent_1").on("click", function(){
    if ($(".rectangle_transparent_1").hasClass("flag_1")) {
      $(".container_trees .tree_1").css("z-index","200");
      $( ".rectangle_transparent_1" ).removeClass("flag_1");
      $( ".rectangle_transparent_1" ).addClass("flag_2");
    };
  });
  $(".container_trees .tree_1").on("click", function(){
    if ($(".rectangle_transparent_1").hasClass("flag_2")) {
      $(".container_trees .tree_1").css("z-index","1");
      $( ".rectangle_transparent_1" ).removeClass("flag_2");
      $( ".rectangle_transparent_1" ).addClass("flag_1");
    };
  });
  $(".rectangle_transparent_1").hover(function(){
      $(".container_trees .tree_1").toggleClass("tree_1_green");
  });
  $(".container_trees .tree_1").hover(function(){
      $(".container_trees .tree_1").toggleClass("tree_1_green");
  });
  $(".rectangle_transparent_2").on("click", function(){
    if ($(".rectangle_transparent_2").hasClass("flag_1")) {
      $(".container_trees .tree_2").css("z-index","200");
      $( ".rectangle_transparent_2" ).removeClass("flag_1");
      $( ".rectangle_transparent_2" ).addClass("flag_2");
    };
  });
  $(".container_trees .tree_2").on("click", function(){
    if ($(".rectangle_transparent_2").hasClass("flag_2")) {
    $(".container_trees .tree_2").css("z-index","2");
    $( ".rectangle_transparent_2" ).removeClass("flag_2");
    $( ".rectangle_transparent_2" ).addClass("flag_1");
  };
});
$(".rectangle_transparent_2").hover(function(){
    $(".container_trees .tree_2").toggleClass("tree_2_green");
});
$(".container_trees .tree_2").hover(function(){
    $(".tree_2").toggleClass("tree_2_green");
});
$(".rectangle_transparent_3").on("click", function(){
  if ($(".rectangle_transparent_3").hasClass("flag_1")) {
    $(".container_trees .tree_3").css("z-index","200");
    $( ".rectangle_transparent_3" ).removeClass("flag_1");
    $( ".rectangle_transparent_3" ).addClass("flag_2");
  };
});
$(".container_trees .tree_3").on("click", function(){
  if ($(".rectangle_transparent_3").hasClass("flag_2")) {
    $(".tree_3").css("z-index","1");
    $( ".rectangle_transparent_3" ).removeClass("flag_2");
    $( ".rectangle_transparent_3" ).addClass("flag_1");
  };
});
$(".rectangle_transparent_3").hover(function(){
    $(".container_trees .tree_3").toggleClass("tree_3_green");
});
$(".container_trees .tree_3").hover(function(){
    $(".container_trees .tree_3").toggleClass("tree_3_green");
});
$(".rectangle_transparent_4").on("click", function(){
  if ($(".rectangle_transparent_4").hasClass("flag_1")) {
    $(".container_trees .tree_4").css("z-index","200");
    $( ".rectangle_transparent_4" ).removeClass("flag_1");
    $( ".rectangle_transparent_4" ).addClass("flag_2");
  };
});
$(".container_trees .tree_4").on("click", function(){
  if ($(".rectangle_transparent_4").hasClass("flag_2")) {
    $(".container_trees .tree_4").css("z-index","2");
    $( ".rectangle_transparent_4" ).removeClass("flag_2");
    $( ".rectangle_transparent_4" ).addClass("flag_1");
  };
});
$(".rectangle_transparent_4").hover(function(){
  $(".container_trees .tree_4").toggleClass("tree_4_green");
});
$(".container_trees .tree_4").hover(function(){
  $(".container_trees .tree_4").toggleClass("tree_4_green");
});
// Анимация страницы экскурсии
  $(".rectangle_long_2").on("click", function(){
    if ($(this).hasClass("flag_1")) {
      $(".slide_renders_image").css("z-index","101");
      $(".plan_about").css("z-index","101");
      $(".rectangle_long_2").removeClass("flag_1");
    } else {
      $(".slide_renders_image").css("z-index","0");
      $(".plan_about").css("z-index","0");
      $( ".rectangle_long_2" ).addClass("flag_1");
    };
  });
  $(".rectangle_long_2").hover(function(){
    $(".tree_2_long").toggleClass("tree_2_long_green");
  });
  $(".tree_2_long").hover(function(){
    $(".tree_2_long").toggleClass("tree_2_long_green");
  });
  $(".rectangle_long_4").on("click", function(){
    if ($(this).hasClass("flag_1")) {
      $(".slide_renders_image").css("z-index","101");
      $(".plan_about").css("z-index","101");
      $(".rectangle_long_4").removeClass("flag_1");
    } else {
      $(".slide_renders_image").css("z-index","0");
      $(".plan_about").css("z-index","0");
      $( ".rectangle_long_4" ).addClass("flag_1");
    };
  });
  $(".rectangle_long_4").hover(function(){
    $(".tree_4_long").toggleClass("tree_4_long_green");
  });
  $(".tree_4_long").hover(function(){
    $(".tree_4_long").toggleClass("tree_4_long_green");
  });
  // Error404
  $(".rectangle_error_1").on("click", function(){
    if ($(this).hasClass("flag_1")) {
      $(".error_1").css("z-index","1");
      $(".error_grid").css("z-index","1");
      $(".rectangle_error_1").removeClass("flag_1");
      $(".error_1").removeClass("flag_1");
    } else {
      $(".error_grid").css("z-index","200");
      $(".error_1").css("z-index","200");
      $( ".rectangle_error_1" ).addClass("flag_1");
      $( ".error_1" ).addClass("flag_1");
    };
  });
  $(".rectangle_error_1").hover(function(){
      $(".error_1").toggleClass("error_1_green");
  });
  $(".error_1").hover(function(){
      $(".error_1").toggleClass("error_1_green");
  });
  $(".rectangle_error_2").on("click", function(){
    if ($(this).hasClass("flag_1")) {
      $(".error_2").css("z-index","1");
      $(".error_grid").css("z-index","1");
      $(".rectangle_error_2").removeClass("flag_1");
      $(".error_2").removeClass("flag_1");
    } else {
      $(".error_grid").css("z-index","200");
      $(".error_2").css("z-index","200");
      $( ".rectangle_error_2" ).addClass("flag_1");
      $( ".error_2" ).addClass("flag_1");
    };
  });
  $(".rectangle_error_2").hover(function(){
      $(".error_2").toggleClass("error_2_green");
  });
  $(".error_2").hover(function(){
      $(".error_2").toggleClass("error_2_green");
  });
  $(".rectangle_error_3").on("click", function(){
    if ($(this).hasClass("flag_1")) {
      $(".error_3").css("z-index","1");
      $(".error_grid").css("z-index","1");
      $(".rectangle_error_3").removeClass("flag_1");
      $(".error_3").removeClass("flag_1");
    } else {
      $(".error_grid").css("z-index","200");
      $(".error_3").css("z-index","200");
      $( ".rectangle_error_3" ).addClass("flag_1");
      $( ".error_3" ).addClass("flag_1");
    };
  });
  $(".rectangle_error_3").hover(function(){
      $(".error_3").toggleClass("error_3_green");
  });
  $(".error_3").hover(function(){
      $(".error_3").toggleClass("error_3_green");
  });
  // Анимация формы
  // $(".form .tria").on("click", function(){
  //
  // });
});
