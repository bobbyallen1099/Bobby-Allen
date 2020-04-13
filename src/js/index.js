import '../scss/app.scss';
import homeBanner from '../images/home-banner.svg';
import aboutMe from '../images/about-me.svg';
import aboutMeCode from '../images/about-me-code.svg';
import johnFowlers from '../images/john-fowlers.jpg';
import marfleet from '../images/marfleet.jpg';
import haywardMoon from '../images/hayward-moon.jpg';
import bobbyAllen from '../images/bobby-allen.jpg';
import bobbysShop from '../images/bobbys-shop.jpg';
import bobbysBlog from '../images/bobbys-blog.jpg';
import 'bootstrap';

var $ = require("jquery");
var popper = require("popper.js");
var Pjax = require("pjax");
var Barba = require("barba.js");

Barba.Pjax.start();
var pjax = new Pjax({
    elements: "a", // default is "a[href], form[action]"
    selectors: ["#content"],
    cache: false
})

var FadeTransition = Barba.BaseTransition.extend({
    start: function() {
      Promise
        .all([this.newContainerLoading, this.fadeOut()])
        .then(this.fadeIn.bind(this));
    },

    fadeOut: function() {
      return $(this.oldContainer).animate({opacity: 0 }, 200, 'swing').promise();
    },

    fadeIn: function() {
      var _this = this;
      var $el = $(this.newContainer);

      $(this.oldContainer).hide();

      $el.css({
        visibility : 'visible',
        opacity : 0,
      });

      $el.animate({ opacity: 1 }, 200, 'swing', function() {
        _this.done();
      });
    }
  });


  Barba.Pjax.getTransition = function() {
    return FadeTransition;
  };


$(function(){
  $('body').on('click', '.header__wrapper--toggle', function(){
    $('.header').toggleClass('open');
  });
})