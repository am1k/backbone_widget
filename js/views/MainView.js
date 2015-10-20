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
            var checkModel = function(){
                if (currentModel === mouseSelectModel) {
                    return mouseSelectModel
                } else {
                    currentModel.set('active', false);
                    mouseSelectModel.set('active', true);
                }
            };
            checkModel();
            console.log(currentModel);

            this.mainInfo.switchModel(mouseSelectModel);
        }

    });

    return MainView;

});