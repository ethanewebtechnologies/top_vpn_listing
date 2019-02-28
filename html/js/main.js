/*/////////////////////////////////////////////////////////////////////////
 //                                                                       //
 //       DESIGNED & DEVELOPED BY ETHANE TECHNOLOGIES PVT. LTD.           //
 //                                                                       //
 //   YOU ARE UNDER SURVEILLANCE OF ETHANE TECHNOLOGIES PRIVATE LIMITED   //
 //                                                                       //
 // ILLEGAL HACKING ATTEMPT IS SUBJECT TO A SERIOUS INTERNATIONAL CRIME   //
 //                                                                       // 
 /////////////////////////////////////////////////////////////////////////
 */
/*Author: Sumit Sharma*/
$("img.lazyload").lazyload();
//    $(window).bind("load", function() {
//    var timeout = setTimeout(function() { $("img.lazyload").lazyload(); }, 1500);
//});


window.onscroll = function () {
    myFunction();
    myFunction1();
};

var navbar = document.getElementById("stick_bar");
var sticky = 80;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

var navbar1 = document.getElementById("fix-scroll-bar");
var sticky1 = 200;

function myFunction1() {
    if (window.pageYOffset >= sticky1) {
        navbar1.classList.add("sticky");
    } else {
        navbar1.classList.remove("sticky");
    }
}
//$(document).ready(function () {
//   var $anchor = $("#scroller-anchor");   
//    var $scroller = $('#sticky');
//    $(window).scroll(function () {
//           var top = $(window).scrollTop();
//        var st = $(window).scrollTop();
//       var ot = $anchor.offset().top;
//        if (st > ot) {
//            $scroller.css({
//               "position": "fixed",
//               "top": "10px"
//            });
//        } else {
//           $scroller.css({
//               "position": "",
//               "top": ""
//           });
//        }
//   });
//   
//   
//});
  $(document).ready(function () {
        $('.left-sidebar-inner')
                .theiaStickySidebar({
                    additionalMarginTop: 130,
                    additionalMarginBottom: 30
                });
               
               
    });
$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".scroll_tags>ul>li>a").on('click', function(event) {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;
    

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 100
    }, 900, function(){
   
//      // Add hash (#) to URL when done scrolling (default click behavior)
//      window.location.hash = hash;
    });
  });
})

$(function () {
    var aProTabLi = $('.custom-right-bar li'),
            aProBar = $('.pro-bar');

    var sTabT = $('.custom-right-bar').offset().top;
    var sSeriesT = $('.f-summary').offset().top;
    var sDesignT = $('.f-review').offset().top;
    var sIntroT = $('.f-focus').offset().top;
    var sListT = $('.f-portfolio').offset().top;
    var sDataT = $('.f-services').offset().top;

    function arClas(st) {
        if (st < (sSeriesT - 10)) {
            aProTabLi.removeClass('active');
        }
        if (st >= (sSeriesT - 100) && st < (sDesignT)) {
            aProTabLi.removeClass('active');
            aProTabLi.eq(0).addClass('active');
        }
        if (st >= (sDesignT - 100) && st < (sIntroT)) {
            aProTabLi.removeClass('active');
            aProTabLi.eq(1).addClass('active');
        }
        if (st >= (sIntroT - 200) && st < (sListT)) {
            aProTabLi.removeClass('active');
            aProTabLi.eq(2).addClass('active');
        }
        if (st >= (sListT - 100) && st < (sDataT)) {
            aProTabLi.removeClass('active');
            aProTabLi.eq(3).addClass('active');
        }
        if (st >= (sDataT - 100)) {
            aProTabLi.removeClass('active');
            aProTabLi.eq(4).addClass('active');
        }
    }
       $(window).scroll(function () {
        var sT = $(window).scrollTop();
        arClas(sT);
        if (sT > sTabT) {
            $('#fix-scroll-bar').addClass('fix');
        } else {
            $('#fix-scroll-bar').removeClass('fix');
        }
    });
       aProTabLi.click(function () {
        sTar = $(this).attr('target');
        aProBar.filter(function () {
            if ($(this).attr('tlink') == sTar) {
                var sT = $(this).offset().top;
                $('body,html').animate({'scrollTop': sT - 200}, 400);
            }
        });
    });
});
function showSnackbar(param) {
    var snackbarHTML = document.querySelectorAll(".snackbar"),
        element;
    for (element of snackbarHTML) {
        // Check if param is an Event or string
        if (param instanceof Event && param.currentTarget.hasAttribute("data-text")) {
            element.innerHTML = param.currentTarget.getAttribute("data-text");
        } else if (typeof param == "string" && !Utils.is_empty(param)) {
            element.innerHTML = param;
        }

        element.classList.add("snackbar-show");

        setTimeout(function() {
            element.classList.remove("snackbar-show");
        }, 5000);
    }
}
// Usos
// Opcion 1: Mostrara el texto dentro del HTML del snackbar
showSnackbar();
// Opcion 1: Mostrara el texto del atributo data-text del disparador
document.querySelector("#snackbar-trigger").addEventListener("click", showSnackbar);

