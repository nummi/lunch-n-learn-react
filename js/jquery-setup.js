var $ = require('jquery');

var go = function() {
  $(document).ajaxError(function(event, jqXHR, ajaxSettings, thrownError) {
    if (jqXHR.status === 401) {
      document.location.href = '/users/sign_in';
    }
  });

  $.extend($.easing, {
    easeInCubic: function (x, t, b, c, d) {
      return c*(t/=d)*t*t + b;
    }
  });

  $.fn.redraw = function(){
    return $(this).each(function(){
      var redraw = this.offsetHeight;
    });
  };

  // RAILS CSRF
  var token = $('meta[name="csrf-token"]').attr('content');
  $.ajaxPrefilter(function(options, originalOptions, xhr) {
    return xhr.setRequestHeader('X-CSRF-Token', token);
  });

  // Don't show grey press state in Mobile Safari:
  document.addEventListener('touchstart', function(){}, true);

  // Setup Mobile Safari gap for clock:
  var setStandaloneMode = function() {
    var getOrientation = function() {
      var orientation = 'portrait';
      switch(window.orientation) {
        case 90:
        case -90:
          orientation = 'landscape';
      }
      return orientation;
    };

    var method = (!window.navigator.standalone || getOrientation() === 'landscape') ? 'addClass' : 'removeClass';
    $('body')[method]('not_standalone');
  };

  setStandaloneMode();

  $('body').on('orientationchange', function() {
    setStandaloneMode();
  });
};

module.exports = function() {
  $(function() {
    go();
  });
};
