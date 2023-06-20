//JS TOP NAV BAR RESPONSIVE//
(function($) { 
    $(function() { 
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        $('.dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
      $('html').click(function() {
        $('.nav-dropdown').hide();
      });
      $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
      });
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });
    }); 
  })(jQuery);
  
  //JS PRICING CARD//
  function check() {
    var checkBox = document.getElementById("checbox");
    var text1 = document.getElementsByClassName("text1");
    var text2 = document.getElementsByClassName("text2");
    var text3 = document.getElementsByClassName("text_for_personal");
    for (var i = 0; i < text1.length; i++) {
      if (checkBox.checked == true) {
        text1[i].style.display = "block";
         text2[i].style.display = "none";
        document.getElementById("text_for_personal").style.color="black";
      document.getElementById("text_for_bussines").style.color="#cd2701";
      }
      else if (checkBox.checked == false) {
        text1[i].style.display = "none";
        text2[i].style.display = "block";
        document.getElementById("text_for_personal").style.color="#00cc99";
         document.getElementById("text_for_bussines").style.color="black";
      } 
      }
    }
  check();

  
  
  