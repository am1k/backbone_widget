define(['../lib/backbone', 'moment'], function(Backbone, moment){
    var ClockModel = Backbone.Model.extend({
        defaults: {
            serverDate: '',
            serverTime: ''
        },

        initialize: function(){
            this.updateTime();
        },

        updateTime: function(){
            this.set({
                serverDate: this.setDate(),
                serverTime: this.setTime()
            });
            setTimeout(this.updateTime.bind(this),1000);
        },

        setDate: function(){
            var date = moment().format('MM/DD/YYYY');
            return date;
        },

        setTime: function(){
            var getTime = moment().format('HH:mm');
            return getTime;
        }

    });

    return ClockModel;
});