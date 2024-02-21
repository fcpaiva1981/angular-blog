function showwhatsnew() {
  for (i=0; i <= 3; i++) {
    if($( "#whatsnew"+i).hasClass('whatsnewhide')) {
      $( "#whatsnew"+i).removeClass('whatsnewhide',10000);         
    }else{
      $( "#whatsnew"+i).addClass('whatsnewhide',10000);    
    }
  }
}

/* ================ */

function CountDownTimer(dt, id)
  {
      var end = new Date(dt);

      var _second = 1000;
      var _minute = _second * 60;
      var _hour = _minute * 60;
      var _day = _hour * 24;
      var timer;

      function showRemaining() {
          var now = new Date();
          var distance = end - now;
          if (distance < 0) {

              clearInterval(timer);
              document.getElementById(id).innerHTML = 'EXPIRED!';

              return;
          }
          var days = Math.floor(distance / _day);
          var hours = Math.floor((distance % _day) / _hour);
          var minutes = Math.floor((distance % _hour) / _minute);
          var seconds = Math.floor((distance % _minute) / _second);

          if(days != 0){
            document.getElementById(id).innerHTML = ' Active in ' + days + ' days ';
          }else{
            document.getElementById(id).innerHTML = ' Active in ' + hours + 'h : ';
            document.getElementById(id).innerHTML += minutes + 'm : ';
            document.getElementById(id).innerHTML += seconds + 's';
          }
      }

      timer = setInterval(showRemaining, 1000);
  }

/* ================ */

function hidegrid(str){
  $( "#hidegrid_"+str).removeClass('displaynone');   
  $( "#hidegrid_"+str).addClass('displayblock');   
  
  $( "#showgrid_"+str).removeClass('displayblock');   
  $( "#showgrid_"+str).addClass('displaynone');   

  $( "#showmagic_"+str).removeClass('displaynone');   
  $( "#showmagic_"+str).addClass('displayblock');   
  
  $( "#hidemagic_"+str).removeClass('displayblock');   
  $( "#hidemagic_"+str).addClass('displaynone');   

}

function showgrid(str){
  $( "#hidegrid_"+str).addClass('displaynone');   
  $( "#hidegrid_"+str).removeClass('displayblock');   
  
  $( "#showgrid_"+str).addClass('displayblock');   
  $( "#showgrid_"+str).removeClass('displaynone');   

  $( "#showmagic_"+str).addClass('displaynone');   
  $( "#showmagic_"+str).removeClass('displayblock');   
  
  $( "#hidemagic_"+str).addClass('displayblock');   
  $( "#hidemagic_"+str).removeClass('displaynone');   

}

/* ================ */

$(".notyet").click(function() {
  alert("Artikel ini belum dirilis");
});

/* ================ */

/* ================ */

function bukasubtopic(str){
  $( "#subtopic"+str).show(); 
}

$(".notyet").click(function() {
  alert("Artikel ini belum dirilis");
});

/* ================ */


function openanswer(str){

  if($( "#boxpertanyaan"+str).hasClass('close')) {

    /* ================ 
    for (let i = 0; i <= 1000; i++) {
      $( "#boxpertanyaan"+i).addClass('close'); 
      $( "#jawaban"+i).hide(); 
      $("#arrowimage"+i).css({'transform': 'rotate(0deg)'});
    }
    */

    $( "#boxpertanyaan"+str).removeClass('close');         
    $( "#jawaban"+str).show(); 
    $("#arrowimage"+str).css({'transform': 'rotate(-180deg)'});
  } else {
    $( "#boxpertanyaan"+str).addClass('close'); 
    $( "#jawaban"+str).hide(); 
    $("#arrowimage"+str).css({'transform': 'rotate(0deg)'});
  }

}


/* ================ */

$("#navigationclose").click(function() {
  $( ".headermenuclose" ).hide("slide", {direction: "left"}, 300);  
  $("#navigationmain").hide("slide", {direction: "left"}, 300);
  $('.paddingleft').addClass("nopaddingleft",300);
  $( ".headermenuopen" ).delay(300).fadeIn(300);
});


