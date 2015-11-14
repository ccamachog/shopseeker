define(['backbone',
  'views/recommendationsView',
  'collection/recommendationCollection'], function(Backbone,RecommendationsView,RecommendationCollection) {
  /*var App = Backbone.View.extend({
    initialize: function() {
      console.log( 'Wahoo!' );
    }

  });

  return App;*/
  var recommendationCollection = new RecommendationCollection( [{nombre:'carlos'},{nombre:'felix'}]);
  return new RecommendationsView({collection:recommendationCollection});


});
