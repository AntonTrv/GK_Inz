let els = Array.from(document.querySelectorAll('.slider'));
let count = 0;
let el = document.getElementsByClassName('text-item-container');
let next = document.getElementsByClassName('next');
let prev = document.getElementsByClassName('prev');
let btnTxt = ['Подробнее о компании', 'Подробнее об услугах', 'Подробнее о проектах'];
let h2Txt = ['О компании', 'Услуги','Проекты'];
let pTxt = ['Специализируемся на выполнении полного комплекса работ по обеспечению надежной инженерной защиты зданий и сооружений с 1999 года.',
            'Предоставляем услуги по комлексным инженерным изысканиям, проектированию и строительству зданий исооружений любой сложности.',
            'Имеем больший опыт по проектированию и строительству сооружений в различных регионах России.'];
let services = Array.from(document.querySelectorAll('article'));
let moreBtnLinks = ['about.html','services.html','projects.html'];
$(document).ready( function(){

  $('#heading-and-btn-container',els[count]).css({transform:'translateX(0)', opacity: '1'});
  $('.text-item-container',els[count]).css({transform:'translateX(0)', opacity: '1'});
  $('#contacts-wrapper').css({transform:'translateX(0)', opacity: '1'});
  $('#mobileMoreLeftBtn a').prop("href", moreBtnLinks[count]);
  $('#mobileMoreRightBtn a').prop("href", moreBtnLinks[count]);
  $('.more-btn-link').prop("action", moreBtnLinks[count]);



  $('.next').on('click', function(){
    if(count<els.length-1){
    $('.more-btn-link #more span').text(btnTxt[count]).css('color','white');

    //mobileMoreLeftBtn
    $('#mobileMoreLeftBtn a').text(btnTxt[count]).css({color:'white'});



    count++;
    //more button text
    $('.more-btn-link #more span').text(btnTxt[count]).css('color','white');
    //main-desktop-more
    $('.more-btn-link').prop("action", moreBtnLinks[count]);
    //mobileMoreLeftBtn
    $('#mobileMoreLeftBtn a').text(btnTxt[count]);
    $('#mobileMoreLeftBtn a').prop("href", moreBtnLinks[count]);
    //mobileMoreRightBtn
    $('#mobileMoreRightBtn a').prop("href", moreBtnLinks[count]);
    //h2Txt
    $('#bottom-info-container h2').text(h2Txt[count]);
    //pTxt
    $('#bottom-info-container p').text(pTxt[count]);
    //pagination
    $(`#number-switch span`).css('transform',`translateY(-${count*100}%)`);
    //previewPicture
      $('#preview-picture-container #preview-picture-1').css('width','0%');
      $('#preview-picture-container #preview-picture-2').css('width','100%');




    $(els[count]).css('transform',`translate(-${count*100}%)`);
    $('.text-item-container',els[count]).css({transform:'translateX(0)', opacity: '1'});
    $('#heading-and-btn-container',els[count]).css({transform:'translateX(0)', opacity: '1'});
  }
    if(count>els.length-1){
      count = els.length-1;
    }
  })
  $('.prev').on('click', function(){
    if(count>0){
    $('#heading-and-btn-container',els[count]).css({transform:'translateX(100%)', opacity: '1'});
    $('.text-item-container',els[count]).css({transform:'translateX(100%)', opacity: '1'});

    $(els[count]).css('transform',`translate(${count*100}%)`);

    count--;
    //btnTxt
    $('.more-btn-link #more span').text(btnTxt[count]).css('color','white');
    //main-desktop-more
    $('.more-btn-link').prop("action", moreBtnLinks[count]);
    //mobileMoreLeftBtn
    $('#mobileMoreLeftBtn a').text(btnTxt[count]);
    $('#mobileMoreLeftBtn a').prop("href", moreBtnLinks[count]);
    //mobileMoreRightBtn
    $('#mobileMoreRightBtn a').prop("href", moreBtnLinks[count]);
    //h2Txt
    $('#bottom-info-container h2').text(h2Txt[count]);
    //pTxt
    $('#bottom-info-container p').text(pTxt[count]);
    //pagination
    $(`#number-switch span`).css('transform',`translateY(-${count*100}%)`);
    //previewPicture
    switch(count){
      case 0 :
        $('#preview-picture-container #preview-picture-2').css('width','0%');
        $('#preview-picture-container #preview-picture-1').css('width','100%');

    }



    $('#heading-and-btn-container',els[count]).fadeIn();
    $('.text-item-container',els[count]).fadeIn();
    }
    if(count<0){
      count=0;
    }
  });

  //play-btn
  $('.play-btn').children().on('click',function(){
    $('#video-container').fadeIn();
  });
  $('#close-video').on('click',function(){
    $('#video-container').fadeOut();
    $('video')[0].pause();
  })

  //mobileMenu
  //burger
  $('#burger').on('click', function(){
    $('#mobileMenu').css('display', 'flex');
  });
  //close cross mobile
  $('#mobileMenu button').on('click', function(){
    $('#mobileMenu').css('display', 'none');
  });

  //E-mail Ajax Send
$("#feedback").submit(function() { //Change
  var th = $(this);
  $.ajax({
    type: "POST",
    url: "mail.php", //Change
    data: th.serialize()
  }).done(function() {
    alert("Сообщение отправлено!");
    setTimeout(function() {
      // Done Functions
      th.trigger("reset");
    }, 1000);
  });
  return false;
});
//reveal on scroll effect
$(window).scroll( function(){

        /* Check the location of each desired element */
        $('.scroll-reveal').each( function(i){

            let topOfObject = $(this).offset().top-300;
            let bottomOfWindow = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottomOfWindow > topOfObject ){
                $(this).css('transform','translate(0)');
              }
            else if( bottomOfWindow < topOfObject ) {
              $(this).css('transform','translateY(60vh)');
            }

     });




 });

 //tab-menu
 let tabEls = Array.from(document.querySelectorAll('.tab-el'));
 $(tabEls[0]).css({color:'#aa9685', opacity:'1'});

 let tabSections = Array.from(document.querySelectorAll('.project-tab-section'));
 $(tabSections[0]).css({display:'block'}).siblings().css({display:'none'});

   for(let i = 0; i<tabEls.length; i++){
  $(tabEls[i]).on('click',function(){
    $(tabEls[i]).css({color:'#aa9685', opacity:'1'}).siblings().css({color:'black', opacity:'0.5'});

   switch (tabEls[i]){
     case tabEls[0]:
     $('#tab-menu-line').css('left','16.66%');
     $(tabSections[0]).show().siblings().hide();
     $('.project-item').css('transform','translateY(70vh)');

     break;
     case tabEls[1]:
     $('#tab-menu-line').css('left','49.99%');
     $(tabSections[1]).show().siblings().hide();
     $('.project-item').css('transform','translateY(70vh)');
     break;
     case tabEls[2]:
     $('#tab-menu-line').css('left','83.33%');
     $(tabSections[2]).show().siblings().hide();
    $('.project-item').css('transform','translateY(70vh)');
     break;
   }
   })
   }



   $('#services-prev').on('click',function(){
     if(count>0) {
       count--;
       $('.services-slide').css('transform',`translateX(-${count*100}%)`);
       $('#services-articles article').css('transform',`translateX(-${count*100}%)`);
       $('.services-item',services[count]).show();
     };
    });

   $('#services-next').on('click',function(){
      count++;
      switch (count) {
        case 1: $('.services-slide').css('transform',`translateX(-${count*100}%)`);
                $('#services-articles article').css('transform',`translateX(-${count*100}%)`);
                var thisElement = $('.services-item',services[count-1]);
                setTimeout(function () {
                  thisElement.hide();
                }, 1000);
          break;
        case 2: $('.services-slide').css('transform',`translateX(-${count*100}%)`);
                $('#services-articles article').css('transform',`translateX(-${count*100}%)`);
                var thisElement = $('.services-item',services[count-1]);
                setTimeout(function () {
                  thisElement.hide();
                }, 1000);
          break;
        case 3: count = 0;
                $('.services-item').show();
                $('.services-slide').css('transform',`translateX(0)`);
                $('#services-articles article').css('transform',`translateX(0)`);
      }
    });

});