$("#navigationopen").click(function() {
  $( ".headermenuclose" ).show("slide", {direction: "left"}, 300);
  $( ".headermenuopen" ).fadeOut(300);
  $( ".navigation" ).show("slide", {direction: "left"}, 300);
  $('.paddingleft').removeClass("nopaddingleft", 300);
});

/* ================ */

function navigationclose(){

  var width = $(window).width(); 
  var height = $(window).height(); 

  if (width < 600 ){
    $( ".headermenuclose" ).hide("slide", {direction: "left"}, 300);  
    $("#navigationmain").hide("slide", {direction: "left"}, 300);
    $('.paddingleft').addClass("nopaddingleft",300);
    $( ".headermenuopen" ).delay(300).fadeIn(300);
  }  
}

/* ================ */

$("#showmenumobile").click(function() {
  $( ".boxdropdownwhite" ).fadeIn();
  $( ".allmaincontent" ).fadeOut();
  /*$('html, body').css('overflowY', 'hidden'); */
});

$("#closeburger").click(function() {
  $( ".boxdropdownwhite" ).fadeOut();
  $( ".allmaincontent" ).show();
  /*$('html, body').css('overflowY', 'auto'); */
});

/* ================ */

$("#menulain").click(function() {
  $( ".menulaindropdown" ).fadeIn();
});

$('body').on('click',function(event){
  if(!$(event.target).is('#menulain')){
    $( ".menulaindropdown" ).fadeOut();
  }
});

/* ================ */

$(window).scroll(function() {
  if ($(this).scrollTop()) {
      $('.backtoptop').fadeIn();
      $('.boxhitam').addClass("boxhitamwithoutpadding");
  } else {
      $('.backtoptop').fadeOut();
      $('.boxhitam').removeClass("boxhitamwithoutpadding");
  }
});

/* ================ */

$(".backtoptop").click(function() {
  $("html, body").animate({scrollTop: 0}, 10);
});

/* ================ */

$(function(){
  var stickyHeaderTop = $('#stickytypeheader').offset().top;

  $(window).scroll(function(){
          if( $(window).scrollTop() > stickyHeaderTop ) {
                  $('#stickytypeheader').css({position: 'sticky', top: '0px',backgroundColor:'rgba(12,22,45,0.9)'});
                  $('.navigasikonten').addClass("noborderbottom");
                  
          } else {
                  $('#stickytypeheader').css({position: 'static', top: '0px',backgroundColor:'rgba(12,22,45,0.0)'});
                  $('.navigasikonten').removeClass("noborderbottom");
          }
  });
});

/* ================ */

$("#anchor1").click(function() {
  $('html, body').animate({scrollTop: $("#artikel").offset().top}, 10);
  $('#anchor1').addClass("counterboxhover");
  $('#anchor2').removeClass("counterboxhover");
  $('#anchor3').removeClass("counterboxhover");
  $('#anchor4').removeClass("counterboxhover");
  $('#anchor5').removeClass("counterboxhover");

  
});

$("#anchor2").click(function() {
  $('html, body').animate({scrollTop: $("#designer").offset().top}, 10);
  $('#anchor1').removeClass("counterboxhover");
  $('#anchor2').addClass("counterboxhover");
  $('#anchor3').removeClass("counterboxhover");
  $('#anchor4').removeClass("counterboxhover");
  $('#anchor5').removeClass("counterboxhover");
});

$("#anchor3").click(function() {
  $('html, body').animate({scrollTop: $("#quote").offset().top}, 10);
  $('#anchor1').removeClass("counterboxhover");
  $('#anchor2').removeClass("counterboxhover");
  $('#anchor3').addClass("counterboxhover");
  $('#anchor4').removeClass("counterboxhover");
  $('#anchor5').removeClass("counterboxhover");
});

$("#anchor4").click(function() {
  $('html, body').animate({scrollTop: $("#website").offset().top}, 10);
  $('#anchor1').removeClass("counterboxhover");
  $('#anchor2').removeClass("counterboxhover");
  $('#anchor3').removeClass("counterboxhover");
  $('#anchor4').addClass("counterboxhover");
  $('#anchor5').removeClass("counterboxhover");
});

