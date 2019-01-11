import $ from 'jquery';
//import whatInput from 'what-input';
window.$ = $;
import Foundation from 'foundation-sites';
//import libs from './lib/dependancies';
//window.libs = libs;
$(document).foundation();

$(function() {

/*
==================================================
================================================== Email Form
==================================================
*/ 
    
  $('#reveal-button').on('click', function() {
    $(this).fadeOut(300);
    $('#mce-EMAIL').focus();
    $('#mc-embedded-subscribe').addClass('show');
  });

let input_selector =
  'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea';

var inputUI = function () {
  let inputs = $(input_selector);
  inputs.each(function(index, el) {
    let $this = $(this);
    if (
      el.value.length > 0 ||
      $(el).is(':focus') ||
      el.autofocus //||
//      $this.attr('placeholder') !== ""
    ) {
      $this.addClass('input-full'); //console.log('added full to input ' + index);
    } else {
      $this.removeClass('input-full'); //console.log('removed full from input ' + index);
    }
  });
}

inputUI();

document.addEventListener('focus', function(e) {
  if ($(e.target).is(input_selector)) {
    $(e.target).addClass('input-full');
  }
}, true);

//document.addEventListener('blur', function(e) {
//  let $inputElement = $(e.target);
//  if ($inputElement.is(input_selector)) {
//    if (
//      $inputElement[0].value.length === 0 &&
//      $inputElement.attr('placeholder') === ""
//    ) {
//      $inputElement.removeClass('full');
//    }
//  }
//},true);
  
/*
==================================================
================================================== SVG Injector
==================================================
*/ 
  
// SVG Injector
// Elements to inject
var mySVGsToInject = document.querySelectorAll('img.inject-me');

// Options
var injectorOptions = {
  evalScripts: 'once',
  pngFallback: 'assets/png'
};

var afterAllInjectionsFinishedCallback = function (totalSVGsInjected) {
  // Callback after all SVGs are injected
  console.log('We injected ' + totalSVGsInjected + ' SVG(s)!');
};

var perInjectionCallback = function (svg) {
  // Callback after each SVG is injected
  console.log('SVG injected: ' + svg);
};

// create injector configured by options
var injector = new libs.svgInjector(injectorOptions);

// Trigger the injection
injector.inject(
  mySVGsToInject,
  afterAllInjectionsFinishedCallback,
  perInjectionCallback
);
  
});