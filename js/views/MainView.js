define([
    'backbone',
    'text!../templates/main.html',
    '../models/InfoModel',
    './ClockView',
    './ListItemView',
    './InfoView',
    '../collections/InfoCollection'

], function(Backbone, myTemplate, MainModel, ClockView, ListItemView, InfoView, InfoCollection){

    var MainView = Backbone.View.extend({
        el: '#applications',

        model: new MainModel,

        collection: new InfoCollection([
            {
                active: true,
                max: 3,
                min: 1,
                name: 'usa/rus'
            },
            {
                active: false,
                max: 100,
                min: 1,
                name: 'ukr/jpn'
            },
            {
                active: false,
                max: 50,
                min: 10,
                name: 'jpn/aus'
            }
        ]),

        events: {
            'mouseenter .information' : 'setActiveCurrency'
        },

        template: _.template(myTemplate),

        initialize: function(){
            this.listenTo(this.model, 'change:defaultName', function(model, val){
               this.collection.setActive(val);
            });
            this.listenTo(this.collection, 'change:active', function(model, val){
               if(val){
                   this.mainInfo.switchModel(model);
               }
            });
            this.render();
            return this;
        },

        render: function(){
            var docFrag = document.createDocumentFragment();
            this.currentModel = this.collection.getActive();
            this.$el.html(this.template(this.model));
            this.clock = new ClockView();
            this.mainInfo = new InfoView({
                model: this.currentModel
            });

            this.collection.forEach(function(model){
                docFrag.appendChild((new ListItemView({model: model})).$el[0])
            });

            this.$el.find('.list-view').append(docFrag);
            this.stickit(this.model);
            return this;
        },

        setActiveCurrency: function(e){
            var currentModel = this.collection.getActive();
            var mouseSelectModel = this.collection.at($(e.currentTarget).index());

            if (currentModel === mouseSelectModel) {
                return mouseSelectModel
            } else {
                currentModel.set('active', false);
                mouseSelectModel.set('active', true);
            }

            Backbone.history.navigate(mouseSelectModel.get('name'));
        }
    });

    return MainView;

});