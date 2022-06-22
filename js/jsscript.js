$(document).ready(function(){
  // Анимация стартовой страницы
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

  // Анимация событий
  $("a.scrollto").click(function () {
    elementClick = $(this).attr("href")
    destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
    return false;
  });
  // $(".poster_2").on("click", function(){
  //   if ($(".poster_1").hasClass("change_3")) {
  //     $(this).css("z-index","0");
  //     $(".poster_1_bg_3").css("z-index","0");
  //   };
  // });
  // $(".poster_2").on("click", function(){
  //   $(".poster_1_bg_2").css("z-index","500");
  //   $(".poster_2").css("z-index","0");
  //   $(".poster_1").addClass("change_1");
  // });
  // $(".poster_2_bg_1").on("click", function(){
  //   $(".poster_1_bg_2").css("z-index","1");
  //   $(".poster_2").css("z-index","500");
  //   $(".poster_1").removeClass("change_1");
  // });
  // $(".poster_3").on("click", function(){
  //   if ($(".poster_1").hasClass("change_1")) {
  //     $(".poster_1_bg_3").css("z-index","500");
  //     $(".poster_3_bg_2").css("z-index","500");
  //     $(".poster_1").removeClass("change_1");
  //   };
  // });
  // $(".poster_3").on("click", function(){
  //   $(".poster_1_bg_3").css("z-index","500");
  //   $(".poster_3").css("z-index","1");
  //   $(".poster_1").addClass("change_2");
  // });
  // $(".poster_3_bg_1").on("click", function(){
  //   $(".poster_1_bg_3").css("z-index","1");
  //   $(".poster_3").css("z-index","500");
  //   $(".poster_1").removeClass("change_2");
  // });
  // $(".poster_2").on("click", function(){
  //   if ($(".poster_1").hasClass("change_2")) {
  //     $(".poster_1_bg_3").css("z-index","499");
  //     $(".poster_2_bg_3").css("z-index","500");
  //     $(".poster_1").removeClass("change_2");
  //   };
  // });
  // $(".poster_2_bg_3").on("click", function(){
  //   $(this).css("z-index","0");
  //   $(".poster_1_bg_3").css("z-index","500");
  //   $(".poster_2").css("z-index","500");
  //   $(".poster_1").addClass("change_3");
  // });
  // $(".poster_2").on("click", function(){
  //   $(this)
  // }
  
// Веб-постер
  $( function() {
    $( "#piece_1" ).draggable();
  } );
  $( function() {
    $( "#piece_2" ).draggable();
  } );
  $( function() {
    $( "#piece_3" ).draggable();
  } );
  $( function() {
    $( "#piece_4" ).draggable();
  } );
  $( function() {
    $( "#piece_5" ).draggable();
  } );
  $( function() {
    $( "#piece_6" ).draggable();
  } );
  $( function() {
    $( "#piece_7" ).draggable();
  } );
  $( function() {
    $( "#piece_8" ).draggable();
  } );
  $( function() {
    $( "#piece_9" ).draggable();
  } );
  $( function() {
    $( "#piece_10" ).draggable();
  } );
  $( function() {
    $( "#piece_11" ).draggable();
  } );
  $( function() {
    $( "#piece_12" ).draggable();
  } );
  $( function() {
    $( "#piece_13" ).draggable();
  } );
  $( function() {
    $( "#piece_14" ).draggable();
  } );
  $( function() {
    $( "#piece_15" ).draggable();
  } );
  $( function() {
    $( "#piece_16" ).draggable();
  } );
  $( function() {
    $( "#piece_17" ).draggable();
  } );
  $( function() {
    $( "#piece_18" ).draggable();
  } );
  $( function() {
    $( "#piece_19" ).draggable();
  } );
  $( function() {
    $( "#piece_20" ).draggable();
  } );
  $( function() {
    $( "#piece_21" ).draggable();
  } );
  $( function() {
    $( "#piece_22" ).draggable();
  } );
  $( function() {
    $( "#piece_23" ).draggable();
  } );
  $( function() {
    $( "#piece_24" ).draggable();
  } );
  $( function() {
    $( "#piece_25" ).draggable();
  } );
  $( function() {
    $( "#piece_26" ).draggable();
  } );
  $( function() {
    $( "#piece_27" ).draggable();
  } );
  $( function() {
    $( "#piece_28" ).draggable();
  } );
  $( function() {
    $( "#piece_29" ).draggable();
  } );
  $( function() {
    $( "#piece_30" ).draggable();
  } );
  $( function() {
    $( "#piece_31" ).draggable();
  } );
  $( function() {
    $( "#piece_32" ).draggable();
  } );
  $( function() {
    $( "#piece_33" ).draggable();
  } );
  $( function() {
    $( "#piece_34" ).draggable();
  } );
  $( function() {
    $( "#piece_35" ).draggable();
  } );
  $( function() {
    $( "#piece_36" ).draggable();
  } );
  $( function() {
    $( "#piece_37" ).draggable();
  } );
  $( function() {
    $( "#piece_38" ).draggable();
  } );
  $( function() {
    $( "#piece_39" ).draggable();
  } );
  $( function() {
    $( "#piece_40" ).draggable();
  } );
  $( function() {
    $( "#piece_41" ).draggable();
  } );
  $( function() {
    $( "#piece_42" ).draggable();
  } );
  $( function() {
    $( "#piece_43" ).draggable();
  } );
  $( function() {
    $( "#piece_44" ).draggable();
  } );
  $( function() {
    $( "#piece_45" ).draggable();
  } );
  $( function() {
    $( "#piece_46" ).draggable();
  } );
  $( function() {
    $( "#piece_47" ).draggable();
  } );
  $( function() {
    $( "#piece_48" ).draggable();
  } );
  $( function() {
    $( "#piece_49" ).draggable();
  } );
  $( function() {
    $( "#piece_50" ).draggable();
  } );
  $( function() {
    $( "#piece_51" ).draggable();
  } );
  $( function() {
    $( "#piece_52" ).draggable();
  } );
  $( function() {
    $( "#piece_53" ).draggable();
  } );
  $( function() {
    $( "#piece_54" ).draggable();
  } );
  $( function() {
    $( "#piece_55" ).draggable();
  } );
  $( function() {
    $( "#piece_56" ).draggable();
  } );
  $( function() {
    $( "#piece_57" ).draggable();
  } );
  $( function() {
    $( "#piece_58" ).draggable();
  } );
  $( function() {
    $( "#piece_59" ).draggable();
  } );
  $( function() {
    $( "#piece_60" ).draggable();
  } );
  $( function() {
    $( "#piece_61" ).draggable();
  } );
  $( function() {
    $( "#piece_62" ).draggable();
  } );
  $( function() {
    $( "#piece_63" ).draggable();
  } );
  $( function() {
    $( "#piece_64" ).draggable();
  } );
  $( function() {
    $( "#piece_65" ).draggable();
  } );
  $( function() {
    $( "#piece_66" ).draggable();
  } );
  $( function() {
    $( "#piece_67" ).draggable();
  } );
  $( function() {
    $( "#piece_68" ).draggable();
  } );
  $( function() {
    $( "#piece_69" ).draggable();
  } );
  $( function() {
    $( "#piece_70" ).draggable();
  } );
  $( function() {
    $( "#piece_71" ).draggable();
  } );
  $( function() {
    $( "#piece_72" ).draggable();
  } );
  $( function() {
    $( "#piece_73" ).draggable();
  } );
  $( function() {
    $( "#piece_74" ).draggable();
  } );
  $( function() {
    $( "#piece_75" ).draggable();
  } );
  $( function() {
    $( "#piece_76" ).draggable();
  } );
  $( function() {
    $( "#piece_77" ).draggable();
  } );
  $( function() {
    $( "#piece_78" ).draggable();
  } );
  $( function() {
    $( "#piece_79" ).draggable();
  } );
  $( function() {
    $( "#piece_80" ).draggable();
  } );
  $( function() {
    $( "#piece_81" ).draggable();
  } );
  $( function() {
    $( "#piece_82" ).draggable();
  } );
  $( function() {
    $( "#piece_83" ).draggable();
  } );
  $( function() {
    $( "#piece_84" ).draggable();
  } );
  $( function() {
  $( "#piece_85" ).draggable();
  } );
  $( function() {
    $( "#piece_86" ).draggable();
  } );
  $( function() {
    $( "#piece_87" ).draggable();
  } );
  $( function() {
  $( "#piece_88" ).draggable();
  } );
  $( function() {
    $( "#piece_89" ).draggable();
  } );
  $( function() {
    $( "#piece_90" ).draggable();
  } );
  $( function() {
    $( "#piece_91" ).draggable();
  } );
  $(".sweet_change_2").click(function(){
    if ($(".sweet_change_2").hasClass("opacity")){
      $(".sweet_change_2").removeClass("opacity");
      $(".promo").removeClass("opacity");
    };
  });
  $(".squirrel").hover(function(){
    if ($(".say_1").hasClass("opacity")){
      $(".say_1").removeClass("opacity");
    };
  });
  $(".owl").hover(function(){
    if ($(".say_2").hasClass("opacity")){
      $(".say_2").removeClass("opacity");
    };
  });
  $(".fox").hover(function(){
    if ($(".say_3").hasClass("opacity")){
      $(".say_3").removeClass("opacity");
    };
  });
});
