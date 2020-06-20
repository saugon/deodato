! function() {
  "use strict";
  $("a").on("click", function(e) {
    if ("" !== this.hash) {
      e.preventDefault();
      var n = this.hash;
      $("html, body").animate({
        scrollTop: $(n).offset().top - 100
      }, 800, function() {
        return !1
      })
    }
  });
  $("#mnv-main-nav a:not(.mnv-nav-toggle)").on("click", function() {
    $("body").removeClass("menu-show"), $("#mnv-main-nav > .js-mnv-nav-toggle").removeClass("show")
  });
  var e = function() {
    $(".js-counter").countTo({
      formatter: function(e, n) {
        return e.toFixed(n.decimals)
      }
    })
  };
  $(function() {
    $(".js-fullheight").css("height", $(window).height()), $(window).resize(function() {
      $(".js-fullheight").css("height", $(window).height())
    }), $(".js-mnv-nav-toggle").on("click", function(e) {
      e.preventDefault(), $(this), $("body").hasClass("menu-show") ? ($("body").removeClass("menu-show"), $("#mnv-main-nav > .js-mnv-nav-toggle").removeClass("show")) : ($("body").addClass("menu-show"), setTimeout(function() {
        $("#mnv-main-nav > .js-mnv-nav-toggle").addClass("show")
      }, 400))
    }), e(), $("#mnv-hero .flexslider").flexslider({
      animation: "fade",
      slideshowSpeed: 5e3,
      directionNav: !0,
      start: function() {
        setTimeout(function() {
          $(".slider-text").removeClass("animated fadeInUp"), $(".flex-active-slide").find(".slider-text").addClass("animated fadeInUp")
        }, 500)
      },
      before: function() {
        setTimeout(function() {
          $(".slider-text").removeClass("animated fadeInUp"), $(".flex-active-slide").find(".slider-text").addClass("animated fadeInUp")
        }, 500)
      }
    }), $("#mnv-hero .flexslider .slides > li").css("height", $(window).height()), $(window).resize(function() {
      $("#mnv-hero .flexslider .slides > li").css("height", $(window).height())
    }), $(".animate-box").waypoint(function(e) {
      "down" !== e || $(this.element).hasClass("animated") || ($(this.element).addClass("item-animate"), setTimeout(function() {
        $("body .animate-box.item-animate").each(function(e) {
          var n = $(this);
          setTimeout(function() {
            "fadeIn" === n.data("animate-effect") ? n.addClass("fadeIn animated") : n.addClass("fadeInUp animated"), n.removeClass("item-animate")
          }, 200 * e, "easeInOutExpo")
        })
      }, 100))
    }, {
      offset: "85%"
    }), $("#counter-animate").length > 0 && $("#counter-animate").waypoint(function(n) {
      "down" !== n || $(this.element).hasClass("animated") || (setTimeout(e, 400), $(this.element).addClass("animated"))
    }, {
      offset: "90%"
    })
  })
  let $grid = $('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    masonry: {
      columnWidth: 100
    }
  });
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $(".filter-button-group button").removeClass('active');
    $(this).addClass('active');
    $grid.isotope({ filter: filterValue });
  });

}();