$("#anchor5").click(function() {
  $('html, body').animate({scrollTop: $("#video").offset().top}, 10);
  $('#anchor1').removeClass("counterboxhover");
  $('#anchor2').removeClass("counterboxhover");
  $('#anchor3').removeClass("counterboxhover");
  $('#anchor4').removeClass("counterboxhover");
  $('#anchor5').addClass("counterboxhover");
});

$( document ).ready(function() {
  $('#semua_box').addClass("semuakonten");
  $('#semua_icon').addClass("putih");
  $('#semua_text').addClass("putih");
});


$("#semua").click(function() {
  $( ".contentartikel").show();
  $( ".contentvideo").show();
  $( ".contentquotes").show();
  $( ".contentportfolio").show();
  $( ".contentwebsite").show();
  $( ".contentresources").show();
  $( ".contenttools").show();

  $('#semua_box').addClass("semuakonten");
  $('#semua_icon').addClass("putih");
  $('#semua_text').addClass("putih");

  $('#artikel_box').removeClass("warnaartikel");
  $('#artikel_icon').removeClass("putih");
  $('#artikel_text').removeClass("putih");


  $('#website_box').removeClass("inspirasiwebsite");
  $('#website_icon').removeClass("putih");
  $('#website_text').removeClass("putih");


  $('#video_box').removeClass("video");
  $('#video_icon').removeClass("putih");
  $('#video_text').removeClass("putih");


  $('#portfolio_box').removeClass("personalweb");
  $('#portfolio_icon').removeClass("putih");
  $('#portfolio_text').removeClass("putih");


  $('#quotes_box').removeClass("quotes");
  $('#quotes_icon').removeClass("putih");
  $('#quotes_text').removeClass("putih");

  $('#resources_box').removeClass("resources");
  $('#resources_icon').removeClass("putih");
  $('#resources_text').removeClass("putih");

  $('#tools_box').removeClass("tools");
  $('#tools_icon').removeClass("putih");
  $('#tools_text').removeClass("putih");


});

$("#artikel").click(function() {
  $( ".contentartikel").show();
  $( ".contentvideo").hide();
  $( ".contentquotes").hide();
  $( ".contentportfolio").hide();
  $( ".contentwebsite").hide();
  $( ".contentresources").hide();
  $( ".contenttools").hide();

  $('#semua_box').removeClass("semuakonten");
  $('#semua_icon').removeClass("putih");
  $('#semua_text').removeClass("putih");

  $('#artikel_box').addClass("warnaartikel");
  $('#artikel_icon').addClass("putih");
  $('#artikel_text').addClass("putih");


  $('#website_box').removeClass("inspirasiwebsite");
  $('#website_icon').removeClass("putih");
  $('#website_text').removeClass("putih");


  $('#video_box').removeClass("video");
  $('#video_icon').removeClass("putih");
  $('#video_text').removeClass("putih");


  $('#portfolio_box').removeClass("personalweb");
  $('#portfolio_icon').removeClass("putih");
  $('#portfolio_text').removeClass("putih");


  $('#quotes_box').removeClass("quotes");
  $('#quotes_icon').removeClass("putih");
  $('#quotes_text').removeClass("putih");

  $('#resources_box').removeClass("resources");
  $('#resources_icon').removeClass("putih");
  $('#resources_text').removeClass("putih");

  $('#tools_box').removeClass("tools");
  $('#tools_icon').removeClass("putih");
  $('#tools_text').removeClass("putih");

});

