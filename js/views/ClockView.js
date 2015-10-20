define([
    'backbone',
    'text!../templates/clock.html',
    '../models/ClockModel'
], function(Backbone, myTemplate, ClockModel){

    var ClockView = Backbone.View.extend({
        el: '.local-time',

        template: _.template(myTemplate),

        model: new ClockModel,

        initialize: function(){
            this.listenTo(this.model, 'change', this.render);
            this.render();
        },

        render: function(){
            this.$el.html(this.template(this.model.toJSON() ));
        }
    });

    return ClockView;

});