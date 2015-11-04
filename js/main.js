define([
    'backbone',
    'jquery',
    './views/MainView'

], function(Backbone, $, MainView){

    var MyRouter = Backbone.Router.extend({

        routes: {
            '*filter': 'urlList'
        },

        initialize: function(){
            Backbone.history.start();
            $('#applications').append(this.view.$el);
        },

        urlList: function(name){
            this.view = new MainView();
            name && this.view.model.set('defaultName', name);
        }

    });

    return MyRouter;
});