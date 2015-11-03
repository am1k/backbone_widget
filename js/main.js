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
            $('#applications').append((new MainView).$el);
        },

        urlList: function(){
            var mainView = new MainView;
            mainView.trigger('change:switchModel');
        }

    });

    return MyRouter;
});