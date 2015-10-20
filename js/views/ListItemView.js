define([
    'backbone',
    'text!../templates/list-item.html',
    '../models/InfoModel'
], function(Backbone, myTemplate, InfoModel){

    var ListView = Backbone.View.extend({

        tagName:'div',

        className: 'information',

        template: _.template(myTemplate),

        model: new InfoModel,

        bindings: {
            '.red-line':{
                attributes: [{
                   name: 'style',
                   observe: 'sellRatio',
                   onGet: function(){
                       return  'width:' + this.model.get('sellRatio') + '%'
                   }
                }]
            },
            '.green-line': {
                attributes: [{
                    name: 'style',
                    observe: 'buyRatio',
                    onGet: function(){
                        return  'width:' + this.model.get('buyRatio') + '%'
                    }
                }]
            }
        },

        initialize: function(){
            this.listenTo(this.model, 'change', this.render);
            this.render();
        },

        render: function(){
            this.$el.html(this.template(this.model.toJSON() ));
            this.stickit(this.model, this.bindings);
        }
    });

    return ListView;

});