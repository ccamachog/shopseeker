require.config({
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery',
    'underscore': '../bower_components/underscore-amd/underscore',
    'backbone': '../bower_components/backbone-amd/backbone',
    'text' : '../bower_components/requirejs-text/text'
  }
});

require(['views/app'], function(appView) {
  appView.render();
});
