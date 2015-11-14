define([
  'backbone',
  'underscore',
  'text!views/templates/recommendationView.html'
  ],function(Backbone,
             _,
            recommendationViewTemplate ){
  return Backbone.View.extend({
    template: _.template(recommendationViewTemplate),

    events:{
      "kick": function(){
        this.$el.find("span.miTexto").html("valor cambiado");
      },
      "click .miBoton": function(){
        var recommendation = this.$el.find("#recomendation")[0];
        recommendation.setAttribute("texto","otro texto");

      }
    },
    render: function(){
      this.$el.html( this.template(this.model.toJSON()));

      return this;  // returning this from render method..
    }
  })
})
