define(['backbone','../model/recommendationModel'],function(Backbone,RecommendationModel){
    return Backbone.Collection.extend({
        model: RecommendationModel
    });
});