//      document.querySelector('.sweet-1').onclick = function(){
//        swal("Here's a message!");
//      };
//
//      document.querySelector('.sweet-2').onclick = function(){
//        swal("Here's a message!", "It's pretty, isn't it?")
//      };
//
      document.querySelector('.sweet-3').onclick = function(){
        swal("Good job!", "You clicked the button!", "success");
      };

//      document.querySelector('.sweet-4').onclick = function(){
//        swal({
//          title: "Are you sure?",
//          text: "You will not be able to recover this imaginary file!",
//          type: "warning",
//          showCancelButton: true,
//          confirmButtonClass: 'btn-danger',
//          confirmButtonText: 'Yes, delete it!',
//          closeOnConfirm: false,
//          //closeOnCancel: false
//        },
//        function(){
//          swal("Deleted!", "Your imaginary file has been deleted!", "success");
//        });
//      };

//      document.querySelector('.sweet-5').onclick = function(){
//        swal({
//          title: "Are you sure?",
//          text: "You will not be able to recover this imaginary file!",
//          type: "warning",
//          showCancelButton: true,
//          confirmButtonClass: 'btn-danger',
//          confirmButtonText: 'Yes, delete it!',
//          cancelButtonText: "No, cancel plx!",
//          closeOnConfirm: false,
//          closeOnCancel: false
//        },
//        function(isConfirm){
//          if (isConfirm){
//            swal("Deleted!", "Your imaginary file has been deleted!", "success");
//          } else {
//            swal("Cancelled", "Your imaginary file is safe :)", "error");
//          }
//        });
//      };
//
//      document.querySelector('.sweet-6').onclick = function(){
//        swal({
//          title: "Sweet!",
//          text: "Here's a custom image.",
//          imageUrl: 'assets/thumbs-up.jpg'
//        });
//      };
//
//      document.querySelector('.sweet-7').onclick = function () {
//        swal({
//          title: "An input!",
//          text: "Write something interesting:",
//          type: "input",
//          showCancelButton: true,
//          closeOnConfirm: false,
//          animation: "slide-from-top",
//          inputPlaceholder: "Write something"
//        }, function (inputValue) {
//          if (inputValue === false) return false;
//          if (inputValue === "") {
//            swal.showInputError("You need to write something!");
//            return false
//          }
//          swal("Nice!", "You wrote: " + inputValue, "success");
//        });
//      };
//
//      document.querySelector('.sweet-8').onclick = function () {
//        swal({
//          title: "Ajax request example",
//          text: "Submit to run ajax request",
//          type: "info",
//          showCancelButton: true,
//          closeOnConfirm: false,
//          showLoaderOnConfirm: true
//        }, function () {
//          setTimeout(function () {
//            swal("Ajax request finished!");
//          }, 2000);
//        });
//      };
//
//      document.querySelector('.sweet-10').onclick = function(){
//        swal({
//          title: "Are you sure?",
//          text: "You will not be able to recover this imaginary file!",
//          type: "info",
//          showCancelButton: true,
//          confirmButtonClass: 'btn-primary',
//          confirmButtonText: 'Primary!'
//        });
//      };
//
//      document.querySelector('.sweet-11').onclick = function(){
//        swal({
//          title: "Are you sure?",
//          text: "You will not be able to recover this imaginary file!",
//          type: "info",
//          showCancelButton: true,
//          confirmButtonClass: 'btn-info',
//          confirmButtonText: 'Info!'
//        });
//      };
//
//      document.querySelector('.sweet-12').onclick = function(){
//        swal({
//          title: "Are you sure?",
//          text: "You will not be able to recover this imaginary file!",
//          type: "success",
//          showCancelButton: true,
//          confirmButtonClass: 'btn-success',
//          confirmButtonText: 'Success!'
//        });
//      };
//
//      document.querySelector('.sweet-13').onclick = function(){
//        swal({
//          title: "Are you sure?",
//          text: "You will not be able to recover this imaginary file!",
//          type: "warning",
//          showCancelButton: true,
//          confirmButtonClass: 'btn-warning',
//          confirmButtonText: 'Warning!'
//        });
//      };
//
//      document.querySelector('.sweet-14').onclick = function(){
//        swal({
//          title: "Are you sure?",
//          text: "You will not be able to recover this imaginary file!",
//          type: "error",
//          showCancelButton: true,
//          confirmButtonClass: 'btn-danger',
//          confirmButtonText: 'Danger!'
//        });
//      };
    