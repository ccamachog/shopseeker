define([
  'backbone',
  'underscore',
  'views/recommendationView'

],function(Backbone,
           _,
           RecommendationView
){
  return Backbone.View.extend({
    render: function() {
      this.collection.each(function(recommendationModel) {
        var recommendationView = new RecommendationView({ model: recommendationModel });
        this.$el.append(recommendationView.render().el);
      }, this);
      $("body").append(this.$el);

      return this;
    }
  })
})
