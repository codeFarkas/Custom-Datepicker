(function (global, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    factory(require('jquery'));
  } else if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else {
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jQuery));
  }
}(this, (function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var DEFAULTS = {
    // Show the datepicker automatically when initialized
    autoShow: false,
    // Hide the datepicker automatically when picked
    autoHide: false,
    // Pick the initial date automatically when initialized
    autoPick: false,
    // Enable inline mode
    inline: false,
    // A element (or selector) for putting the datepicker
    container: null,
    // A element (or selector) for triggering the datepicker
    trigger: null,
    // The ISO language code (built-in: en-US)
    language: '',
    // The date string format
    format: 'MM yyyy', // changed here from 'mm yyyy' to 'MM yyyy'
    // The initial date
    date: null,
    // The start view date
    startDate: null,
    // The end view date
    endDate: null,
    // The start view when initialized
    startView: 0,
    // 0 for days, 1 for months, 2 for years
    //
