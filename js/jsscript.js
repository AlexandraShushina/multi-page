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
      $(".container_trees .tree_3").css("z-index","1");
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

// Анимация формы
  function clear() {
    document.getElementsById('form')[0].reset();
  }

// Анимация страницы экскурсии
  $(".rectangle_long_2").hover(function(){
    $(".tree_2_long").toggleClass("tree_2_long_green");
  });
  $(".rectangle_long_2").on("click", function(){
    $(".tree_with_people").toggleClass("tree_with_people_z");
    $(".Ann, .Ann_text, .Artyom, .Artyom_text, .Anatoliy, .Anatoliy_text, .Peter, .Peter_text, .Julia, .Julia_text, .Pavel, .Pavel_text, .Nina, .Nina_text").toggleClass("display");
  });
  $(".rectangle_long_2").hover(function(){
    $(".tree_2_long_z").toggleClass(".tree_2_long_z_green");
  });
  $(".plan_piece_1").hover(function() {
    $(".Ann_block").toggleClass("Ann_block Ann_block_hover");
    $(".Ann_block_mouseout").toggleClass("Ann_block_mouseout Ann_block_hover");
  });
  $(".plan_piece_1").mouseout(function() {
    $(".Ann_block_hover").toggleClass("Ann_block_hover Ann_block_mouseout");
  });
  $(".plan_piece_2").hover(function() {
    $(".Artyom_block").toggleClass("Artyom_block Artyom_block_hover");
    $(".Artyom_block_mouseout").toggleClass("Artyom_block_mouseout Artyom_block_hover");
  });
  $(".plan_piece_2").mouseout(function() {
    $(".Artyom_block_hover").toggleClass("Artyom_block_hover Artyom_block_mouseout");
  });
  $(".plan_piece_3").hover(function() {
    $(".Anatoliy_block").toggleClass("Anatoliy_block Anatoliy_block_hover");
    $(".Anatoliy_block_mouseout").toggleClass("Anatoliy_block_mouseout Anatoliy_block_hover");
  });
  $(".plan_piece_3").mouseout(function() {
    $(".Anatoliy_block_hover").toggleClass("Anatoliy_block_hover Anatoliy_block_mouseout");
  });
  $(".plan_piece_4").hover(function() {
    $(".Peter_block").toggleClass("Peter_block Peter_block_hover");
    $(".Peter_block_mouseout").toggleClass("Peter_block_mouseout Peter_block_hover");
  });
  $(".plan_piece_4").mouseout(function() {
    $(".Peter_block_hover").toggleClass("Peter_block_hover Peter_block_mouseout");
  });
  $(".plan_piece_5").hover(function() {
    $(".Julia_block").toggleClass("Julia_block Julia_block_hover");
    $(".Julia_block_mouseout").toggleClass("Julia_block_mouseout Julia_block_hover");
  });
  $(".plan_piece_5").mouseout(function() {
    $(".Julia_block_hover").toggleClass("Julia_block_hover Julia_block_mouseout");
  });
  $(".plan_piece_7").hover(function() {
    $(".Pavel_block").toggleClass("Pavel_block Pavel_block_hover");
    $(".Pavel_block_mouseout").toggleClass("Pavel_block_mouseout Pavel_block_hover");
  });
  $(".plan_piece_7").mouseout(function() {
    $(".Pavel_block_hover").toggleClass("Pavel_block_hover Pavel_block_mouseout");
  });
  $(".plan_piece_6").hover(function() {
    $(".Nina_block").toggleClass("Nina_block Nina_block_hover");
    $(".Nina_block_mouseout").toggleClass("Nina_block_mouseout Nina_block_hover");
  });
  $(".plan_piece_6").mouseout(function() {
    $(".Nina_block_hover").toggleClass("Nina_block_hover Nina_block_mouseout");
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

  // Анимация событий
  $("a.scrollto").click(function () {
    elementClick = $(this).attr("href")
    destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
    return false;
  });
  $('.poster_rectangle_2').click(function(){
	  var left = $('#poster_1 > *');
	  var right = $('#poster_2 > *');
	  $('#poster_1').append(right);
	  $('#poster_2').append(left);
	   return false;
  });
  $('.poster_rectangle_2').click(function(){
    var left = $('#description_1 > *');
    var right = $('#description_2 > *');
    $('#description_1').append(right);
    $('#description_2').append(left);
     return false;
  });
  $('.poster_rectangle_3').click(function(){
    var left = $('#poster_1 > *');
    var right = $('#poster_3 > *');
    $('#poster_1').append(right);
    $('#poster_3').append(left);
    return false;
  });
  $('.poster_rectangle_3').click(function(){
    var left = $('#description_1 > *');
    var right = $('#description_3 > *');
    $('#description_1').append(right);
    $('#description_3').append(left);
     return false;
  });
  $('.poster_rectangle_5').click(function(){
	  var left = $('#poster_4 > *');
	  var right = $('#poster_5 > *');
	  $('#poster_4').append(right);
	  $('#poster_5').append(left);
	   return false;
  });
  $('.poster_rectangle_5').click(function(){
    var left = $('#description_4 > *');
    var right = $('#description_5 > *');
    $('#description_4').append(right);
    $('#description_5').append(left);
     return false;
  });
  $('.poster_rectangle_6').click(function(){
    var left = $('#poster_4 > *');
    var right = $('#poster_6 > *');
    $('#poster_4').append(right);
    $('#poster_6').append(left);
    return false;
  });
  $('.poster_rectangle_6').click(function(){
    var left = $('#description_4 > *');
    var right = $('#description_6 > *');
    $('#description_4').append(right);
    $('#description_6').append(left);
     return false;
  });
  $(".events_tree_rectangle").hover(function(){
    $(".events_tree").toggleClass("events_tree_green");
  });
  $(".events_tree_rectangle").on("click", function(){
    $(".events_tree").toggleClass("events_tree_z");
  });
  $(".events_tree_rectangle").hover(function(){
    $(".events_tree_z").toggleClass("events_tree_green_z");
  });

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
