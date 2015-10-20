define(['jquery', 'backbone', '../models/InfoModel'], function($, Backbone, MainModel){

    var MainInformationCollection = Backbone.Collection.extend({

        model: MainModel,

        initialize: function(){
//            this.on('change:active', function(model, val){
//                if(!val){
//                    return;
//                }
//                console.log( this.where({active: true}).filter(function(obj){
//                    return obj.cid !== model.cid;
//                }), this);
//                this.where({active: true}).filter(function(obj){
//                    console.log(obj.cid, model.cid);
//                    return obj.cid !== model.cid;
//                })[0].set('active', false);
//            });
        },

        getActive: function(){
            return this.findWhere({active: true});
        }

    });

    return MainInformationCollection;
});