$("#website").click(function() {
  $( ".contentartikel").hide();
  $( ".contentvideo").hide();
  $( ".contentquotes").hide();
  $( ".contentportfolio").hide();
  $( ".contentwebsite").show();
  $( ".contentresources").hide();
  $( ".contenttools").hide();

  $('#semua_box').removeClass("semuakonten");
  $('#semua_icon').removeClass("putih");
  $('#semua_text').removeClass("putih");

  $('#artikel_box').removeClass("warnaartikel");
  $('#artikel_icon').removeClass("putih");
  $('#artikel_text').removeClass("putih");


  $('#website_box').addClass("inspirasiwebsite");
  $('#website_icon').addClass("putih");
  $('#website_text').addClass("putih");


  $('#video_box').removeClass("video");
  $('#video_icon').removeClass("putih");
  $('#video_text').removeClass("putih");


  $('#portfolio_box').removeClass("personalweb");
  $('#portfolio_icon').removeClass("putih");
  $('#portfolio_text').removeClass("putih");


  $('#quotes_box').removeClass("quotes");
  $('#quotes_icon').removeClass("putih");
  $('#quotes_text').removeClass("putih");

  $('#resources_box').removeClass("resources");
  $('#resources_icon').removeClass("putih");
  $('#resources_text').removeClass("putih");

  $('#tools_box').removeClass("tools");
  $('#tools_icon').removeClass("putih");
  $('#tools_text').removeClass("putih");

});

$("#video").click(function() {
  $( ".contentartikel").hide();
  $( ".contentvideo").show();
  $( ".contentquotes").hide();
  $( ".contentportfolio").hide();
  $( ".contentwebsite").hide();
  $( ".contentresources").hide();
  $( ".contenttools").hide();

  $('#semua_box').removeClass("semuakonten");
  $('#semua_icon').removeClass("putih");
  $('#semua_text').removeClass("putih");

  $('#artikel_box').removeClass("warnaartikel");
  $('#artikel_icon').removeClass("putih");
  $('#artikel_text').removeClass("putih");


  $('#website_box').removeClass("inspirasiwebsite");
  $('#website_icon').removeClass("putih");
  $('#website_text').removeClass("putih");


  $('#video_box').addClass("video");
  $('#video_icon').addClass("putih");
  $('#video_text').addClass("putih");


  $('#portfolio_box').removeClass("personalweb");
  $('#portfolio_icon').removeClass("putih");
  $('#portfolio_text').removeClass("putih");


  $('#quotes_box').removeClass("quotes");
  $('#quotes_icon').removeClass("putih");
  $('#quotes_text').removeClass("putih");

  $('#resources_box').removeClass("resources");
  $('#resources_icon').removeClass("putih");
  $('#resources_text').removeClass("putih");

  $('#tools_box').removeClass("tools");
  $('#tools_icon').removeClass("putih");
  $('#tools_text').removeClass("putih");


});

$("#portfolio").click(function() {
  $( ".contentartikel").hide();
  $( ".contentvideo").hide();
  $( ".contentquotes").hide();
  $( ".contentportfolio").show();
  $( ".contentwebsite").hide();
  $( ".contentresources").hide();
  $( ".contenttools").hide();

  $('#semua_box').removeClass("semuakonten");
  $('#semua_icon').removeClass("putih");
  $('#semua_text').removeClass("putih");

  $('#artikel_box').removeClass("warnaartikel");
  $('#artikel_icon').removeClass("putih");
  $('#artikel_text').removeClass("putih");


  $('#website_box').removeClass("inspirasiwebsite");
  $('#website_icon').removeClass("putih");
  $('#website_text').removeClass("putih");


  $('#video_box').removeClass("video");
  $('#video_icon').removeClass("putih");
  $('#video_text').removeClass("putih");


  $('#portfolio_box').addClass("personalweb");
  $('#portfolio_icon').addClass("putih");
  $('#portfolio_text').addClass("putih");


  $('#quotes_box').removeClass("quotes");
  $('#quotes_icon').removeClass("putih");
  $('#quotes_text').removeClass("putih");

  $('#resources_box').removeClass("resources");
  $('#resources_icon').removeClass("putih");
  $('#resources_text').removeClass("putih");

  $('#tools_box').removeClass("tools");
  $('#tools_icon').removeClass("putih");
  $('#tools_text').removeClass("putih");

});

