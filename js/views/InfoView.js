define([
    'backbone',
    'text!../templates/info.html',
    './MainView'

], function(Backbone, myTemplate, MainView){

    var InfoView = Backbone.View.extend({

        el: '.main-information',

        bindings: {
            '.name-currency':{
                observe: 'name'
            },
            '.sell .current-price': {
                observe: 'sell',
                attributes: [{
                    name: 'class',
                    onGet: function (){
                        if( this.model.previous('sell') < this.model.get('sell')){
                            return 'up-arrow-left';
                        } else {
                            return 'down-arrow-left';
                        }
                    }
                }]
            },
            '.buy .current-price': {
                observe: 'buy',
                attributes: [{
                    name: 'class',
                    onGet: function (){
                        if( this.model.previous('buy') < this.model.get('buy')){
                            return 'up-arrow-right';
                        } else {
                            return 'down-arrow-right';
                        }
                    }
                }]
            },
            '.middle-screen': {
                observe: 'ratio'
            }

        },

        template: _.template(myTemplate),

        initialize: function(){
            this.render();
        },

        render: function(){
            this.$el.html(this.template(this.model.toJSON() ));
            this.stickit(this.model, this.bindings);
        },

        switchModel: function(model){
            this.unstickit();
            this.model = model;
            this.stickit(model);
        }

    });

    return InfoView;

});