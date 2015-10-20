define(['jquery', 'backbone', '../models/InfoModel'], function($, Backbone, MainModel){

    var MainInformationCollection = Backbone.Collection.extend({

        model: MainModel,

        getActive: function(){
            return this.findWhere({active: true});
        }


    });

    return MainInformationCollection;
});