$("#quotes").click(function() {
  $( ".contentartikel").hide();
  $( ".contentvideo").hide();
  $( ".contentquotes").show();
  $( ".contentportfolio").hide();
  $( ".contentwebsite").hide();
  $( ".contentresources").hide();
  $( ".contenttools").hide();

  $('#semua_box').removeClass("semuakonten");
  $('#semua_icon').removeClass("putih");
  $('#semua_text').removeClass("putih");

  $('#artikel_box').removeClass("warnaartikel");
  $('#artikel_icon').removeClass("putih");
  $('#artikel_text').removeClass("putih");


  $('#website_box').removeClass("inspirasiwebsite");
  $('#website_icon').removeClass("putih");
  $('#website_text').removeClass("putih");


  $('#video_box').removeClass("video");
  $('#video_icon').removeClass("putih");
  $('#video_text').removeClass("putih");


  $('#portfolio_box').removeClass("personalweb");
  $('#portfolio_icon').removeClass("putih");
  $('#portfolio_text').removeClass("putih");


  $('#quotes_box').addClass("quotes");
  $('#quotes_icon').addClass("putih");
  $('#quotes_text').addClass("putih");

  $('#resources_box').removeClass("resources");
  $('#resources_icon').removeClass("putih");
  $('#resources_text').removeClass("putih");

  $('#tools_box').removeClass("tools");
  $('#tools_icon').removeClass("putih");
  $('#tools_text').removeClass("putih");

});




$("#resources").click(function() {
  $( ".contentartikel").hide();
  $( ".contentvideo").hide();
  $( ".contentquotes").hide();
  $( ".contentportfolio").hide();
  $( ".contentwebsite").hide();
  $( ".contentresources").show();
  $( ".contenttools").hide();

  $('#semua_box').removeClass("semuakonten");
  $('#semua_icon').removeClass("putih");
  $('#semua_text').removeClass("putih");

  $('#artikel_box').removeClass("warnaartikel");
  $('#artikel_icon').removeClass("putih");
  $('#artikel_text').removeClass("putih");


  $('#website_box').removeClass("inspirasiwebsite");
  $('#website_icon').removeClass("putih");
  $('#website_text').removeClass("putih");


  $('#video_box').removeClass("video");
  $('#video_icon').removeClass("putih");
  $('#video_text').removeClass("putih");


  $('#portfolio_box').removeClass("personalweb");
  $('#portfolio_icon').removeClass("putih");
  $('#portfolio_text').removeClass("putih");


  $('#quotes_box').removeClass("quotes");
  $('#quotes_icon').removeClass("putih");
  $('#quotes_text').removeClass("putih");

  $('#resources_box').addClass("resources");
  $('#resources_icon').addClass("putih");
  $('#resources_text').addClass("putih");

  $('#tools_box').removeClass("tools");
  $('#tools_icon').removeClass("putih");
  $('#tools_text').removeClass("putih");

});


$("#tools").click(function() {
  $( ".contentartikel").hide();
  $( ".contentvideo").hide();
  $( ".contentquotes").hide();
  $( ".contentportfolio").hide();
  $( ".contentwebsite").hide();
  $( ".contentresources").hide();
  $( ".contenttools").show();

  $('#semua_box').removeClass("semuakonten");
  $('#semua_icon').removeClass("putih");
  $('#semua_text').removeClass("putih");

  $('#artikel_box').removeClass("warnaartikel");
  $('#artikel_icon').removeClass("putih");
  $('#artikel_text').removeClass("putih");


  $('#website_box').removeClass("inspirasiwebsite");
  $('#website_icon').removeClass("putih");
  $('#website_text').removeClass("putih");


  $('#video_box').removeClass("video");
  $('#video_icon').removeClass("putih");
  $('#video_text').removeClass("putih");


  $('#portfolio_box').removeClass("personalweb");
  $('#portfolio_icon').removeClass("putih");
  $('#portfolio_text').removeClass("putih");


  $('#quotes_box').removeClass("quotes");
  $('#quotes_icon').removeClass("putih");
  $('#quotes_text').removeClass("putih");

  $('#resources_box').removeClass("resources");
  $('#resources_icon').removeClass("putih");
  $('#resources_text').removeClass("putih");

  $('#tools_box').addClass("tools");
  $('#tools_icon').addClass("putih");
  $('#tools_text').addClass("putih");

});